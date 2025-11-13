"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Input, Textarea } from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { Mail, Phone, MessageCircle, HelpCircle } from "lucide-react";

const supportSchema = z.object({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Email invalide"),
  subject: z.string().min(5, "Le sujet doit contenir au moins 5 caractères"),
  message: z.string().min(10, "Le message doit contenir au moins 10 caractères"),
  category: z.enum(["technical", "billing", "account", "other"]),
});

type SupportFormData = z.infer<typeof supportSchema>;

export default function SupportPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<SupportFormData>({
    resolver: zodResolver(supportSchema),
    defaultValues: {
      category: "other",
    },
  });

  const onSubmit = async (data: SupportFormData) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Support request:", data);
    alert("Votre demande a été envoyée avec succès ! Nous vous répondrons dans les plus brefs délais.");
    reset();
  };

  return (
    <div className="py-20 md:py-32">
      <Container>
        {/* Hero */}
        <AnimatedSection className="mb-16 text-center">
          <div className="mb-6 flex justify-center">
            <div className="rounded-full bg-[var(--green-50)] p-6">
              <HelpCircle className="h-12 w-12 text-[var(--primary-green)]" />
            </div>
          </div>
          <h1 className="mb-4 text-4xl font-bold text-[var(--gray-900)] md:text-5xl">
            Centre de Support
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-[var(--gray-600)]">
            Nous sommes là pour vous aider. Contactez notre équipe support pour
            toute question ou problème.
          </p>
        </AnimatedSection>

        {/* Contact Methods */}
        <div className="mb-16 grid gap-6 md:grid-cols-3">
          <AnimatedSection>
            <Card className="p-6 text-center">
              <div className="mb-4 flex justify-center">
                <div className="rounded-full bg-[var(--green-50)] p-4">
                  <Mail className="h-6 w-6 text-[var(--primary-green)]" />
                </div>
              </div>
              <h3 className="mb-2 font-semibold text-[var(--gray-900)]">Email</h3>
              <a
                href="mailto:support@soutralideals.com"
                className="text-[var(--primary-green)] hover:underline"
              >
                support@soutralideals.com
              </a>
            </Card>
          </AnimatedSection>

          <AnimatedSection>
            <Card className="p-6 text-center">
              <div className="mb-4 flex justify-center">
                <div className="rounded-full bg-[var(--green-50)] p-4">
                  <Phone className="h-6 w-6 text-[var(--primary-green)]" />
                </div>
              </div>
              <h3 className="mb-2 font-semibold text-[var(--gray-900)]">
                Téléphone
              </h3>
              <a
                href="tel:+2250000000000"
                className="text-[var(--primary-green)] hover:underline"
              >
                +225 00 00 00 00 00
              </a>
            </Card>
          </AnimatedSection>

          <AnimatedSection>
            <Card className="p-6 text-center">
              <div className="mb-4 flex justify-center">
                <div className="rounded-full bg-[var(--green-50)] p-4">
                  <MessageCircle className="h-6 w-6 text-[var(--primary-green)]" />
                </div>
              </div>
              <h3 className="mb-2 font-semibold text-[var(--gray-900)]">Chat</h3>
              <p className="text-sm text-[var(--gray-600)]">
                Disponible du lundi au vendredi, 9h-18h
              </p>
            </Card>
          </AnimatedSection>
        </div>

        {/* Support Form */}
        <div className="grid gap-8 lg:grid-cols-3">
          <AnimatedSection className="lg:col-span-1">
            <Card className="p-6">
              <h2 className="mb-4 text-xl font-bold text-[var(--gray-900)]">
                Questions fréquentes
              </h2>
              <p className="mb-4 text-sm text-[var(--gray-600)]">
                Consultez notre FAQ pour trouver rapidement des réponses aux
                questions les plus courantes.
              </p>
              <a href="/faq">
                <Button variant="outline" size="sm" className="w-full">
                  Voir la FAQ
                </Button>
              </a>
            </Card>
          </AnimatedSection>

          <AnimatedSection className="lg:col-span-2">
            <Card className="p-8">
              <h2 className="mb-6 text-2xl font-bold text-[var(--gray-900)]">
                Envoyez-nous un message
              </h2>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <Input
                    label="Nom complet"
                    {...register("name")}
                    error={errors.name?.message}
                    placeholder="Votre nom"
                  />
                  <Input
                    label="Email"
                    type="email"
                    {...register("email")}
                    error={errors.email?.message}
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-[var(--gray-700)]">
                    Catégorie
                  </label>
                  <select
                    {...register("category")}
                    className="w-full rounded-lg border border-[var(--gray-300)] px-4 py-3 text-[var(--gray-900)] transition-colors focus:border-[var(--primary-green)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-green)] focus:ring-opacity-20"
                  >
                    <option value="technical">Problème technique</option>
                    <option value="billing">Facturation</option>
                    <option value="account">Compte utilisateur</option>
                    <option value="other">Autre</option>
                  </select>
                </div>

                <Input
                  label="Sujet"
                  {...register("subject")}
                  error={errors.subject?.message}
                  placeholder="Sujet de votre demande"
                />

                <Textarea
                  label="Message"
                  {...register("message")}
                  error={errors.message?.message}
                  placeholder="Décrivez votre problème ou question..."
                  rows={6}
                />

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  isLoading={isSubmitting}
                  className="w-full md:w-auto"
                >
                  Envoyer la demande
                </Button>
              </form>
            </Card>
          </AnimatedSection>
        </div>
      </Container>
    </div>
  );
}

