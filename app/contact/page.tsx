"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Container } from "@/components/ui/Container";
import { Input, Textarea } from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { Card } from "@/components/ui/Card";
import { Mail, Phone, MapPin } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Email invalide"),
  phone: z.string().optional(),
  subject: z.string().min(5, "Le sujet doit contenir au moins 5 caractères"),
  message: z.string().min(10, "Le message doit contenir au moins 10 caractères"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Form submitted:", data);
    alert("Message envoyé avec succès !");
    reset();
  };

  return (
    <div className="pt-24 pb-24 md:pt-32 md:pb-32 lg:pt-40 lg:pb-40">
      <Container>
        {/* Hero */}
        <AnimatedSection className="mb-16 md:mb-20 text-center">
          <h1 className="mb-4 text-4xl font-bold text-[var(--gray-900)] md:text-5xl lg:text-6xl">
            Contactez-nous
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-[var(--gray-600)] md:text-xl">
            Une question ? Une suggestion ? Nous sommes là pour vous aider.
          </p>
        </AnimatedSection>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Contact Info */}
          <AnimatedSection className="lg:col-span-1">
            <div className="space-y-6">
              <Card>
                <div className="flex items-start space-x-4">
                  <div className="rounded-full bg-[var(--green-50)] p-3">
                    <Mail className="h-6 w-6 text-[var(--primary-green)]" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-[var(--gray-900)]">
                      Email
                    </h3>
                    <a
                      href="mailto:contact@soutralideals.com"
                      className="text-[var(--gray-600)] transition-colors hover:text-[var(--primary-green)]"
                    >
                      contact@soutralideals.com
                    </a>
                  </div>
                </div>
              </Card>

              <Card>
                <div className="flex items-start space-x-4">
                  <div className="rounded-full bg-[var(--blue-50)] p-3">
                    <Phone className="h-6 w-6 text-[var(--primary-blue)]" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-[var(--gray-900)]">
                      Téléphone
                    </h3>
                    <a
                      href="tel:+2250787049637"
                      className="text-[var(--gray-600)] transition-colors hover:text-[var(--primary-green)]"
                    >
                      +225 07 87 04 96 37
                    </a>
                  </div>
                </div>
              </Card>

              <Card>
                <div className="flex items-start space-x-4">
                  <div className="rounded-full bg-[var(--green-50)] p-3">
                    <MapPin className="h-6 w-6 text-[var(--primary-green)]" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-[var(--gray-900)]">
                      Adresse
                    </h3>
                    <p className="text-[var(--gray-600)]">
                      Abidjan, Côte d'Ivoire
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </AnimatedSection>

          {/* Contact Form */}
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

                <Input
                  label="Téléphone (optionnel)"
                  type="tel"
                  {...register("phone")}
                  error={errors.phone?.message}
                  placeholder="+225 00 00 00 00 00"
                />

                <Input
                  label="Sujet"
                  {...register("subject")}
                  error={errors.subject?.message}
                  placeholder="Sujet de votre message"
                />

                <Textarea
                  label="Message"
                  {...register("message")}
                  error={errors.message?.message}
                  placeholder="Votre message..."
                  rows={6}
                />

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  isLoading={isSubmitting}
                  className="w-full md:w-auto"
                >
                  Envoyer le message
                </Button>
              </form>
            </Card>
          </AnimatedSection>
        </div>
      </Container>
    </div>
  );
}

