"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { Card } from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { faqData } from "@/lib/constants";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<Record<string, number | null>>({
    Acheteurs: null,
    Vendeurs: null,
    Paiements: null,
    Livraison: null,
  });

  const toggleItem = (category: string, index: number) => {
    setOpenItems((prev) => ({
      ...prev,
      [category]: prev[category] === index ? null : index,
    }));
  };

  return (
    <div className="pt-24 pb-24 md:pt-32 md:pb-32 lg:pt-40 lg:pb-40">
      <Container>
        {/* Hero */}
        <AnimatedSection className="mb-16 md:mb-20 text-center">
          <h1 className="mb-4 text-4xl font-bold text-[var(--gray-900)] md:text-5xl lg:text-6xl">
            Questions fréquentes
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-[var(--gray-600)] md:text-xl">
            Trouvez rapidement les réponses à vos questions
          </p>
        </AnimatedSection>

        {/* FAQ Sections */}
        <div className="space-y-12 md:space-y-16">
          {faqData.map((category, categoryIndex) => (
            <AnimatedSection key={category.category} delay={categoryIndex * 0.1}>
              <div>
                <h2 className="mb-6 text-2xl font-bold text-[var(--gray-900)]">
                  {category.category}
                </h2>
                <div className="space-y-4">
                  {category.questions.map((item, itemIndex) => {
                    const isOpen =
                      openItems[category.category] === itemIndex;
                    return (
                      <Card
                        key={itemIndex}
                        className="overflow-hidden transition-all"
                      >
                        <button
                          onClick={() => toggleItem(category.category, itemIndex)}
                          className="flex w-full items-center justify-between p-4 text-left transition-colors hover:bg-[var(--gray-50)]"
                        >
                          <span className="font-semibold text-[var(--gray-900)] pr-4">
                            {item.question}
                          </span>
                          <ChevronDown
                            className={cn(
                              "h-5 w-5 flex-shrink-0 text-[var(--gray-600)] transition-transform",
                              isOpen && "rotate-180"
                            )}
                          />
                        </button>
                        {isOpen && (
                          <div className="px-4 pb-4">
                            <p className="text-[var(--gray-700)]">
                              {item.answer}
                            </p>
                          </div>
                        )}
                      </Card>
                    );
                  })}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA */}
        <AnimatedSection className="mt-16 md:mt-20">
          <Card className="bg-gradient-to-br from-[var(--green-50)] to-[var(--blue-50)] p-8 text-center">
            <h3 className="mb-4 text-2xl font-bold text-[var(--gray-900)]">
              Vous avez d'autres questions ?
            </h3>
            <p className="mb-6 text-[var(--gray-700)]">
              N'hésitez pas à nous contacter, nous serons ravis de vous aider.
            </p>
            <a href="/contact">
              <Button variant="primary" size="lg">
                Nous contacter
              </Button>
            </a>
          </Card>
        </AnimatedSection>
      </Container>
    </div>
  );
}

