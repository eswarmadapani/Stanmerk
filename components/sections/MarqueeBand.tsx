import React from "react";

export function MarqueeBand() {
  const items = ["Reels", "Shorts", "YouTube", "Instagram", "LinkedIn"];

  return (
    <section data-theme="dark" className="hero-glow py-6 md:py-8 overflow-hidden w-full">
      <div className="relative overflow-hidden w-full">
        <div className="marquee-track" style={{ animationDuration: "25s" }}>
          {/* Loop 1 */}
          <div className="flex items-center flex-shrink-0 whitespace-nowrap">
            {items.map((item, index) => (
              <div key={`l1-${index}`} className="flex items-center">
                <span className="font-display text-xl md:text-2xl lg:text-3xl italic text-[var(--color-surface)] px-3 md:px-6">
                  {item}
                </span>
                <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[var(--color-accent)] inline-block mx-2" />
              </div>
            ))}
          </div>
          {/* Loop 2 */}
          <div className="flex items-center flex-shrink-0 whitespace-nowrap" aria-hidden="true">
            {items.map((item, index) => (
              <div key={`l2-${index}`} className="flex items-center">
                <span className="font-display text-xl md:text-2xl lg:text-3xl italic text-[var(--color-surface)] px-3 md:px-6">
                  {item}
                </span>
                <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[var(--color-accent)] inline-block mx-2" />
              </div>
            ))}
          </div>
          {/* Loop 3 for wider screens */}
          <div className="flex items-center flex-shrink-0 whitespace-nowrap" aria-hidden="true">
            {items.map((item, index) => (
              <div key={`l3-${index}`} className="flex items-center">
                <span className="font-display text-xl md:text-2xl lg:text-3xl italic text-[var(--color-surface)] px-3 md:px-6">
                  {item}
                </span>
                <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[var(--color-accent)] inline-block mx-2" />
              </div>
            ))}
          </div>
          {/* Loop 4 for ultra-wide screens */}
          <div className="flex items-center flex-shrink-0 whitespace-nowrap" aria-hidden="true">
            {items.map((item, index) => (
              <div key={`l4-${index}`} className="flex items-center">
                <span className="font-display text-xl md:text-2xl lg:text-3xl italic text-[var(--color-surface)] px-3 md:px-6">
                  {item}
                </span>
                <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[var(--color-accent)] inline-block mx-2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
