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
    { label: "Features", href: "/#features" },
    { label: "Contact Us", href: "mailto:support@zurely.my", isExternal: true },
  ];

  const legalLinks = [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-of-service" },
    { label: "Cookie Policy", href: "/cookie-policy" },
    { label: "Refund Policy", href: "/refund-policy" },
  ];

  const socials = [
    {
      icon: <Mail size={16} />,
      href: "mailto:support@zurely.my",
      label: "Email",
    },
  ];

  const linkStyle: React.CSSProperties = {
    display: "block",
    fontSize: 14,
    color: "#6b7280",
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
        background: "#ffffff",
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
                src="/Zurely icon - transparent.png"
                alt="Zurely"
                style={{ height: "48px" }}
              />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span
                  style={{
                    fontSize: "1.3rem",
                    fontWeight: "600",
                    color: "#1548AA",
                    lineHeight: 1,
                    letterSpacing: "0",
                  }}
                >
                  Zurely
                </span>
              </div>
            </Link>

            {/* Legal description — SSM compliant */}
            <p
              style={{
                fontSize: 14,
                color: "#6b7280",
                lineHeight: 1.75,
                marginBottom: 24,
              }}
            >
              Zurely is a digital PropTech platform owned and operated by{" "}
              <strong style={{ color: "#374151" }}>
                Double D Sdn Bhd 202501060615 (1662021-V)
              </strong>
              .
              <br />
              <span style={{ marginTop: 6, display: "inline-block" }}>
                Focused on digital transformation and compliance automation for
                the Malaysian property market.
              </span>
            </p>

            {/* Social icons */}
            <div style={{ display: "flex", gap: 10 }}>
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  rel="noopener noreferrer"
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: 10,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "rgba(0,0,0,0.05)",
                    border: "1px solid rgba(0,0,0,0.09)",
                    color: "#6b7280",
                    textDecoration: "none",
                    transition:
                      "color 0.2s, border-color 0.2s, transform 0.2s, background 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.color = "#00c563";
                    el.style.background = "rgba(0,197,99,0.08)";
                    el.style.borderColor = "rgba(0,197,99,0.3)";
                    el.style.transform = "scale(1.1)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.color = "#6b7280";
                    el.style.background = "rgba(0,0,0,0.05)";
                    el.style.borderColor = "rgba(0,0,0,0.09)";
                    el.style.transform = "scale(1)";
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              style={{
                fontSize: 11,
                fontWeight: 700,
                color: "#6b7280",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: 20,
              }}
            >
              Navigation
            </h4>
            {navLinks.map((link) =>
              link.isExternal ? (
                <a
                  key={link.label}
                  href={link.href}
                  style={linkStyle}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.color =
                      "#00c563")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.color =
                      "#6b7280")
                  }
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  to={
                    link.href.startsWith("/#")
                      ? { pathname: "/", hash: link.href.substring(2) }
                      : link.href
                  }
                  style={linkStyle}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.color =
                      "#00c563")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.color =
                      "#6b7280")
                  }
                >
                  {link.label}
                </Link>
              )
            )}
            {/* Beta CTA */}
            <button
              onClick={onJoin}
              style={{
                marginTop: 14,
                padding: "10px 20px",
                borderRadius: 10,
                background: "linear-gradient(135deg, #00c563 0%, #0987e9 100%)",
                border: "none",
                color: "#ffffff",
                fontSize: 13,
                fontWeight: 700,
                cursor: "pointer",
                fontFamily: "inherit",
                letterSpacing: "0.01em",
                transition: "transform 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLButtonElement).style.transform =
                  "scale(1.04)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLButtonElement).style.transform =
                  "scale(1)")
              }
            >
              Join the Waitlist →
            </button>
          </div>

          {/* Legal */}
          <div>
            <h4
              style={{
                fontSize: 11,
                fontWeight: 700,
                color: "#6b7280",
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
                    "#00c563")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color =
                    "#6b7280")
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
            <p style={{ fontSize: 12, color: "#9ca3af" }}>
              © {currentYear}{" "}
              <span style={{ color: "#374151", fontWeight: 600 }}>Zurely</span>.
              All rights reserved.
            </p>
            <p style={{ fontSize: 12, color: "#9ca3af" }}>
              Double D Sdn Bhd &nbsp;|&nbsp; 202501060615 (1662021-V)
              &nbsp;|&nbsp; Malaysia
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
