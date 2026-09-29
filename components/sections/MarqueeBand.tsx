import React from "react";
import { Marquee } from "@/components/ui/Marquee";

export function MarqueeBand() {
  const platforms = ["Reels", "Shorts", "YouTube", "Instagram", "LinkedIn"];

  return (
    <section data-theme="dark" className="hero-glow py-8 overflow-hidden">
      <Marquee direction="x" duration={30}>
        <div className="flex items-center gap-4 md:gap-8 px-4">
          {platforms.map((platform, index) => (
            <React.Fragment key={index}>
              <span className="font-display text-2xl md:text-4xl lg:text-6xl italic text-[var(--color-surface)]">
                {platform}
              </span>
              {index < platforms.length - 1 && (
                <span className="w-2 w-2 md:w-3 md:h-3 rounded-full bg-[var(--color-accent)]" />
              )}
            </React.Fragment>
          ))}
        </div>
      </Marquee>
    </section>
  );
}
