import { site } from "@/content/site";
import { Mail, Phone, MapPin } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "#services" },
  { label: "Featured Work", href: "#featured-work" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact Us", href: "/contact-us" },
];

export function Footer() {
  return (
    <footer data-theme="dark" className="footer-glow mt-16 md:mt-24 border-t border-white/10">
      <div className="container-x px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Column 1: Logo & Social */}
          <div>
            <div className="mb-3 md:mb-4">
              <span className="font-ui text-xl font-semibold text-[var(--color-surface)] md:text-2xl">
                StanMerk<span className="text-[var(--color-accent)]">.</span>
              </span>
            </div>
            <p className="text-[var(--color-muted)] mb-4 md:mb-6 text-sm md:text-base">{site.tagline}</p>
            <div className="flex gap-2 md:gap-3">
              <a
                href={site.social.instagram}
                className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-[var(--color-surface)] text-[var(--color-ink)] flex items-center justify-center hover:bg-[var(--color-muted)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-2 focus:ring-offset-[var(--color-ink)]"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.748.137-.353.3-.882.344-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a
                href={site.social.youtube}
                className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-[var(--color-surface)] text-[var(--color-ink)] flex items-center justify-center hover:bg-[var(--color-muted)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-2 focus:ring-offset-[var(--color-ink)]"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a
                href={site.social.linkedin}
                className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-[var(--color-surface)] text-[var(--color-ink)] flex items-center justify-center hover:bg-[var(--color-muted)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-2 focus:ring-offset-[var(--color-ink)]"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-semibold text-[var(--color-surface)] mb-3 md:mb-4 text-sm md:text-base">Menu</h3>
            <ul className="space-y-1 md:space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[var(--color-muted)] hover:text-[var(--color-surface)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-2 focus:ring-offset-[var(--color-ink)] rounded px-2 py-1 text-sm md:text-base"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="font-semibold text-[var(--color-surface)] mb-3 md:mb-4 text-sm md:text-base">Contact Us</h3>
            <ul className="space-y-2 md:space-y-3">
              <li className="flex items-center gap-2 md:gap-3 text-[var(--color-muted)]">
                <Mail className="w-3 h-3 md:w-4 md:h-4 text-[var(--color-surface)]" />
                <a href={`mailto:${site.email}`} className="hover:text-[var(--color-surface)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-2 focus:ring-offset-[var(--color-ink)] rounded px-2 py-1 text-sm md:text-base">
                  {site.email}
                </a>
              </li>
              <li className="flex items-center gap-2 md:gap-3 text-[var(--color-muted)]">
                <Phone className="w-3 h-3 md:w-4 md:h-4 text-[var(--color-surface)]" />
                <a href={`tel:${site.phone}`} className="hover:text-[var(--color-surface)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-2 focus:ring-offset-[var(--color-ink)] rounded px-2 py-1 text-sm md:text-base">
                  {site.phone}
                </a>
              </li>
              <li className="flex items-center gap-2 md:gap-3 text-[var(--color-muted)]">
                <MapPin className="w-3 h-3 md:w-4 md:h-4 text-[var(--color-surface)]" />
                <span className="text-sm md:text-base">{site.city}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[var(--color-line)] mt-8 md:mt-12 pt-6 md:pt-8 text-center text-[var(--color-muted)] text-xs md:text-sm">
          © 2026 StanMerk. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
