"use client";

import React from "react";
import { BlueprintFrame } from "@/components/ui/BlueprintFrame";
import { CornerDots } from "@/components/ui/CornerDots";
import { CheckList } from "@/components/ui/CheckList";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

export function BookingCta() {
  const bookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL || "https://cal.com/stanmerk/15min";

  return (
    <section data-theme="light" className="py-24 md:py-32 lg:py-40">
      <div className="container-x px-6">
        <Reveal>
          <BlueprintFrame>
            <div className="relative bg-[var(--color-ink)] text-[var(--color-surface)] p-6 md:p-8 lg:p-12 rounded-[var(--radius-card)] hero-glow">
              <CornerDots tone="dark" />
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                <div>
                  <Eyebrow tone="dark">● Booking now</Eyebrow>
                  <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-semibold mt-3 md:mt-4 mb-3 md:mb-4">
                    Pick a slot. Get a sample edit. <span className="text-highlight text-[var(--color-accent)]">Go viral.</span>
                  </h2>
                  <p className="text-[var(--color-muted)] mb-4 md:mb-6 text-sm md:text-base">
                    Book a free 15-minute call to discuss your content goals and get a complimentary sample edit. No commitment required.
                  </p>
                  <CheckList
                    items={[
                      "Free 15-minute strategy call",
                      "Complimentary sample edit",
                      "No obligation or commitment",
                      "Expert content guidance",
                    ]}
                    tone="dark"
                  />
                  <Button href="/contact-us" variant="inverse" arrow className="mt-4 md:mt-6">
                    Contact us
                  </Button>
                </div>
                <div>
                  <div className="bg-[var(--color-dark-card)] rounded-lg overflow-hidden min-h-[300px] md:min-h-[400px]">
                    <iframe
                      src={bookingUrl}
                      className="w-full h-full min-h-[300px] md:min-h-[400px]"
                      style={{ border: "none" }}
                      frameBorder="0"
                      allow="clipboard-write; accelerometer; gyroscope; encrypted-media; picture-in-picture"
                    />
                  </div>
                </div>
              </div>
            </div>
          </BlueprintFrame>
        </Reveal>
      </div>
    </section>
  );
}
