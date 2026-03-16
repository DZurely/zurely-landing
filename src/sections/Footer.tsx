import { Link } from "react-router-dom";
import { motion } from "motion/react";
export default function Footer() {
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
    fontSize: 16,
    color: "var(--text-secondary)",
    textDecoration: "none",
    transition: "color 0.2s",
    marginBottom: 12,
  };

  return (
    <footer
      id="footer"
      className="relative z-[2] px-6 pb-12 bg-[color:var(--bg-page)]"
    >
      <div className="separator mb-10" />

      <div className="max-w-[1100px] mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr] gap-12 md:gap-8 mb-10 footer-grid"
        >
          <div className="brand-col md:pr-10">
            <Link
              to="/"
              className="flex items-center gap-1.5 no-underline"
            >
              <img
                src="/zurely-w-text-transparent.png"
                alt="Zurely"
                className="h-16 md:h-20"
              />
            </Link>

            <p className="text-base text-[color:var(--text-secondary)] leading-[1.75] mb-6">
              Zurely: Advancing the Malaysian property ecosystem through digital transformation and automated compliance.

              <br />
              <span className="mt-1.5 inline-block">
                A product of{" "}
                <strong className="text-[color:var(--text-primary)]">
                  Double D Sdn Bhd 202501060615 (1662021-V)
                </strong>
              </span>
            </p>
          </div>

          <div>
            <h4 className="text-[13px] font-bold text-[color:var(--text-muted)] tracking-[0.12em] uppercase mb-6">
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

          <div>
            <h4 className="text-[13px] font-bold text-[color:var(--text-muted)] tracking-[0.12em] uppercase mb-6">
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

        <div className="separator mb-6" />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col gap-4"
        >
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-[12px] text-[color:var(--text-muted)]">
              © {currentYear}{" "}
              <span className="text-[color:var(--text-primary)] font-semibold">Zurely</span>.
              All rights reserved.
            </p>
            <p className="text-[12px] text-[color:var(--text-muted)]">
              Double D Sdn Bhd &nbsp;|&nbsp; 202501060615 (1662021-V)
              &nbsp;|&nbsp; Malaysia
            </p>
          </div>
        </motion.div>

      </div>
    </footer>
  );
}
