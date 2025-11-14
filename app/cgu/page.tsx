import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { AnimatedSection } from "@/components/animations/AnimatedSection";

export const metadata: Metadata = {
  title: "Conditions Générales d'Utilisation - Soutrali Deals",
  description: "Consultez les conditions générales d'utilisation de la plateforme Soutrali Deals.",
};

export default function CGUPage() {
  return (
    <div className="pt-24 pb-24 md:pt-32 md:pb-32 lg:pt-40 lg:pb-40">
      <Container>
        <AnimatedSection className="mb-16 md:mb-20 text-center">
          <h1 className="mb-4 text-4xl font-bold text-[var(--gray-900)] md:text-5xl lg:text-6xl">
            Conditions Générales d'Utilisation
          </h1>
          <p className="text-lg text-[var(--gray-600)] md:text-xl">
            Dernière mise à jour : {new Date().toLocaleDateString("fr-FR", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </AnimatedSection>

        <div className="space-y-8 md:space-y-10">
          <AnimatedSection>
            <Card className="p-8">
              <h2 className="mb-4 text-2xl font-bold text-[var(--gray-900)]">
                1. Objet
              </h2>
              <p className="text-[var(--gray-700)] leading-relaxed">
                Les présentes Conditions Générales d'Utilisation (ci-après "CGU")
                ont pour objet de définir les conditions et modalités d'utilisation
                de la plateforme Soutrali Deals, ainsi que les droits et obligations
                des parties dans ce cadre.
              </p>
            </Card>
          </AnimatedSection>

          <AnimatedSection>
            <Card className="p-8">
              <h2 className="mb-4 text-2xl font-bold text-[var(--gray-900)]">
                2. Acceptation des CGU
              </h2>
              <p className="mb-4 text-[var(--gray-700)] leading-relaxed">
                L'utilisation de la plateforme Soutrali Deals implique l'acceptation
                pleine et entière des présentes CGU. En accédant et en utilisant la
                plateforme, vous reconnaissez avoir lu, compris et accepté d'être
                lié par ces conditions.
              </p>
            </Card>
          </AnimatedSection>

          <AnimatedSection>
            <Card className="p-8">
              <h2 className="mb-4 text-2xl font-bold text-[var(--gray-900)]">
                3. Description du service
              </h2>
              <p className="mb-4 text-[var(--gray-700)] leading-relaxed">
                Soutrali Deals est une plateforme de mise en relation, e-commerce
                et services connectés permettant aux utilisateurs de :
              </p>
              <ul className="ml-6 list-disc space-y-2 text-[var(--gray-700)]">
                <li>Rechercher et réserver des services</li>
                <li>Acheter et vendre des produits</li>
                <li>Effectuer des paiements sécurisés</li>
                <li>Gérer leurs transactions et commandes</li>
              </ul>
            </Card>
          </AnimatedSection>

          <AnimatedSection>
            <Card className="p-8">
              <h2 className="mb-4 text-2xl font-bold text-[var(--gray-900)]">
                4. Inscription et compte utilisateur
              </h2>
              <p className="mb-4 text-[var(--gray-700)] leading-relaxed">
                Pour utiliser certains services de la plateforme, vous devez créer
                un compte. Vous vous engagez à :
              </p>
              <ul className="ml-6 list-disc space-y-2 text-[var(--gray-700)]">
                <li>Fournir des informations exactes et à jour</li>
                <li>Maintenir la sécurité de votre compte</li>
                <li>Être responsable de toutes les activités sous votre compte</li>
                <li>Notifier immédiatement toute utilisation non autorisée</li>
              </ul>
            </Card>
          </AnimatedSection>

          <AnimatedSection>
            <Card className="p-8">
              <h2 className="mb-4 text-2xl font-bold text-[var(--gray-900)]">
                5. Obligations des utilisateurs
              </h2>
              <p className="mb-4 text-[var(--gray-700)] leading-relaxed">
                Vous vous engagez à utiliser la plateforme conformément à la loi et
                aux présentes CGU. Il est notamment interdit de :
              </p>
              <ul className="ml-6 list-disc space-y-2 text-[var(--gray-700)]">
                <li>Utiliser la plateforme à des fins illégales</li>
                <li>Publier des contenus offensants ou inappropriés</li>
                <li>Usurper l'identité d'autrui</li>
                <li>Perturber le fonctionnement de la plateforme</li>
              </ul>
            </Card>
          </AnimatedSection>

          <AnimatedSection>
            <Card className="p-8">
              <h2 className="mb-4 text-2xl font-bold text-[var(--gray-900)]">
                6. Paiements et transactions
              </h2>
              <p className="mb-4 text-[var(--gray-700)] leading-relaxed">
                Les paiements sont effectués via des passerelles sécurisées. Vous
                reconnaissez que :
              </p>
              <ul className="ml-6 list-disc space-y-2 text-[var(--gray-700)]">
                <li>Tous les prix sont indiqués en francs CFA</li>
                <li>Les transactions sont finales sauf cas exceptionnels</li>
                <li>Des frais peuvent s'appliquer selon le mode de paiement</li>
                <li>Les remboursements sont soumis à notre politique de remboursement</li>
              </ul>
            </Card>
          </AnimatedSection>

          <AnimatedSection>
            <Card className="p-8">
              <h2 className="mb-4 text-2xl font-bold text-[var(--gray-900)]">
                7. Propriété intellectuelle
              </h2>
              <p className="text-[var(--gray-700)] leading-relaxed">
                Tous les contenus de la plateforme (textes, images, logos, etc.) sont
                protégés par les lois sur la propriété intellectuelle. Toute
                reproduction non autorisée est interdite.
              </p>
            </Card>
          </AnimatedSection>

          <AnimatedSection>
            <Card className="p-8">
              <h2 className="mb-4 text-2xl font-bold text-[var(--gray-900)]">
                8. Limitation de responsabilité
              </h2>
              <p className="text-[var(--gray-700)] leading-relaxed">
                Soutrali Deals s'efforce d'assurer la disponibilité et le bon
                fonctionnement de la plateforme, mais ne peut garantir une
                disponibilité ininterrompue. Notre responsabilité est limitée dans
                les cas prévus par la loi.
              </p>
            </Card>
          </AnimatedSection>

          <AnimatedSection>
            <Card className="p-8">
              <h2 className="mb-4 text-2xl font-bold text-[var(--gray-900)]">
                9. Modification des CGU
              </h2>
              <p className="text-[var(--gray-700)] leading-relaxed">
                Nous nous réservons le droit de modifier les présentes CGU à tout
                moment. Les modifications entrent en vigueur dès leur publication
                sur la plateforme. Il est de votre responsabilité de consulter
                régulièrement les CGU.
              </p>
            </Card>
          </AnimatedSection>

          <AnimatedSection>
            <Card className="p-8 bg-[var(--green-50)]">
              <h2 className="mb-4 text-2xl font-bold text-[var(--gray-900)]">
                10. Contact
              </h2>
              <p className="text-[var(--gray-700)] leading-relaxed">
                Pour toute question concernant les présentes CGU, vous pouvez nous
                contacter à :{" "}
                <a
                  href="mailto:contact@soutralideals.com"
                  className="font-semibold text-[var(--primary-green)] hover:underline"
                >
                  contact@soutralideals.com
                </a>
              </p>
            </Card>
          </AnimatedSection>
        </div>
      </Container>
    </div>
  );
}

