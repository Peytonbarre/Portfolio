"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { motion } from "framer-motion"

export default function Navbar() {
  const [mounted, setMounted] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)

    const handleScroll = () => {
      const sections = ["home", "about", "projects", "skills", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const top = element.offsetTop
          const height = element.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.nav 
      className="navbar"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <Link href="/" className="logo">
          <span className="logo-text">PB</span>
        </Link>
        
        <div className="nav-links">
          <Link 
            href="#about" 
            className={activeSection === "about" ? "active" : ""}
          >
            About
          </Link>
          <Link 
            href="#projects"
            className={activeSection === "projects" ? "active" : ""}
          >
            Projects
          </Link>
          <Link 
            href="#skills"
            className={activeSection === "skills" ? "active" : ""}
          >
            Skills
          </Link>
          <Link 
            href="#contact"
            className={activeSection === "contact" ? "active" : ""}
          >
            Contact
          </Link>
          
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="theme-toggle"
            aria-label="Toggle theme"
          >
            {mounted && theme === "dark" ? (
              <Sun className="icon" />
            ) : (
              <Moon className="icon" />
            )}
          </button>
        </div>
      </div>
    </motion.nav>
  )
} 