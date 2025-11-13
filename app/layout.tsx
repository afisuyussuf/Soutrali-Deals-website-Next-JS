import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Soutrali Deals - Le hub qui connecte services, commerce et paiements",
  description: "Plateforme ivoirienne innovante de mise en relation, e-commerce et services connectés. Connectez services, commerce et paiements en un seul espace.",
  keywords: ["Soutrali Deals", "e-commerce Côte d'Ivoire", "marketplace", "services", "paiements", "Abidjan"],
  authors: [{ name: "Soutrali Deals" }],
  openGraph: {
    title: "Soutrali Deals - Le hub qui connecte services, commerce et paiements",
    description: "Plateforme ivoirienne innovante de mise en relation, e-commerce et services connectés",
    type: "website",
    locale: "fr_CI",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${inter.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
