"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: { label: string; href: string }[];
}

export function MobileMenu({ isOpen, onClose, links }: MobileMenuProps) {
  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-[var(--color-ink)]/80 backdrop-blur-sm z-50" />
        <Dialog.Content className="fixed top-0 right-0 bottom-0 w-72 md:w-80 bg-[var(--color-surface)] z-50 p-4 md:p-6 shadow-xl">
          <div className="flex justify-between items-center mb-6 md:mb-8">
            <span className="font-ui text-lg font-semibold md:text-xl">
              StanMerk<span className="text-[var(--color-accent)]">.</span>
            </span>
            <Dialog.Close asChild>
              <button
                className="text-[var(--color-ink)] hover:text-[var(--color-muted)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-2 focus:ring-offset-[var(--color-surface)] rounded p-2"
                aria-label="Close menu"
              >
                <X className="w-5 h-5 md:w-6 md:h-6" />
              </button>
            </Dialog.Close>
          </div>

          <nav className="flex flex-col gap-3 md:gap-4">
            {links.map((link) => (
              <Dialog.Close asChild key={link.href}>
                <a
                  href={link.href}
                  className="text-base md:text-lg font-medium text-[var(--color-ink)] hover:text-[var(--color-accent)] transition-colors py-2 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-2 focus:ring-offset-[var(--color-surface)] rounded px-2 py-1"
                >
                  {link.label}
                </a>
              </Dialog.Close>
            ))}
          </nav>

          <div className="mt-6 md:mt-8">
            <Button href="/contact-us" variant="primary" arrow className="w-full">
              Contact Us
            </Button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
