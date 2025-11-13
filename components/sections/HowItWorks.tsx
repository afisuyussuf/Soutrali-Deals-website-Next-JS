"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { Card } from "@/components/ui/Card";
import { howItWorksSellers, howItWorksBuyers } from "@/lib/constants";
import { StaggerContainer, StaggerItem } from "@/components/animations/AnimatedSection";
import { CheckCircle2 } from "lucide-react";

export default function HowItWorks() {
  return (
    <section className="py-20 md:py-32 bg-[var(--gray-50)]">
      <Container>
        <SectionHeader
          title="Comment ça marche"
          description="Rejoignez l'écosystème Soutrali Deals en quelques étapes simples"
        />

        <div className="space-y-16">
          {/* For Sellers */}
          <div>
            <h3 className="mb-8 text-center text-2xl font-bold text-[var(--gray-900)]">
              Pour les vendeurs
            </h3>
            <StaggerContainer className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {howItWorksSellers.map((step, index) => (
                <StaggerItem key={index}>
                  <Card className="relative text-center">
                    <div className="mb-4 flex justify-center">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[var(--primary-green)] to-[var(--green-600)] text-white shadow-lg">
                        <span className="text-xl font-bold">{step.step}</span>
                      </div>
                    </div>
                    <h4 className="mb-2 text-lg font-semibold text-[var(--gray-900)]">
                      {step.title}
                    </h4>
                    <p className="text-sm text-[var(--gray-600)]">
                      {step.description}
                    </p>
                    {index < howItWorksSellers.length - 1 && (
                      <div className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 transform lg:block">
                        <div className="rounded-full bg-white p-1 shadow-md">
                          <CheckCircle2 className="h-5 w-5 text-[var(--primary-green)]" />
                        </div>
                      </div>
                    )}
                  </Card>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          {/* For Buyers */}
          <div>
            <h3 className="mb-8 text-center text-2xl font-bold text-[var(--gray-900)]">
              Pour les acheteurs
            </h3>
            <StaggerContainer className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {howItWorksBuyers.map((step, index) => (
                <StaggerItem key={index}>
                  <Card className="relative text-center">
                    <div className="mb-4 flex justify-center">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[var(--primary-green)] to-[var(--green-600)] text-white shadow-lg">
                        <span className="text-xl font-bold">{step.step}</span>
                      </div>
                    </div>
                    <h4 className="mb-2 text-lg font-semibold text-[var(--gray-900)]">
                      {step.title}
                    </h4>
                    <p className="text-sm text-[var(--gray-600)]">
                      {step.description}
                    </p>
                    {index < howItWorksBuyers.length - 1 && (
                      <div className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 transform lg:block">
                        <div className="rounded-full bg-white p-1 shadow-md">
                          <CheckCircle2 className="h-5 w-5 text-[var(--primary-green)]" />
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

