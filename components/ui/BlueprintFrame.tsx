import { cn } from "@/lib/cn";

interface BlueprintFrameProps {
  children: React.ReactNode;
  className?: string;
}

export function BlueprintFrame({ children, className }: BlueprintFrameProps) {
  return (
    <div className={cn("relative p-3 md:p-4 rounded-[var(--radius-card)]", className)}>
      {children}
    </div>
  );
}
