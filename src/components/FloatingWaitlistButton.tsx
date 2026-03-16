import React, { useState, useEffect } from "react";
import { Rocket } from "lucide-react";
import { useLocation } from "react-router-dom";

interface FloatingWaitlistButtonProps {
  onClick: () => void;
}

export default function FloatingWaitlistButton({
  onClick,
}: FloatingWaitlistButtonProps) {
  const location = useLocation();
  const pathname = location.pathname;

  const isLegalPage =
    pathname === "/privacy-policy" || pathname === "/terms-of-service";

  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isLegalPage) {
      setIsVisible(true);
      return;
    }

    const handleScroll = () => {
      if (window.scrollY > 120) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLegalPage]);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`fixed bottom-[32px] right-[32px] z-[999] flex items-center justify-center rounded-[30px] bg-gradient-to-br from-[#2CCB6F] to-[#1A47A9] text-white border-none cursor-pointer font-extrabold text-[15px] shadow-[0_8px_30px_rgba(44,203,111,0.4)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden h-[56px] btn-shimmer pulse-glow ${isHovered ? 'gap-[12px] px-[28px] w-auto' : 'gap-0 p-[16px] w-[56px]'} ${isVisible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none scale-[0.8] translate-y-[20px]'} ${isVisible && isHovered ? 'scale-[1.05] -translate-y-[4px]' : (isVisible ? 'scale-100 translate-y-0' : '')}`}
    >
      <Rocket size={20} className="shrink-0" />
      <span
        className={`whitespace-nowrap inline-block transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${isHovered ? 'max-w-[200px] opacity-100' : 'max-w-0 opacity-0'}`}
      >
        Early Access
      </span>
    </button>
  );
}
