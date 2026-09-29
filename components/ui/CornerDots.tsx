import { cn } from "@/lib/cn";

interface CornerDotsProps {
  tone?: "light" | "dark";
  className?: string;
}

export function CornerDots({ tone = "light", className }: CornerDotsProps) {
  const dotColor = tone === "light" ? "bg-[var(--color-muted)]" : "bg-[var(--color-surface)]";

  return (
    <div className={cn("absolute inset-0 pointer-events-none", className)}>
      <div className={`absolute top-3 left-3 w-1 h-1 rounded-full ${dotColor}`} />
      <div className={`absolute top-3 right-3 w-1 h-1 rounded-full ${dotColor}`} />
      <div className={`absolute bottom-3 left-3 w-1 h-1 rounded-full ${dotColor}`} />
      <div className={`absolute bottom-3 right-3 w-1 h-1 rounded-full ${dotColor}`} />
    </div>
  );
}
