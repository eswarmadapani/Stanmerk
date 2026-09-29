import type { Metadata } from "next";
import { Instrument_Serif, Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  title: "StanMerk | Build Your Brand — Reels, Shorts & YouTube Editing",
  description: "Professional video editing, content mentorship, and strategy for creators and personal brands in India. Fast turnaround, brand-consistent results.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "StanMerk | Build Your Brand — Reels, Shorts & YouTube Editing",
    description: "Professional video editing, content mentorship, and strategy for creators and personal brands in India. Fast turnaround, brand-consistent results.",
    url: siteUrl,
    siteName: "StanMerk",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "StanMerk - Build Your Brand",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "StanMerk | Build Your Brand — Reels, Shorts & YouTube Editing",
    description: "Professional video editing, content mentorship, and strategy for creators and personal brands in India. Fast turnaround, brand-consistent results.",
    images: ["/opengraph-image.png"],
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "StanMerk",
    description: "Professional video editing, content mentorship, and strategy for creators and personal brands in India.",
    url: siteUrl,
    email: "hellostanmerk@gmail.com",
    sameAs: [
      "https://instagram.com/stan.merk",
      "https://youtube.com/@stanmerk",
      "https://linkedin.com/company/stanmerk",
    ],
  };

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${instrumentSerif.variable} ${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          id="schema-org-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
        <a
          href="#main-content"
          className="sr-only sr-only-focusable bg-[var(--color-accent)] text-[var(--color-on-accent)] px-4 py-2 rounded-[var(--radius-btn)] font-medium z-50"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
