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
}: {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
}): Metadata {
  const fullTitle = `${title} | ${siteConfig.name}`;

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
    ],
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,
    openGraph: {
      type: "website",
      locale: "fr_CI",
      url: siteConfig.url,
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
  };
}

