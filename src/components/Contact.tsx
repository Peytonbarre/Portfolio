"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="contact-header"
        >
          <h2>Get in Touch</h2>
          <p>Feel free to reach out for collaborations or just a friendly hello</p>
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
            <a href="mailto:peytonbarre54@gmail.com" className="email-link">
              peytonbarre54@gmail.com
            </a>
          </div>

          <div className="social-links">
            <a
              href="https://github.com/PeytonBarre"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              title="GitHub"
            >
              <Github />
            </a>
            <a
              href="https://www.linkedin.com/in/peytonbarre/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              title="LinkedIn"
            >
              <Linkedin />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 