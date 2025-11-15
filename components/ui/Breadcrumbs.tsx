"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "@/lib/utils";
import { generateBreadcrumbSchema } from "@/lib/structured-data";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export default function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  const breadcrumbSchema = generateBreadcrumbSchema(
    items.map((item) => ({ name: item.label, url: item.href }))
  );

  return (
    <>
      {/* Données structurées JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      
      {/* Navigation breadcrumb */}
      <nav
        aria-label="Fil d'Ariane"
        className={cn("flex items-center space-x-2 text-sm", className)}
      >
        <ol className="flex items-center space-x-2">
          <li>
            <Link
              href="/"
              className="text-[var(--gray-600)] hover:text-[var(--primary-green)] transition-colors"
              aria-label="Accueil"
            >
              <Home className="h-4 w-4" />
            </Link>
          </li>
          {items.map((item, index) => (
            <li key={item.href} className="flex items-center space-x-2">
              <ChevronRight className="h-4 w-4 text-[var(--gray-400)]" />
              {index === items.length - 1 ? (
                <span className="text-[var(--gray-900)] font-medium" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="text-[var(--gray-600)] hover:text-[var(--primary-green)] transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}

