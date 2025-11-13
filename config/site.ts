/**
 * Configuration du site Soutrali Deals
 */

export const siteConfig = {
  name: "Soutrali Deals",
  description:
    "Plateforme ivoirienne innovante de mise en relation, e-commerce et services connectés. Connectez services, commerce et paiements en un seul espace.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://soutralideals.com",
  ogImage: "/images/og-image.jpg",
  links: {
    twitter: "https://twitter.com/soutralideals",
    facebook: "https://facebook.com/soutralideals",
    instagram: "https://instagram.com/soutralideals",
    youtube: "https://youtube.com/@soutralideals",
    linkedin: "https://linkedin.com/company/soutralideals",
  },
  contact: {
    email: "contact@soutralideals.com",
    phone: "+225 07 87 04 96 37",
    whatsapp: "2250787049637",
    address: "Abidjan, Côte d'Ivoire",
  },
  social: {
    twitter: "@soutralideals",
    facebook: "soutralideals",
  },
} as const;

