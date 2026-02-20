"use client"

import React from "react"

function cn(...classes: (string | undefined | false)[]) {
  return classes.filter(Boolean).join(" ")
}

type Variant = "default" | "outline" | "ghost" | "colored"

interface CardProps {
  children: React.ReactNode
  className?: string
  variant?: Variant
  bgImage?: string
}

const variants: Record<Variant, string> = {
  default: "bg-white shadow-md",
  outline: "border border-primary bg-white",
  ghost: "bg-transparent",
  colored: "bg-primary text-primary-foreground shadow-md",
}

function Card({
  children,
  className,
  variant = "default",
  bgImage,
}: CardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl",
        variants[variant],
        className
      )}
      style={
        bgImage
          ? {
              backgroundImage: `url(${bgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : undefined
      }
    >
      {/* optional dark overlay when bg image */}
      {bgImage && <div className="absolute inset-0 bg-black/40" />}

      <div className={cn("relative z-10")}>{children}</div>
    </div>
  )
}


Card.Header = function CardHeader({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={cn("p-5 font-semibold", className)}>
      {children}
    </div>
  )
}

Card.Body = function CardBody({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return <div className={cn("p-5", className)}>{children}</div>
}

Card.Footer = function CardFooter({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={cn("p-5", className)}>
      {children}
    </div>
  )
}

Card.Image = function CardImage({
  src,
  className,
}: {
  src: string
  className?: string
}) {
  return (
    <img
      src={src}
      className={cn("w-full h-48 object-cover", className)}
      alt=""
    />
  )
}

export default Card
