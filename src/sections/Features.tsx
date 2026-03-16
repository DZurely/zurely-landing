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
      className="relative z-[2] py-10 px-6 bg-[color:var(--bg-surface)]"
    >
      <div className="max-w-[1100px] mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-9"
        >
          <h2
            className="text-[clamp(1.8rem,4vw,2.5rem)] font-extrabold leading-[1.2] mb-3.5 text-[color:var(--text-primary)] tracking-[tight]"
          >
            Empowering the{" "}
            <span className="bg-gradient-to-br from-[#2CCB6F] to-[#1A47A9] bg-clip-text text-transparent">Professional Real Estate</span>
            {" "}Workflow
          </h2>
          <p className="text-base text-[color:var(--text-secondary)] max-w-[580px] mx-auto leading-[1.7]">
            Zurely brings together every tool a modern real estate professional needs — built for speed,
            backed by bank-grade security.
          </p>
        </motion.div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: feature.delay }}
              whileHover={{ scale: 1.02, y: -4 }}
              className="rounded-[20px] p-7 bg-[color:var(--card-bg)] border border-[color:var(--border)] shadow-[var(--shadow-sm)] cursor-default transition-shadow duration-300"
            >
              <div
                className="w-12 h-12 rounded-[14px] flex items-center justify-center mb-5"
                style={{
                  background: feature.bg,
                  color: feature.color,
                  border: `1px solid ${feature.border}`,
                }}
              >
                {feature.icon}
              </div>

              <h3 className="text-[17px] font-bold text-[color:var(--text-primary)] mb-2">
                {feature.title}
              </h3>

              <p className="text-[14px] text-[color:var(--text-secondary)] leading-[1.7]">
                {feature.description}
              </p>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
