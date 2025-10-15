"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Moon, Sun, Menu, X } from "lucide-react"
import { motion } from "framer-motion"

export default function Navbar() {
  const [mounted, setMounted] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)

    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setScrolled(scrollPosition > 100)

      const sections = ["home", "about", "projects", "contact"]
      const scrollPos = scrollPosition + 100

      for (const section of sections) {
        const element = document.getElementById(section === "home" ? "hero" : section)
        if (element) {
          const top = element.offsetTop
          const height = element.offsetHeight
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleLinkClick = () => {
    setIsMenuOpen(false)
  }

  const handleThemeToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark")
    setIsMenuOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: '20px 0',
        pointerEvents: 'none'
      }}
    >
      <div className={scrolled ? 'navbar-scrolled' : ''} style={{
        width: scrolled ? '800px' : '100%',
        maxWidth: scrolled ? '800px' : '100%',
        margin: '0 auto',
        background: scrolled ? 'var(--glass-surface)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
        border: scrolled ? '1px solid var(--glass-border)' : 'none',
        borderRadius: scrolled ? '20px' : '0',
        padding: scrolled ? '0.75rem 1.5rem' : '1.5rem 2rem',
        transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        boxShadow: scrolled ? 'var(--shadow-md)' : 'none',
        pointerEvents: 'auto',
        transform: scrolled ? 'scale(0.98)' : 'scale(1)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link href="/" style={{ textDecoration: 'none' }}>
            <span style={{
              fontSize: scrolled ? '1.125rem' : '1.25rem',
              fontWeight: '600',
              letterSpacing: '-0.02em',
              transition: 'all 0.3s ease',
              color: 'var(--text-primary)',
              cursor: 'pointer'
            }}>PB</span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--text-primary)',
              cursor: 'pointer',
              padding: '0.5rem',
              display: 'none'
            }}
            className="mobile-menu-toggle"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Navigation Links */}
          <div style={{
            display: 'flex',
            gap: scrolled ? '1.5rem' : '2rem',
            alignItems: 'center'
          }}>
            <Link
              href="#about"
              onClick={handleLinkClick}
              style={{
                background: 'transparent',
                border: 'none',
                color: activeSection === "about" ? 'var(--text-primary)' : 'var(--text-secondary)',
                fontSize: scrolled ? '0.875rem' : '0.925rem',
                fontWeight: '500',
                cursor: 'pointer',
                padding: '0.5rem 0.75rem',
                borderRadius: '8px',
                transition: 'all 0.2s ease',
                textDecoration: 'none'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--text-primary)'
                e.currentTarget.style.background = 'var(--accent-subtle)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = activeSection === "about" ? 'var(--text-primary)' : 'var(--text-secondary)'
                e.currentTarget.style.background = 'transparent'
              }}
            >
              About
            </Link>
            <Link
              href="#projects"
              onClick={handleLinkClick}
              style={{
                background: 'transparent',
                border: 'none',
                color: activeSection === "projects" ? 'var(--text-primary)' : 'var(--text-secondary)',
                fontSize: scrolled ? '0.875rem' : '0.925rem',
                fontWeight: '500',
                cursor: 'pointer',
                padding: '0.5rem 0.75rem',
                borderRadius: '8px',
                transition: 'all 0.2s ease',
                textDecoration: 'none'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--text-primary)'
                e.currentTarget.style.background = 'var(--accent-subtle)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = activeSection === "projects" ? 'var(--text-primary)' : 'var(--text-secondary)'
                e.currentTarget.style.background = 'transparent'
              }}
            >
              Projects
            </Link>
            <Link
              href="#contact"
              onClick={handleLinkClick}
              style={{
                background: 'transparent',
                border: 'none',
                color: activeSection === "contact" ? 'var(--text-primary)' : 'var(--text-secondary)',
                fontSize: scrolled ? '0.875rem' : '0.925rem',
                fontWeight: '500',
                cursor: 'pointer',
                padding: '0.5rem 0.75rem',
                borderRadius: '8px',
                transition: 'all 0.2s ease',
                textDecoration: 'none'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--text-primary)'
                e.currentTarget.style.background = 'var(--accent-subtle)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = activeSection === "contact" ? 'var(--text-primary)' : 'var(--text-secondary)'
                e.currentTarget.style.background = 'transparent'
              }}
            >
              Contact
            </Link>

            <div style={{
              width: '1px',
              height: '20px',
              background: 'var(--glass-border)',
              margin: '0 0.5rem'
            }} />

            <button
              onClick={handleThemeToggle}
              className="glass-btn"
              aria-label="Toggle theme"
              style={{
                padding: '0.5rem 0.75rem',
                borderRadius: '10px'
              }}
            >
              {mounted && theme === "dark" ? (
                <Sun style={{ width: '1.25rem', height: '1.25rem' }} />
              ) : (
                <Moon style={{ width: '1.25rem', height: '1.25rem' }} />
              )}
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
