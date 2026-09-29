import { cn } from "@/lib/cn";
import { Eyebrow } from "./Eyebrow";

interface SectionHeaderProps {
  eyebrow: string;
  title: (string | { text: string; accent: boolean })[];
  sub?: string;
  align?: "left" | "center";
  className?: string;
  eyebrowTone?: "light" | "dark";
}

export function SectionHeader({ eyebrow, title, sub, align = "left", className, eyebrowTone = "light" }: SectionHeaderProps) {
  const alignStyles = align === "center" ? "text-center" : "text-left";

  return (
    <div className={cn("mb-10 md:mb-14", alignStyles, className)}>
      <Eyebrow tone={eyebrowTone}>{eyebrow}</Eyebrow>
      <h2 className={cn("mt-4 mb-3 max-w-3xl font-ui text-5xl font-light leading-[0.96] md:text-6xl", align === "center" && "mx-auto")}>
        {title.map((part, index) =>
          typeof part === "string" ? (
            <span key={index}>{part}</span>
          ) : (
            <span key={index} className={part.accent ? "font-display italic text-accent-text text-highlight" : ""}>
              {part.text}
            </span>
          )
        )}
      </h2>
      {sub && <p className="max-w-2xl text-base leading-relaxed text-[var(--color-muted)] md:text-lg">{sub}</p>}
    </div>
  );
}
