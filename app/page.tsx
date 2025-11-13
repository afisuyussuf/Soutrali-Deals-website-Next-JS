import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import ServicesCarousel from "@/components/sections/ServicesCarousel";
import HowItWorks from "@/components/sections/HowItWorks";
import Values from "@/components/sections/Values";
import Stats from "@/components/sections/Stats";
import AppSection from "@/components/sections/AppSection";
import Testimonials from "@/components/sections/Testimonials";
import Partners from "@/components/sections/Partners";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <ServicesCarousel />
      <HowItWorks />
      <Values />
      <Stats />
      <AppSection />
      <Testimonials />
      <Partners />
      <CTA />
    </>
  );
}
