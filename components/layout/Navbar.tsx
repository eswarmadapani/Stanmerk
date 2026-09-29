"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Featured Work", href: "#featured-work" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-[var(--color-ink)]/95 backdrop-blur-sm" : "bg-transparent"
        }`}
      >
        <div className="grid w-full grid-cols-[1fr_auto_1fr] items-center px-4 py-3 md:px-6 md:py-4">
          <Link href="/" className="flex w-fit items-center gap-2 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-2 focus:ring-offset-[var(--color-ink)]">
            <span className="font-ui text-base font-semibold text-[var(--color-surface)] md:text-lg">
              StanMerk<span className="text-[var(--color-accent)]">.</span>
            </span>
          </Link>

          <div className="flex items-center gap-10 lg:gap-12">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded px-1 py-1 font-ui text-[10px] font-medium uppercase tracking-wide text-[var(--color-surface)] transition-colors hover:text-[var(--color-accent)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-2 focus:ring-offset-[var(--color-ink)] lg:text-xs"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}
