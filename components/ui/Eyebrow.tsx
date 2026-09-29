import { cn } from "@/lib/cn";

interface EyebrowProps {
  children: React.ReactNode;
  tone?: "light" | "dark";
  className?: string;
}

export function Eyebrow({ children, tone = "light", className }: EyebrowProps) {
  const baseStyles = "relative inline-flex rounded-[5px] p-1.5 text-sm font-medium uppercase tracking-wide";
  const variants = {
    light: "text-[var(--color-ink)]",
    dark: "text-[var(--color-surface)]",
  };

  const innerStyles = tone === "dark"
    ? "bg-[var(--color-dark-card)]"
    : "bg-[var(--color-surface)] shadow-sm";
  const dotColor = tone === "dark" ? "bg-[var(--color-muted)]" : "bg-[var(--color-line)]";

  return (
    <span className={cn(baseStyles, variants[tone], className)}>
      <span className={cn("rounded-[5px] px-2.5 py-1.5 leading-none", innerStyles)}>{children}</span>
      <span className={cn("absolute left-2 top-2 h-1 w-1 rounded-full", dotColor)} />
      <span className={cn("absolute right-2 top-2 h-1 w-1 rounded-full", dotColor)} />
      <span className={cn("absolute bottom-2 left-2 h-1 w-1 rounded-full", dotColor)} />
      <span className={cn("absolute bottom-2 right-2 h-1 w-1 rounded-full", dotColor)} />
    </span>
  );
}
