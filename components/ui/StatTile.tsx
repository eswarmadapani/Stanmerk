import { cn } from "@/lib/cn";

interface StatTileProps {
  label: string;
  value: string;
  highlight?: boolean;
  className?: string;
}

export function StatTile({ label, value, highlight = false, className }: StatTileProps) {
  const baseStyles = "p-4 rounded-lg";
  const variants = highlight
    ? "bg-[var(--color-accent)] text-[var(--color-on-accent)]"
    : "bg-[var(--color-surface)] text-[var(--color-ink)]";

  return (
    <div className={cn(baseStyles, variants, className)}>
      <div className="text-xs font-medium uppercase tracking-wider mb-1">{label}</div>
      <div className="font-display text-2xl font-semibold">{value}</div>
    </div>
  );
}
