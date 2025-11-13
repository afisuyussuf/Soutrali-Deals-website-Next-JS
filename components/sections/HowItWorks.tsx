"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { Card } from "@/components/ui/Card";
import { howItWorksSellers, howItWorksBuyers } from "@/lib/constants";
import { StaggerContainer, StaggerItem } from "@/components/animations/AnimatedSection";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function HowItWorks() {
  return (
    <section className="py-24 md:py-32 lg:py-40 bg-white">
      <Container>
        <SectionHeader
          title="Comment ça marche"
          subtitle="Processus"
          description="Rejoignez l'écosystème Soutrali Deals en quelques étapes simples"
        />

        <div className="space-y-20 md:space-y-24">
          {/* For Sellers */}
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-[var(--gray-900)] md:text-4xl">
                Pour les vendeurs
              </h3>
              <p className="mt-2 text-[var(--gray-600)]">
                Démarrez votre activité en ligne en quelques clics
              </p>
            </div>
            <StaggerContainer className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
              {howItWorksSellers.map((step, index) => (
                <StaggerItem key={index}>
                  <Card className="relative h-full text-center transition-all duration-200 hover:shadow-lg">
                    <div className="mb-6 flex justify-center">
                      <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--primary-green)] to-[var(--green-600)] text-white shadow-lg">
                        <span className="text-2xl font-bold">{step.step}</span>
                      </div>
                    </div>
                    <h4 className="mb-3 text-xl font-bold text-[var(--gray-900)]">
                      {step.title}
                    </h4>
                    <p className="text-[var(--gray-600)] leading-relaxed">
                      {step.description}
                    </p>
                    {index < howItWorksSellers.length - 1 && (
                      <div className="absolute -right-4 top-1/2 z-10 hidden -translate-y-1/2 transform lg:block">
                        <div className="rounded-full bg-white p-2 shadow-lg ring-4 ring-white">
                          <ArrowRight className="h-5 w-5 text-[var(--primary-green)]" />
                        </div>
                      </div>
                    )}
                  </Card>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          {/* For Buyers */}
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-[var(--gray-900)] md:text-4xl">
                Pour les acheteurs
              </h3>
              <p className="mt-2 text-[var(--gray-600)]">
                Trouvez et commandez facilement ce dont vous avez besoin
              </p>
            </div>
            <StaggerContainer className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
              {howItWorksBuyers.map((step, index) => (
                <StaggerItem key={index}>
                  <Card className="relative h-full text-center transition-all duration-200 hover:shadow-lg">
                    <div className="mb-6 flex justify-center">
                      <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--primary-green)] to-[var(--green-600)] text-white shadow-lg">
                        <span className="text-2xl font-bold">{step.step}</span>
                      </div>
                    </div>
                    <h4 className="mb-3 text-xl font-bold text-[var(--gray-900)]">
                      {step.title}
                    </h4>
                    <p className="text-[var(--gray-600)] leading-relaxed">
                      {step.description}
                    </p>
                    {index < howItWorksBuyers.length - 1 && (
                      <div className="absolute -right-4 top-1/2 z-10 hidden -translate-y-1/2 transform lg:block">
                        <div className="rounded-full bg-white p-2 shadow-lg ring-4 ring-white">
                          <ArrowRight className="h-5 w-5 text-[var(--primary-green)]" />
                        </div>
                      </div>
                    )}
                  </Card>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </Container>
    </section>
  );
}

