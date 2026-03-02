import React from "react";
import { motion } from "motion/react";
import {
  FileCheck, ShieldCheck, Zap, Lock, BarChart3, Recycle,
} from "lucide-react";

const features = [
  {
    icon: <FileCheck size={26} />,
    title: "Automated Documentation",
    description: "Generate, manage, and archive critical property documents in seconds — no paperwork, no delays.",
    color: "#2CCB6F",
    bg: "rgba(44,203,111,0.07)",
    border: "rgba(44,203,111,0.18)",
    delay: 0,
  },
  {
    icon: <ShieldCheck size={26} />,
    title: "Secure Onboarding",
    description: "Verify tenants and buyers through a trusted, end-to-end digital process built for compliance.",
    color: "#1A47A9",
    bg: "rgba(26,71,169,0.07)",
    border: "rgba(26,71,169,0.18)",
    delay: 0.1,
  },
  {
    icon: <Zap size={26} />,
    title: "Instant Compliance",
    description: "Stay ahead of Malaysian property regulations with automated checks and real-time guidance.",
    color: "#23A259",
    bg: "rgba(35,162,89,0.07)",
    border: "rgba(35,162,89,0.18)",
    delay: 0.2,
  },
  {
    icon: <Lock size={26} />,
    title: "Privacy by Design",
    description: "PDPA-compliant data handling ensures your clients' information is always protected and secure.",
    color: "#2CCB6F",
    bg: "rgba(44,203,111,0.07)",
    border: "rgba(44,203,111,0.18)",
    delay: 0.3,
  },
  {
    icon: <BarChart3 size={26} />,
    title: "Portfolio Intelligence",
    description: "Track performance, pipeline health, and key metrics across your entire property portfolio.",
    color: "#1A47A9",
    bg: "rgba(26,71,169,0.07)",
    border: "rgba(26,71,169,0.18)",
    delay: 0.4,
  },
  {
    icon: <Recycle size={26} />,
    title: "Driving ESG Impact",
    description: "Eliminate paper waste and travel emissions. 100% digital workflow that respects your time and environment.",
    color: "#23A259",
    bg: "rgba(35,162,89,0.07)",
    border: "rgba(35,162,89,0.18)",
    delay: 0.5,
  },
];

export default function FeaturesSection() {
  return (
    <section
      id="features"
      style={{
        position: "relative",
        zIndex: 2,
        padding: "40px 24px",
        background: "var(--bg-surface)",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: "center", marginBottom: 44 }}
        >
          <h2
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
              fontWeight: 800,
              lineHeight: 1.2,
              marginBottom: 14,
              color: "var(--text-primary)",
              letterSpacing: "-0.025em",
            }}
          >
            Built for the Way{" "}
            <span className="gradient-text">Professionals Work</span>
          </h2>
          <p style={{ fontSize: 16, color: "var(--text-secondary)", maxWidth: 540, margin: "0 auto", lineHeight: 1.7 }}>
            Zurely brings together every tool a modern real estate professional
            needs — intelligently designed, securely delivered.
          </p>
        </motion.div>

        {/* Feature Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 24,
          }}
        >
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: feature.delay }}
              whileHover={{ scale: 1.02, y: -4 }}
              style={{
                borderRadius: 20,
                padding: 28,
                background: "var(--card-bg)",
                border: "1px solid var(--border)",
                boxShadow: "var(--shadow-sm)",
                cursor: "default",
                transition: "box-shadow 0.3s",
              }}
            >
              {/* Icon */}
              <div
                style={{
                  width: 54,
                  height: 54,
                  borderRadius: 14,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 20,
                  background: feature.bg,
                  color: feature.color,
                  border: `1px solid ${feature.border}`,
                }}
              >
                {feature.icon}
              </div>

              {/* Title */}
              <h3 style={{ fontSize: 17, fontWeight: 700, color: "var(--text-primary)", marginBottom: 8 }}>
                {feature.title}
              </h3>

              {/* Description */}
              <p style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.7 }}>
                {feature.description}
              </p>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
