import React from "react";

export default function PrivacyPolicy() {
    return (
        <div style={{ padding: "100px 24px", maxWidth: "800px", margin: "0 auto", color: "#1a1f2e", lineHeight: "1.6", fontFamily: "'Inter', system-ui, sans-serif" }}>
            <h1 style={{ fontSize: "2.5rem", fontWeight: "800", marginBottom: "8px", color: "#0d1117", letterSpacing: "-0.02em" }}>Privacy Policy: Double D Sdn Bhd (Zurely)</h1>
            <p style={{ color: "#64748b", marginBottom: "40px" }}>Last Updated: January 2026</p>

            <section style={{ marginBottom: "32px" }}>
                <h2 style={{ fontSize: "1.25rem", fontWeight: "700", marginBottom: "12px", color: "#0d1117" }}>1. Our Commitment</h2>
                <p>Double D Sdn Bhd ("Zurely," "we," "us," or "our") is committed to protecting the personal data of our users in compliance with the Malaysian Personal Data Protection Act (PDPA) 2010 and its 2024 Amendments. This policy explains how we collect, use, and protect your information when you use our digital stamping and tenancy platform.</p>
            </section>

            <section style={{ marginBottom: "32px" }}>
                <h2 style={{ fontSize: "1.25rem", fontWeight: "700", marginBottom: "12px", color: "#0d1117" }}>2. Data We Collect</h2>
                <p>To provide our services, we collect the following categories of personal data:</p>
                <ul style={{ paddingLeft: "20px", marginTop: "12px" }}>
                    <li style={{ marginBottom: "8px" }}><strong style={{ color: "#0d1117" }}>Identity Data:</strong> Full name, NRIC/Passport number, and biometric data for eKYC verification.</li>
                    <li style={{ marginBottom: "8px" }}><strong style={{ color: "#0d1117" }}>Contact Data:</strong> Phone number, email address, and residential address.</li>
                    <li style={{ marginBottom: "8px" }}><strong style={{ color: "#0d1117" }}>Property & Tenancy Data:</strong> Property addresses, rental amounts, and signed Tenancy Agreements.</li>
                    <li style={{ marginBottom: "8px" }}><strong style={{ color: "#0d1117" }}>Financial Data:</strong> Bank account details and proof of income (only where required for the Zurely Pass).</li>
                </ul>
            </section>

            <section style={{ marginBottom: "32px" }}>
                <h2 style={{ fontSize: "1.25rem", fontWeight: "700", marginBottom: "12px", color: "#0d1117" }}>3. Purpose of Processing</h2>
                <p>We process your data for the following essential purposes:</p>
                <ul style={{ paddingLeft: "20px", marginTop: "12px" }}>
                    <li style={{ marginBottom: "8px" }}><strong style={{ color: "#0d1117" }}>Identity Verification:</strong> To verify your identity through licensed eKYC providers.</li>
                    <li style={{ marginBottom: "8px" }}><strong style={{ color: "#0d1117" }}>Document Execution:</strong> To facilitate digital signing and generate legally binding Tenancy Agreements.</li>
                    <li style={{ marginBottom: "8px" }}><strong style={{ color: "#0d1117" }}>Regulatory Compliance:</strong> To submit required data to the Lembaga Hasil Dalam Negeri (LHDN) for stamp duty purposes.</li>
                    <li style={{ marginBottom: "8px" }}><strong style={{ color: "#0d1117" }}>Credit Assessment:</strong> To provide rental eligibility scoring via the Zurely Pass.</li>
                </ul>
            </section>

            <section style={{ marginBottom: "32px" }}>
                <h2 style={{ fontSize: "1.25rem", fontWeight: "700", marginBottom: "12px", color: "#0d1117" }}>4. Data Sharing & Third Parties</h2>
                <p>We only share your data with authorized third parties necessary for our service delivery:</p>
                <ul style={{ paddingLeft: "20px", marginTop: "12px" }}>
                    <li style={{ marginBottom: "8px" }}><strong style={{ color: "#0d1117" }}>Government Agencies:</strong> Specifically LHDN for document stamping.</li>
                    <li style={{ marginBottom: "8px" }}><strong style={{ color: "#0d1117" }}>Licensed Service Providers:</strong> eKYC and Digital Signature providers (e.g., SigningCloud).</li>
                    <li style={{ marginBottom: "8px" }}><strong style={{ color: "#0d1117" }}>Credit Bureaus:</strong> For real-time credit grading.</li>
                </ul>
            </section>

            <section style={{ marginBottom: "32px" }}>
                <h2 style={{ fontSize: "1.25rem", fontWeight: "700", marginBottom: "12px", color: "#0d1117" }}>5. Your Rights</h2>
                <p>Under the PDPA, you have the right to:</p>
                <ul style={{ paddingLeft: "20px", marginTop: "12px" }}>
                    <li style={{ marginBottom: "8px" }}><strong style={{ color: "#0d1117" }}>Access & Correct:</strong> Request access to or correction of your personal data.</li>
                    <li style={{ marginBottom: "8px" }}><strong style={{ color: "#0d1117" }}>Withdraw Consent:</strong> Withdraw your consent for data processing at any time (subject to legal or contractual restrictions).</li>
                    <li style={{ marginBottom: "8px" }}><strong style={{ color: "#0d1117" }}>Data Portability:</strong> Request a copy of your data in a structured, machine-readable format.</li>
                </ul>
            </section>

            <section style={{ marginBottom: "32px" }}>
                <h2 style={{ fontSize: "1.25rem", fontWeight: "700", marginBottom: "12px", color: "#0d1117" }}>6. Contact Our Data Office</h2>
                <p>If you have questions regarding this policy or wish to exercise your rights, please contact our designated administrator at:</p>
                <div style={{ marginTop: "12px", padding: "16px", background: "rgba(0,0,0,0.02)", borderRadius: "8px", border: "1px solid rgba(0,0,0,0.05)" }}>
                    <p style={{ margin: 0 }}><strong style={{ color: "#0d1117" }}>Email:</strong> admin@zurely.my</p>
                    <p style={{ margin: 0 }}><strong style={{ color: "#0d1117" }}>Address:</strong> [Registered Office Address]</p>
                </div>
            </section>


        </div>
    );
}


