import { cn } from "@/lib/cn";
import { ArrowRight } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost" | "inverse";
  href?: string;
  arrow?: boolean;
  children: React.ReactNode;
}

const buttonOnlyProps = new Set<keyof ButtonProps>([
  "disabled",
  "type",
  "form",
  "formAction",
  "formEncType",
  "formMethod",
  "formTarget",
  "formNoValidate",
]);

export function Button({
  variant = "primary",
  href,
  arrow = false,
  children,
  className,
  ...props
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center gap-2 rounded-[var(--radius-btn)] px-5 py-3 text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-2 focus:ring-offset-[var(--color-ink)] md:px-6 md:py-3.5 md:text-base";
  const variants = {
    primary: "bg-[var(--color-accent)] text-[var(--color-on-accent)] hover:opacity-90 shadow-[0_4px_16px_rgba(248,249,18,0.3)]",
    ghost: "text-[var(--color-ink)] hover:underline focus:underline",
    inverse: "bg-[var(--color-surface)] text-[var(--color-ink)] hover:bg-[var(--color-muted)]",
  };

  const classes = cn(baseStyles, variants[variant], className);

  if (href) {
    const anchorProps: Record<string, unknown> = {};
    for (const [key, value] of Object.entries(props)) {
      if (!buttonOnlyProps.has(key as keyof ButtonProps)) {
        anchorProps[key] = value;
      }
    }
    return (
      <a href={href} className={classes} {...anchorProps}>
        {children}
        {arrow && <ArrowRight className="h-4 w-4" aria-hidden="true" />}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
      {arrow && <ArrowRight className="h-4 w-4" aria-hidden="true" />}
    </button>
  );
}
