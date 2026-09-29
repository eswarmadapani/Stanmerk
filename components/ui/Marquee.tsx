import { cn } from "@/lib/cn";

interface MarqueeProps {
  children: React.ReactNode;
  direction?: "x" | "y";
  reverse?: boolean;
  duration?: number;
  className?: string;
}

export function Marquee({ children, direction = "x", reverse = false, duration = 40, className }: MarqueeProps) {
  const trackClass = direction === "x" ? "marquee-track" : "marquee-track-y";
  const reverseClass = reverse ? "marquee-reverse" : "";

  return (
    <div className={cn("overflow-hidden", className)}>
      <div className={cn(trackClass, reverseClass)} style={{ "--dur": `${duration}s` } as React.CSSProperties}>
        {children}
        <div aria-hidden="true">{children}</div>
      </div>
    </div>
  );
}
