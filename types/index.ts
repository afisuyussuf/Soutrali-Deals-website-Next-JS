/**
 * Types globaux pour le projet Soutrali Deals
 */

export interface NavLink {
  href: string;
  label: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface Partner {
  name: string;
  logo?: string;
  description: string;
  icon?: React.ComponentType<{ className?: string }>;
  color?: string;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  image?: string;
}

export interface Stat {
  value: string;
  label: string;
  icon?: React.ComponentType<{ className?: string }>;
}

export interface Value {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface HowItWorksStep {
  step: string;
  title: string;
  description: string;
}

export interface MetadataConfig {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
}

