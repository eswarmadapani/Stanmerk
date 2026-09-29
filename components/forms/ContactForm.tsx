"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactInput, PROJECT_TYPES, BUDGETS } from "@/lib/contact-schema";
import { Button } from "@/components/ui/Button";
import { CornerDots } from "@/components/ui/CornerDots";
import { Loader2 } from "lucide-react";

interface ContactFormProps {
  onSuccess?: () => void;
}

export function ContactForm({ onSuccess }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactInput) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to submit form");
      }

      setIsSuccess(true);
      onSuccess?.();
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : "An error occurred");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-[var(--color-surface)] p-8 rounded-[var(--radius-card)] shadow-sm text-center">
        <div className="w-16 h-16 rounded-full bg-[var(--color-accent)] flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-[var(--color-on-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-ui text-2xl font-light text-[var(--color-ink)] mb-2">
          Thank you for reaching out!
        </h3>
        <p className="text-[var(--color-muted)]">
          We'll get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <div className="relative bg-[var(--color-surface)] p-8 rounded-[var(--radius-card)] shadow-sm">
      <CornerDots tone="light" />
      <h1 className="font-ui text-4xl font-light leading-none text-[var(--color-ink)] mb-2">
        Contact <span className="font-display italic text-accent-text text-highlight">Us</span>
      </h1>
      <p className="text-[var(--color-muted)] mb-6">
        Let's talk through your goals and how we can help you build your brand.
      </p>

      {submitError && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-800 text-sm">
          {submitError}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-[var(--color-ink)] mb-1">
            Name *
          </label>
          <input
            id="name"
            type="text"
            {...register("name")}
            className="w-full px-4 py-2 rounded-lg border border-[var(--color-line)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent"
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && (
            <p id="name-error" className="mt-1 text-sm text-red-600" role="alert">
              {errors.name.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-[var(--color-ink)] mb-1">
            Email *
          </label>
          <input
            id="email"
            type="email"
            {...register("email")}
            className="w-full px-4 py-2 rounded-lg border border-[var(--color-line)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent"
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <p id="email-error" className="mt-1 text-sm text-red-600" role="alert">
              {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="projectType" className="block text-sm font-medium text-[var(--color-ink)] mb-1">
            Project Type *
          </label>
          <select
            id="projectType"
            {...register("projectType")}
            className="w-full px-4 py-2 rounded-lg border border-[var(--color-line)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent bg-white"
            aria-describedby={errors.projectType ? "projectType-error" : undefined}
          >
            <option value="">Select a project type</option>
            <option value="reels-shorts">Reels & Shorts Edit</option>
            <option value="youtube">YouTube Edit</option>
            <option value="thumbnail">Thumbnail Design</option>
            <option value="mentorship">Content Mentorship</option>
            <option value="custom">Custom Request</option>
          </select>
          {errors.projectType && (
            <p id="projectType-error" className="mt-1 text-sm text-red-600" role="alert">
              {errors.projectType.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="budget" className="block text-sm font-medium text-[var(--color-ink)] mb-1">
            Budget *
          </label>
          <select
            id="budget"
            {...register("budget")}
            className="w-full px-4 py-2 rounded-lg border border-[var(--color-line)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent bg-white"
            aria-describedby={errors.budget ? "budget-error" : undefined}
          >
            <option value="">Select a budget range</option>
            <option value="under-15k">Under ₹15,000</option>
            <option value="15k-35k">₹15,000 - ₹35,000</option>
            <option value="35k-75k">₹35,000 - ₹75,000</option>
            <option value="75k-plus">₹75,000+</option>
          </select>
          {errors.budget && (
            <p id="budget-error" className="mt-1 text-sm text-red-600" role="alert">
              {errors.budget.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-[var(--color-ink)] mb-1">
            Drop a Message *
          </label>
          <textarea
            id="message"
            rows={4}
            {...register("message")}
            className="w-full px-4 py-2 rounded-lg border border-[var(--color-line)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent resize-none"
            aria-describedby={errors.message ? "message-error" : undefined}
          />
          {errors.message && (
            <p id="message-error" className="mt-1 text-sm text-red-600" role="alert">
              {errors.message.message}
            </p>
          )}
        </div>

        {/* Honeypot field */}
        <input
          type="text"
          {...register("website")}
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
        />

        <Button
          type="submit"
          variant="primary"
          disabled={isSubmitting}
          className="w-full"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </Button>
      </form>
    </div>
  );
}
