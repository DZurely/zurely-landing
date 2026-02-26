import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ModalProvider } from "./context/ModalContext";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import PrivacyPolicy from "./pages/privacypolicy";
import CookiePolicy from "./pages/cookiepolicy";
import RefundPolicy from "./pages/refundpolicy";
import TermsOfService from "./pages/termofservice";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <ModalProvider>
      <Router>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            <Route path="/refund-policy" element={<RefundPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
          </Routes>
        </Layout>
      </Router>
    </ModalProvider>
  );
}

export default App;
