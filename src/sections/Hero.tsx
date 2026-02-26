import React from "react";
import { motion } from "motion/react";
import { ArrowDown, Star } from "lucide-react";
import { useModal } from "../context/ModalContext";

export default function HeroSection() {
  const { openModal } = useModal();
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
      {/* Hero content */}
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "120px 24px 30px",
        }}
      >
        <div style={{ maxWidth: 860, width: "100%", textAlign: "center" }}>

          {/* Zurely brand wordmark — the star of the show */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            style={{ marginBottom: 8 }}
          >
            <img
              src="/zurely-w-text-transparent.png"
              alt="Zurely"
              style={{
                height: "clamp(72px, 12vw, 120px)",
                display: "inline-block",
                filter: "drop-shadow(0 4px 24px rgba(0,197,99,0.18))",
              }}
            />
          </motion.div>

          {/* Beta badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{ display: "flex", justifyContent: "center", marginBottom: 20 }}
          >
            <div className="badge">
              <span className="dot-pulse" />
              Coming Soon — Limited Seat Available
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{
              fontSize: "clamp(1.9rem, 4.8vw, 4rem)",
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: "-0.025em",
              marginBottom: 16,
              color: "#0d1117",
            }}
          >
            The All-in-One Digital Workspace
            <br />
            <span className="gradient-text">
              for the Modern Real Estate Professional.
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            style={{
              fontSize: "clamp(1rem, 1.8vw, 1.15rem)",
              maxWidth: 640,
              margin: "0 auto 32px",
              lineHeight: 1.75,
              color: "#4b5563",
            }}
          >
            Modernising compliance and documentation for the Malaysian property
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
            {/* PRIMARY CTA */}
            <button
              onClick={openModal}
              className="btn-shimmer pulse-glow"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "16px 36px",
                borderRadius: 16,
                fontWeight: 700,
                fontSize: 16,
                color: "#ffffff",
                background: "linear-gradient(135deg, #00c563 0%, #0987e9 100%)",
                border: "none",
                cursor: "pointer",
                transition: "transform 0.2s, opacity 0.2s",
                fontFamily: "inherit",
                letterSpacing: "0.01em",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.transform = "scale(1.04)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.transform = "scale(1)")}
            >
              Join the Waitlist — It's Free !
            </button>

            {/* Secondary CTA */}
            <a
              href="#features"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "15px 32px",
                borderRadius: 16,
                fontWeight: 600,
                fontSize: 16,
                color: "#4b5563",
                background: "rgba(0,0,0,0.04)",
                border: "1.5px solid rgba(0,0,0,0.1)",
                textDecoration: "none",
                transition: "transform 0.2s, border-color 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1.03)";
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(0,197,99,0.4)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1)";
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(0,0,0,0.1)";
              }}
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
              marginTop: 48,
            }}
          >
            {[
              { value: "PDPA", label: "Legal & Regulatory Ready" },
              { value: "100%", label: "Built for Malaysia" },
            ].map((stat, i) => (
              <div key={i} style={{ textAlign: "center" }}>
                <div
                  style={{
                    fontSize: 22,
                    fontWeight: 800,
                    color: "#00c563",
                    marginBottom: 4,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {stat.value}
                </div>
                <div style={{ fontSize: 12, color: "#9ca3af", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                  {stat.label}
                </div>
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
        style={{ display: "flex", justifyContent: "center", paddingBottom: 36 }}
      >
        <motion.a
          href="#features"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          style={{
            color: "#9ca3af",
            textDecoration: "none",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 4,
            fontSize: 11,
            fontWeight: 500,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          <ArrowDown size={20} />
        </motion.a>
      </motion.div>
    </section>
  );
}
