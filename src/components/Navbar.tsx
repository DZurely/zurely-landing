"use client";

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
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location]);

  return (
    <nav
      style={{
        width: "100%",
        height: scrolled ? "64px" : "80px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1000,
        background: scrolled ? "var(--glass-bg)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "none",
        transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
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
            style={{ height: scrolled ? "60px" : "64px", transition: "height 0.4s", filter: "drop-shadow(0 4px 12px rgba(44,203,111,0.15))" }}
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{
              fontSize: "1.75rem",
              fontWeight: "600",
              color: "#1A47A9",
              lineHeight: 1,
              letterSpacing: "0",
            }}>
            </span>
          </div>
        </Link>

        {/* Desktop links */}
        <div style={{ display: "none", alignItems: "center", gap: "10px" }} className="desktop-nav">
          {links.map((link) =>
            link.isButton ? (
              <button
                key={link.label}
                onClick={link.onClick}
                className="btn-shimmer pulse-glow"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  padding: "12px 28px",
                  borderRadius: "14px",
                  fontWeight: "800",
                  fontSize: "14px",
                  color: "#ffffff",
                  background: "linear-gradient(135deg, #2CCB6F 0%, #1A47A9 100%)",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.3s",
                  boxShadow: "0 4px 15px rgba(44, 203, 111, 0.2)",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-2px)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
              >
                {link.label}
              </button>
            ) : (
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
            )
          )}
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
          position: "fixed",
          top: scrolled ? "64px" : "80px",
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
        {links.map((link) => (
          link.isButton ? (
            <button
              key={link.label}
              onClick={link.onClick}
              style={{
                width: "100%",
                padding: "16px",
                borderRadius: "12px",
                background: "linear-gradient(135deg, #2CCB6F 0%, #1A47A9 100%)",
                border: "none",
                color: "#ffffff",
                fontWeight: "700",
                fontSize: "16px",
              }}
            >
              {link.label}
            </button>
          ) : (
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
          )
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
    </nav>
  );
}
