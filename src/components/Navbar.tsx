"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  logo?: React.ReactNode;
  links?: { label: string; href: string }[];
}

export default function Navbar({
  logo = (
    <img src="/Zurely icon - transparent.png" alt="Zurely" className="h-20" />
  ),
  links = [],
}: NavbarProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav style={{ width: "100%", display: "flex", justifyContent: "center", paddingTop: 24, paddingLeft: 16, paddingRight: 16, position: "relative", zIndex: 50 }}>
      {/* Container */}
      <div
        style={{
          width: "100%",
          maxWidth: 1100,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0px 20px",
          borderRadius: 16,
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          background: scrolled ? "rgba(8, 9, 13, 0.88)" : "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.1)",
          boxShadow: scrolled ? "0 8px 32px rgba(0,0,0,0.4)" : "none",
          transition: "background 0.3s, box-shadow 0.3s",
        }}
      >
        {/* Logo */}
        <div>{logo}</div>

        {/* Desktop links */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          {links.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="btn-shimmer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "10px 24px",
                borderRadius: 12,
                fontWeight: 600,
                fontSize: 14,
                color: "#000",
                background: "linear-gradient(135deg, #00db70 0%, #00ffa3 100%)",
                textDecoration: "none",
                boxShadow: "0 0 20px rgba(0,219,112,0.3)",
                transition: "transform 0.2s, opacity 0.2s",
              }}
              onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.transform = "scale(1.04)")}
              onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.transform = "scale(1)")}
            >
              {link.label}
            </a>
          ))}

          {/* Mobile burger */}
          {/* <button
            className="mobile-menu-btn"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            style={{
              display: "none",
              alignItems: "center",
              justifyContent: "center",
              width: 36, height: 36,
              borderRadius: 10,
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "#f0f4ff",
              cursor: "pointer",
            }}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button> */}
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div
          style={{
            position: "absolute",
            top: 80,
            left: 16, right: 16,
            borderRadius: 16,
            padding: 20,
            display: "flex",
            flexDirection: "column",
            gap: 12,
            background: "rgba(8, 9, 13, 0.97)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.1)",
            boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
          }}
        >
          {links.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="btn-shimmer"
              style={{
                textAlign: "center",
                padding: "12px 24px",
                borderRadius: 12,
                fontWeight: 600,
                fontSize: 14,
                color: "#000",
                background: "linear-gradient(135deg, #00db70 0%, #00ffa3 100%)",
                textDecoration: "none",
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}

      {/* Hide desktop links on mobile via style tag */}
      <style>{`
        @media (max-width: 640px) {
          .mobile-menu-btn { display: flex !important; }
        }
        @media (min-width: 641px) {
          .mobile-menu-btn { display: none !important; }
        }
      `}</style>
    </nav>
  );
}
