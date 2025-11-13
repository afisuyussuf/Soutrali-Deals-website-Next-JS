import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { Card } from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { CheckCircle2, ArrowRight, ShoppingBag } from "lucide-react";

export const metadata: Metadata = {
  title: "Marketplace - Soutrali Deals",
  description: "Vendez vos produits en ligne sur notre marketplace. Plateforme e-commerce pour commerçants en Côte d'Ivoire.",
};

const productCategories = [
  {
    title: "Électronique",
    description: "Smartphones, ordinateurs, accessoires",
  },
  {
    title: "Mode & Accessoires",
    description: "Vêtements, chaussures, bijoux",
  },
  {
    title: "Maison & Jardin",
    description: "Décoration, mobilier, outils",
  },
  {
    title: "Beauté & Santé",
    description: "Cosmétiques, produits de soin",
  },
  {
    title: "Alimentation",
    description: "Produits locaux, épicerie fine",
  },
  {
    title: "Sport & Loisirs",
    description: "Équipements sportifs, jeux",
  },
];

const sellerBenefits = [
  "Boutique en ligne personnalisable",
  "Gestion d'inventaire simplifiée",
  "Paiements sécurisés et rapides",
  "Suivi des commandes en temps réel",
  "Statistiques de vente détaillées",
  "Support logistique intégré",
];

export default function MarketplacePage() {
  return (
    <div className="py-20 md:py-32">
      <Container>
        {/* Hero */}
        <AnimatedSection className="mb-16 text-center">
          <div className="mb-6 flex justify-center">
            <div className="rounded-full bg-[var(--green-50)] p-6">
              <ShoppingBag className="h-12 w-12 text-[var(--primary-green)]" />
            </div>
          </div>
          <h1 className="mb-4 text-4xl font-bold text-[var(--gray-900)] md:text-5xl">
            Marketplace Soutrali Deals
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-[var(--gray-600)]">
            Vendez vos produits en ligne et développez votre activité e-commerce
            en Côte d'Ivoire
          </p>
        </AnimatedSection>

        {/* Concept */}
        <AnimatedSection className="mb-16">
          <Card className="p-8 md:p-12">
            <h2 className="mb-6 text-3xl font-bold text-[var(--gray-900)]">
              Notre concept
            </h2>
            <div className="prose prose-lg max-w-none text-[var(--gray-700)]">
              <p className="mb-4">
                La marketplace Soutrali Deals est votre vitrine digitale pour
                vendre vos produits physiques et numériques. Que vous soyez un
                commerçant établi ou un entrepreneur débutant, notre plateforme
                vous offre tous les outils nécessaires pour réussir en ligne.
              </p>
              <p>
                Avec une interface intuitive, des paiements sécurisés et un
                système de livraison intégré, vendez facilement à travers toute
                la Côte d'Ivoire et au-delà.
              </p>
            </div>
          </Card>
        </AnimatedSection>

        {/* Categories */}
        <SectionHeader
          title="Catégories de produits"
          description="Explorez nos différentes catégories"
        />

        <div className="mb-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {productCategories.map((category, index) => (
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

        {/* Process */}
        <SectionHeader
          title="Processus de vente"
          description="Comment vendre sur notre marketplace"
        />

        <div className="mb-16 grid gap-6 md:grid-cols-4">
          {[
            {
              step: 1,
              title: "Inscription",
              description: "Créez votre compte vendeur",
            },
            {
              step: 2,
              title: "Configuration",
              description: "Ajoutez vos produits avec photos",
            },
            {
              step: 3,
              title: "Publication",
              description: "Mettez en ligne et commencez à vendre",
            },
            {
              step: 4,
              title: "Gestion",
              description: "Suivez vos ventes et commandes",
            },
          ].map((step, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <Card className="text-center">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--primary-blue)] text-white">
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

        {/* Benefits */}
        <div className="mb-16 grid gap-8 md:grid-cols-2">
          <AnimatedSection>
            <Card className="h-full p-8">
              <h2 className="mb-6 text-2xl font-bold text-[var(--gray-900)]">
                Avantages pour les vendeurs
              </h2>
              <ul className="space-y-4">
                {sellerBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-[var(--primary-green)]" />
                    <span className="text-[var(--gray-700)]">{benefit}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </AnimatedSection>

          <AnimatedSection>
            <Card className="h-full p-8 bg-gradient-to-br from-[var(--blue-50)] to-[var(--green-50)]">
              <h2 className="mb-6 text-2xl font-bold text-[var(--gray-900)]">
                Ouvrez votre boutique
              </h2>
              <p className="mb-6 text-[var(--gray-700)]">
                Rejoignez notre marketplace et commencez à vendre dès
                aujourd'hui. Configuration simple et rapide.
              </p>
              <Button variant="primary" size="lg" className="group">
                Ouvrir ma boutique
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Card>
          </AnimatedSection>
        </div>
      </Container>
    </div>
  );
}

