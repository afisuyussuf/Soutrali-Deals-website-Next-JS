import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ - Soutrali Deals",
  description: "Trouvez les réponses à vos questions fréquentes sur Soutrali Deals, notre plateforme de services et marketplace.",
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

