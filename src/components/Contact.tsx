"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="contact" style={{ padding: '6rem 2rem 4rem' }}>
      <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          <h2 className="glass-heading-1" style={{ marginBottom: '1rem' }}>Get in Touch</h2>
          <p className="glass-text">Feel free to reach out for collaborations or just a friendly hello</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="glass-container"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '2rem',
            padding: '3rem'
          }}
        >
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            padding: '1rem 2rem',
            background: 'var(--glass-elevated)',
            borderRadius: '12px',
            border: '1px solid var(--glass-border)'
          }}>
            <Mail size={24} style={{ color: 'var(--color-energy)' }} />
            <a
              href="mailto:peytonbarre54@gmail.com"
              className="glass-text"
              style={{ textDecoration: 'none', fontSize: '1.1rem', transition: 'color 0.2s' }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
            >
              peytonbarre54@gmail.com
            </a>
          </div>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <a
              href="https://github.com/PeytonBarre"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-btn"
              title="GitHub"
              style={{
                padding: '0.75rem',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/peytonbarre/"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-btn"
              title="LinkedIn"
              style={{
                padding: '0.75rem',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Linkedin size={20} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
