import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Services } from "@/components/sections/Services";
import { MarqueeBand } from "@/components/sections/MarqueeBand";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
// import { Comparison } from "@/components/sections/Comparison";
// import { Pricing } from "@/components/sections/Pricing";
// import { Faq } from "@/components/sections/Faq";
import { Testimonials } from "@/components/sections/Testimonials";
// import { BookingCta } from "@/components/sections/BookingCta";

export default function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Services />
      <MarqueeBand />
      <FeaturedWork />
      {/* <Comparison /> */}
      {/* <Pricing /> */}
      {/* <Faq /> */}
      <Testimonials />
      {/* <BookingCta /> */}
    </>
  );
}
