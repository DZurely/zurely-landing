import React from "react";
import Footer from "../sections/Footer";
import WaitlistModal from "../sections/WaitlistModal";
import { useModal } from "../context/ModalContext";
import FloatingWaitlistButton from "./FloatingWaitlistButton";
import Navbar from "./Navbar";

interface LayoutProps {
    children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    const { isOpen, closeModal, openModal } = useModal();

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
                background: "transparent",
            }}>
                <Navbar logoSrc="/zurely-w-text-transparent.png" />

                <main style={{ flex: 1, position: "relative" }}>
                    {children}
                </main>

                <Footer onJoin={openModal} />
            </div>

            <FloatingWaitlistButton onClick={openModal} />
            <WaitlistModal isOpen={isOpen} onClose={closeModal} />
        </>
    );
}

