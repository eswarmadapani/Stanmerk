"use client";

import React from "react";
import { motion } from "framer-motion";
import { testimonials as existingTestimonials } from "@/content/testimonials";
import { SectionHeader } from "@/components/ui/SectionHeader";

// --- Types ---
interface Testimonial {
  text: string;
  image: string;
  name: string;
  role: string;
}

// Map existing testimonials or use defaults matching the aesthetic
const testimonialsData: Testimonial[] = existingTestimonials.map((t) => ({
  text: t.quote,
  image: t.avatar || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=256&auto=format&fit=crop",
  name: t.name,
  role: t.company,
}));

// Fallback if less than 9 items
while (testimonialsData.length < 9) {
  testimonialsData.push({
    text: "StanMerk transformed our content pipeline and doubled our engagement in weeks. Incredible team!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=256&auto=format&fit=crop",
    name: "Alex Rivera",
    role: "Content Creator",
  });
}

const firstColumn = testimonialsData.slice(0, 3);
const secondColumn = testimonialsData.slice(3, 6);
const thirdColumn = testimonialsData.slice(6, 9);

// --- Sub-Components ---
const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.ul
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 15,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-transparent transition-colors duration-300 list-none m-0 p-0"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <motion.li
                  key={`${index}-${i}`}
                  aria-hidden={index === 1 ? "true" : "false"}
                  tabIndex={index === 1 ? -1 : 0}
                  whileHover={{
                    scale: 1.03,
                    y: -8,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1)",
                    transition: { type: "spring", stiffness: 400, damping: 17 }
                  }}
                  whileFocus={{
                    scale: 1.03,
                    y: -8,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1)",
                    transition: { type: "spring", stiffness: 400, damping: 17 }
                  }}
                  className="p-8 rounded-[var(--radius-card)] border border-[var(--color-line)] shadow-lg max-w-sm w-full bg-[var(--color-dark-card)] text-[var(--color-surface)] transition-all duration-300 cursor-default select-none group focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/30"
                >
                  <blockquote className="m-0 p-0">
                    <p className="text-[var(--color-muted)] leading-relaxed font-normal m-0 transition-colors duration-300 text-sm md:text-base">
                      &ldquo;{text}&rdquo;
                    </p>
                    <footer className="flex items-center gap-3 mt-6">
                      <img
                        width={40}
                        height={40}
                        src={image}
                        alt={`Avatar of ${name}`}
                        className="h-10 w-10 rounded-full object-cover ring-2 ring-[var(--color-line)] group-hover:ring-[var(--color-accent)]/50 transition-all duration-300 ease-in-out"
                      />
                      <div className="flex flex-col">
                        <cite className="font-semibold not-italic tracking-tight leading-5 text-[var(--color-surface)] transition-colors duration-300 text-sm">
                          {name}
                        </cite>
                        <span className="text-xs leading-5 tracking-tight text-[var(--color-muted)] mt-0.5 transition-colors duration-300">
                          {role}
                        </span>
                      </div>
                    </footer>
                  </blockquote>
                </motion.li>
              ))}
            </React.Fragment>
          ))
        ]}
      </motion.ul>
    </div>
  );
};

export function Testimonials() {
  return (
    <section
      id="testimonials"
      data-theme="dark"
      aria-labelledby="testimonials-heading"
      className="relative bg-black py-20 md:py-28 lg:py-32 overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{
          duration: 1.2,
          ease: [0.16, 1, 0.3, 1],
          opacity: { duration: 0.8 }
        }}
        className="container-x px-5 sm:px-6 z-10 mx-auto text-[var(--color-surface)]"
      >
        <div className="text-center max-w-2xl mx-auto mb-12">
          <SectionHeader
            eyebrow="Testimonials"
            title={[`What our clients `, { text: `say about us`, accent: true }]}
            sub="Real feedback from real creators and brands who scaled with our video editing systems."
            align="center"
            eyebrowTone="dark"
          />
        </div>

        <div className="flex flex-col items-center gap-4 md:flex-row md:gap-6 mt-8 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] max-h-[600px] overflow-hidden"
          role="region"
          aria-label="Scrolling Testimonials"
        >
          <TestimonialsColumn testimonials={firstColumn} className="w-full md:w-[32%]" duration={18} />
          <TestimonialsColumn testimonials={secondColumn} className="w-full md:w-[32%] hidden md:block" duration={22} />
          <TestimonialsColumn testimonials={thirdColumn} className="w-full md:w-[32%] hidden lg:block" duration={20} />
        </div>
      </motion.div>
    </section>
  );
}
