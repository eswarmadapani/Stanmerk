import React from "react";
import { plans } from "@/content/plans";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { BlueprintFrame } from "@/components/ui/BlueprintFrame";
import { CheckList } from "@/components/ui/CheckList";
import { Button } from "@/components/ui/Button";
import { CornerDots } from "@/components/ui/CornerDots";
import { Reveal } from "@/components/ui/Reveal";
import { Star } from "lucide-react";

export function Pricing() {
  return (
    <section id="pricing" data-theme="light" className="py-24 md:py-32 lg:py-40">
      <div className="container-x px-6">
        <Reveal>
          <SectionHeader
            eyebrow="Pricing"
            title={["Simple ", { text: "Plans", accent: true }]}
            sub="Whether you're uploading regularly or scaling fast, we've got a customized plan tailored to your content flow and growth goals."
            align="center"
          />
        </Reveal>

        <Reveal delay={0.2}>
          <BlueprintFrame className="mt-8 md:mt-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative p-4 md:p-6 rounded-[var(--radius-card)] ${
                    plan.popular ? "bg-[var(--color-ink)] text-[var(--color-surface)]" : "bg-[var(--color-surface)] text-[var(--color-ink)]"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-2 md:-top-3 right-3 md:right-4">
                      <div className="bg-[var(--color-accent)] text-[var(--color-on-accent)] px-2 md:px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                        <Star className="w-2 h-2 md:w-3 md:h-3" />
                        Popular
                      </div>
                    </div>
                  )}
                  <CornerDots tone={plan.popular ? "dark" : "light"} />
                  <div className="font-display text-xs md:text-sm mb-1 md:mb-2">{plan.name}</div>
                  <div className="flex items-baseline gap-1 mb-1 md:mb-2">
                    <span className="font-display text-2xl md:text-4xl font-semibold">{plan.price}</span>
                    {plan.unit && <span className="text-[var(--color-muted)] text-xs md:text-sm">{plan.unit}</span>}
                  </div>
                  <p className={`text-xs md:text-sm mb-4 md:mb-6 ${plan.popular ? "text-[var(--color-muted)]" : "text-[var(--color-muted)]"}`}>
                    {plan.blurb}
                  </p>
                  <Button
                    href={plan.cta.href}
                    variant={plan.popular ? "inverse" : "primary"}
                    arrow
                    className="w-full text-sm md:text-base"
                  >
                    {plan.cta.label}
                  </Button>
                  <div className="mt-4 md:mt-6">
                    <div className="font-medium text-xs md:text-sm mb-2 md:mb-3">Features included:</div>
                    <CheckList items={plan.features} tone={plan.popular ? "dark" : "light"} />
                  </div>
                </div>
              ))}
            </div>
          </BlueprintFrame>
        </Reveal>
      </div>
    </section>
  );
}
