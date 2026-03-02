import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ModalProvider } from "./context/ModalContext";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import PrivacyPolicy from "./pages/privacypolicy";
import TermsOfService from "./pages/termofservice";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  // SET THEME HERE: Change 'light' to 'dark' to switch the entire prototype's theme
  const [theme] = React.useState("light");

  React.useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <ModalProvider>
      <Router>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
          </Routes>
        </Layout>
      </Router>
    </ModalProvider>
  );
}

export default App;
