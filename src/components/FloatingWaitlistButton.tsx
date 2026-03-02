import React, { useState, useEffect } from "react";
import { Rocket } from "lucide-react";

interface FloatingWaitlistButtonProps {
    onClick: () => void;
}

export default function FloatingWaitlistButton({ onClick }: FloatingWaitlistButtonProps) {
    const [isHovered, setIsHovered] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isMobile = window.innerWidth <= 768;
            // Desktop: appears after first screen height. Mobile: appears after scrolling ~300px (Hero section)
            const threshold = isMobile ? 300 : (window.innerHeight - 100);

            if (window.scrollY > threshold) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        // Initial check
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <button
            onClick={onClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="btn-shimmer pulse-glow"
            style={{
                position: "fixed",
                bottom: "32px",
                right: "32px",
                zIndex: 999,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: isHovered ? "12px" : "0",
                padding: isHovered ? "16px 28px" : "16px",
                borderRadius: "30px",
                background: "linear-gradient(135deg, #2CCB6F 0%, #1A47A9 100%)",
                color: "#ffffff",
                border: "none",
                cursor: "pointer",
                fontWeight: "800",
                fontSize: "15px",
                boxShadow: "0 8px 30px rgba(44, 203, 111, 0.4)",
                transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
                overflow: "hidden",
                width: isHovered ? "auto" : "56px",
                height: "56px",
                opacity: isVisible ? 1 : 0,
                transform: isVisible
                    ? (isHovered ? "scale(1.05) translateY(-4px)" : "scale(1) translateY(0)")
                    : "scale(0.8) translateY(20px)",
                pointerEvents: isVisible ? "auto" : "none",
            }}
        >
            <Rocket size={20} style={{ flexShrink: 0 }} />
            <span
                style={{
                    maxWidth: isHovered ? "200px" : "0",
                    opacity: isHovered ? 1 : 0,
                    transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                    whiteSpace: "nowrap",
                    display: "inline-block",
                }}
            >
                Early Access
            </span>
        </button>
    );
}
