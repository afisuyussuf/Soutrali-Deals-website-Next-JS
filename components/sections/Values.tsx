"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { Card } from "@/components/ui/Card";
import { values } from "@/lib/constants";
import { StaggerContainer, StaggerItem } from "@/components/animations/AnimatedSection";
import {
  Lightbulb,
  ShieldCheck,
  Users,
  Globe,
  LucideIcon,
} from "lucide-react";

const valueIconMap: Record<string, LucideIcon> = {
  lightbulb: Lightbulb,
  "shield-check": ShieldCheck,
  users: Users,
  globe: Globe,
};

export default function Values() {
  return (
    <section className="py-24 md:py-32 lg:py-40 bg-[var(--gray-50)]">
      <Container>
        <SectionHeader
          title="Nos valeurs"
          subtitle="Engagement"
          description="Les principes qui guident notre mission et notre vision"
        />

        <StaggerContainer className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {values.map((value, index) => {
            const IconComponent = valueIconMap[value.icon] || Lightbulb;
            return (
              <StaggerItem key={index}>
                <Card hover className="h-full text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="rounded-2xl bg-gradient-to-br from-[var(--blue-50)] to-[var(--blue-100)] p-5 shadow-md transition-transform duration-200 group-hover:scale-110">
                      <IconComponent className="h-8 w-8 text-[var(--primary-blue)]" />
                    </div>
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-[var(--gray-900)]">
                    {value.title}
                  </h3>
                  <p className="text-[var(--gray-600)] leading-relaxed">{value.description}</p>
                </Card>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </Container>
    </section>
  );
}

