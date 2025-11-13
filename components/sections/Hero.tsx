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
    <section className="relative overflow-hidden">
      {/* Top Section - Light Green Background */}
      <div className="relative bg-[var(--green-50)] py-24 md:py-32 lg:py-40">
        <Container>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center"
          >
            <motion.h1
              variants={itemVariants}
              className="mb-6 text-3xl font-bold leading-tight text-[var(--green-700)] sm:text-4xl md:text-5xl lg:text-6xl"
            >
              paiements en Côte d'Ivoire
            </motion.h1>

            <motion.div
              variants={itemVariants}
              className="mx-auto mb-8 max-w-3xl space-y-2 text-base text-[var(--green-700)] sm:text-lg md:text-xl"
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
          <div className="relative bg-gradient-to-b from-[var(--green-600)] to-[var(--green-700)] py-24 md:py-32 lg:py-40">
        <Container>
          <div className="relative grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
            {/* Left Side - Phone and Icons */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Phone Mockup */}
              <div className="relative mx-auto h-[400px] w-[240px] sm:h-[500px] sm:w-[280px] md:h-[600px] md:w-[320px]">
                <div className="absolute inset-0 rounded-[3rem] bg-[var(--gray-900)] p-4 shadow-2xl">
                  <div className="h-full w-full overflow-hidden rounded-[2.5rem] bg-white">
                    {/* Phone Screen Content */}
                    <div className="relative h-full w-full bg-gradient-to-b from-[var(--green-50)] to-white p-6">
                      {/* Map Area */}
                      <div className="relative mb-3 h-32 rounded-lg bg-[var(--green-100)] overflow-hidden sm:h-40 sm:mb-4">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center">
                            <MapPin className="h-8 w-8 text-[var(--primary-green)] mx-auto mb-1 sm:h-12 sm:w-12 sm:mb-2" />
                            <div className="text-xs font-semibold text-[var(--green-700)] sm:text-sm">
                              Côte d'Ivoire
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* App Title */}
                      <div className="mb-3 text-center sm:mb-4">
                        <h3 className="text-base font-bold text-[var(--green-700)] sm:text-lg md:text-xl">
                          SOUTRALI DEALS
                        </h3>
                      </div>
                      
                      {/* Bottom Text */}
                      <div className="absolute bottom-4 left-4 right-4 text-center sm:bottom-6 sm:left-6 sm:right-6">
                        <p className="text-[10px] text-[var(--gray-600)] sm:text-xs">
                          Vous avez déjà un compte?
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative Icons Around Phone */}
                <div className="absolute -left-4 top-16 z-10 hidden md:block md:-left-8 lg:top-20">
                  <div className="rounded-full bg-[var(--blue-100)] p-3 shadow-xl md:p-4">
                    <Wrench className="h-6 w-6 text-white md:h-8 md:w-8" />
                  </div>
                </div>
                <div className="absolute -left-4 bottom-24 z-10 hidden md:block md:-left-8 md:bottom-32">
                  <div className="rounded-full bg-[var(--blue-100)] p-3 shadow-xl md:p-4">
                    <ShoppingBag className="h-6 w-6 text-white md:h-8 md:w-8" />
                  </div>
                </div>
                <div className="absolute -right-4 top-24 z-10 hidden md:block md:-right-8 md:top-32">
                  <div className="rounded-full bg-[var(--blue-100)] p-3 shadow-xl md:p-4">
                    <Hammer className="h-6 w-6 text-white md:h-8 md:w-8" />
                  </div>
                </div>
                <div className="absolute -right-4 bottom-16 z-10 hidden md:block md:-right-8 md:bottom-20">
                  <div className="rounded-full bg-[var(--blue-100)] p-3 shadow-xl md:p-4">
                    <Smartphone className="h-6 w-6 text-white md:h-8 md:w-8" />
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
              className="mt-8 space-y-6 lg:mt-0"
            >
              {/* First Block */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="rounded-full bg-[var(--blue-100)] p-3">
                    <CheckCircle2 className="h-5 w-5 text-white sm:h-6 sm:w-6" />
                  </div>
                </div>
                <div className="text-white">
                  <h3 className="mb-1 text-lg font-semibold sm:text-xl">
                    Commandez vos prestataires
                  </h3>
                  <p className="text-sm text-white/90 sm:text-base">En toute simplicité</p>
                </div>
              </div>

              {/* Second Block */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="rounded-full bg-[var(--blue-100)] p-3">
                    <CheckCircle2 className="h-5 w-5 text-white sm:h-6 sm:w-6" />
                  </div>
                </div>
                <div className="text-white">
                  <h3 className="mb-1 text-lg font-semibold sm:text-xl">
                    Achetez vos articles
                  </h3>
                  <p className="text-sm text-white/90 sm:text-base">
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
