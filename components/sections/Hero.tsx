"use client";

import { hero } from "@/content/hero";
import { Button } from "@/components/ui/Button";
import { LiquidButton } from "@/components/ui/liquid-glass-button";
import { Reveal } from "@/components/ui/Reveal";
import { WebGLShader } from "@/components/ui/web-gl-shader";

export function Hero() {
  return (
    <section
      data-theme="dark"
      className="hero-glow relative flex min-h-[760px] items-center overflow-hidden py-24 md:min-h-[900px] md:py-32"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <WebGLShader />
      </div>

      <div className="container-x relative z-10 px-6">
        <div className="grid grid-cols-1 justify-items-center">
          <Reveal>
            <div className="flex max-w-4xl flex-col items-center space-y-7 text-center lg:space-y-9">
              <h1 className="max-w-[820px] text-[clamp(3.25rem,8vw,6.5rem)] font-normal leading-[0.9] text-[var(--color-surface)]">
                {hero.title.map((part, index) =>
                  typeof part === "string" ? (
                    <span key={index} className="block whitespace-nowrap font-ui text-[0.82em] font-light">{part.trim()}</span>
                  ) : (
                    <span key={index} className={`block whitespace-nowrap font-display italic ${part.accent ? "text-highlight text-[var(--color-accent)]" : ""}`}>
                      {part.text}
                    </span>
                  )
                )}
              </h1>

              <p className="max-w-xl text-base leading-7 text-[var(--color-muted)] md:text-lg">{hero.subtext}</p>

              <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                {hero.buttons.map((button, index) =>
                  index === 0 ? (
                    <LiquidButton
                      key={index}
                      className="border-white/35 rounded-full px-8"
                      size="xl"
                      onClick={() =>
                        document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
                      }
                    >
                      {button.label}
                    </LiquidButton>
                  ) : (
                    <Button
                      key={index}
                      href={button.href}
                      variant={button.variant}
                      arrow={button.variant === "primary"}
                      className={button.variant === "ghost" ? "text-[var(--color-surface)]" : undefined}
                    >
                      {button.label}
                    </Button>
                  )
                )}
              </div>

              <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 pt-6 md:gap-x-12">
                {hero.stats.map((stat) => (
                  <div key={stat.label}>
                    <div className="font-display text-xl font-semibold text-[var(--color-surface)] md:text-2xl">{stat.value}</div>
                    <div className="text-xs text-[var(--color-muted)] md:text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
