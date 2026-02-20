import React from "react";
import HeroSection from "./sections/Hero";
import FeaturesSection from "./sections/Features";
import WaitlistSection from "./sections/Waitlist";
import Footer from "./sections/Footer";

function App() {
  return (
    <>
      {/* Animated gradient background (fixed) */}
      <div className="gradient-bg">
        <div className="gradient-orb-3" />
      </div>

      {/* Subtle noise texture overlay */}
      <div className="noise-overlay" />

      {/* Page content */}
      <div className="relative" style={{ zIndex: 2 }}>
        <HeroSection />
        <FeaturesSection />
        <WaitlistSection />
        <Footer />
      </div>
    </>
  );
}

export default App;
