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
    <section className="py-20 md:py-32 bg-white">
      <Container>
        <SectionHeader
          title="Nos valeurs"
          description="Les principes qui guident notre mission et notre vision"
        />

        <StaggerContainer className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => {
            const IconComponent = valueIconMap[value.icon] || Lightbulb;
            return (
              <StaggerItem key={index}>
                <Card hover className="text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="rounded-full bg-[var(--blue-50)] p-4">
                      <IconComponent className="h-8 w-8 text-[var(--primary-blue)]" />
                    </div>
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-[var(--gray-900)]">
                    {value.title}
                  </h3>
                  <p className="text-[var(--gray-600)]">{value.description}</p>
                </Card>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </Container>
    </section>
  );
}

