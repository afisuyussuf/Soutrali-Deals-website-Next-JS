"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/constants";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white shadow-sm",
        isScrolled && "shadow-md"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/images/logo menu.jpg"
              alt="Soutrali Deals Logo"
              width={150}
              height={50}
              className="h-12 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-[var(--primary-green)]",
                  pathname === link.href
                    ? "text-[var(--primary-green)]"
                    : "text-[var(--green-700)]"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex md:items-center md:space-x-3">
            <Link href="/login">
              <Button 
                variant="outline" 
                size="sm"
                className="border-[var(--primary-green)] text-[var(--green-700)] hover:bg-[var(--green-50)]"
              >
                Se connecter
              </Button>
            </Link>
            <Link href="/register">
              <Button 
                variant="outline" 
                size="sm"
                className="border-[var(--primary-green)] text-[var(--green-700)] hover:bg-[var(--green-50)]"
              >
                S'inscrire
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-[var(--green-700)]" />
            ) : (
              <Menu className="h-6 w-6 text-[var(--green-700)]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-1 border-t border-[var(--gray-200)] bg-white px-4 pb-4 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "block rounded-lg px-3 py-2 text-base font-medium transition-colors",
                  pathname === link.href
                    ? "bg-[var(--green-50)] text-[var(--primary-green)]"
                    : "text-[var(--green-700)] hover:bg-[var(--gray-50)]"
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-4 space-y-2">
              <Link href="/login" onClick={() => setIsMobileMenuOpen(false)}>
                <Button variant="outline" size="sm" className="w-full border-[var(--primary-green)] text-[var(--green-700)]">
                  Se connecter
                </Button>
              </Link>
              <Link href="/register" onClick={() => setIsMobileMenuOpen(false)}>
                <Button variant="primary" size="sm" className="w-full">
                  S'inscrire
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

