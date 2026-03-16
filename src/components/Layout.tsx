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
            <div className={`fixed inset-0 z-0 bg-[color:var(--bg-page)] overflow-hidden before:absolute before:content-[''] before:-top-[30%] before:-left-[10%] before:w-[70%] before:h-[70%] before:bg-[radial-gradient(ellipse_at_center,rgba(44,203,111,0.08)_0%,transparent_70%)] before:rounded-[50%] before:animate-[floatOrb1_20s_ease-in-out_infinite_alternate] before:will-change-transform after:absolute after:content-[''] after:-bottom-[20%] after:-right-[10%] after:w-[60%] after:h-[60%] after:bg-[radial-gradient(ellipse_at_center,rgba(26,71,169,0.07)_0%,transparent_70%)] after:rounded-[50%] after:animate-[floatOrb2_25s_ease-in-out_infinite_alternate] after:will-change-transform`}>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[55%] h-[55%] bg-[radial-gradient(ellipse_at_center,rgba(62,240,138,0.04)_0%,transparent_70%)] rounded-[50%] animate-[floatOrb3_28s_ease-in-out_infinite_alternate] will-change-transform" />
            </div>
            <div className="fixed inset-0 z-[1] pointer-events-none opacity-30 bg-[length:256px_256px] bg-[url('data:image/svg+xml,%3Csvg%20viewBox=%220%200%20256%20256%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter%20id=%22noise%22%3E%3CfeTurbulence%20type=%22fractalNoise%22%20baseFrequency=%220.9%22%20numOctaves=%224%22%20stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect%20width=%22100%25%22%20height=%22100%25%22%20filter=%22url(%23noise)%22%20opacity=%220.025%22/%3E%3C/svg%3E')]" />

            <div className="relative z-[2] min-h-screen flex flex-col bg-transparent">
                <Navbar logoSrc="/zurely-w-text-transparent.png" />

                <main className="flex-1 relative">
                    {children}
                </main>

                <Footer />
            </div>

            <FloatingWaitlistButton onClick={openModal} />
            <WaitlistModal isOpen={isOpen} onClose={closeModal} />
        </>
    );
}

