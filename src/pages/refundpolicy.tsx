import React from "react";

export default function RefundPolicy() {
    return (
        <div style={{ padding: "100px 24px", maxWidth: "800px", margin: "0 auto", color: "#1a1f2e", lineHeight: "1.6", fontFamily: "'Inter', system-ui, sans-serif" }}>
            <h1 style={{ fontSize: "2.5rem", fontWeight: "800", marginBottom: "8px", color: "#0d1117", letterSpacing: "-0.02em" }}>Refund & Cancellation Policy</h1>
            <p style={{ color: "#64748b", marginBottom: "40px" }}>Last Updated: January 2026</p>

            <section style={{ marginBottom: "32px" }}>
                <h2 style={{ fontSize: "1.25rem", fontWeight: "700", marginBottom: "12px", color: "#0d1117" }}>1. General Principle</h2>
                <p>All payments made via the Zurely platform are generally non-refundable due to the nature of the services (digital document generation and tax submission). We encourage users to verify all agreement details and calculations during the "Sandbox" or "Draft" stage before proceeding to payment.</p>
            </section>

            <section style={{ marginBottom: "32px" }}>
                <h2 style={{ fontSize: "1.25rem", fontWeight: "700", marginBottom: "12px", color: "#0d1117" }}>2. Service Fees (Zurely Platform Fee)</h2>
                <div style={{ paddingLeft: "20px", marginTop: "12px" }}>
                    <p style={{ marginBottom: "12px" }}><strong style={{ color: "#0d1117" }}>Before Submission:</strong> If a user cancels a transaction after paying the Zurely service fee but before we have initiated the stamping process with LHDN, a partial refund may be considered at the sole discretion of Double D Sdn Bhd, subject to an administrative charge of [RM 50].</p>
                    <p style={{ marginBottom: "8px" }}><strong style={{ color: "#0d1117" }}>After Submission:</strong> Once the agreement has been submitted to LHDN for manual stamping or once the digital signing link has been generated and utilized, the service fee is strictly non-refundable.</p>
                </div>
            </section>

            <section style={{ marginBottom: "32px" }}>
                <h2 style={{ fontSize: "1.25rem", fontWeight: "700", marginBottom: "12px", color: "#0d1117" }}>3. Stamp Duty Payments (LHDN)</h2>
                <div style={{ paddingLeft: "20px", marginTop: "12px" }}>
                    <p style={{ marginBottom: "12px" }}><strong style={{ color: "#0d1117" }}>Non-Refundable by Zurely:</strong> Zurely acts only as a payment and submission bridge. Once stamp duty funds are remitted to the Inland Revenue Board of Malaysia (LHDN), Zurely cannot issue a refund.</p>
                    <p style={{ marginBottom: "8px" }}><strong style={{ color: "#0d1117" }}>Direct Appeal to LHDN:</strong> Any request for a refund of stamp duty (e.g., in the case of a terminated tenancy or overpayment) must be made by the taxpayer directly to LHDN via the Stamp Duty Refund Request Form at a physical LHDN branch. Zurely may provide the stamped certificate and payment receipt to assist the user in their appeal, but we do not guarantee the success of the refund.</p>
                </div>
            </section>

            <section style={{ marginBottom: "32px" }}>
                <h2 style={{ fontSize: "1.25rem", fontWeight: "700", marginBottom: "12px", color: "#0d1117" }}>4. Transaction Failures (Billplz)</h2>
                <p>In the event of a technical failure where a user is charged but the transaction is not recorded in the Zurely database:</p>
                <ul style={{ paddingLeft: "20px", marginTop: "12px" }}>
                    <li style={{ marginBottom: "8px" }}>Users must provide a Billplz payment receipt and transaction ID within [24 hours].</li>
                    <li style={{ marginBottom: "8px" }}>Zurely will investigate and, if the error is on our end, will either manually complete the service or issue a full refund within [7-14 working days].</li>
                </ul>
            </section>

            <section style={{ marginBottom: "32px" }}>
                <h2 style={{ fontSize: "1.25rem", fontWeight: "700", marginBottom: "12px", color: "#0d1117" }}>5. Failed eKYC</h2>
                <p>If a transaction cannot proceed because a user fails the eKYC identity verification:</p>
                <ul style={{ paddingLeft: "20px", marginTop: "12px" }}>
                    <li style={{ marginBottom: "8px" }}>The Stamp Duty portion (if already paid) will be refunded in full.</li>
                    <li style={{ marginBottom: "8px" }}>The Service Fee may be partially refunded, minus a processing fee to cover the costs of the eKYC vendor (e.g., MSC Trustgate).</li>
                </ul>
            </section>
        </div>
    );
}



