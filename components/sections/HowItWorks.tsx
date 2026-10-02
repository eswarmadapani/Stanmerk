import { steps } from "@/content/steps";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import Image from "next/image";

export function HowItWorks() {
  return (
    <section id="how-it-works" data-theme="light" className="py-20 md:py-28 lg:py-32 bg-[var(--color-page)]">
      <div className="container-x px-5 sm:px-6">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 xl:gap-20">
          {/* LEFT COLUMN - Editorial content */}
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <SectionHeader
                eyebrow="How it works"
                title={["From raw clips to ready to post – in ", { text: "four steps.", accent: true }]}
                sub="Our streamlined process ensures you get professional video edits quickly and efficiently from start to finish."
                align="left"
              />
            </Reveal>
          </div>

          {/* RIGHT COLUMN - Four stacked horizontal cards */}
          <div className="space-y-3 md:space-y-4">
            {steps.map((step, index) => (
              <Reveal key={index} delay={index * 0.1}>
                <div className="group flex flex-col items-center gap-4 rounded-[var(--radius-card)] border border-[var(--color-line)] bg-[var(--color-surface)] p-4 shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-shadow hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)] sm:flex-row sm:items-center sm:gap-6 sm:p-5">
                  <div className="flex w-full flex-col items-center text-center sm:w-[55%] sm:items-start sm:text-left">
                    <div className="text-3xl font-display font-semibold leading-none text-[var(--color-muted)]/30 md:text-4xl">
                      0{index + 1}
                    </div>
                    <h3 className="mt-1 font-display text-lg font-semibold leading-tight text-[var(--color-ink)] md:text-xl">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-[var(--color-muted)] md:text-base">
                      {step.description}
                    </p>
                  </div>

                  <div className="flex w-full items-center justify-center sm:w-[45%]">
                    <Image
                      src={step.img}
                      alt={step.title}
                      width={200}
                      height={130}
                      className="h-[110px] w-auto max-w-full object-contain md:h-[130px]"
                    />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
