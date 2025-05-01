"use client"

import { motion } from "framer-motion"
import { Mail, Github, Linkedin, Twitter } from "lucide-react"

export default function Contact() {
  return (
    <section className="contact">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="contact-header"
        >
          <h2>Get in Touch</h2>
          <p>Let's connect and create something amazing together</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="contact-content"
        >
          <div className="contact-main">
            <Mail className="icon" />
            <a href="mailto:your.email@example.com" className="email-link">
              your.email@example.com
            </a>
          </div>

          <div className="social-links">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <Github />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <Linkedin />
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <Twitter />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 