import React from "react";

export default function CookiePolicy() {
    return (
        <div style={{ padding: "100px 24px", maxWidth: "800px", margin: "0 auto", color: "#1a1f2e", lineHeight: "1.6", fontFamily: "'Inter', system-ui, sans-serif" }}>
            <h1 style={{ fontSize: "2.5rem", fontWeight: "800", marginBottom: "8px", color: "#0d1117", letterSpacing: "-0.02em" }}>Cookie Policy for Zurely</h1>
            <p style={{ color: "#64748b", marginBottom: "40px" }}>Last Updated: 10 Jan 2026</p>

            <p style={{ marginBottom: "32px" }}>At Zurely ("we," "us," or "our"), we believe in being clear and open about how we collect and use data related to you. This Cookie Policy applies to any Zurely product or service that links to this policy or incorporates it by reference.</p>

            <section style={{ marginBottom: "32px" }}>
                <h2 style={{ fontSize: "1.25rem", fontWeight: "700", marginBottom: "12px", color: "#0d1117" }}>1. What Are Cookies?</h2>
                <p>Cookies are small text files that are sent to or accessed from your web browser or your device's memory. A cookie typically contains the name of the domain (internet location) from which the cookie originated, the "lifetime" of the cookie (i.e., when it expires), and a randomly generated unique number or similar identifier. A cookie also may contain information about your device, such as user settings, browsing history, and activities conducted while using our services.</p>
                <div style={{ paddingLeft: "16px", borderLeft: "4px solid #e2e8f0", marginTop: "16px", fontStyle: "italic" }}>
                    <p><strong style={{ color: "#0d1117" }}>"Similar Technologies"</strong></p>
                    <p>In our Hybrid Mobile App (Android & iOS), we may use technologies that function similarly to cookies, such as Local Storage, Secure Storage, or Mobile Device Identifiers. For the purpose of this policy, we refer to all these technologies simply as "Cookies."</p>
                </div>
            </section>

            <section style={{ marginBottom: "32px" }}>
                <h2 style={{ fontSize: "1.25rem", fontWeight: "700", marginBottom: "12px", color: "#0d1117" }}>2. Why Do We Use Cookies?</h2>
                <p>Given the nature of Zurely (LHDN Stamping and Tenant Verification), we use cookies primarily for security and authentication. We use cookies to:</p>
                <ul style={{ paddingLeft: "20px", marginTop: "12px" }}>
                    <li style={{ marginBottom: "8px" }}><strong style={{ color: "#0d1117" }}>Authenticate your identity:</strong> To ensure you are the authorized Real Estate Professional logged into your account.</li>
                    <li style={{ marginBottom: "8px" }}><strong style={{ color: "#0d1117" }}>Security & Fraud Prevention:</strong> To detect malicious activity, prevent unauthorized access to tenant data, and secure payment transactions for stamp duties.</li>
                    <li style={{ marginBottom: "8px" }}><strong style={{ color: "#0d1117" }}>Session Management:</strong> To keep you logged in while you navigate between the verification dashboard and the stamping forms.</li>
                    <li style={{ marginBottom: "8px" }}><strong style={{ color: "#0d1117" }}>Performance:</strong> To analyze how our app performs and improve the speed of document processing.</li>
                </ul>
            </section>

            <section style={{ marginBottom: "32px" }}>
                <h2 style={{ fontSize: "1.25rem", fontWeight: "700", marginBottom: "12px", color: "#0d1117" }}>3. Types of Cookies We Use</h2>
                <p>We use the following categories of cookies on Zurely:</p>

                <div style={{ marginTop: "20px" }}>
                    <h3 style={{ fontSize: "1.1rem", fontWeight: "700", marginBottom: "8px", color: "#0d1117" }}>A. Strictly Necessary Cookies (Essential)</h3>
                    <p>These cookies are vital for the app to function. Without them, we cannot provide the services you have requested, such as LHDN stamping submission or accessing secure verification reports.</p>
                    <ul style={{ paddingLeft: "20px", marginTop: "8px" }}>
                        <li style={{ marginBottom: "4px" }}><strong style={{ color: "#0d1117" }}>Authentication Tokens:</strong> Identifies you once you have logged in so you don't need to re-enter your password on every screen.</li>
                        <li style={{ marginBottom: "4px" }}><strong style={{ color: "#0d1117" }}>Security Cookies:</strong> Used to detect repeated failed login attempts or other security risks.</li>
                        <li style={{ marginBottom: "4px" }}><strong style={{ color: "#0d1117" }}>Payment Session:</strong> Ensures your connection to the payment gateway (e.g., FPX, Credit Card) is secure during the stamping payment process.</li>
                    </ul>
                </div>

                <div style={{ marginTop: "20px" }}>
                    <h3 style={{ fontSize: "1.1rem", fontWeight: "700", marginBottom: "8px", color: "#0d1117" }}>B. Functionality Cookies</h3>
                    <p>These allow the app to remember choices you make.</p>
                    <ul style={{ paddingLeft: "20px", marginTop: "8px" }}>
                        <li style={{ marginBottom: "4px" }}><strong style={{ color: "#0d1117" }}>Preferences:</strong> Remembering your preferred language (e.g., English or Bahasa Malaysia) or default search filters for tenant history.</li>
                        <li style={{ marginBottom: "4px" }}><strong style={{ color: "#0d1117" }}>Form Data:</strong> Temporarily saving draft data on stamping forms so you don't lose progress if the app closes unexpectedly.</li>
                    </ul>
                </div>

                <div style={{ marginTop: "20px" }}>
                    <h3 style={{ fontSize: "1.1rem", fontWeight: "700", marginBottom: "8px", color: "#0d1117" }}>C. Analytics & Performance Cookies</h3>
                    <p>We use these to understand how our app is being used in order to improve it.</p>
                    <ul style={{ paddingLeft: "20px", marginTop: "8px" }}>
                        <li style={{ marginBottom: "4px" }}><strong style={{ color: "#0d1117" }}>Usage Data:</strong> Which features (e.g., "Quick Verification" vs. "Full Report") are used most often?</li>
                        <li style={{ marginBottom: "4px" }}><strong style={{ color: "#0d1117" }}>Error Reporting:</strong> Helping us track app crashes or API timeout errors during LHDN submissions.</li>
                    </ul>
                    <p style={{ marginTop: "8px", fontSize: "0.875rem", color: "#64748b" }}>Note: Data collected in this category is generally aggregated and anonymous.</p>
                </div>
            </section>

            <section style={{ marginBottom: "32px" }}>
                <h2 style={{ fontSize: "1.25rem", fontWeight: "700", marginBottom: "12px", color: "#0d1117" }}>4. Third-Party Cookies</h2>
                <p>We may use trusted third-party services that set cookies on our behalf. These may include:</p>
                <ul style={{ paddingLeft: "20px", marginTop: "12px" }}>
                    <li style={{ marginBottom: "8px" }}><strong style={{ color: "#0d1117" }}>Payment Gateways:</strong> (e.g., Stripe, Billplz, or FPX providers) to process stamp duty payments securely.</li>
                    <li style={{ marginBottom: "8px" }}><strong style={{ color: "#0d1117" }}>Identity Verification Partners:</strong> To process e-KYC (Know Your Customer) checks for tenants.</li>
                    <li style={{ marginBottom: "8px" }}><strong style={{ color: "#0d1117" }}>Analytics Providers:</strong> (e.g., Google Analytics or Firebase) to monitor app health.</li>
                </ul>
            </section>

            <section style={{ marginBottom: "32px" }}>
                <h2 style={{ fontSize: "1.25rem", fontWeight: "700", marginBottom: "12px", color: "#0d1117" }}>5. Your Choices and Controls</h2>
                <div style={{ marginTop: "12px" }}>
                    <h3 style={{ fontSize: "1.1rem", fontWeight: "700", marginBottom: "8px", color: "#0d1117" }}>Web Browser</h3>
                    <p>If you are using the web version of Zurely, most browsers allow you to control cookies through their settings preferences. However, if you limit the ability of websites to set cookies, you may worsen your overall user experience, and critical features like Stamping Submission may not function.</p>
                </div>
                <div style={{ marginTop: "12px" }}>
                    <h3 style={{ fontSize: "1.1rem", fontWeight: "700", marginBottom: "8px", color: "#0d1117" }}>Mobile App (Android/iOS)</h3>
                    <p>On your mobile device, you may not be able to block "Strictly Necessary" storage technologies as they are required for the app to run. However, you can control advertising identifiers (if applicable) through your device settings:</p>
                    <ul style={{ paddingLeft: "20px", marginTop: "8px" }}>
                        <li style={{ marginBottom: "4px" }}>iOS: Settings {">"} Privacy {">"} Tracking.</li>
                        <li style={{ marginBottom: "4px" }}>Android: Settings {">"} Google {">"} Ads.</li>
                    </ul>
                </div>
            </section>

            <section style={{ marginBottom: "32px" }}>
                <h2 style={{ fontSize: "1.25rem", fontWeight: "700", marginBottom: "12px", color: "#0d1117" }}>6. Data Retention</h2>
                <p>Cookies have different lifespans:</p>
                <ul style={{ paddingLeft: "20px", marginTop: "12px" }}>
                    <li style={{ marginBottom: "8px" }}><strong style={{ color: "#0d1117" }}>Session Cookies:</strong> Are deleted automatically when you close the app or browser.</li>
                    <li style={{ marginBottom: "8px" }}><strong style={{ color: "#0d1117" }}>Persistent Cookies:</strong> Remain on your device until they expire or you delete them manually. We use these to remember you for your next visit.</li>
                </ul>
            </section>

            <section style={{ marginBottom: "32px" }}>
                <h2 style={{ fontSize: "1.25rem", fontWeight: "700", marginBottom: "12px", color: "#0d1117" }}>7. Changes to This Policy</h2>
                <p>We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal, or regulatory reasons. Please revisit this page specifically to stay informed about our use of cookies and related technologies.</p>
            </section>

            <section style={{ marginBottom: "32px" }}>
                <h2 style={{ fontSize: "1.25rem", fontWeight: "700", marginBottom: "12px", color: "#0d1117" }}>8. Contact Us</h2>
                <p>If you have questions about our use of cookies or this policy, please contact us at:</p>
                <div style={{ marginTop: "12px", padding: "16px", background: "rgba(0,0,0,0.02)", borderRadius: "8px", border: "1px solid rgba(0,0,0,0.05)" }}>
                    <p style={{ margin: 0 }}><strong style={{ color: "#0d1117" }}>Zurely Support Team</strong></p>
                    <p style={{ margin: 0 }}><strong style={{ color: "#0d1117" }}>Email:</strong> support@zurelly.my</p>
                    <p style={{ margin: 0 }}><strong style={{ color: "#0d1117" }}>Address:</strong> [Insert Business Address]</p>
                </div>
            </section>
        </div>
    );
}




