"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/animations/AnimatedSection";

export default function CTA() {
  return (
    <section className="py-24 md:py-32 lg:py-40 bg-gradient-to-br from-[var(--primary-green)] via-[var(--green-600)] to-[var(--green-700)] text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 h-64 w-64 rounded-full bg-white blur-3xl" />
        <div className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-white blur-3xl" />
      </div>
      <Container className="relative z-10">
        <AnimatedSection className="text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
            Rejoignez l'écosystème Soutrali Deals
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg opacity-90">
            Que vous soyez vendeur ou acheteur, commencez dès aujourd'hui à
            profiter de notre plateforme innovante.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              variant="secondary"
              size="lg"
              className="bg-white text-[var(--primary-green)] hover:bg-[var(--gray-100)] group"
            >
              Inscription vendeur
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              variant="primary"
              size="lg"
              className="bg-[var(--primary-green)] text-white hover:bg-[var(--green-600)]"
            >
              Inscription acheteur
            </Button>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}

