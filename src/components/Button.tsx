"use client";

import React, { forwardRef, ButtonHTMLAttributes } from "react";

function cn(...classes: (string | undefined | false | null)[]) {
  return classes.filter(Boolean).join(" ");
}

type Variant =
  | "solid"
  | "outline"
  | "ghost"
  | "link"
  | "destructive"
  | "shimmer";

type Size = "xs" | "sm" | "md" | "lg" | "icon";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  loading?: boolean;
  fullWidth?: boolean;
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-2xl font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/40 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]";

const variants: Record<Variant, string> = {
  solid: "bg-primary text-primary-foreground hover:opacity-90 shadow-sm",

  outline: "border border-primary text-primary hover:bg-primary/10",

  ghost: "text-primary hover:bg-primary/10",

  link: "text-primary underline-offset-4 hover:underline bg-transparent shadow-none",

  destructive: "bg-red-500 text-white hover:bg-red-600 shadow-sm",

  shimmer:
    "relative overflow-hidden bg-gray-200 dark:bg-gray-700 text-transparent pointer-events-none before:absolute before:inset-0 before:-translate-x-full before:animate-shimmer before:bg-gradient-to-r before:from-transparent before:via-white/40 before:to-transparent rounded-2xl",
};

const sizes: Record<Size, string> = {
  xs: "h-7 px-2 text-xs",
  sm: "h-9 px-3 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-13 px-7 text-base",
  icon: "h-11 w-11 p-0",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "solid",
      size = "md",
      leftIcon,
      rightIcon,
      loading = false,
      fullWidth = false,
      className,
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={cn(
          base,
          variants[variant],
          sizes[size],
          fullWidth && "w-full",
          className
        )}
        {...props}
      >
        {loading && (
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
        )}

        {!loading && leftIcon && <span>{leftIcon}</span>}

        {size !== "icon" && children}

        {!loading && rightIcon && <span>{rightIcon}</span>}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
