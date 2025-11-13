"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  className?: string;
  align?: "left" | "center" | "right";
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  description,
  className,
  align = "center",
}) => {
  const alignClasses = {
    left: "text-left",
    center: "text-center mx-auto",
    right: "text-right ml-auto",
  };

  return (
    <div className={cn("mb-12 md:mb-16", alignClasses[align], className)}>
      {subtitle && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[var(--primary-green)]">
          {subtitle}
        </p>
      )}
      <h2 className="mb-4 text-3xl font-bold leading-tight text-[var(--gray-900)] md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-base leading-relaxed text-[var(--gray-600)] md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
};

