"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/animations/AnimatedSection";
import { CreditCard, Smartphone, Truck, Zap } from "lucide-react";

// Données des partenaires (à remplacer par les vrais logos)
const partners = [
  {
    name: "CentralBill",
    logo: "/images/partners/centralbill.png", // Placeholder - à remplacer par le vrai logo
    description: "Paiements sécurisés",
    icon: CreditCard,
    color: "from-blue-500 to-blue-600",
  },
  {
    name: "Orange Money",
    logo: "/images/partners/orange.png", // Placeholder - à remplacer par le vrai logo
    description: "Mobile Money",
    icon: Smartphone,
    color: "from-orange-500 to-orange-600",
  },
  {
    name: "MTN Mobile Money",
    logo: "/images/partners/mtn.png", // Placeholder - à remplacer par le vrai logo
    description: "Mobile Money",
    icon: Smartphone,
    color: "from-yellow-500 to-yellow-600",
  },
  {
    name: "Partenaire Logistique",
    logo: "/images/partners/logistics.png", // Placeholder - à remplacer par le vrai logo
    description: "Livraison",
    icon: Truck,
    color: "from-green-500 to-green-600",
  },
  {
    name: "Partenaire Transport",
    logo: "/images/partners/transport.png", // Placeholder - à remplacer par le vrai logo
    description: "Transport",
    icon: Truck,
    color: "from-purple-500 to-purple-600",
  },
  {
    name: "Partenaire Technologie",
    logo: "/images/partners/tech.png", // Placeholder - à remplacer par le vrai logo
    description: "Solutions tech",
    icon: Zap,
    color: "from-indigo-500 to-indigo-600",
  },
];

export default function Partners() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-[var(--green-50)]">
      <Container>
        <SectionHeader
          title="Nos Partenaires"
          subtitle="Partenaires"
          description="Nous collaborons avec les meilleurs acteurs pour vous offrir une expérience optimale"
        />

        <StaggerContainer>
          <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-6">
            {partners.map((partner, index) => {
              const IconComponent = partner.icon;
              return (
                <StaggerItem key={index}>
                  <div className="group relative flex h-36 sm:h-40 flex-col items-center justify-center rounded-xl border-2 border-[var(--gray-200)] bg-white p-4 transition-all duration-300 hover:border-[var(--primary-green)] hover:shadow-xl hover:-translate-y-1">
                    {/* Logo ou Icône */}
                    <div className="flex h-16 w-full items-center justify-center mb-2">
                      {/* Pour l'instant, on utilise les icônes. 
                          Quand vous aurez les logos, ajoutez-les dans /public/images/partners/ 
                          et décommentez le code Image ci-dessous */}
                      <div className={`flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${partner.color} shadow-md group-hover:scale-110 transition-transform`}>
                        <IconComponent className="h-7 w-7 text-white" />
                      </div>
                      {/* 
                      {partner.logo && (
                        <div className="relative h-12 w-full">
                          <Image
                            src={partner.logo}
                            alt={partner.name}
                            fill
                            className="object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
                          />
                        </div>
                      )}
                      */}
                    </div>
                    <p className="mt-1 text-center text-xs sm:text-sm font-semibold text-[var(--gray-800)] group-hover:text-[var(--primary-green)] transition-colors">
                      {partner.name}
                    </p>
                    <p className="mt-1 text-center text-[10px] sm:text-xs text-[var(--gray-600)]">
                      {partner.description}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </div>
        </StaggerContainer>

        {/* CTA pour devenir partenaire */}
        <AnimatedSection className="mt-12 text-center">
          <div className="mx-auto max-w-2xl rounded-2xl bg-gradient-to-br from-[var(--green-50)] to-[var(--blue-50)] p-8">
            <h3 className="mb-4 text-2xl font-bold text-[var(--gray-900)]">
              Devenez notre partenaire
            </h3>
            <p className="mb-6 text-[var(--gray-700)]">
              Rejoignez notre écosystème et développez votre activité avec
              Soutrali Deals
            </p>
            <a
              href="/contact"
              className="inline-block rounded-lg bg-[var(--primary-green)] px-6 py-3 font-semibold text-white transition-all hover:bg-[var(--green-600)] hover:shadow-lg"
            >
              Nous contacter
            </a>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}

