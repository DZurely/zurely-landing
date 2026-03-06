import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle, Loader, ArrowRight, X, Check } from "lucide-react";

const SHEET_ENDPOINT =
    "https://script.google.com/macros/s/AKfycbzr03QfN2GiVtTyEBvvVBn428R28GudHgab05T4o6bZBynGeBvjiXG_ZT_Kj5o3mWmb/exec";

type FormState = "idle" | "loading" | "success" | "error";
interface FormData { name: string; email: string; phone: string; agency: string; }

interface WaitlistModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
    const [formData, setFormData] = useState<FormData>({ name: "", email: "", phone: "", agency: "" });
    const [formState, setFormState] = useState<FormState>("idle");
    const [errorMsg, setErrorMsg] = useState("");

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => { document.body.style.overflow = ""; };
    }, [isOpen]);

    useEffect(() => {
        if (!isOpen) {
            setTimeout(() => {
                setFormState("idle");
                setFormData({ name: "", email: "", phone: "", agency: "" });
                setErrorMsg("");
            }, 300);
        }
    }, [isOpen]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
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
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: params.toString(),
            });

            const result = await response.json();
            if (result.status !== "success") throw new Error(result.message);
            setFormState("success");
        } catch {
            setFormState("error");
            setErrorMsg("Something went wrong. Please try again or email us at support@zurely.my");
        }
    };

    const fields = [
        { name: "name", label: "Full Name", placeholder: "John Doe", type: "text", required: true },
        { name: "email", label: "Email", placeholder: "example@agency.com", type: "email", required: false },
        { name: "phone", label: "Phone Number", placeholder: "+60 12-345 6789", type: "tel", required: true },
        { name: "agency", label: "Agency / Firm", placeholder: "Agency Sdn Bhd", type: "text", required: false },
    ];

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="modal-overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
                >
                    <motion.div
                        className="modal-card"
                        initial={{ opacity: 0, scale: 0.92, y: 30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.94, y: 20 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <button
                            onClick={onClose}
                            aria-label="Close"
                            style={{
                                position: "absolute",
                                top: 20,
                                right: 20,
                                width: 36,
                                height: 36,
                                borderRadius: 10,
                                border: "1.5px solid var(--border)",
                                background: "var(--bg-surface-2)",
                                color: "var(--text-secondary)",
                                cursor: "pointer",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                transition: "background 0.2s",
                            }}
                            onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "rgba(0,0,0,0.08)")}
                            onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "rgba(0,0,0,0.04)")}
                        >
                            <X size={16} />
                        </button>

                        <AnimatePresence mode="wait">
                            {formState === "success" ? (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.4 }}
                                    style={{ textAlign: "center", padding: "24px 0" }}
                                >
                                    <div
                                        className="success-bounce"
                                        style={{ display: "flex", justifyContent: "center", marginBottom: 24 }}
                                    >
                                        <div
                                            style={{
                                                width: window.innerWidth < 480 ? 72 : 88,
                                                height: window.innerWidth < 480 ? 72 : 88,
                                                borderRadius: "50%",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                background: "rgba(44, 203, 111, 0.1)",
                                                border: "2px solid rgba(44, 203, 111, 0.35)",
                                            }}
                                        >
                                            <CheckCircle size={44} style={{ color: "#2CCB6F" }} />
                                        </div>
                                    </div>
                                    <h3
                                        style={{
                                            fontSize: window.innerWidth < 480 ? 22 : 26,
                                            fontWeight: 800,
                                            color: "var(--text-primary)",
                                            marginBottom: 12,
                                            letterSpacing: "-0.02em",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            gap: 8,
                                        }}
                                    >
                                        You’re Confirmed for Early Access
                                        <Check size={window.innerWidth < 480 ? 18 : 22} style={{ color: "#2CCB6F" }} />
                                    </h3>
                                    <p style={{ color: "var(--text-secondary)", fontSize: 16, lineHeight: 1.65, marginBottom: 8 }}>
                                        Thank you for your interest in Zurely. You have been successfully added to our priority waitlist. We will notify you as soon as our next beta cohort opens
                                    </p>
                                    <p style={{ fontSize: 14, color: "#2CCB6F", fontWeight: 600 }}>
                                        In the meantime, feel free to explore our mission at zurely.my
                                    </p>
                                    <button
                                        onClick={onClose}
                                        style={{
                                            marginTop: 28,
                                            padding: "12px 32px",
                                            borderRadius: 12,
                                            background: "rgba(44, 203, 111, 0.1)",
                                            border: "1.5px solid rgba(44, 203, 111, 0.25)",
                                            color: "#23A259",
                                            fontWeight: 600,
                                            fontSize: 15,
                                            cursor: "pointer",
                                            fontFamily: "inherit",
                                            transition: "background 0.2s",
                                        }}
                                        onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "rgba(44, 203, 111, 0.15)")}
                                        onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "rgba(44, 203, 111, 0.1)")}
                                    >
                                        Return to Site
                                    </button>
                                </motion.div>
                            ) : (
                                <motion.div key="form" initial={{ opacity: 1 }} exit={{ opacity: 0 }}>

                                    <div style={{ marginBottom: 20, paddingRight: window.innerWidth < 480 ? 0 : 32 }}>
                                        <h2
                                            style={{
                                                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                                                fontWeight: 800,
                                                color: "var(--text-primary)",
                                                lineHeight: 1.2,
                                                marginBottom: 10,
                                                letterSpacing: "-0.025em",
                                            }}
                                        >
                                            Join the Zurely Beta
                                        </h2>
                                        <p style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.6 }}>
                                            Be among the first to experience the new standard in digital tenancy. Secure
                                            early access to a workflow that automates your compliance and protects your deals.
                                        </p>
                                    </div>

                                    <form onSubmit={handleSubmit}>

                                        <div
                                            style={{
                                                display: "grid",
                                                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                                                gap: 16,
                                                marginBottom: 20,
                                            }}
                                        >
                                            {fields.map((field) => (
                                                <div key={field.name}>
                                                    <label
                                                        htmlFor={field.name}
                                                        style={{
                                                            display: "block",
                                                            fontSize: 13,
                                                            fontWeight: 600,
                                                            color: "var(--text-secondary)",
                                                            marginBottom: 7,
                                                            letterSpacing: "0.01em",
                                                        }}
                                                    >
                                                        {field.label}
                                                        {field.required && (
                                                            <span style={{ color: "var(--brand-green)", marginLeft: 3 }}>*</span>
                                                        )}
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

                                        {formState === "error" && (
                                            <motion.p
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                style={{
                                                    fontSize: 13,
                                                    color: "#dc2626",
                                                    background: "rgba(220,38,38,0.07)",
                                                    border: "1px solid rgba(220,38,38,0.2)",
                                                    borderRadius: 10,
                                                    padding: "12px 16px",
                                                    textAlign: "center",
                                                    marginBottom: 16,
                                                }}
                                            >
                                                {errorMsg}
                                            </motion.p>
                                        )}

                                        <p
                                            style={{
                                                fontSize: 12,
                                                color: "var(--text-muted)",
                                                lineHeight: 1.6,
                                                marginBottom: 20,
                                                textAlign: "center",
                                            }}
                                        >
                                            By submitting, you agree to our{" "}
                                            <a href="/privacy-policy" style={{ color: "#2CCB6F", textDecoration: "underline" }}>
                                                Privacy Policy
                                            </a>{" "}
                                            and consent to the processing of your personal data under the{" "}
                                            <strong style={{ color: "var(--text-secondary)" }}>Personal Data Protection Act (PDPA) 2010 </strong>and <strong style={{ color: "var(--text-secondary)" }}>its 2024 Amendments</strong>.
                                        </p>

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
                                                borderRadius: 14,
                                                fontWeight: 700,
                                                fontSize: 16,
                                                color: "#ffffff",
                                                border: "none",
                                                cursor: formState === "loading" ? "not-allowed" : "pointer",
                                                background:
                                                    formState === "loading"
                                                        ? "rgba(44, 203, 111, 0.5)"
                                                        : "linear-gradient(135deg, #2CCB6F 0%, #1A47A9 100%)",
                                                boxShadow: "0 0 30px rgba(44, 203, 111, 0.2), 0 4px 16px rgba(0,0,0,0.1)",
                                                opacity: formState === "loading" ? 0.75 : 1,
                                                transition: "transform 0.2s, opacity 0.2s",
                                                fontFamily: "inherit",
                                                letterSpacing: "0.01em",
                                            }}
                                            onMouseEnter={(e) => {
                                                if (formState !== "loading")
                                                    (e.currentTarget as HTMLButtonElement).style.transform = "scale(1.02)";
                                            }}
                                            onMouseLeave={(e) => {
                                                (e.currentTarget as HTMLButtonElement).style.transform = "scale(1)";
                                            }}
                                        >
                                            {formState === "loading" ? (
                                                <>
                                                    <Loader size={18} style={{ animation: "spin 1s linear infinite" }} />
                                                    Submitting…
                                                </>
                                            ) : (
                                                <>
                                                    Secure My Spot <ArrowRight size={18} />
                                                </>
                                            )}
                                        </button>
                                    </form>

                                    <p
                                        style={{
                                            textAlign: "center",
                                            fontSize: 13,
                                            color: "var(--text-muted)",
                                            marginTop: 18,
                                        }}
                                    >
                                        Join the next generation of Malaysia's real estate professionals.
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
