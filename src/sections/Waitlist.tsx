import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle, Loader, ArrowRight, Sparkles } from "lucide-react";

// ─── Google Sheets Integration ────────────────────────────────────────────────
// 1. Create a Google Sheet with columns: Timestamp | Name | Email | Phone | Agency
// 2. Go to Extensions > Apps Script, paste the doPost() script, deploy as a Web App
//    (execute as: Me, who has access: Anyone), and copy the Web App URL below.
const SHEET_ENDPOINT =
    "https://script.google.com/macros/s/AKfycbwOHm8RCSteq47QRKb2wKQJ-TnS2_-eh2mxCrNFetkpcq6QjJZlCOk3aCxPFjUXti8p/exec";

type FormState = "idle" | "loading" | "success" | "error";
interface FormData { name: string; email: string; phone: string; agency: string; }

export default function WaitlistSection() {
    const [formData, setFormData] = useState<FormData>({ name: "", email: "", phone: "", agency: "" });
    const [formState, setFormState] = useState<FormState>("idle");
    const [errorMsg, setErrorMsg] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setFormState("loading");
        setErrorMsg("");

        try {
            const params = new URLSearchParams();
            params.append("name", formData.name);
            params.append("email", formData.email);
            params.append("phone", formData.phone);
            params.append("agency", formData.agency);

            const response = await fetch(SHEET_ENDPOINT, {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: params.toString()
            });

            const result = await response.json();

            if (result.status !== "success") {
                throw new Error(result.message);
            }

            setFormState("success");

        } catch (err) {
            setFormState("error");
            setErrorMsg("Something went wrong. Please try again.");
        }
    };

    const fields = [
        { name: "name", label: "Full Name", placeholder: "John Doe", type: "text", required: true },
        { name: "email", label: "Work Email", placeholder: "example@agency.com", type: "email", required: true },
        { name: "phone", label: "Phone Number", placeholder: "+60 12-345 6789", type: "tel", required: true },
        { name: "agency", label: "Agency / Firm", placeholder: "Agency Sdn Bhd", type: "text", required: false },
    ];

    return (
        <section id="waitlist" style={{ position: "relative", zIndex: 2, padding: "0 24px 112px" }}>

            {/* Top separator */}
            <div className="separator" style={{ marginBottom: 0 }} />

            <div style={{ maxWidth: 680, margin: "0 auto", paddingTop: 80 }}>

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    style={{ textAlign: "center", marginBottom: 48 }}
                >
                    <div className="badge" style={{ margin: "0 auto 16px", display: "inline-flex" }}>
                        <Sparkles size={13} />
                        Limited Spots Available
                    </div>
                    <h2
                        style={{
                            fontSize: "clamp(1.8rem, 4vw, 3rem)",
                            fontWeight: 700,
                            lineHeight: 1.2,
                            marginBottom: 20,
                            color: "#f0f4ff",
                        }}
                    >
                        Be the <span className="gradient-text">First to Experience</span>
                        <br />the Future of Real Estate
                    </h2>
                    <p style={{ fontSize: 17, color: "#7a8599", lineHeight: 1.6 }}>
                        Join our exclusive waitlist and get priority access when we launch.
                        No spam — just the invite when it's ready.
                    </p>
                </motion.div>

                {/* Form Card */}
                <motion.div
                    className="glass-strong"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    style={{
                        borderRadius: 24,
                        padding: 40,
                        border: "1px solid rgba(0, 219, 112, 0.2)",
                    }}
                >
                    <AnimatePresence mode="wait">
                        {formState === "success" ? (
                            <motion.div
                                key="success"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.4 }}
                                style={{ textAlign: "center", padding: "32px 0" }}
                            >
                                <div
                                    className="success-bounce"
                                    style={{ display: "flex", justifyContent: "center", marginBottom: 24 }}
                                >
                                    <div
                                        style={{
                                            width: 80, height: 80, borderRadius: "50%",
                                            display: "flex", alignItems: "center", justifyContent: "center",
                                            background: "rgba(0, 219, 112, 0.15)",
                                            border: "2px solid #00db70",
                                        }}
                                    >
                                        <CheckCircle size={40} style={{ color: "#00db70" }} />
                                    </div>
                                </div>
                                <h3 style={{ fontSize: 24, fontWeight: 700, color: "#f0f4ff", marginBottom: 12 }}>
                                    You're on the list! 🎉
                                </h3>
                                <p style={{ color: "#7a8599" }}>
                                    Thank you for registering your interest. We'll reach out as soon as your beta access is ready.
                                </p>
                                <p style={{ marginTop: 16, fontSize: 14, color: "#00db70" }}>
                                    Keep an eye on your inbox — we'll be in touch soon.
                                </p>
                            </motion.div>
                        ) : (
                            <motion.form key="form" onSubmit={handleSubmit} initial={{ opacity: 1 }} exit={{ opacity: 0 }}>

                                {/* 2-column grid on wider screens */}
                                <div
                                    style={{
                                        display: "grid",
                                        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                                        gap: 20,
                                        marginBottom: 24,
                                    }}
                                >
                                    {fields.map(field => (
                                        <div key={field.name}>
                                            <label
                                                htmlFor={field.name}
                                                style={{
                                                    display: "block",
                                                    fontSize: 14,
                                                    fontWeight: 500,
                                                    color: "#f0f4ff",
                                                    marginBottom: 8,
                                                }}
                                            >
                                                {field.label}
                                                {field.required && <span style={{ color: "#00db70" }}> *</span>}
                                            </label>
                                            <input
                                                id={field.name}
                                                name={field.name}
                                                type={field.type}
                                                placeholder={field.placeholder}
                                                value={formData[field.name as keyof FormData]}
                                                onChange={handleChange}
                                                required={field.required}
                                                disabled={formState === "loading"}
                                                className="form-input"
                                            />
                                        </div>
                                    ))}
                                </div>

                                {/* Error message */}
                                {formState === "error" && (
                                    <motion.p
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        style={{
                                            fontSize: 13,
                                            color: "#ff6b6b",
                                            background: "rgba(255,107,107,0.1)",
                                            border: "1px solid rgba(255,107,107,0.2)",
                                            borderRadius: 12,
                                            padding: "12px 16px",
                                            textAlign: "center",
                                            marginBottom: 16,
                                        }}
                                    >
                                        {errorMsg}
                                    </motion.p>
                                )}

                                {/* PDPA notice */}
                                <p style={{ fontSize: 12, color: "#7a8599", textAlign: "center", lineHeight: 1.6, marginBottom: 24 }}>
                                    By submitting, you agree to our{" "}
                                    <a href="#privacy" style={{ color: "#00db70", textDecoration: "underline" }}>Privacy Policy</a>{" "}
                                    and consent to the processing of your personal data in accordance with the{" "}
                                    <strong>Personal Data Protection Act 2010 (PDPA)</strong>.
                                </p>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={formState === "loading"}
                                    className="btn-shimmer"
                                    style={{
                                        width: "100%",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        gap: 10,
                                        padding: "16px 32px",
                                        borderRadius: 16,
                                        fontWeight: 600,
                                        fontSize: 16,
                                        color: "#000",
                                        border: "none",
                                        cursor: formState === "loading" ? "not-allowed" : "pointer",
                                        background: formState === "loading"
                                            ? "rgba(0, 219, 112, 0.6)"
                                            : "linear-gradient(135deg, #00db70 0%, #00ffa3 100%)",
                                        boxShadow: "0 0 30px rgba(0, 219, 112, 0.25), 0 0 60px rgba(0, 219, 112, 0.1)",
                                        opacity: formState === "loading" ? 0.7 : 1,
                                        transition: "transform 0.2s, opacity 0.2s",
                                        fontFamily: "inherit",
                                    }}
                                    onMouseEnter={e => { if (formState !== "loading") (e.currentTarget as HTMLButtonElement).style.transform = "scale(1.02)"; }}
                                    onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.transform = "scale(1)"; }}
                                >
                                    {formState === "loading" ? (
                                        <><Loader size={18} style={{ animation: "spin 1s linear infinite" }} /> Submitting…</>
                                    ) : (
                                        <>Register for Beta Access <ArrowRight size={18} /></>
                                    )}
                                </button>
                            </motion.form>
                        )}
                    </AnimatePresence>
                </motion.div>

                {/* Social proof */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                    style={{ textAlign: "center", fontSize: 13, color: "#7a8599", marginTop: 24 }}
                >
                    Joining a growing community of Malaysian real estate professionals.
                </motion.p>
            </div>
        </section>
    );
}
