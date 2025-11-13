"use client";

import React from "react";
import { cn } from "@/lib/utils";
import {
  Wrench,
  ShoppingCart,
  CreditCard,
  Truck,
  BarChart,
  Lightbulb,
  ShieldCheck,
  Users,
  Globe,
  LucideIcon,
} from "lucide-react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hover?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, hover = false, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-xl bg-white p-6 shadow-sm border border-[var(--gray-200)] transition-all duration-300",
          hover &&
            "hover:shadow-xl hover:-translate-y-2 hover:border-[var(--primary-green)]/20",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

// Icon mapping
const iconMap: Record<string, LucideIcon> = {
  wrench: Wrench,
  "shopping-cart": ShoppingCart,
  "credit-card": CreditCard,
  truck: Truck,
  "bar-chart": BarChart,
  lightbulb: Lightbulb,
  "shield-check": ShieldCheck,
  users: Users,
  globe: Globe,
};

interface FeatureCardProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: string;
  title: string;
  description: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  className,
  ...props
}) => {
  const IconComponent = iconMap[icon] || Wrench;

  return (
    <Card
      hover
      className={cn("text-center", className)}
      {...props}
    >
      <div className="mb-4 flex justify-center">
        <div className="rounded-full bg-gradient-to-br from-[var(--green-50)] to-[var(--green-100)] p-4 shadow-sm">
          <IconComponent className="h-8 w-8 text-[var(--primary-green)]" />
        </div>
      </div>
      <h3 className="mb-2 text-xl font-semibold text-[var(--gray-900)]">
        {title}
      </h3>
      <p className="text-[var(--gray-600)]">{description}</p>
    </Card>
  );
};

interface TestimonialCardProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  role: string;
  content: string;
  image?: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  role,
  content,
  image,
  className,
  ...props
}) => {
  return (
    <Card className={cn("", className)} {...props}>
      <p className="mb-6 text-lg text-[var(--gray-700)] leading-relaxed">"{content}"</p>
      <div className="flex items-center gap-4">
        <div className="h-12 w-12 rounded-full bg-[var(--gray-200)] flex items-center justify-center overflow-hidden">
          {image ? (
            <img
              src={image}
              alt={name}
              className="h-full w-full rounded-full object-cover"
            />
          ) : (
            <span className="text-lg font-semibold text-[var(--gray-600)]">
              {name.charAt(0)}
            </span>
          )}
        </div>
        <div>
          <p className="font-semibold text-[var(--gray-900)]">{name}</p>
          <p className="text-sm text-[var(--gray-600)]">{role}</p>
        </div>
      </div>
    </Card>
  );
};

