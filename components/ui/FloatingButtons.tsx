"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export default function FloatingButtons() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const openWhatsApp = () => {
    // Numéro WhatsApp (à adapter selon vos besoins)
    const phoneNumber = "2250000000000"; // Format international sans +
    const message = encodeURIComponent(
      "Bonjour, je souhaite en savoir plus sur Soutrali Deals"
    );
    window.open(
      `https://wa.me/${phoneNumber}?text=${message}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 md:bottom-8 md:right-8">
      {/* WhatsApp Button */}
      <button
        onClick={openWhatsApp}
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
        aria-label="Contacter sur WhatsApp"
      >
        <MessageCircle className="h-7 w-7" />
        <span className="absolute -top-1 -right-1 flex h-3 w-3 items-center justify-center">
          <span className="absolute h-3 w-3 animate-ping rounded-full bg-red-500 opacity-75"></span>
          <span className="relative h-2 w-2 rounded-full bg-red-500"></span>
        </span>
      </button>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={cn(
          "flex h-12 w-12 items-center justify-center rounded-full bg-[var(--primary-green)] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-[var(--green-600)] hover:shadow-xl",
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        )}
        aria-label="Retour en haut"
      >
        <ArrowUp className="h-6 w-6" />
      </button>
    </div>
  );
}

