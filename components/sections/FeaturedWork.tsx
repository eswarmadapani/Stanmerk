"use client";

import React, { useState } from "react";
import { work } from "@/content/work";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { BlueprintFrame } from "@/components/ui/BlueprintFrame";
import { PlatformChip } from "@/components/ui/PlatformChip";
import { Reveal } from "@/components/ui/Reveal";
import { Volume2, VolumeX } from "lucide-react";

export function FeaturedWork() {
  const [mutedStates, setMutedStates] = useState<Record<number, boolean>>({});

  const toggleMute = (index: number) => {
    setMutedStates((prev) => ({
      ...prev,
      [index]: prev[index] === undefined ? false : !prev[index],
    }));
  };

  return (
    <section id="featured-work" data-theme="dark" className="hero-glow py-24 md:py-32 lg:py-40">
      <div className="container-x px-6 text-[var(--color-surface)]">
        <Reveal>
          <SectionHeader
            eyebrow="Featured work"
            title={["Real results. ", { text: "Real brands.", accent: true }]}
            align="left"
            eyebrowTone="dark"
          />
        </Reveal>

        <Reveal delay={0.2}>
          <BlueprintFrame className="mt-12">
            {/* Three Portrait Video Cards - 9:16 ratio */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center max-w-5xl mx-auto">
              {work.cases.map((caseItem, index) => {
                const isMuted = mutedStates[index] ?? true;

                return (
                  <div
                    key={index}
                    className="relative aspect-[9/16] w-full max-w-md rounded-[20px] overflow-hidden bg-[var(--color-dark-card)] group"
                  >
                    <video
                      src={caseItem.media}
                      autoPlay
                      muted={isMuted}
                      loop
                      playsInline
                      className="w-full h-full object-cover"
                      poster={caseItem.poster}
                    />

                    {/* Platform Chip */}
                    <div className="absolute top-3 left-3 z-10">
                      <PlatformChip platform={caseItem.platform} views={caseItem.views} />
                    </div>

                    {/* Audio Toggle Button */}
                    <button
                      onClick={() => toggleMute(index)}
                      className="absolute top-3 right-3 z-20 p-2 rounded-full bg-[var(--color-surface)]/20 hover:bg-[var(--color-surface)]/30 backdrop-blur-sm transition-colors text-[var(--color-surface)]"
                      aria-label={isMuted ? "Unmute video" : "Mute video"}
                    >
                      {isMuted ? (
                        <VolumeX className="h-4 w-4" />
                      ) : (
                        <Volume2 className="h-4 w-4" />
                      )}
                    </button>

                    {/* Bottom Info Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[var(--color-ink)] via-[var(--color-ink)]/70 to-transparent p-4 z-10">
                      <div className="text-xs text-[var(--color-muted)] mb-1">{caseItem.category}</div>
                      <div className="font-display text-lg font-semibold text-[var(--color-surface)]">
                        {caseItem.title}
                      </div>
                      <div className="flex gap-2 mt-2">
                        <div className="flex items-center gap-1 text-xs text-[var(--color-muted)]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-muted)]" />
                          {caseItem.views}
                        </div>
                        <div className="flex items-center gap-1 text-xs text-[var(--color-accent)]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" />
                          {caseItem.growth}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </BlueprintFrame>
        </Reveal>
      </div>
    </section>
  );
}
