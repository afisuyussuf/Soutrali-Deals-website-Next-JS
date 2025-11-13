import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - Soutrali Deals",
  description: "Contactez l'équipe Soutrali Deals. Nous sommes là pour répondre à toutes vos questions.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

