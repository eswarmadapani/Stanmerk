"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { MobileMenu } from "@/components/layout/MobileMenu";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Featured Work", href: "#featured-work" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-[var(--color-ink)]/95 backdrop-blur-sm" : "bg-transparent"
        }`}
      >
        <div className="relative">
          {/* StanMerk logo - positioned to left edge of screen */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 flex items-center gap-2 px-4">
            <Link href="/">
              <span className="font-ui text-base font-semibold text-[var(--color-surface)] md:text-lg">
                StanMerk<span className="text-[var(--color-accent)]">.</span>
              </span>
            </Link>
          </div>

          <div className="container-x px-4 py-3 md:px-6 md:py-4">
            <div className="flex w-full items-center justify-between">
              <div className="flex-1 flex items-center justify-center">
                {/* Desktop Navigation - hidden on mobile */}
                <div className="hidden items-center gap-8 lg:gap-12 md:flex">
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

              {/* Mobile Menu Button - visible on mobile only */}
              <div className="flex items-center">
                <button
                  type="button"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-surface)]/10 text-[var(--color-surface)] transition-colors hover:bg-[var(--color-surface)]/20 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-2 focus:ring-offset-[var(--color-ink)] md:hidden"
                  aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                  aria-expanded={isMobileMenuOpen}
                >
                  {isMobileMenuOpen ? (
                    <X className="h-5 w-5" />
                  ) : (
                    <Menu className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        links={navLinks}
      />
    </>
  );
}
