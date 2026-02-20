import React from "react";
import { motion } from "motion/react";
import { Mail, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
    const currentYear = "2025 - 2026"

    const navLinks = [
        { label: "Home", href: "#home" },
        { label: "Features", href: "#features" },
        { label: "Join Waitlist", href: "#waitlist" },
        { label: "Contact Us", href: "mailto:support@zurely.my" },
    ];

    const legalLinks = [
        { label: "Privacy Policy", href: "#privacy" },
        { label: "Terms of Service", href: "#terms" },
        { label: "PDPA Statement", href: "#privacy" },
        { label: "Cookie Policy", href: "#privacy" },
    ];

    const socials = [
        { icon: <Mail size={16} />, href: "mailto:support@zurely.my", label: "Email" },
        // { icon: <Linkedin size={16} />, href: "https://linkedin.com", label: "LinkedIn" },
        // { icon: <Instagram size={16} />, href: "https://instagram.com", label: "Instagram" },
    ];

    const linkStyle: React.CSSProperties = {
        display: "block",
        fontSize: 14,
        color: "#7a8599",
        textDecoration: "none",
        transition: "color 0.2s",
        marginBottom: 12,
    };

    return (
        <footer id="footer" style={{ position: "relative", zIndex: 2, padding: "0 24px 40px" }}>

            {/* Top separator */}
            <div className="separator" style={{ marginBottom: 64 }} />

            <div style={{ maxWidth: 1100, margin: "0 auto" }}>

                {/* Main 3-col grid */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                        gap: 48,
                        marginBottom: 56,
                    }}
                >

                    {/* Brand column */}
                    <div>
                        <img
                            src="/Zurely icon - transparent.png"
                            alt="Zurely"
                            style={{ height: 40, marginBottom: 20 }}
                        />
                        <p style={{ fontSize: 14, color: "#7a8599", lineHeight: 1.7, marginBottom: 24 }}>
                            Zurely is digital PropTech platform owned and operated by{" "}
                            <span style={{ color: "#f0f4ff", fontWeight: 500 }}>Double D Sdn Bhd</span>.<br /><br />
                            <span style={{ color: "#f0f4ffd1", fontWeight: 500 }}>Service Focus:</span> Digital transformation and compliance automation for the Malaysian property market.
                        </p>

                        {/* Social icons */}
                        <div style={{ display: "flex", gap: 10 }}>
                            {socials.map(s => (
                                <a
                                    key={s.label}
                                    href={s.href}
                                    aria-label={s.label}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        width: 36, height: 36, borderRadius: 10,
                                        display: "flex", alignItems: "center", justifyContent: "center",
                                        background: "rgba(255,255,255,0.06)",
                                        border: "1px solid rgba(255,255,255,0.1)",
                                        color: "#7a8599",
                                        textDecoration: "none",
                                        transition: "color 0.2s, border-color 0.2s, transform 0.2s",
                                    }}
                                    onMouseEnter={e => {
                                        (e.currentTarget as HTMLAnchorElement).style.color = "#00db70";
                                        (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(0,219,112,0.35)";
                                        (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1.1)";
                                    }}
                                    onMouseLeave={e => {
                                        (e.currentTarget as HTMLAnchorElement).style.color = "#7a8599";
                                        (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.1)";
                                        (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1)";
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
                                fontSize: 12, fontWeight: 600, color: "#f0f4ff",
                                letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 20,
                            }}
                        >
                            Quick Links
                        </h4>
                        {navLinks.map(link => (
                            <a
                                key={link.label}
                                href={link.href}
                                style={linkStyle}
                                onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.color = "#00db70")}
                                onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.color = "#7a8599")}
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* Legal */}
                    <div>
                        <h4
                            style={{
                                fontSize: 12, fontWeight: 600, color: "#f0f4ff",
                                letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 20,
                            }}
                        >
                            Legal & Privacy
                        </h4>
                        {legalLinks.map(link => (
                            <a
                                key={link.label}
                                href={link.href}
                                style={linkStyle}
                                onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.color = "#00db70")}
                                onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.color = "#7a8599")}
                            >
                                {link.label}
                            </a>
                        ))}

                        {/* PDPA box */}
                        <div
                            id="privacy"
                            style={{
                                borderRadius: 14,
                                padding: 16,
                                marginTop: 8,
                                fontSize: 12,
                                lineHeight: 1.65,
                                color: "#7a8599",
                                background: "rgba(0, 219, 112, 0.05)",
                                border: "1px solid rgba(0, 219, 112, 0.15)",
                            }}
                        >
                            <strong style={{ color: "#00db70" }}>PDPA Compliance</strong>
                            <br />
                            Double D Sdn Bhd is committed to protecting your personal data in
                            accordance with Malaysia's{" "}
                            <strong>Personal Data Protection Act 2010 (PDPA)</strong>. Your
                            information is collected solely for the purpose of product
                            communication and will never be sold to third parties.{" "}
                            <a href="mailto:support@zurely.my" style={{ color: "#00db70" }}>
                                support@zurely.my
                            </a>
                        </div>
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
                        flexWrap: "wrap",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: 12,
                    }}
                >
                    <p style={{ fontSize: 12, color: "#7a8599" }}>
                        © {currentYear}{" "}
                        <span style={{ color: "#f0f4ff" }}>Zurely</span>. All rights reserved.
                    </p>
                    <p style={{ fontSize: 12, color: "#7a8599" }}>
                        Registration No: 202501060615 &nbsp;|&nbsp; Malaysia
                    </p>
                </motion.div>
            </div>
        </footer>
    );
}
