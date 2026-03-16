import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle, Loader, ArrowRight, X, Check } from "lucide-react";

const SHEET_ENDPOINT =
    "https://script.google.com/macros/s/AKfycbzr03QfN2GiVtTyEBvvVBn428R28GudHgab05T4o6bZBynGeBvjiXG_ZT_Kj5o3mWmb/exec";

type FormState = "idle" | "loading" | "success" | "error";
interface FormData { name: string; email: string; phone: string; agency: string; }

export default function WaitlistModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    const [formData, setFormData] = useState<FormData>({ name: "", email: "", phone: "", agency: "" });
    const [formState, setFormState] = useState<FormState>("idle");
    const [errorMsg, setErrorMsg] = useState("");

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflowY = "hidden";
        } else {
            document.body.style.overflowY = "";
        }
        return () => { document.body.style.overflowY = ""; };
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
                    className="fixed inset-0 z-[1000] flex items-center justify-center p-6 bg-[rgba(15,20,35,0.55)] backdrop-blur-md"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
                >
                    <motion.div
                        className="bg-[color:var(--modal-bg)] w-full max-w-[600px] max-h-[95vh] min-[520px]:max-h-[90vh] overflow-y-auto shadow-[0_24px_80px_rgba(0,0,0,0.18),0_4px_20px_rgba(0,0,0,0.08)] border border-[rgba(44,203,111,0.15)] relative text-[color:var(--text-primary)] p-5 min-[380px]:p-6 min-[520px]:py-12 min-[520px]:px-11 rounded-[20px] min-[520px]:rounded-[28px]"
                        initial={{ opacity: 0, scale: 0.92, y: 30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.94, y: 20 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <button
                            onClick={onClose}
                            aria-label="Close"
                            className="absolute top-5 right-5 w-9 h-9 rounded-[10px] border-[1.5px] border-[color:var(--border)] bg-[color:var(--bg-surface-2)] text-[color:var(--text-secondary)] cursor-pointer flex items-center justify-center transition-colors duration-200 hover:bg-[rgba(0,0,0,0.08)]"
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
                                    className="text-center py-6"
                                >
                                    <div
                                        className="success-bounce flex justify-center mb-6"
                                    >
                                        <div
                                            className="w-[72px] h-[72px] min-[480px]:w-[88px] min-[480px]:h-[88px] rounded-full flex items-center justify-center bg-[rgba(44,203,111,0.1)] border-2 border-[rgba(44,203,111,0.35)]"
                                        >
                                            <CheckCircle size={44} className="text-[#2CCB6F]" />
                                        </div>
                                    </div>
                                    <h3
                                        className="text-[22px] min-[480px]:text-[26px] font-extrabold text-[color:var(--text-primary)] mb-3 tracking-[-0.02em] flex items-center justify-center gap-2"
                                    >
                                        You’re Confirmed for Early Access
                                        <Check size={18} className="min-[480px]:w-[22px] min-[480px]:h-[22px] text-[#2CCB6F]" />
                                    </h3>
                                    <p className="text-[color:var(--text-secondary)] text-base leading-[1.65] mb-2">
                                        Thank you for your interest in Zurely. You have been successfully added to our priority waitlist. We will notify you as soon as our next beta cohort opens
                                    </p>
                                    <p className="text-sm text-[#2CCB6F] font-semibold">
                                        In the meantime, feel free to explore our mission at zurely.my
                                    </p>
                                    <button
                                        onClick={onClose}
                                        className="mt-7 py-3 px-8 rounded-xl bg-[rgba(44,203,111,0.1)] border-[1.5px] border-[rgba(44,203,111,0.25)] text-[#23A259] font-semibold text-[15px] cursor-pointer font-inherit transition-colors duration-200 hover:bg-[rgba(44,203,111,0.15)]"
                                    >
                                        Return to Site
                                    </button>
                                </motion.div>
                            ) : (
                                <motion.div key="form" initial={{ opacity: 1 }} exit={{ opacity: 0 }}>

                                    <div className="mb-5 max-sm:pr-0 pr-8">
                                        <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-extrabold text-[color:var(--text-primary)] leading-[1.2] mb-2.5 tracking-[tight]">
                                            Join the Zurely Beta
                                        </h2>
                                        <p className="text-[15px] text-[color:var(--text-secondary)] leading-[1.6]">
                                            Be among the first to experience the new standard in digital tenancy. Secure
                                            early access to a workflow that automates your compliance and protects your deals.
                                        </p>
                                    </div>

                                    <form onSubmit={handleSubmit}>

                                        <div
                                            className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4 mb-5"
                                        >
                                            {fields.map((field) => (
                                                <div key={field.name}>
                                                    <label
                                                        htmlFor={field.name}
                                                        className="block text-[13px] font-semibold text-[color:var(--text-secondary)] mb-[7px] tracking-[0.01em]"
                                                    >
                                                        {field.label}
                                                        {field.required && (
                                                            <span className="text-[color:var(--brand-green)] ml-[3px]">*</span>
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
                                                        className="w-full bg-[color:var(--bg-surface)] border-[1.5px] border-[color:var(--border)] text-[color:var(--text-primary)] rounded-xl py-3.5 px-4.5 text-[15px] font-inherit outline-none transition-all duration-200 placeholder:text-[color:var(--text-muted)] focus:bg-[color:var(--bg-page)] focus:border-[rgba(44,203,111,0.6)] focus:shadow-[0_0_0_3px_rgba(44,203,111,0.1)]"
                                                    />
                                                </div>
                                            ))}
                                        </div>

                                        {formState === "error" && (
                                            <motion.p
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                className="text-[13px] text-[#dc2626] bg-[rgba(220,38,38,0.07)] border border-[rgba(220,38,38,0.2)] rounded-[10px] p-[12px_16px] text-center mb-4"
                                            >
                                                {errorMsg}
                                            </motion.p>
                                        )}

                                        <p className="text-[12px] text-[color:var(--text-muted)] leading-[1.6] mb-5 text-center">
                                            By submitting, you agree to our{" "}
                                            <a href="/privacy-policy" className="text-[#2CCB6F] underline">
                                                Privacy Policy
                                            </a>{" "}
                                            and consent to the processing of your personal data under the{" "}
                                            <strong className="text-[color:var(--text-secondary)]">Personal Data Protection Act (PDPA) 2010 </strong>and <strong className="text-[color:var(--text-secondary)]">its 2024 Amendments</strong>.
                                        </p>

                                        <button
                                            type="submit"
                                            disabled={formState === "loading"}
                                            className={`btn-shimmer w-full flex items-center justify-center gap-2.5 py-4 px-8 rounded-xl font-bold text-base text-white border-none transition-all duration-200 font-inherit tracking-[0.01em] shadow-[0_0_30px_rgba(44,203,111,0.2),0_4px_16px_rgba(0,0,0,0.1)] ${
                                                formState === "loading"
                                                    ? 'cursor-not-allowed bg-[rgba(44,203,111,0.5)] opacity-75'
                                                    : 'cursor-pointer bg-gradient-to-br from-[#2CCB6F] to-[#1A47A9] hover:scale-[1.02]'
                                            }`}
                                        >
                                            {formState === "loading" ? (
                                                <>
                                                    <Loader size={18} className="animate-spin" />
                                                    Submitting…
                                                </>
                                            ) : (
                                                <>
                                                    Secure My Spot <ArrowRight size={18} />
                                                </>
                                            )}
                                        </button>
                                    </form>

                                    <p className="text-center text-[13px] text-[color:var(--text-muted)] mt-4.5">
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
