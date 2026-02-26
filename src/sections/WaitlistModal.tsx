import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle, Loader, ArrowRight, X, Sparkles } from "lucide-react";

const SHEET_ENDPOINT =
    "https://script.google.com/macros/s/AKfycbwOHm8RCSteq47QRKb2wKQJ-TnS2_-eh2mxCrNFetkpcq6QjJZlCOk3aCxPFjUXti8p/exec";

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

    // Lock body scroll when open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => { document.body.style.overflow = ""; };
    }, [isOpen]);

    // Reset form when modal closes
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
        { name: "email", label: "Work Email", placeholder: "example@agency.com", type: "email", required: true },
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
                        {/* Close button */}
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
                                border: "1.5px solid rgba(0,0,0,0.1)",
                                background: "rgba(0,0,0,0.04)",
                                color: "#4b5563",
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
                                                width: 88,
                                                height: 88,
                                                borderRadius: "50%",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                background: "rgba(0, 197, 99, 0.1)",
                                                border: "2px solid rgba(0,197,99,0.35)",
                                            }}
                                        >
                                            <CheckCircle size={44} style={{ color: "#00c563" }} />
                                        </div>
                                    </div>
                                    <h3
                                        style={{
                                            fontSize: 26,
                                            fontWeight: 800,
                                            color: "#0d1117",
                                            marginBottom: 12,
                                            letterSpacing: "-0.02em",
                                        }}
                                    >
                                        You're on the list! 🎉
                                    </h3>
                                    <p style={{ color: "#4b5563", fontSize: 16, lineHeight: 1.65, marginBottom: 8 }}>
                                        Thank you for registering your interest in Zurely.
                                        We'll reach out as soon as your beta access is ready.
                                    </p>
                                    <p style={{ fontSize: 14, color: "#00c563", fontWeight: 600 }}>
                                        Keep an eye on your inbox — we'll be in touch soon.
                                    </p>
                                    <button
                                        onClick={onClose}
                                        style={{
                                            marginTop: 28,
                                            padding: "12px 32px",
                                            borderRadius: 12,
                                            background: "rgba(0,197,99,0.1)",
                                            border: "1.5px solid rgba(0,197,99,0.25)",
                                            color: "#009e4f",
                                            fontWeight: 600,
                                            fontSize: 15,
                                            cursor: "pointer",
                                            fontFamily: "inherit",
                                            transition: "background 0.2s",
                                        }}
                                        onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "rgba(0,197,99,0.15)")}
                                        onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "rgba(0,197,99,0.1)")}
                                    >
                                        Back to Zurely
                                    </button>
                                </motion.div>
                            ) : (
                                <motion.div key="form" initial={{ opacity: 1 }} exit={{ opacity: 0 }}>
                                    {/* Header */}
                                    <div style={{ marginBottom: 28, paddingRight: 32 }}>
                                        <div className="badge" style={{ marginBottom: 14 }}>
                                            <Sparkles size={13} />
                                            Limited Spots Available
                                        </div>
                                        <h2
                                            style={{
                                                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                                                fontWeight: 800,
                                                color: "#0d1117",
                                                lineHeight: 1.2,
                                                marginBottom: 10,
                                                letterSpacing: "-0.025em",
                                            }}
                                        >
                                            Join{" "}
                                            <span className="gradient-text">Zurely</span> Waitlist
                                        </h2>
                                        <p style={{ fontSize: 15, color: "#4b5563", lineHeight: 1.6 }}>
                                            Be among Malaysia's first real estate professionals to experience
                                            the future of property compliance. No spam, we will reach out to you when it's ready.
                                        </p>
                                    </div>

                                    <form onSubmit={handleSubmit}>
                                        {/* 2-column grid */}
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
                                                            color: "#374151",
                                                            marginBottom: 7,
                                                            letterSpacing: "0.01em",
                                                        }}
                                                    >
                                                        {field.label}
                                                        {field.required && (
                                                            <span style={{ color: "#00c563", marginLeft: 3 }}>*</span>
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

                                        {/* Error */}
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

                                        {/* PDPA notice */}
                                        <p
                                            style={{
                                                fontSize: 12,
                                                color: "#9ca3af",
                                                lineHeight: 1.6,
                                                marginBottom: 20,
                                                textAlign: "center",
                                            }}
                                        >
                                            By submitting, you agree to our{" "}
                                            <a href="/privacy-policy" style={{ color: "#00c563", textDecoration: "underline" }}>
                                                Privacy Policy
                                            </a>{" "}
                                            and consent to the processing of your personal data under the{" "}
                                            <strong style={{ color: "#4b5563" }}>Personal Data Protection Act 2010 (PDPA)</strong>.
                                        </p>

                                        {/* Submit */}
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
                                                        ? "rgba(0,197,99,0.5)"
                                                        : "linear-gradient(135deg, #00c563 0%, #0987e9 100%)",
                                                boxShadow: "0 0 30px rgba(0,197,99,0.2), 0 4px 16px rgba(0,0,0,0.1)",
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

                                    {/* Social proof */}
                                    <p
                                        style={{
                                            textAlign: "center",
                                            fontSize: 13,
                                            color: "#9ca3af",
                                            marginTop: 18,
                                        }}
                                    >
                                        Join Malaysia's growing community of real estate professionals — be first.
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
