import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "../sections/Footer";
import WaitlistModal from "../sections/WaitlistModal";
import { useModal } from "../context/ModalContext";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface LayoutProps {
    children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    const { isOpen, closeModal, openModal } = useModal();
    const [showToast, setShowToast] = useState(true);

    return (
        <>
            <div className="page-bg">
                <div className="page-orb-center" />
            </div>
            <div className="noise-overlay" />

            <div style={{
                position: "relative",
                zIndex: 2,
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                background: "transparent"
            }}>
                <Navbar
                    links={[
                        { label: "Join the Waitlist", isButton: true, onClick: openModal },
                    ]}
                />

                <main style={{ flex: 1, position: "relative" }}>
                    {children}
                </main>

                <Footer onJoin={openModal} />

                {/* Global PDPA/Privacy Toast - Closeable & Animated */}
                {/* <AnimatePresence>
                    {showToast && (
                        <motion.div
                            initial={{ opacity: 0, y: 20, x: 20 }}
                            animate={{ opacity: 1, y: 0, x: 0 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            style={{
                                position: "fixed",
                                bottom: 24,
                                right: 24,
                                zIndex: 100,
                                maxWidth: 280,
                                background: "rgba(255, 255, 255, 0.98)",
                                backdropFilter: "blur(12px)",
                                padding: "14px 18px",
                                borderRadius: 16,
                                border: "1px solid rgba(0, 197, 99, 0.2)",
                                boxShadow: "0 10px 40px rgba(0,0,0,0.12)",
                                fontSize: 12,
                                color: "#4b5563",
                                lineHeight: 1.5,
                            }}
                        >
                            <button
                                onClick={() => setShowToast(false)}
                                style={{
                                    position: "absolute",
                                    top: 8,
                                    right: 8,
                                    background: "transparent",
                                    border: "none",
                                    cursor: "pointer",
                                    color: "#9ca3af",
                                    padding: 4,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center"
                                }}
                            >
                                <X size={14} />
                            </button>
                            <div style={{ display: "flex", gap: 10, alignItems: "flex-start", paddingRight: 12 }}>
                                <div style={{
                                    width: 6,
                                    height: 6,
                                    borderRadius: "50%",
                                    background: "#00c563",
                                    marginTop: 6,
                                    flexShrink: 0
                                }} />
                                <p style={{ margin: 0 }}>
                                    <span style={{ fontWeight: 700, color: "#0d1117" }}>Privacy Notice:</span><br /> Your data is only used for incoming updates and product communication.
                                </p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence> */}
            </div>

            <WaitlistModal isOpen={isOpen} onClose={closeModal} />
        </>
    );
}
