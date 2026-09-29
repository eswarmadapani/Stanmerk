import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center hero-glow px-6">
      <div className="text-center">
        <h1 className="font-display text-highlight text-[var(--color-accent)] text-8xl font-light leading-none mb-4 md:text-9xl">
          404
        </h1>
        <p className="text-[var(--color-muted)] text-xl mb-8">
          Page not found
        </p>
        <Button href="/" variant="primary" arrow>
          Back to home
        </Button>
      </div>
    </div>
  );
}
