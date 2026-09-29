import { cn } from "@/lib/cn";
import { Check } from "lucide-react";

interface CheckListProps {
  items: string[];
  tone?: "light" | "dark";
  className?: string;
}

export function CheckList({ items, tone = "light", className }: CheckListProps) {
  const checkIcon =
    tone === "light" ? (
      <div className="w-5 h-5 rounded-full bg-[var(--color-accent)] flex items-center justify-center">
        <Check className="w-3 h-3 text-[var(--color-on-accent)]" />
      </div>
    ) : (
      <Check className="w-5 h-5 text-[var(--color-accent)]" />
    );

  return (
    <ul className={cn("space-y-2", className)}>
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-3">
          <span className="flex-shrink-0 mt-0.5">{checkIcon}</span>
          <span className="text-sm">{item}</span>
        </li>
      ))}
    </ul>
  );
}
