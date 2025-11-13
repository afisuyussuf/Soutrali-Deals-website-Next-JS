"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { Card } from "@/components/ui/Card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { cn } from "@/lib/utils";

const services = [
  {
    id: 1,
    title: "Service Professionnel",
    description: "Des services de qualité pour répondre à tous vos besoins",
    image: "/images/Service 1.jpg",
  },
  {
    id: 2,
    title: "Service Premium",
    description: "Excellence et expertise au service de votre réussite",
    image: "/images/Service 2.jpg",
  },
  {
    id: 3,
    title: "Service Express",
    description: "Rapidité et efficacité pour vos urgences",
    image: "/images/Service 1.jpg",
  },
];

export default function ServicesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % services.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
    setIsAutoPlaying(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length);
    setIsAutoPlaying(false);
  };

  return (
    <section className="py-24 md:py-32 lg:py-40 bg-gradient-to-b from-white to-[var(--gray-50)]">
      <Container>
        <SectionHeader
          title="Nos Services"
          subtitle="Offres"
          description="Découvrez notre gamme complète de services professionnels"
        />

        <AnimatedSection className="relative">
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-2xl">
            {/* Carousel Container */}
            <div className="relative h-[400px] md:h-[500px]">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  className={cn(
                    "absolute inset-0 transition-all duration-500 ease-in-out",
                    index === currentIndex
                      ? "opacity-100 translate-x-0"
                      : index < currentIndex
                      ? "opacity-0 -translate-x-full"
                      : "opacity-0 translate-x-full"
                  )}
                >
                  <Card className="h-full overflow-hidden p-0">
                    <div className="relative h-full">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[var(--green-900)]/90 via-[var(--green-900)]/50 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                        <h3 className="mb-2 text-3xl font-bold">{service.title}</h3>
                        <p className="text-lg opacity-90">{service.description}</p>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/95 backdrop-blur-sm p-3 shadow-xl transition-all hover:bg-white hover:scale-110 hover:shadow-2xl"
              aria-label="Service précédent"
            >
              <ChevronLeft className="h-6 w-6 text-[var(--primary-green)]" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/95 backdrop-blur-sm p-3 shadow-xl transition-all hover:bg-white hover:scale-110 hover:shadow-2xl"
              aria-label="Service suivant"
            >
              <ChevronRight className="h-6 w-6 text-[var(--primary-green)]" />
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-4 left-1/2 z-10 -translate-x-1/2 flex gap-2">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={cn(
                    "h-2 rounded-full transition-all duration-300",
                    index === currentIndex
                      ? "w-8 bg-[var(--primary-green)] shadow-lg"
                      : "w-2 bg-white/60 hover:bg-white/90"
                  )}
                  aria-label={`Aller au service ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}

