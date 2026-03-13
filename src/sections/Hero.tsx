import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";
import { useModal } from "../context/ModalContext";

export default function HeroSection() {
  const { openModal } = useModal();

  return (
    <section
      id="home"
      style={{
        position: "relative",
        minHeight: "fit-content",
        display: "flex",
        flexDirection: "column",
        zIndex: 2,
      }}
    >
      <div className="hero-content-wrap">
        <div style={{ maxWidth: 860, width: "100%", textAlign: "center" }}>
          {/* <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            style={{ marginBottom: 5 }}
          >
            <img
              src="/zurely-w-text-transparent.png"
              alt="Zurely"  
              style={{
                height: "clamp(132px, 12vw, 168px)",
                display: "inline-block",
                filter: "drop-shadow(0 4px 24px rgba(44,203,111,0.18))",
              }}
            />
          </motion.div> */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: 30,
            }}
          >
            <div className="badge">
              <span className="dot-pulse" />
              Coming Soon...
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{
              fontSize: "clamp(2.8rem, 4.8vw, 4rem)",
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: "-0.025em",
              marginBottom: 16,
              color: "var(--text-primary)",
            }}
          >
            The All-in-One Digital Workspace
            <br />
            <span className="gradient-text">
              for the Modern Real Estate Professional
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            style={{
              fontSize: "clamp(1.1rem, 1.8vw, 1.4rem)",
              maxWidth: 640,
              margin: "0 auto 10px",
              lineHeight: 1.75,
              color: "var(--text-secondary)",
            }}
          >
            Modernising compliance and documentation for the Malaysian property
            ecosystem. Designed by industry veterans for the next generation of
            agents.
          </motion.p>


        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        style={{ display: "flex", justifyContent: "center", paddingBottom: 20 }}
      >
        <motion.a
          href="#features"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          style={{
            color: "var(--text-muted)",
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
