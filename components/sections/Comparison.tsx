import React from "react";
import { comparison } from "@/content/comparison";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { BlueprintFrame } from "@/components/ui/BlueprintFrame";
import { Reveal } from "@/components/ui/Reveal";

export function Comparison() {
  return (
    <section data-theme="light" className="py-24 md:py-32 lg:py-40">
      <div className="container-x px-6">
        <Reveal>
          <SectionHeader
            eyebrow="Why StanMerk"
            title={["The honest comparison. ", { text: "No marketing fluff.", accent: true }]}
            sub="We're not always the right answer - but for creators and agencies shipping multiple videos a week, the math is rarely close."
            align="center"
          />
        </Reveal>

        <Reveal delay={0.2}>
          <BlueprintFrame className="mt-8 overflow-x-auto md:mt-12">
            <table className="w-full min-w-[500px] md:min-w-[600px]">
              <thead>
                <tr>
                  <th className="p-3 md:p-4 text-left text-xs md:text-sm font-medium text-[var(--color-muted)]"></th>
                  <th className="p-3 md:p-4 text-center">
                    <div className="bg-[var(--color-ink)] text-[var(--color-surface)] p-2 md:p-3 rounded-lg">
                      <span className="font-display font-semibold text-sm md:text-base">StanMerk</span>
                    </div>
                  </th>
                  <th className="p-3 md:p-4 text-center">
                    <div className="bg-[var(--color-surface)] text-[var(--color-ink)] p-2 md:p-3 rounded-lg border border-[var(--color-line)]">
                      <span className="font-display font-semibold text-sm md:text-base">Other</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, index) => (
                  <tr key={index}>
                    <td className="p-3 md:p-4 text-xs md:text-sm text-[var(--color-muted)] border-b border-[var(--color-line)]">
                      {row.label}
                    </td>
                    <td className="p-3 md:p-4 border-b border-[var(--color-line)]">
                      <div className="bg-[var(--color-ink)] text-[var(--color-surface)] p-2 md:p-3 rounded-lg text-center text-xs md:text-sm font-medium">
                        {row.stanmerk}
                      </div>
                    </td>
                    <td className="p-3 md:p-4 border-b border-[var(--color-line)]">
                      <div className="bg-[var(--color-surface)] text-[var(--color-ink)] p-2 md:p-3 rounded-lg text-center text-xs md:text-sm text-[var(--color-muted)]">
                        {row.other}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </BlueprintFrame>
        </Reveal>
      </div>
    </section>
  );
}
