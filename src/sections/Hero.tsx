import React from "react";
import { motion } from "motion/react";
import Navbar from "../components/Navbar";
import { ArrowDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="home"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        zIndex: 2,
      }}
    >
      {/* Navbar */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <Navbar links={[{ label: "Join the Waitlist", href: "#waitlist" }]} />
      </motion.div>

      {/* Hero content */}
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "80px 24px",
        }}
      >
        <div style={{ maxWidth: 900, width: "100%", textAlign: "center" }}>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ display: "flex", justifyContent: "center", marginBottom: 32 }}
          >
            <div className="badge">
              <span className="dot-pulse" />
              Coming Soon — Limited Beta Access
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{
              fontSize: "clamp(2rem, 5vw, 4.5rem)",
              fontWeight: 700,
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              marginBottom: 24,
              color: "#f0f4ff",
            }}
          >
            The All-in-One Digital Workspace
            <br />
            <span className="gradient-text text-glow">
              for the Modern Real Estate Professional.
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            style={{
              fontSize: "clamp(1rem, 2vw, 1.2rem)",
              maxWidth: 680,
              margin: "0 auto 48px",
              lineHeight: 1.7,
              color: "#7a8599",
            }}
          >
            Modernizing compliance and documentation for the Malaysian property
            ecosystem. Designed by industry veterans, for the next generation of
            agents.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 16,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <a
              href="#waitlist"
              className="btn-shimmer pulse-glow"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "14px 32px",
                borderRadius: 16,
                fontWeight: 600,
                fontSize: 16,
                color: "#000",
                background: "linear-gradient(135deg, #00db70 0%, #00ffa3 100%)",
                textDecoration: "none",
                transition: "transform 0.2s, opacity 0.2s",
              }}
              onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.04)")}
              onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
            >
              Register for Beta Access
            </a>
            <a
              href="#features"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "14px 32px",
                borderRadius: 16,
                fontWeight: 600,
                fontSize: 16,
                color: "#f0f4ff",
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
                textDecoration: "none",
                transition: "transform 0.2s",
              }}
              onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.04)")}
              onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
            >
              See What's Coming
            </a>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 48,
              marginTop: 64,
            }}
          >
            {[
              // { label: "Industry Veterans", value: "10+ Years" },
              { label: "Properties Managed", value: "Beta Ready" },
              { label: "Compliance First", value: "PDPA Compliant" },
            ].map((stat, i) => (
              <div key={i} style={{ textAlign: "center" }}>
                <div style={{ fontSize: 24, fontWeight: 700, color: "#00db70", marginBottom: 4 }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: 13, color: "#7a8599" }}>{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        style={{ display: "flex", justifyContent: "center", paddingBottom: 32 }}
      >
        <motion.a
          href="#features"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          style={{ color: "#7a8599", textDecoration: "none" }}
        >
          <ArrowDown size={22} />
        </motion.a>
      </motion.div>
    </section>
  );
}
