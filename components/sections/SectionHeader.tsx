"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  description,
  className,
}) => {
  return (
    <div className={cn("text-center mb-12", className)}>
      {subtitle && (
        <p className="text-sm font-semibold uppercase tracking-wider text-[var(--primary-green)] mb-2">
          {subtitle}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--gray-900)] mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-[var(--gray-600)] max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
};

