"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { TestimonialCard } from "@/components/ui/Card";
import { testimonials } from "@/lib/constants";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatedSection } from "@/components/animations/AnimatedSection";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 md:py-32 lg:py-40 bg-white">
      <Container>
        <SectionHeader
          title="Ce que disent nos utilisateurs"
          subtitle="Témoignages"
          description="Découvrez les témoignages de ceux qui nous font confiance"
        />

        <AnimatedSection className="relative">
          <div className="relative mx-auto max-w-4xl">
            <TestimonialCard
              name={testimonials[currentIndex].name}
              role={testimonials[currentIndex].role}
              content={testimonials[currentIndex].content}
              image={testimonials[currentIndex].image}
            />

            {/* Navigation */}
            <div className="mt-8 flex items-center justify-center gap-4">
              <button
                onClick={prevTestimonial}
                className="rounded-full bg-white p-3 shadow-lg transition-all hover:bg-[var(--green-50)] hover:scale-110 hover:shadow-xl"
                aria-label="Témoignage précédent"
              >
                <ChevronLeft className="h-5 w-5 text-[var(--primary-green)]" />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "w-8 bg-[var(--primary-green)] shadow-md"
                        : "w-2 bg-[var(--gray-300)] hover:bg-[var(--gray-400)]"
                    }`}
                    aria-label={`Aller au témoignage ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="rounded-full bg-white p-3 shadow-lg transition-all hover:bg-[var(--green-50)] hover:scale-110 hover:shadow-xl"
                aria-label="Témoignage suivant"
              >
                <ChevronRight className="h-5 w-5 text-[var(--primary-green)]" />
              </button>
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}

