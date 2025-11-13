"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Wrench, ShoppingBag, Hammer, Smartphone, MapPin } from "lucide-react";
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
    <section className="relative min-h-screen overflow-hidden">
      {/* Top Section - Light Green Background */}
      <div className="relative bg-[var(--green-50)] py-20 md:py-32">
        <Container>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center"
          >
            <motion.h1
              variants={itemVariants}
              className="mb-6 text-4xl font-bold leading-tight text-[var(--green-700)] md:text-5xl lg:text-6xl"
            >
              Connectez services, commerce et{" "}
              <span className="text-[var(--green-700)]">
                paiements en Côte d'Ivoire
              </span>
            </motion.h1>

            <motion.div
              variants={itemVariants}
              className="mx-auto mb-8 max-w-3xl space-y-2 text-lg text-[var(--gray-700)] md:text-xl"
            >
              <p>
                Le hub qui connecte services, commerce et paiements en un seul
                espace.
              </p>
              <p>
                Plateforme ivoirienne innovante de mise en relation, e-commerce
                et services connectés.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <Button
                variant="primary"
                size="lg"
                className="bg-[var(--primary-green)] text-white hover:bg-[var(--green-600)] group"
              >
                Vendre sur Soutrali
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                variant="primary"
                size="lg"
                className="bg-[var(--primary-green)] text-white hover:bg-[var(--green-600)]"
              >
                Découvrir les offres
              </Button>
            </motion.div>
          </motion.div>
        </Container>
      </div>

      {/* Bottom Section - Dark Green Background with Graphics */}
      <div className="relative bg-gradient-to-b from-[var(--green-600)] to-[var(--green-700)] py-20 md:py-32">
        <Container>
          <div className="relative grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* Left Side - Phone and Icons */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Phone Mockup */}
              <div className="relative mx-auto h-[500px] w-[280px] md:h-[600px] md:w-[320px]">
                <div className="absolute inset-0 rounded-[3rem] bg-[var(--gray-900)] p-4 shadow-2xl">
                  <div className="h-full w-full overflow-hidden rounded-[2.5rem] bg-white">
                    {/* Phone Screen Content */}
                    <div className="relative h-full w-full bg-gradient-to-b from-[var(--green-50)] to-white p-6">
                      {/* Map Area */}
                      <div className="relative mb-4 h-48 rounded-lg bg-[var(--green-100)] overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center">
                            <MapPin className="h-12 w-12 text-[var(--primary-green)] mx-auto mb-2" />
                            <div className="text-sm font-semibold text-[var(--green-700)]">
                              Côte d'Ivoire
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* App Title */}
                      <div className="mb-4 text-center">
                        <h3 className="text-xl font-bold text-[var(--green-700)]">
                          SOUTRALI DEALS
                        </h3>
                      </div>
                      
                      {/* Bottom Text */}
                      <div className="absolute bottom-6 left-6 right-6 text-center">
                        <p className="text-xs text-[var(--gray-600)]">
                          Vous avez déjà un compte?
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative Icons Around Phone */}
                <div className="absolute -left-8 top-20 z-10 hidden lg:block">
                  <div className="rounded-full bg-[var(--blue-100)] p-4 shadow-xl">
                    <Wrench className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="absolute -left-8 bottom-32 z-10 hidden lg:block">
                  <div className="rounded-full bg-[var(--blue-100)] p-4 shadow-xl">
                    <ShoppingBag className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="absolute -right-8 top-32 z-10 hidden lg:block">
                  <div className="rounded-full bg-[var(--blue-100)] p-4 shadow-xl">
                    <Hammer className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="absolute -right-8 bottom-20 z-10 hidden lg:block">
                  <div className="rounded-full bg-[var(--blue-100)] p-4 shadow-xl">
                    <Smartphone className="h-8 w-8 text-white" />
                  </div>
                </div>

                {/* Location Pins */}
                <div className="absolute left-1/4 top-1/4 hidden md:block">
                  <MapPin className="h-6 w-6 text-[var(--primary-green)] drop-shadow-lg" />
                </div>
                <div className="absolute right-1/4 bottom-1/4 hidden md:block">
                  <MapPin className="h-6 w-6 text-[var(--primary-green)] drop-shadow-lg" />
                </div>
              </div>
            </motion.div>

            {/* Right Side - Text Blocks */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              {/* First Block */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="rounded-full bg-[var(--blue-100)] p-3">
                    <CheckCircle2 className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="text-white">
                  <h3 className="mb-1 text-xl font-semibold">
                    Commandez vos prestataires
                  </h3>
                  <p className="text-white/90">En toute simplicité</p>
                </div>
              </div>

              {/* Second Block */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="rounded-full bg-[var(--blue-100)] p-3">
                    <CheckCircle2 className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="text-white">
                  <h3 className="mb-1 text-xl font-semibold">
                    Achetez vos articles
                  </h3>
                  <p className="text-white/90">
                    Le digital au service de vos besoins!
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </div>
    </section>
  );
}
