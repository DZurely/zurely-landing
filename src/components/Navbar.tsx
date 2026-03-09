import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Menu, X } from "lucide-react"
import { useModal } from "../context/ModalContext"

type NavbarProps = {
  logoSrc: string
}

export default function Navbar({ logoSrc }: NavbarProps) {
  const [open, setOpen] = useState(false)
  const { openModal } = useModal()

  return (
    <nav className="navbar">
      <div className="navbar-container">

        <img src={logoSrc} alt="Zurely" className="logo" />

        <div className="nav-actions">
          <a
            href="#features"
            className="nav-link-ghost"
          >
            What's Coming
          </a>
          <button
            onClick={openModal}
            className="nav-cta btn-shimmer"
          >
            Early Access
          </button>
        </div>

        <button
          className="menu-button"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <a
              href="#features"
              className="mobile-menu-link"
              onClick={() => setOpen(false)}
            >
              What's Coming
            </a>
            <button
              onClick={() => { openModal(); setOpen(false) }}
              className="mobile-menu-cta"
            >
              Early Access
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}