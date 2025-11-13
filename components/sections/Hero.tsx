"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { useReducedMotion } from "@/lib/hooks";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[var(--green-50)] via-[var(--green-100)] to-white py-20 md:py-32">
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <motion.h1
            variants={itemVariants}
            className="mb-6 text-4xl font-bold leading-tight text-[var(--gray-900)] md:text-5xl lg:text-6xl"
          >
            Connectez services, commerce et{" "}
            <span className="bg-gradient-to-r from-[var(--primary-green)] via-[var(--green-600)] to-[var(--green-700)] bg-clip-text text-transparent">
              paiements
            </span>{" "}
            en Côte d'Ivoire
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mx-auto mb-8 max-w-2xl text-lg text-[var(--gray-600)] md:text-xl"
          >
            Le hub qui connecte services, commerce et paiements en un seul
            espace. Plateforme ivoirienne innovante de mise en relation,
            e-commerce et services connectés.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button variant="primary" size="lg" className="group">
              Vendre sur Soutrali
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="secondary" size="lg">
              Découvrir les offres
            </Button>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            variants={itemVariants}
            className="mt-16 flex justify-center"
          >
            <div className="relative h-64 w-full max-w-5xl overflow-hidden rounded-3xl shadow-2xl md:h-96 lg:h-[500px] ring-4 ring-[var(--primary-green)]/10">
              <Image
                src="/images/visuel.jpg"
                alt="Soutrali Deals Platform"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--green-900)]/30 via-transparent to-transparent" />
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}

