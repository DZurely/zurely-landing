import React from "react";
import { motion } from "motion/react";
import {
  FileCheck, ShieldCheck, Zap, Lock, BarChart3, Recycle,
} from "lucide-react";

const features = [
  {
    icon: <FileCheck size={24} />,
    title: "Automated Documentation",
    description: "Generate and manage legally-binding property documents in seconds. Every document is tamper-proof, archived, and fully verifiable.",
    color: "#2CCB6F",
    bg: "rgba(44,203,111,0.07)",
    border: "rgba(44,203,111,0.18)",
    delay: 0,
  },
  {
    icon: <ShieldCheck size={24} />,
    title: "Secure Onboarding",
    description: "Verify tenants and landlords with confidence. Our integrated e-KYC and face-liveness checks ensure identity assurance for every tenancy agreement.",
    color: "#1A47A9",
    bg: "rgba(26,71,169,0.07)",
    border: "rgba(26,71,169,0.18)",
    delay: 0.1,
  },
  {
    icon: <Zap size={24} />,
    title: "Instant Compliance",
    description: "Stay ahead of regulatory shifts effortlessly. Our platform provides near real- time adherence to national property standards, so you can focus on your clients while we handle the fine print.",
    color: "#23A259",
    bg: "rgba(35,162,89,0.07)",
    border: "rgba(35,162,89,0.18)",
    delay: 0.2,
  },
  {
    icon: <Lock size={24} />,
    title: "Privacy by Design",
    description: "Bank-grade security for your data. Every interaction is secured by encrypted audit logs and is fully compliant with PDPA and national digital standards.",
    color: "#2CCB6F",
    bg: "rgba(44,203,111,0.07)",
    border: "rgba(44,203,111,0.18)",
    delay: 0.3,
  },
  {
    icon: <BarChart3 size={24} />,
    title: "Immutable Audit Trail",
    description: "Every transaction and document is backed by a tamper-proof audit trail. Zurely provides a verifiable chain of custody from the moment a tenant is verified to the final stamped agreement.",
    color: "#1A47A9",
    bg: "rgba(26,71,169,0.07)",
    border: "rgba(26,71,169,0.18)",
    delay: 0.4,
  },
  {
    icon: <Recycle size={24} />,
    title: "Seamless Integration",
    description: "End-to-end deal management. From the first e-KYC check to the final digital archive, Zurely handles the heavy lifting so you can focus on closing your next tenancy.",
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

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: "center", marginBottom: 36 }}
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
            Empowering the{" "}
            <span className="gradient-text">Professional Real Estate</span>
            {" "}Workflow
          </h2>
          <p style={{ fontSize: 16, color: "var(--text-secondary)", maxWidth: 580, margin: "0 auto", lineHeight: 1.7 }}>
            Zurely brings together every tool a modern real estate professional needs — built for speed,
            backed by bank-grade security.
          </p>
        </motion.div>

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
              <div
                style={{
                  width: 48,
                  height: 48,
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

              <h3 style={{ fontSize: 17, fontWeight: 700, color: "var(--text-primary)", marginBottom: 8 }}>
                {feature.title}
              </h3>

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
