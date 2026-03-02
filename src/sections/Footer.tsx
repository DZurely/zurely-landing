import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Mail } from "lucide-react";

interface FooterProps {
  onJoin?: () => void;
}

export default function Footer({ onJoin }: FooterProps) {
  const currentYear = "2025 – 2026";

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "What's Coming", href: "/#features" },
    { label: "Contact Us", href: "mailto:support@zurely.my" },
  ];

  const legalLinks = [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-of-service" },
  ];

  const linkStyle: React.CSSProperties = {
    display: "block",
    fontSize: 14,
    color: "var(--text-secondary)",
    textDecoration: "none",
    transition: "color 0.2s",
    marginBottom: 10,
  };

  return (
    <footer
      id="footer"
      style={{
        position: "relative",
        zIndex: 2,
        padding: "0 24px 48px",
        background: "var(--bg-page)",
      }}
    >
      {/* Top separator */}
      <div className="separator" style={{ marginBottom: 40 }} />

      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Main grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 32,
            marginBottom: 40,
          }}
        >
          {/* Brand column */}
          <div style={{ maxWidth: 400 }}>
            <Link
              to="/"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                textDecoration: "none",
              }}
            >
              <img
                src="/zurely-w-text-transparent.png"
                alt="Zurely"
                style={{ height: "60px" }}
              />
            </Link>

            {/* Legal description — SSM compliant */}
            <p
              style={{
                fontSize: 14,
                color: "var(--text-secondary)",
                lineHeight: 1.75,
                marginBottom: 24,
              }}
            >
              Zurely is a digital PropTech platform owned and operated by{" "}
              <strong style={{ color: "var(--text-primary)" }}>
                Double D Sdn Bhd 202501060615 (1662021-V)
              </strong>
              .
              <br />
              <span style={{ marginTop: 6, display: "inline-block" }}>
                Focused on digital transformation and compliance automation for
                the Malaysian property market.
              </span>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              style={{
                fontSize: 11,
                fontWeight: 700,
                color: "var(--text-muted)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: 20,
              }}
            >
              Navigation
            </h4>
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={
                  link.href.startsWith("/#")
                    ? { pathname: "/", hash: link.href.substring(2) }
                    : link.href
                }
                style={linkStyle}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color = "#2CCB6F")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color = "var(--text-secondary)")
                }
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Legal */}
          <div>
            <h4
              style={{
                fontSize: 11,
                fontWeight: 700,
                color: "var(--text-muted)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: 20,
              }}
            >
              Legal & Privacy
            </h4>
            {legalLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                style={linkStyle}
                onMouseEnter={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color =
                  "#2CCB6F")
                }
                onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color =
                  "var(--text-secondary)")
                }
              >
                {link.label}
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Bottom bar */}
        <div className="separator" style={{ marginBottom: 24 }} />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 12,
            }}
          >
            <p style={{ fontSize: 12, color: "var(--text-muted)" }}>
              © {currentYear}{" "}
              <span style={{ color: "var(--text-primary)", fontWeight: 600 }}>Zurely</span>.
              All rights reserved.
            </p>
            <p style={{ fontSize: 12, color: "var(--text-muted)" }}>
              Double D Sdn Bhd &nbsp;|&nbsp; 202501060615 (1662021-V)
              &nbsp;|&nbsp; Malaysia
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
