import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Menu, X } from "lucide-react"
import { useModal } from "../context/ModalContext"
import { Link } from "react-router-dom"

type NavbarProps = {
  logoSrc: string
}

export default function Navbar({ logoSrc }: NavbarProps) {
  const [open, setOpen] = useState(false)
  const { openModal } = useModal()

  return (
    <nav className="relative w-full h-[var(--navbar-height)] bg-[color:var(--glass-bg)] backdrop-blur-xl border-b border-[color:var(--glass-border)] shadow-[0_2px_20px_rgba(0,0,0,0.06)] z-50">
      <div className="max-w-[1200px] mx-auto h-full flex items-center justify-between px-6 md:px-12">

        <Link to="/"><img src={logoSrc} alt="Zurely" className="h-[50px] md:h-[100px] w-auto block" /></Link>

        <div className="hidden md:flex items-center gap-12">
          <a
            href="#features"
            className="no-underline text-base font-semibold text-[color:var(--text-secondary)] transition-all duration-200 hover:text-[color:var(--brand-green-dark)] hover:-translate-y-[1px]"
          >
            What's Coming
          </a>
          <button
            onClick={openModal}
            className="inline-flex items-center px-8 py-3.5 rounded-xl font-bold text-base text-white bg-gradient-to-br from-[#2CCB6F] to-[#1A47A9] border-none cursor-pointer transition-all duration-200 tracking-wide shadow-[0_4px_15px_rgba(44,203,111,0.2)] hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-[0_6px_20px_rgba(44,203,111,0.3)] btn-shimmer"
          >
            Early Access
          </button>
        </div>

        <button
          className="md:hidden flex bg-transparent border-none cursor-pointer text-[color:var(--text-secondary)] p-2.5 rounded-lg"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="absolute top-full left-0 right-0 z-[500] flex flex-col bg-[color:var(--glass-bg)] backdrop-blur-xl border-b border-[color:var(--glass-border)] p-5 gap-3 shadow-[0_8px_30px_rgba(0,0,0,0.1)]"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <a
              href="#features"
              className="p-3.5 no-underline text-[color:var(--text-secondary)] text-base font-semibold rounded-xl text-center"
              onClick={() => setOpen(false)}
            >
              What's Coming
            </a>
            <button
              onClick={() => { openModal(); setOpen(false) }}
              className="p-4 rounded-xl font-bold text-base text-white bg-gradient-to-br from-[#2CCB6F] to-[#1A47A9] border-none cursor-pointer"
            >
              Early Access
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}