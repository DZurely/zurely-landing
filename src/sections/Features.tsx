import React from "react";
import { motion } from "motion/react";
import {
  FileCheck, ShieldCheck, Zap, ListCheck, BarChart3, Recycle,
} from "lucide-react";

const features = [
  {
    icon: <FileCheck size={26} />,
    title: "Automated Documentation",
    description: "Generate, manage, and archive critical property documents in seconds — no paperwork, no delays.",
    color: "#00c563",
    bg: "rgba(0,197,99,0.07)",
    border: "rgba(0,197,99,0.18)",
    delay: 0,
  },
  {
    icon: <ShieldCheck size={26} />,
    title: "Secure Onboarding",
    description: "Verify tenants and buyers through a trusted, end-to-end digital process built for compliance.",
    color: "#0987e9",
    bg: "rgba(9,135,233,0.07)",
    border: "rgba(9,135,233,0.18)",
    delay: 0.1,
  },
  {
    icon: <Zap size={26} />,
    title: "Instant Compliance",
    description: "Stay ahead of Malaysian property regulations with automated checks and real-time guidance.",
    color: "#009e4f",
    bg: "rgba(0,158,79,0.07)",
    border: "rgba(0,158,79,0.18)",
    delay: 0.2,
  },
  {
    icon: <ListCheck size={26} />,
    title: "Proactive Tracking",
    description: "Get automated notifications for renewals and rent reviews — never miss a deadline again.",
    color: "#00c563",
    bg: "rgba(0,197,99,0.07)",
    border: "rgba(0,197,99,0.18)",
    delay: 0.3,
  },
  {
    icon: <BarChart3 size={26} />,
    title: "Portfolio Intelligence",
    description: "Track performance, pipeline health, and key metrics across your entire property portfolio.",
    color: "#0987e9",
    bg: "rgba(9,135,233,0.07)",
    border: "rgba(9,135,233,0.18)",
    delay: 0.4,
  },
  {
    icon: <Recycle size={26} />,
    title: "Carbon-Neutral Processing",
    description: "Eliminate paper waste and travel emissions. 100% digital workflow that respects your time and environment.",
    color: "#009e4f",
    bg: "rgba(0,158,79,0.07)",
    border: "rgba(0,158,79,0.18)",
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
        padding: "70px 24px",
        background: "#f9fafb",
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
          <div className="badge" style={{ margin: "0 auto 12px" }}>
            A Glimpse of What's Ahead
          </div>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: 800,
              lineHeight: 1.2,
              marginBottom: 14,
              color: "#0d1117",
              letterSpacing: "-0.025em",
            }}
          >
            Built for the Way{" "}
            <span className="gradient-text">Professionals Work</span>
          </h2>
          <p style={{ fontSize: 17, color: "#4b5563", maxWidth: 540, margin: "0 auto", lineHeight: 1.7 }}>
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
                background: "#ffffff",
                border: "1px solid rgba(0,0,0,0.07)",
                boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
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
              <h3 style={{ fontSize: 17, fontWeight: 700, color: "#0d1117", marginBottom: 8 }}>
                {feature.title}
              </h3>

              {/* Description */}
              <p style={{ fontSize: 14, color: "#4b5563", lineHeight: 1.7 }}>
                {feature.description}
              </p>

              {/* Coming soon tag */}
              <div
                style={{
                  marginTop: 18,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  fontSize: 12,
                  fontWeight: 600,
                  color: feature.color,
                  background: feature.bg,
                  padding: "4px 10px",
                  borderRadius: 100,
                  border: `1px solid ${feature.border}`,
                }}
              >
                <div
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: feature.color,
                  }}
                />
                Coming soon
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
