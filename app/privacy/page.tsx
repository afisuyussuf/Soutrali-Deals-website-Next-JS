import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { AnimatedSection } from "@/components/animations/AnimatedSection";

export const metadata: Metadata = {
  title: "Politique de Confidentialité - Soutrali Deals",
  description: "Consultez notre politique de confidentialité et de protection des données personnelles.",
};

export default function PrivacyPage() {
  return (
    <div className="pt-24 pb-24 md:pt-32 md:pb-32 lg:pt-40 lg:pb-40">
      <Container>
        <AnimatedSection className="mb-16 md:mb-20 text-center">
          <h1 className="mb-4 text-4xl font-bold text-[var(--gray-900)] md:text-5xl lg:text-6xl">
            Politique de Confidentialité
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
                1. Introduction
              </h2>
              <p className="text-[var(--gray-700)] leading-relaxed">
                Soutrali Deals s'engage à protéger votre vie privée et vos données
                personnelles. Cette politique explique comment nous collectons,
                utilisons, stockons et protégeons vos informations personnelles
                conformément à la réglementation en vigueur en Côte d'Ivoire.
              </p>
            </Card>
          </AnimatedSection>

          <AnimatedSection>
            <Card className="p-8">
              <h2 className="mb-4 text-2xl font-bold text-[var(--gray-900)]">
                2. Données collectées
              </h2>
              <p className="mb-4 text-[var(--gray-700)] leading-relaxed">
                Nous collectons les données suivantes :
              </p>
              <ul className="ml-6 list-disc space-y-2 text-[var(--gray-700)]">
                <li>
                  <strong>Données d'identification :</strong> nom, prénom, email,
                  numéro de téléphone
                </li>
                <li>
                  <strong>Données de connexion :</strong> adresse IP, logs de
                  connexion
                </li>
                <li>
                  <strong>Données transactionnelles :</strong> historique des
                  commandes et paiements
                </li>
                <li>
                  <strong>Données de navigation :</strong> cookies, préférences
                  utilisateur
                </li>
              </ul>
            </Card>
          </AnimatedSection>

          <AnimatedSection>
            <Card className="p-8">
              <h2 className="mb-4 text-2xl font-bold text-[var(--gray-900)]">
                3. Utilisation des données
              </h2>
              <p className="mb-4 text-[var(--gray-700)] leading-relaxed">
                Vos données personnelles sont utilisées pour :
              </p>
              <ul className="ml-6 list-disc space-y-2 text-[var(--gray-700)]">
                <li>Fournir et améliorer nos services</li>
                <li>Traiter vos commandes et transactions</li>
                <li>Vous contacter concernant votre compte</li>
                <li>Envoyer des communications marketing (avec votre consentement)</li>
                <li>Assurer la sécurité de la plateforme</li>
                <li>Respecter nos obligations légales</li>
              </ul>
            </Card>
          </AnimatedSection>

          <AnimatedSection>
            <Card className="p-8">
              <h2 className="mb-4 text-2xl font-bold text-[var(--gray-900)]">
                4. Partage des données
              </h2>
              <p className="mb-4 text-[var(--gray-700)] leading-relaxed">
                Nous ne vendons jamais vos données personnelles. Nous pouvons
                partager vos données avec :
              </p>
              <ul className="ml-6 list-disc space-y-2 text-[var(--gray-700)]">
                <li>
                  <strong>Prestataires de services :</strong> hébergement, paiement,
                  livraison
                </li>
                <li>
                  <strong>Autorités légales :</strong> si requis par la loi
                </li>
                <li>
                  <strong>Partenaires commerciaux :</strong> uniquement avec votre
                  consentement explicite
                </li>
              </ul>
            </Card>
          </AnimatedSection>

          <AnimatedSection>
            <Card className="p-8">
              <h2 className="mb-4 text-2xl font-bold text-[var(--gray-900)]">
                5. Sécurité des données
              </h2>
              <p className="text-[var(--gray-700)] leading-relaxed">
                Nous mettons en œuvre des mesures techniques et organisationnelles
                appropriées pour protéger vos données contre tout accès non
                autorisé, perte, destruction ou altération. Cela inclut le
                chiffrement SSL, l'authentification sécurisée et des contrôles
                d'accès stricts.
              </p>
            </Card>
          </AnimatedSection>

          <AnimatedSection>
            <Card className="p-8">
              <h2 className="mb-4 text-2xl font-bold text-[var(--gray-900)]">
                6. Conservation des données
              </h2>
              <p className="text-[var(--gray-700)] leading-relaxed">
                Nous conservons vos données personnelles aussi longtemps que
                nécessaire pour les finalités décrites dans cette politique, ou
                conformément aux obligations légales. Les données sont supprimées
                lorsqu'elles ne sont plus nécessaires.
              </p>
            </Card>
          </AnimatedSection>

          <AnimatedSection>
            <Card className="p-8">
              <h2 className="mb-4 text-2xl font-bold text-[var(--gray-900)]">
                7. Vos droits
              </h2>
              <p className="mb-4 text-[var(--gray-700)] leading-relaxed">
                Conformément à la réglementation, vous disposez des droits suivants :
              </p>
              <ul className="ml-6 list-disc space-y-2 text-[var(--gray-700)]">
                <li>
                  <strong>Droit d'accès :</strong> accéder à vos données
                  personnelles
                </li>
                <li>
                  <strong>Droit de rectification :</strong> corriger vos données
                  inexactes
                </li>
                <li>
                  <strong>Droit à l'effacement :</strong> demander la suppression de
                  vos données
                </li>
                <li>
                  <strong>Droit d'opposition :</strong> vous opposer au traitement
                  de vos données
                </li>
                <li>
                  <strong>Droit à la portabilité :</strong> récupérer vos données
                </li>
              </ul>
            </Card>
          </AnimatedSection>

          <AnimatedSection>
            <Card className="p-8">
              <h2 className="mb-4 text-2xl font-bold text-[var(--gray-900)]">
                8. Cookies
              </h2>
              <p className="text-[var(--gray-700)] leading-relaxed">
                Nous utilisons des cookies pour améliorer votre expérience sur la
                plateforme. Vous pouvez gérer vos préférences de cookies dans les
                paramètres de votre navigateur. Certains cookies sont essentiels au
                fonctionnement de la plateforme.
              </p>
            </Card>
          </AnimatedSection>

          <AnimatedSection>
            <Card className="p-8 bg-[var(--green-50)]">
              <h2 className="mb-4 text-2xl font-bold text-[var(--gray-900)]">
                9. Contact
              </h2>
              <p className="text-[var(--gray-700)] leading-relaxed">
                Pour exercer vos droits ou pour toute question concernant cette
                politique, contactez-nous à :{" "}
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

