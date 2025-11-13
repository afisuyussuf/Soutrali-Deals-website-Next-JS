"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      isLoading = false,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary-green)] focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none";

    const variants = {
      primary:
        "bg-[var(--primary-green)] text-white shadow-md hover:bg-[var(--green-600)] hover:shadow-lg active:scale-[0.98]",
      secondary:
        "bg-[var(--green-600)] text-white shadow-md hover:bg-[var(--green-700)] hover:shadow-lg active:scale-[0.98]",
      outline:
        "border-2 border-[var(--primary-green)] bg-transparent text-[var(--primary-green)] hover:bg-[var(--green-50)] hover:border-[var(--green-600)] active:scale-[0.98]",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm h-9",
      md: "px-6 py-3 text-base h-11",
      lg: "px-8 py-4 text-lg h-14",
    };

    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          isLoading && "cursor-wait",
          className
        )}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Chargement...
          </>
        ) : (
          children
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;

