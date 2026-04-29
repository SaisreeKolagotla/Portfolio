'use client'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleTheme } from '@/store/themeSlice'
import { toggleMobileMenu, closeMobileMenu } from '@/store/uiSlice'
import { motion, AnimatePresence } from 'framer-motion'
import { Sun, Moon, Menu, X, Code2 } from 'lucide-react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const dispatch = useDispatch()
  const dark = useSelector((state) => state.theme.dark)
  const mobileOpen = useSelector((state) => state.ui.mobileMenuOpen)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const handleNav = (href) => {
    dispatch(closeMobileMenu())
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'py-3 backdrop-blur-xl border-b'
            : 'py-5'
        }`}
        style={{
          backgroundColor: scrolled ? 'rgba(var(--bg-rgb, 6,8,16), 0.85)' : 'transparent',
          borderColor: scrolled ? 'var(--border)' : 'transparent',
        }}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); handleNav('#hero') }}
            className="flex items-center gap-2 group"
          >
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold"
              style={{ background: 'var(--brand)' }}
            >
              KG
            </div>
            <span className="font-bold text-lg hidden sm:block" style={{ color: 'var(--fg)' }}>
              Karthik<span style={{ color: 'var(--brand)' }}>.</span>
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNav(link.href) }}
                className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:text-[var(--brand)]"
                style={{ color: 'var(--fg-muted)' }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Theme toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => dispatch(toggleTheme())}
              className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors border"
              style={{
                borderColor: 'var(--border)',
                color: 'var(--fg-muted)',
                background: 'var(--card)',
              }}
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait">
                {dark ? (
                  <motion.div key="sun" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <Sun size={16} />
                  </motion.div>
                ) : (
                  <motion.div key="moon" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <Moon size={16} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => dispatch(toggleMobileMenu())}
              className="md:hidden w-9 h-9 rounded-lg flex items-center justify-center border"
              style={{ borderColor: 'var(--border)', color: 'var(--fg)', background: 'var(--card)' }}
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>

            {/* CTA - desktop */}
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNav('#contact') }}
              className="hidden md:flex btn-primary text-sm py-2 px-5"
            >
              Hire Me
            </a>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-16 left-4 right-4 z-40 rounded-2xl border p-4 shadow-2xl"
            style={{ background: 'var(--card)', borderColor: 'var(--border)' }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={(e) => { e.preventDefault(); handleNav(link.href) }}
                className="flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-colors hover:text-[var(--brand)]"
                style={{ color: 'var(--fg)' }}
              >
                {link.label}
              </motion.a>
            ))}
            <div className="mt-2 pt-2 border-t" style={{ borderColor: 'var(--border)' }}>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); handleNav('#contact') }}
                className="btn-primary w-full justify-center"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
