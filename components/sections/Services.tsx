"use client";

import React from "react";
import { services } from "@/content/services";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { BlueprintFrame } from "@/components/ui/BlueprintFrame";
import { CornerDots } from "@/components/ui/CornerDots";
import { CheckList } from "@/components/ui/CheckList";
import { PlatformChip } from "@/components/ui/PlatformChip";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Video, Scissors, Layers, MessageSquare, Volume2, VolumeX } from "lucide-react";
import { GlowCard } from "@/components/ui/spotlight-card";

const serviceIcons = {
  1: Video,
  2: Layers,
  3: Scissors,
  4: MessageSquare,
};

export function Services() {
  const [isMuted, setIsMuted] = React.useState(true);
  const heroService = services.find((s) => s.popular) || services[0];
  const otherServices = services.filter((s) => s.id !== heroService.id);

  return (
    <section id="services" data-theme="dark" className="hero-glow py-20 md:py-28 lg:py-32">
      <div className="container-x px-5 sm:px-6 text-[var(--color-surface)]">
        <Reveal>
          <SectionHeader
            eyebrow="Services"
            title={[`Everything you need to `, { text: `build your brand.`, accent: true }]}
            align="left"
            eyebrowTone="dark"
          />
        </Reveal>

        <Reveal delay={0.2}>
          <BlueprintFrame className="mt-12 space-y-3 md:space-y-4">
            {/* Row 1: Hero Service Card - 4:3 video ratio */}
            <div className="relative bg-[var(--color-ink)] text-[var(--color-surface)] p-4 md:p-6 rounded-[var(--radius-card)]">
              <CornerDots tone="dark" />
              <div className="grid grid-cols-1 items-start gap-6 md:gap-8 lg:grid-cols-[1.05fr_0.95fr]">
                {/* Video display - 4:3 ratio */}
                <div className="relative aspect-[4/3] w-full max-w-md rounded-xl overflow-hidden bg-[var(--color-dark-card)]">
                  <video 
                    src="https://res.cloudinary.com/dlvgf55ti/video/upload/q_auto/f_auto/Stanmerk_Final_Cut_qafinl.mp4" 
                    autoPlay 
                    muted={isMuted} 
                    loop 
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover"
                  />
                  {/* Audio toggle button */}
                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="absolute top-4 right-4 z-10 p-2 rounded-full bg-[var(--color-surface)]/20 hover:bg-[var(--color-surface)]/30 transition-colors"
                    aria-label={isMuted ? "Unmute video" : "Mute video"}
                  >
                    {isMuted ? (
                      <VolumeX className="h-4 w-4 text-[var(--color-surface)]" />
                    ) : (
                      <Volume2 className="h-4 w-4 text-[var(--color-surface)]" />
                    )}
                  </button>
                </div>

                <div className="flex flex-col justify-center">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-[var(--color-dark-card)] flex items-center justify-center mb-3 md:mb-4">
                    {React.createElement(serviceIcons[heroService.id as keyof typeof serviceIcons], {
                      className: "w-5 h-5 md:w-6 md:h-6 text-[var(--color-accent)]",
                    })}
                  </div>
                  <h3 className="font-display text-xl md:text-2xl font-semibold mb-2 md:mb-3">
                    {heroService.title}
                  </h3>
                  <p className="text-[var(--color-muted)] mb-3 md:mb-4 text-sm md:text-base">
                    {heroService.description}
                  </p>
                  <CheckList items={heroService.features} tone="dark" />
                  <Button href="/contact-us" variant="inverse" arrow className="mt-4 md:mt-6">
                    Contact us
                  </Button>
                </div>
              </div>
              
              <div className="absolute top-3 md:top-4 right-3 md:right-4 text-3xl md:text-4xl font-display font-semibold text-[var(--color-muted)]/20">
                01
              </div>
            </div>

            {/* Row 2: Three Dark Cards */}
            <div className="grid gap-3 md:grid-cols-1 lg:grid-cols-3 md:gap-4">
              {otherServices.map((service) => (
                <GlowCard
                  key={service.id}
                  glowColor="blue"
                  customSize
                  className="
                    relative
                    bg-[var(--color-dark-card)]
                    text-[var(--color-surface)]
                    p-4 md:p-6
                    rounded-[var(--radius-card)]
                    border border-[var(--color-line)]
                    shadow-sm
                  "
                >
                  <CornerDots tone="dark" />
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-[var(--color-muted)]/10 flex items-center justify-center mb-3 md:mb-4">
                    {React.createElement(serviceIcons[service.id as keyof typeof serviceIcons], {
                      className: "w-4 h-4 md:w-5 md:h-5 text-[var(--color-accent)]",
                    })}
                  </div>
                  <div className="text-xl md:text-2xl font-display font-semibold text-[var(--color-muted)]/30 mb-2">
                    0{service.id}
                  </div>
                  <h3 className="font-display text-lg md:text-xl font-semibold text-[var(--color-surface)] mb-2">
                    {service.title}
                  </h3>
                  <p className="text-[var(--color-muted)] text-xs md:text-sm mb-3 md:mb-4">
                    {service.description}
                  </p>
                  <CheckList items={service.features} tone="dark" />
                  <div className="border-t border-[var(--color-line)] mt-3 md:mt-4 pt-3 md:pt-4">
                    <PlatformChip platform={`● ${service.turnaround} TURNAROUND`} />
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2 md:mt-3">
                    {service.platforms.map((platform) => (
                      <PlatformChip key={platform} platform={platform} />
                    ))}
                  </div>
                </GlowCard>
              ))}
            </div>

            {/* Row 3: Dark CTA Bar */}
            <div className="relative bg-[var(--color-ink)] text-[var(--color-surface)] p-4 md:p-6 rounded-[var(--radius-card)] flex flex-col items-center gap-4 md:flex-row md:items-center md:justify-between md:gap-6">
              <CornerDots tone="dark" />
              <div className="flex items-center gap-3 md:gap-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[var(--color-dark-card)] border-2 border-[var(--color-ink)] flex items-center justify-center text-xs font-medium"
                    >
                      {i}
                    </div>
                  ))}
                </div>
                <div>
                  <p className="font-display text-base md:text-lg font-semibold">
                    Not sure which fits? <em>Talk to a strategist.</em>
                  </p>
                  <p className="text-[var(--color-muted)] text-xs md:text-sm">
                    15-min call · zero pitch · free sample edit
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 md:gap-3 bg-[var(--color-dark-card)] px-3 md:px-4 py-2 rounded-full">
                <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-[var(--color-accent)] flex items-center justify-center text-xs font-medium text-[var(--color-on-accent)]">
                  YOU
                </div>
                <Button href="/contact-us" variant="primary" arrow className="rounded-full text-sm md:text-base">
                  Book a 15-min call
                </Button>
              </div>
            </div>
          </BlueprintFrame>
        </Reveal>
      </div>
    </section>
  );
}