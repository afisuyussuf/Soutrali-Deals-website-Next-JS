"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Youtube } from "lucide-react";
import { Container } from "@/components/ui/Container";

const footerLinks = {
  company: [
    { label: "À propos", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Marketplace", href: "/marketplace" },
    { label: "Contact", href: "/contact" },
  ],
  support: [
    { label: "FAQ", href: "/faq" },
    { label: "CGU", href: "/cgu" },
    { label: "Politique de confidentialité", href: "/privacy" },
    { label: "Support", href: "/support" },
  ],
  social: [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Youtube, href: "#", label: "YouTube" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[var(--gray-900)] text-white">
      <Container>
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Brand */}
            <div className="lg:col-span-1">
              <Link href="/" className="mb-4 flex items-center space-x-3">
                <Image
                  src="/images/logo_soutralideals.jpg"
                  alt="Soutrali Deals Logo"
                  width={120}
                  height={40}
                  className="h-10 w-auto object-contain"
                />
              </Link>
              <p className="mt-4 text-sm text-gray-400">
                Le hub qui connecte services, commerce et paiements en un seul
                espace. Plateforme ivoirienne innovante de mise en relation,
                e-commerce et services connectés.
              </p>
              <div className="mt-6 flex space-x-4">
                {footerLinks.social.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="rounded-lg bg-[var(--gray-800)] p-2 text-gray-400 transition-colors hover:bg-[var(--primary-green)] hover:text-white"
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">
                ENTREPRISE
              </h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 transition-colors hover:text-[var(--primary-green)]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">
                SUPPORT
              </h3>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 transition-colors hover:text-[var(--primary-green)]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">
                NEWSLETTER
              </h3>
              <p className="mb-4 text-sm text-gray-400">
                Restez informé de nos dernières actualités et offres
                spéciales.
              </p>
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="w-full rounded-lg border border-[var(--gray-700)] bg-[var(--gray-800)] px-4 py-2 text-white placeholder-gray-500 focus:border-[var(--primary-green)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-green)]"
                />
                <button
                  type="submit"
                  className="w-full rounded-lg bg-[var(--primary-green)] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[var(--green-600)]"
                >
                  S'abonner
                </button>
              </form>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 border-t border-[var(--gray-800)] pt-8">
            <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
              <p className="text-sm text-gray-400">
                © {new Date().getFullYear()} Soutrali Deals. Tous droits
                réservés.
              </p>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Mail className="h-4 w-4" />
                <a
                  href="mailto:contact@soutralideals.com"
                  className="transition-colors hover:text-[var(--primary-green)]"
                >
                  contact@soutralideals.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

