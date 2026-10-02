"use client";

import React, { useState, useRef, useCallback } from "react";
import { work } from "@/content/work";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { BlueprintFrame } from "@/components/ui/BlueprintFrame";
import { PlatformChip } from "@/components/ui/PlatformChip";
import { Reveal } from "@/components/ui/Reveal";
import { Play, Pause } from "lucide-react";

export function FeaturedWork() {
  const [activeVideoIndex, setActiveVideoIndex] = useState<number | null>(null);
  const [hoveredVideoIndex, setHoveredVideoIndex] = useState<number | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Initialize refs array with correct length on mount
  React.useEffect(() => {
    videoRefs.current = Array.from({ length: work.cases.length }, () => null);
  }, []);

  const togglePlayPause = useCallback((index: number) => {
    // If clicking the currently active video, pause it
    if (activeVideoIndex === index) {
      const video = videoRefs.current[index];
      if (video) {
        video.pause();
        video.muted = true;
        setActiveVideoIndex(null);
      }
      return;
    }

    // Pause all videos first and mute them
    videoRefs.current.forEach((video) => {
      if (video) {
        video.pause();
        video.muted = true;
      }
    });

    // Play the selected video with audio ON
    setActiveVideoIndex(index);
    const video = videoRefs.current[index];
    if (video) {
      video.muted = false;
      video.play().catch(() => {}); // Silent catch for autoplay policies
    }
  }, [activeVideoIndex]);

  const handleVideoCardClick = useCallback((index: number) => {
    // If the video is playing and the user clicks on the card (not the button),
    // toggle play/pause for mobile/touch accessibility
    if (activeVideoIndex === index) {
      togglePlayPause(index);
    }
  }, [activeVideoIndex, togglePlayPause]);

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
                const isPlaying = activeVideoIndex === index;
                const isHovered = hoveredVideoIndex === index;
                const showControl = !isPlaying || isHovered;

                return (
                  <div
                    key={index}
                    className="relative aspect-[9/16] w-full max-w-md rounded-[20px] overflow-hidden bg-[var(--color-dark-card)]"
                    onMouseEnter={() => setHoveredVideoIndex(index)}
                    onMouseLeave={() => setHoveredVideoIndex(null)}
                    onClick={() => handleVideoCardClick(index)}
                  >
                    <video
                      ref={(el) => {
                        videoRefs.current[index] = el;
                      }}
                      src={caseItem.media}
                      poster={caseItem.poster}
                      muted={!isPlaying}
                      loop
                      playsInline
                      preload="none"
                      className="w-full h-full object-cover"
                    />

                    {/* Platform Chip */}
                    <div className="absolute top-3 left-3 z-10">
                      <PlatformChip platform={caseItem.platform} views={caseItem.views} />
                    </div>

                    {/* Centered Play/Pause Button */}
                    {showControl && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          togglePlayPause(index);
                        }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-16 h-16 rounded-full bg-[var(--color-surface)]/20 hover:bg-[var(--color-surface)]/30 backdrop-blur-sm transition-all duration-300 text-[var(--color-surface)] border border-[var(--color-surface)]/30 hover:scale-110"
                        aria-label={isPlaying ? "Pause video" : "Play video"}
                      >
                        {isPlaying ? (
                          <Pause className="h-8 w-8" />
                        ) : (
                          <Play className="h-8 w-8 ml-1" />
                        )}
                      </button>
                    )}

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
