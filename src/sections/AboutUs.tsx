"use client"

import React from "react"
import { motion } from "framer-motion"
import Button from "../components/Button"

interface AboutUsSectionProps {
  image: string
  title?: string
  description?: string
}

export default function AboutUsSection({
  image,
  title = "About Us",
  description = "",
}: AboutUsSectionProps) {
  return (
    <section
      id="about"
      className="relative h-screen bg-background snap-start flex items-center px-6"
    >
      <div className="max-w-6xl w-full mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Image */}
        <motion.img
          src={image}
          alt="About us"
          className="w-full h-[350px] md:h-[420px] object-cover rounded-2xl shadow-lg"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        />

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            {title}
          </h2>

          <p className="text-muted-foreground leading-relaxed mb-8">
            {description}
          </p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
