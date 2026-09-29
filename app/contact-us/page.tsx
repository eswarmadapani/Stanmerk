import { ContactForm } from "@/components/forms/ContactForm";
import Image from "next/image";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata = {
  title: "Contact StanMerk | Book Your Free Sample Video Edit",
  description: "Get in touch with StanMerk for professional video editing, content mentorship, and strategy. Book your free sample edit today.",
  openGraph: {
    title: "Contact StanMerk | Book Your Free Sample Video Edit",
    description: "Get in touch with StanMerk for professional video editing, content mentorship, and strategy. Book your free sample edit today.",
    url: `${siteUrl}/contact-us`,
    images: [{ url: "/contact-1.png", width: 1672, height: 941, alt: "StanMerk - Contact" }],
  },
  alternates: {
    canonical: `${siteUrl}/contact-us`,
  },
};

const gallery = [
  { src: "/contact-1.png", alt: "Creator editing video" },
  { src: "/contact-2.png", alt: "Video editing workspace" },
  { src: "/contact-3.png", alt: "Content creation setup" },
  { src: "/contact-4.png", alt: "Brand building" },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen py-20 md:py-32">
      <div className="container-x px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left side - Form */}
          <div className="lg:pr-8">
            <ContactForm />
          </div>

          {/* Right side - 4 pictures (2x2 grid) */}
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {gallery.map((img, index) => (
              <div
                key={index}
                className="relative aspect-[4/3] rounded-[var(--radius-card)] overflow-hidden bg-[var(--color-muted)]/20 shadow-sm"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
