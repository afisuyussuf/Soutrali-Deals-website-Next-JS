import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { Card } from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Services - Soutrali Deals",
  description: "Découvrez notre plateforme de mise en relation pour prestataires de services. Trouvez ou proposez des services professionnels en Côte d'Ivoire.",
};

const serviceCategories = [
  {
    title: "Services à domicile",
    description: "Plomberie, électricité, nettoyage, jardinage et plus",
  },
  {
    title: "Services professionnels",
    description: "Conseil, comptabilité, marketing, développement web",
  },
  {
    title: "Services créatifs",
    description: "Design, photographie, vidéo, rédaction",
  },
  {
    title: "Services de bien-être",
    description: "Coiffure, esthétique, massage, coaching",
  },
  {
    title: "Services éducatifs",
    description: "Cours particuliers, formation, tutorat",
  },
  {
    title: "Services événementiels",
    description: "Organisation d'événements, traiteur, animation",
  },
];

const benefits = [
  "Mise en relation directe avec vos clients",
  "Gestion simplifiée de vos réservations",
  "Paiements sécurisés et rapides",
  "Profil professionnel personnalisable",
  "Système d'avis et de notation",
  "Support client dédié",
];

export default function ServicesPage() {
  return (
    <div className="py-20 md:py-32">
      <Container>
        {/* Hero */}
        <AnimatedSection className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold text-[var(--gray-900)] md:text-5xl">
            Services professionnels
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-[var(--gray-600)]">
            Mettez en relation clients et prestataires pour tous vos besoins de
            services
          </p>
        </AnimatedSection>

        {/* How it works */}
        <SectionHeader
          title="Comment ça marche"
          description="Un processus simple et efficace pour tous"
        />

        <div className="mb-16 grid gap-6 md:grid-cols-4">
          {[
            {
              step: 1,
              title: "Inscription",
              description: "Créez votre compte en quelques minutes",
            },
            {
              step: 2,
              title: "Création de profil",
              description: "Ajoutez vos compétences et votre portfolio",
            },
            {
              step: 3,
              title: "Réception de demandes",
              description: "Recevez des demandes de clients",
            },
            {
              step: 4,
              title: "Prestation & Paiement",
              description: "Effectuez le service et recevez votre paiement",
            },
          ].map((step, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <Card className="text-center">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--primary-green)] text-white">
                    <span className="text-xl font-bold">{step.step}</span>
                  </div>
                </div>
                <h3 className="mb-2 text-lg font-semibold text-[var(--gray-900)]">
                  {step.title}
                </h3>
                <p className="text-sm text-[var(--gray-600)]">
                  {step.description}
                </p>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        {/* Categories */}
        <SectionHeader
          title="Catégories de services"
          description="Explorez nos différentes catégories"
        />

        <div className="mb-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {serviceCategories.map((category, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <Card hover>
                <h3 className="mb-2 text-xl font-semibold text-[var(--gray-900)]">
                  {category.title}
                </h3>
                <p className="text-[var(--gray-600)]">
                  {category.description}
                </p>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        {/* Benefits */}
        <div className="mb-16 grid gap-8 md:grid-cols-2">
          <AnimatedSection>
            <Card className="h-full p-8">
              <h2 className="mb-6 text-2xl font-bold text-[var(--gray-900)]">
                Avantages pour les prestataires
              </h2>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-[var(--primary-green)]" />
                    <span className="text-[var(--gray-700)]">{benefit}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </AnimatedSection>

          <AnimatedSection>
            <Card className="h-full p-8 bg-gradient-to-br from-[var(--green-50)] to-[var(--blue-50)]">
              <h2 className="mb-6 text-2xl font-bold text-[var(--gray-900)]">
                Prêt à commencer ?
              </h2>
              <p className="mb-6 text-[var(--gray-700)]">
                Rejoignez notre communauté de prestataires et développez votre
                activité en ligne.
              </p>
              <Button variant="primary" size="lg" className="group">
                Devenir prestataire
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Card>
          </AnimatedSection>
        </div>
      </Container>
    </div>
  );
}

