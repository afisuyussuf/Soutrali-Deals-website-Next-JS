import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

/**
 * Génère les metadata pour une page
 */
export function generateMetadata({
  title,
  description,
  keywords,
  ogImage,
  canonical,
}: {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  canonical?: string;
}): Metadata {
  const fullTitle = `${title} | ${siteConfig.name}`;
  const canonicalUrl = canonical || siteConfig.url;

  return {
    metadataBase: new URL(siteConfig.url),
    title: fullTitle,
    description,
    keywords: keywords || [
      "Soutrali Deals",
      "e-commerce Côte d'Ivoire",
      "marketplace",
      "services",
      "paiements",
      "Abidjan",
      "plateforme e-commerce",
      "services en ligne",
      "paiement mobile",
      "Orange Money",
      "MTN Mobile Money",
    ],
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: "website",
      locale: "fr_CI",
      url: canonicalUrl,
      title: fullTitle,
      description,
      siteName: siteConfig.name,
      images: [
        {
          url: ogImage || siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage || siteConfig.ogImage],
      creator: siteConfig.social.twitter,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      // À ajouter quand vous aurez les codes de vérification
      // google: "votre-code-google",
      // yandex: "votre-code-yandex",
      // bing: "votre-code-bing",
    },
  };
}

