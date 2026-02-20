import React from "react";
import { motion } from "motion/react";
import {
  FileCheck, ShieldCheck, Zap, Users, BarChart3, Lock,
} from "lucide-react";

const features = [
  {
    icon: <FileCheck size={26} />,
    title: "Automated Documentation",
    description: "Generate, manage, and archive critical property documents in seconds — no paperwork, no delays.",
    color: "#00db70",
    delay: 0,
  },
  {
    icon: <ShieldCheck size={26} />,
    title: "Secure Onboarding",
    description: "Verify tenants and buyers through a trusted, end-to-end digital process built for compliance.",
    color: "#0987e9",
    delay: 0.1,
  },
  {
    icon: <Zap size={26} />,
    title: "Instant Compliance",
    description: "Stay ahead of Malaysian property regulations with automated checks and real-time guidance.",
    color: "#00ffa3",
    delay: 0.2,
  },
  {
    icon: <Users size={26} />,
    title: "Agent Collaboration",
    description: "Seamlessly manage your team, clients, and deals from a unified, role-based workspace.",
    color: "#00db70",
    delay: 0.3,
  },
  {
    icon: <BarChart3 size={26} />,
    title: "Portfolio Intelligence",
    description: "Track performance, pipeline health, and key metrics across your entire property portfolio.",
    color: "#0987e9",
    delay: 0.4,
  },
  {
    icon: <Lock size={26} />,
    title: "Privacy by Design",
    description: "PDPA-compliant data handling ensures your clients' information is always protected and secure.",
    color: "#00ffa3",
    delay: 0.5,
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" style={{ position: "relative", zIndex: 2, padding: "112px 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: "center", marginBottom: 64 }}
        >
          <div className="badge" style={{ margin: "0 auto 16px" }}>
            A Glimpse of What's Ahead
          </div>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
              fontWeight: 700,
              lineHeight: 1.2,
              marginBottom: 20,
              color: "#f0f4ff",
            }}
          >
            Built for the Way{" "}
            <span className="gradient-text">Professionals Work</span>
          </h2>
          <p style={{ fontSize: 18, color: "#7a8599", maxWidth: 560, margin: "0 auto" }}>
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
              className="glass"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: feature.delay }}
              style={{
                borderRadius: 20,
                padding: 28,
                cursor: "default",
                transition: "transform 0.3s",
              }}
              whileHover={{ scale: 1.02 }}
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
                  background: `${feature.color}18`,
                  color: feature.color,
                  border: `1px solid ${feature.color}30`,
                }}
              >
                {feature.icon}
              </div>

              {/* Title */}
              <h3 style={{ fontSize: 17, fontWeight: 600, color: "#f0f4ff", marginBottom: 8 }}>
                {feature.title}
              </h3>

              {/* Description */}
              <p style={{ fontSize: 14, color: "#7a8599", lineHeight: 1.65 }}>
                {feature.description}
              </p>

              {/* Coming soon tag */}
              <div
                style={{
                  marginTop: 16,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  fontSize: 12,
                  fontWeight: 500,
                  color: feature.color + "99",
                }}
              >
                <div
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: feature.color + "99",
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
