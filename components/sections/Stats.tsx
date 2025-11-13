"use client";

import React, { useEffect, useRef } from "react";
import { Container } from "@/components/ui/Container";
import { useInView } from "framer-motion";

interface StatItemProps {
  value: number;
  label: string;
  suffix?: string;
}

function StatItem({ value, label, suffix = "" }: StatItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = React.useState(0);

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-center">
      <div className="mb-3 text-5xl font-bold text-white md:text-6xl lg:text-7xl">
        {count.toLocaleString()}
        {suffix}
      </div>
      <div className="text-base text-white/90 md:text-lg">{label}</div>
    </div>
  );
}

export default function Stats() {
  const stats = [
    { value: 1000, label: "Utilisateurs actifs", suffix: "+" },
    { value: 500, label: "Vendeurs inscrits", suffix: "+" },
    { value: 5000, label: "Transactions", suffix: "+" },
    { value: 50, label: "Catégories de services", suffix: "+" },
  ];

  return (
    <section className="py-24 md:py-32 lg:py-40 bg-gradient-to-br from-[var(--primary-green)] via-[var(--green-600)] to-[var(--green-700)] text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 h-64 w-64 rounded-full bg-white blur-3xl" />
        <div className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-white blur-3xl" />
      </div>
      
      <Container className="relative z-10">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:gap-12">
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              value={stat.value}
              label={stat.label}
              suffix={stat.suffix}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

