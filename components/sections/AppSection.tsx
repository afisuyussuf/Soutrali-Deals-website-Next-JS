"use client";

import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/animations/AnimatedSection";
import { Smartphone, Download, CheckCircle2, ArrowRight } from "lucide-react";

const appFeatures = [
  "Commandes en temps réel",
  "Notifications push",
  "Paiements sécurisés",
  "Suivi de livraison",
  "Chat avec les vendeurs",
  "Historique des transactions",
];

export default function AppSection() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-[var(--primary-green)] via-[var(--green-600)] to-[var(--green-700)] text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 h-64 w-64 rounded-full bg-white blur-3xl" />
        <div className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-white blur-3xl" />
      </div>

      <Container className="relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left Content */}
          <AnimatedSection>
            <h2 className="mb-8 text-4xl font-bold md:text-5xl">
              Téléchargez l'application Soutrali Deals
            </h2>

            {/* Features List - Only show first 2 prominently */}
            <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-white" />
                <span className="text-white/90">Chat avec les vendeurs</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-white" />
                <span className="text-white/90">Historique des transactions</span>
              </div>
            </div>

            {/* Download Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                variant="secondary"
                size="lg"
                className="bg-white text-[var(--primary-green)] hover:bg-[var(--gray-100)] group"
              >
                Télécharger sur iOS
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white bg-[var(--primary-green)] text-white hover:bg-[var(--green-600)]"
              >
                Télécharger sur Android
              </Button>
            </div>
          </AnimatedSection>

          {/* Right Image */}
          <AnimatedSection delay={0.2}>
            <div className="relative flex justify-center">
              <div className="relative">
                {/* Phone Mockup */}
                <div className="relative h-[600px] w-[300px]">
                  <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-[var(--gray-900)] to-[var(--green-900)] p-4 shadow-2xl ring-4 ring-white/10">
                    <div className="h-full w-full overflow-hidden rounded-[2.5rem] bg-white shadow-inner">
                      <Image
                        src="/images/cover.png"
                        alt="Soutrali Deals App"
                        fill
                        className="object-cover"
                        sizes="300px"
                      />
                    </div>
                  </div>
                  {/* Decorative glow */}
                  <div className="absolute -inset-4 rounded-[3rem] bg-[var(--primary-green)] opacity-30 blur-3xl animate-pulse" />
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}

