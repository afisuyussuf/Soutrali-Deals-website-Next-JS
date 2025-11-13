import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support - Soutrali Deals",
  description: "Contactez notre équipe support pour toute question ou problème concernant Soutrali Deals.",
};

export default function SupportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

