import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  links?: { label: string; href?: string; isButton?: boolean; onClick?: () => void }[];
}

export default function Navbar({
  links = [],
}: NavbarProps) {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location]);

  return (
    <nav
      style={{
        width: "100%",
        height: "80px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 1000,
        background: "transparent", // Making it transparent to blend with the hero since it doesn't follow anymore
        borderBottom: "none",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo / Branding */}
        <Link
          to="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            textDecoration: "none"
          }}
        >
          <img
            src="/zurely-w-text-transparent.png"
            alt="Zurely"
            style={{
              height: "64px",
              filter: "drop-shadow(0 4px 12px rgba(44,203,111,0.15))",
              objectFit: "contain"
            }}
          />
        </Link>

        {/* Desktop links */}
        <div style={{ display: "none", alignItems: "center", gap: "10px" }} className="desktop-nav">
          {links.filter(l => !l.isButton).map((link) => (
            <Link
              key={link.label}
              to={link.href?.startsWith("/#") ? { pathname: "/", hash: link.href.substring(2) } : (link.href || "/")}
              style={{
                padding: "10px 18px",
                fontWeight: "600",
                fontSize: "15px",
                color: "var(--text-secondary)",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#2CCB6F")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="mobile-toggle"
          onClick={() => setOpen(!open)}
          style={{
            display: "none",
            alignItems: "center",
            justifyContent: "center",
            width: "44px",
            height: "44px",
            background: "transparent",
            border: "none",
            color: "var(--text-primary)",
            cursor: "pointer",
          }}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        style={{
          position: "absolute",
          top: "80px",
          left: 0,
          width: "100%",
          height: open ? "auto" : "0",
          overflow: "hidden",
          background: "var(--bg-page)",
          borderBottom: open ? "1px solid var(--border)" : "none",
          transition: "height 0.3s ease-in-out",
          zIndex: 999,
          padding: open ? "24px" : "0",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        {links.filter(l => !l.isButton).map((link) => (
          <Link
            key={link.label}
            to={link.href?.startsWith("/#") ? { pathname: "/", hash: link.href.substring(2) } : (link.href || "/")}
            style={{
              textAlign: "center",
              padding: "12px",
              color: "var(--text-primary)",
              textDecoration: "none",
              fontSize: "18px",
              fontWeight: "600",
            }}
          >
            {link.label}
          </Link>
        ))}
      </div>

      <style>{`
        @media (min-width: 769px) {
          .desktop-nav { display: flex !important; }
        }
        @media (max-width: 768px) {
          .mobile-toggle { display: flex !important; }
        }
      `}</style>
    </nav >
  );
}
