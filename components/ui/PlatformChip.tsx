import { cn } from "@/lib/cn";

interface PlatformChipProps {
  platform: string;
  views?: string;
  className?: string;
}

export function PlatformChip({ platform, views, className }: PlatformChipProps) {
  return (
    <div className={cn("inline-flex items-center gap-2 px-2 py-1 rounded-full bg-[var(--color-dark-card)]/50 text-xs text-[var(--color-surface)]", className)}>
      <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" />
      <span className="font-medium">{platform}</span>
      {views && <span className="text-[var(--color-muted)]">· {views}</span>}
    </div>
  );
}
