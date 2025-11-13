"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { FeatureCard } from "@/components/ui/Card";
import { features } from "@/lib/constants";
import { StaggerContainer, StaggerItem } from "@/components/animations/AnimatedSection";

export default function Features() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-white to-[var(--green-50)]">
      <Container>
        <SectionHeader
          title="Fonctionnalités clés"
          description="Tout ce dont vous avez besoin pour développer votre activité en ligne"
        />

        <StaggerContainer className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {features.map((feature, index) => (
            <StaggerItem key={index}>
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}

