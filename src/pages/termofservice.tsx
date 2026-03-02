import React from "react";

export default function TermsOfService() {
    return (
        <div style={{ padding: "100px 24px", maxWidth: "800px", margin: "0 auto", color: "var(--text-secondary)", lineHeight: "1.6", fontFamily: "'Inter', system-ui, sans-serif" }}>
            <h1 style={{ fontSize: "2.5rem", fontWeight: "800", marginBottom: "8px", color: "var(--text-primary)", letterSpacing: "-0.02em" }}>Terms of Service (ToS)</h1>
            <p style={{ color: "var(--text-muted)", marginBottom: "40px" }}>Last updated: February 2026</p>

            <section style={{ marginBottom: "32px" }}>
                <h2 style={{ fontSize: "1.25rem", fontWeight: "700", marginBottom: "12px", color: "var(--text-primary)" }}>1. Acceptance of Terms</h2>
                <p>By accessing the Zurely platform (the "App"), you agree to be bound by these Terms of Service. If you do not agree, please discontinue use immediately. Double D Sdn Bhd ("we," "us," or "our") reserves the right to update these terms at any time.</p>
            </section>

            <section style={{ marginBottom: "32px" }}>
                <h2 style={{ fontSize: "1.25rem", fontWeight: "700", marginBottom: "12px", color: "var(--text-primary)" }}>2. Scope of Service</h2>
                <p>Zurely provides a "Stamping Bridge" and digital tenancy management platform. We facilitate:</p>
                <ul style={{ paddingLeft: "20px", marginTop: "12px" }}>
                    <li style={{ marginBottom: "8px" }}>The generation of Tenancy Agreement templates.</li>
                    <li style={{ marginBottom: "8px" }}>Digital execution of documents via electronic/digital signatures.</li>
                    <li style={{ marginBottom: "8px" }}>The collection and remittance of Stamp Duty to the Inland Revenue Board of Malaysia (LHDN).</li>
                </ul>
            </section>

            <section style={{ marginBottom: "32px" }}>
                <h2 style={{ fontSize: "1.25rem", fontWeight: "700", marginBottom: "12px", color: "var(--text-primary)" }}>3. No Legal or Tax Advice</h2>
                <p>Zurely is not a law firm. The templates provided are for convenience only. We do not provide legal advice or tax planning. Users are encouraged to have their Tenancy Agreements reviewed by a qualified solicitor before execution.</p>
            </section>

            <section style={{ marginBottom: "32px" }}>
                <h2 style={{ fontSize: "1.25rem", fontWeight: "700", marginBottom: "12px", color: "var(--text-primary)" }}>4. User Obligations & Accuracy</h2>
                <p>You are solely responsible for the accuracy of the data entered (e.g., rental amount, IC numbers, property address).</p>
                <div style={{ paddingLeft: "20px", marginTop: "12px" }}>
                    <p style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>Calculation Errors:</strong> If you enter incorrect data leading to underpaid stamp duty, you are liable for any penalties or additional payments demanded by LHDN.</p>
                    <p style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>Identity:</strong> You must use your real identity. Use of the App for money laundering or fraudulent tenancy creation is strictly prohibited.</p>
                </div>
            </section>

            <section style={{ marginBottom: "32px" }}>
                <h2 style={{ fontSize: "1.25rem", fontWeight: "700", marginBottom: "12px", color: "var(--text-primary)" }}>5. Manual Stamping Process</h2>
                <p>You acknowledge that Zurely currently utilizes a manual submission process for LHDN stamping.</p>
                <div style={{ paddingLeft: "20px", marginTop: "12px" }}>
                    <p style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>Timeline:</strong> While we aim for a [3-5] working day turnaround, we are not liable for delays caused by LHDN system downtime, public holidays, or administrative backlogs at the tax office.</p>
                    <p style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>Agent Authorization:</strong> By using the Stamping Bridge, you authorize Double D Sdn Bhd and its appointed administrators to act as your agent in submitting documents to the LHDN "MyTax" or "STAMPS" portal.</p>
                </div>
            </section>

            <section style={{ marginBottom: "32px" }}>
                <h2 style={{ fontSize: "1.25rem", fontWeight: "700", marginBottom: "12px", color: "var(--text-primary)" }}>6. Payment & Fees</h2>
                <p>Payments are processed via Billplz. You agree to pay the Stamp Duty (calculated based on your input) plus the Zurely Service Fee. Your agreement will not be submitted for stamping until full payment is confirmed.</p>
            </section>

            <section style={{ marginBottom: "32px" }}>
                <h2 style={{ fontSize: "1.25rem", fontWeight: "700", marginBottom: "12px", color: "var(--text-primary)" }}>7. Limitation of Liability</h2>
                <p>To the maximum extent permitted by Malaysian law, Double D Sdn Bhd shall not be liable for:</p>
                <ul style={{ paddingLeft: "20px", marginTop: "12px" }}>
                    <li style={{ marginBottom: "8px" }}>Indirect, incidental, or consequential damages.</li>
                    <li style={{ marginBottom: "8px" }}>Loss of rental income due to delays in agreement execution.</li>
                    <li style={{ marginBottom: "8px" }}>Any penalties imposed by LHDN due to user-provided misinformation.</li>
                </ul>
                <p style={{ marginTop: "12px" }}>Our total liability is limited to the amount of the Service Fee paid for the specific transaction in question.</p>
            </section>

            <section style={{ marginBottom: "32px" }}>
                <h2 style={{ fontSize: "1.25rem", fontWeight: "700", marginBottom: "12px", color: "var(--text-primary)" }}>8. Termination</h2>
                <p>We reserve the right to suspend or terminate your account if we suspect fraudulent activity or if you breach these terms.</p>
            </section>

            <section style={{ marginBottom: "32px" }}>
                <h2 style={{ fontSize: "1.25rem", fontWeight: "700", marginBottom: "12px", color: "var(--text-primary)" }}>9. Governing Law</h2>
                <p>These terms are governed by the laws of Malaysia. Any disputes shall be subject to the exclusive jurisdiction of the Malaysian courts.</p>
            </section>
        </div>
    );
}


