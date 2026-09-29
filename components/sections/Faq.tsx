"use client";

import React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { faqs } from "@/content/faqs";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { BlueprintFrame } from "@/components/ui/BlueprintFrame";
import { Reveal } from "@/components/ui/Reveal";
import { ChevronDown } from "lucide-react";

export function Faq() {
  return (
    <section id="faq" data-theme="light" className="py-24 md:py-32 lg:py-40">
      <div className="container-x px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <Reveal>
            <SectionHeader
              eyebrow="FAQ"
              title={["Got Questions? ", { text: "We Got Answers", accent: true }]}
              sub="Everything you need to know about working with us."
              align="left"
            />
          </Reveal>

          <Reveal delay={0.2}>
            <BlueprintFrame>
              <Accordion.Root type="single" collapsible defaultValue="item-0" className="space-y-0">
                {faqs.map((faq, index) => (
                  <Accordion.Item key={index} value={`item-${index}`} className="group border-b border-[var(--color-line)] last:border-0">
                    <Accordion.Header className="flex items-center justify-between w-full">
                      <Accordion.Trigger className="flex items-center justify-between w-full bg-[var(--color-surface)] p-3 md:p-4 text-left relative hover:bg-[var(--color-muted)]/5 transition-colors">
                        <span className="font-medium text-[var(--color-ink)] pr-6 md:pr-8 text-sm md:text-base">{faq.question}</span>
                        <ChevronDown className="w-4 h-4 md:w-5 md:h-5 text-[var(--color-muted)] transition-transform group-data-[state=open]:rotate-180 flex-shrink-0" />
                      </Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Content className="overflow-hidden transition-all duration-300 ease-in-out data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                      <div className="bg-[var(--color-surface)] p-3 md:p-4 text-[var(--color-muted)] text-xs md:text-sm">
                        {faq.answer}
                      </div>
                    </Accordion.Content>
                  </Accordion.Item>
                ))}
              </Accordion.Root>
            </BlueprintFrame>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
