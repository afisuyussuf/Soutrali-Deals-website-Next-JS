import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { Card } from "@/components/ui/Card";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { values } from "@/lib/constants";
import {
  Lightbulb,
  ShieldCheck,
  Users,
  Globe,
  LucideIcon,
} from "lucide-react";

export const metadata: Metadata = {
  title: "À propos - Soutrali Deals",
  description: "Découvrez l'histoire, la vision et la mission de Soutrali Deals, la plateforme ivoirienne innovante de mise en relation et e-commerce.",
};

const valueIconMap: Record<string, LucideIcon> = {
  lightbulb: Lightbulb,
  "shield-check": ShieldCheck,
  users: Users,
  globe: Globe,
};

export default function AboutPage() {
  return (
    <div className="pt-24 pb-24 md:pt-32 md:pb-32 lg:pt-40 lg:pb-40">
      <Container>
        {/* Hero Section */}
        <AnimatedSection className="mb-16 md:mb-20 text-center">
          <h1 className="mb-4 text-4xl font-bold text-[var(--gray-900)] md:text-5xl lg:text-6xl">
            À propos de Soutrali Deals
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-[var(--gray-600)] md:text-xl">
            Nous construisons l'avenir du commerce digital en Côte d'Ivoire
          </p>
        </AnimatedSection>

        {/* Story */}
        <AnimatedSection className="mb-16 md:mb-20">
          <Card className="p-8 md:p-12">
            <h2 className="mb-6 text-3xl font-bold text-[var(--gray-900)]">
              Notre histoire
            </h2>
            <div className="prose prose-lg max-w-none text-[var(--gray-700)]">
              <p className="mb-4">
                Soutrali Deals est né de la volonté de créer un écosystème
                numérique africain où chaque artisan, prestataire, PME ou
                commerçant peut vendre, collaborer et se développer en ligne
                sans barrière technique ni financière.
              </p>
              <p className="mb-4">
                Fondée en Côte d'Ivoire, notre plateforme combine les meilleures
                pratiques du e-commerce moderne avec une compréhension profonde
                des besoins locaux. Nous croyons en un avenir où le commerce
                digital est accessible à tous, sécurisé et prospère.
              </p>
              <p>
                Aujourd'hui, Soutrali Deals connecte des milliers d'utilisateurs
                et facilite des milliers de transactions, contribuant à la
                croissance économique locale et à l'inclusion numérique.
              </p>
            </div>
          </Card>
        </AnimatedSection>

        {/* Vision & Mission */}
        <div className="mb-16 md:mb-20 grid gap-8 md:grid-cols-2">
          <AnimatedSection>
            <Card className="h-full p-8">
              <h2 className="mb-4 text-2xl font-bold text-[var(--gray-900)]">
                Notre Vision
              </h2>
              <p className="text-[var(--gray-700)]">
                Créer un écosystème numérique africain où chaque artisan,
                prestataire, PME ou commerçant peut vendre, collaborer et se
                développer en ligne sans barrière technique ni financière.
              </p>
            </Card>
          </AnimatedSection>

          <AnimatedSection>
            <Card className="h-full p-8">
              <h2 className="mb-4 text-2xl font-bold text-[var(--gray-900)]">
                Notre Mission
              </h2>
              <ul className="space-y-3 text-[var(--gray-700)]">
                <li className="flex items-start">
                  <span className="mr-2 text-[var(--primary-green)]">✓</span>
                  Offrir une plateforme unique pour la réservation de services
                  et l'achat de produits
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[var(--primary-green)]">✓</span>
                  Accompagner les vendeurs et prestataires dans leur transition
                  digitale avec des outils simples et sécurisés
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[var(--primary-green)]">✓</span>
                  Promouvoir la confiance et la transparence dans les
                  transactions locales et transfrontalières
                </li>
              </ul>
            </Card>
          </AnimatedSection>
        </div>

        {/* Values */}
        <SectionHeader
          title="Nos valeurs"
          description="Les principes qui guident notre mission et notre vision"
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => {
            const IconComponent = valueIconMap[value.icon] || Lightbulb;
            return (
              <AnimatedSection key={index} delay={index * 0.1}>
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
              </AnimatedSection>
            );
          })}
        </div>
      </Container>
    </div>
  );
}

