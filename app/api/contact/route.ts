import { NextRequest, NextResponse } from "next/server";
import { contactSchema } from "@/lib/contact-schema";

// Simple in-memory rate limiting for development
// In production, use Upstash Redis or similar
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 10 * 60 * 1000; // 10 minutes
const RATE_LIMIT_MAX = 5; // 5 requests per window

function getRateLimitKey(ip: string): string {
  return `contact:${ip}`;
}

function checkRateLimit(ip: string): boolean {
  const key = getRateLimitKey(ip);
  const now = Date.now();
  const record = rateLimitMap.get(key);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(key, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }

  if (record.count >= RATE_LIMIT_MAX) {
    return false;
  }

  record.count++;
  return true;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const ip = request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "unknown";

    // Rate limiting
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { ok: false, error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    // Validate input
    const result = contactSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { ok: false, errors: result.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const data = result.data;

    // Honeypot check
    if (data.website && data.website.length > 0) {
      // Return success to bots so they don't learn
      return NextResponse.json({ ok: true });
    }

    // Verify Turnstile token (when configured)
    const turnstileSecret = process.env.TURNSTILE_SECRET_KEY;
    if (turnstileSecret && data.turnstileToken) {
      const turnstileResponse = await fetch(
        "https://challenges.cloudflare.com/turnstile/v0/siteverify",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            secret: turnstileSecret,
            response: data.turnstileToken,
            remoteip: ip,
          }),
        }
      );

      const turnstileResult = await turnstileResponse.json();
      if (!turnstileResult.success) {
        return NextResponse.json(
          { ok: false, error: "Security verification failed" },
          { status: 403 }
        );
      }
    }

    // Send email via Resend (when configured)
    const resendApiKey = process.env.RESEND_API_KEY;
    const contactToEmail = process.env.CONTACT_TO_EMAIL || "hellostanmerk@gmail.com";
    const contactFromEmail = process.env.CONTACT_FROM_EMAIL;

    if (resendApiKey && contactFromEmail) {
      try {
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${resendApiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: contactFromEmail,
            to: contactToEmail,
            reply_to: data.email,
            subject: `New Contact Form Submission from ${data.name}`,
            html: `
              <h2>New Contact Form Submission</h2>
              <p><strong>Name:</strong> ${data.name}</p>
              <p><strong>Email:</strong> ${data.email}</p>
              <p><strong>Project Type:</strong> ${data.projectType}</p>
              <p><strong>Budget:</strong> ${data.budget}</p>
              <p><strong>Message:</strong></p>
              <p>${data.message}</p>
            `,
          }),
        });
      } catch (emailError) {
        console.error("Failed to send email:", emailError);
        // Continue without failing the request
      }
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { ok: false, error: "An error occurred. Please try again." },
      { status: 500 }
    );
  }
}
