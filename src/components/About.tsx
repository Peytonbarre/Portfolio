"use client"

import { motion } from "framer-motion"
import { Code, Rocket } from "lucide-react"

export default function About() {
  return (
    <section className="about" style={{ padding: '6rem 2rem' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="glass-container"
        >
          <div style={{ marginBottom: '3rem' }}>
            <h2 className="glass-heading-1" style={{ marginBottom: '1rem' }}>About Me</h2>
            <p className="glass-text-large">Passionate about creating elegant solutions to complex problems</p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            style={{
              marginBottom: '2rem',
              paddingLeft: '1rem',
              borderLeft: '3px solid rgba(255, 255, 255, 0.1)'
            }}
          >
            <h3 className="glass-heading-3" style={{
              marginBottom: '1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem'
            }}>
              <Code size={24} style={{ color: 'var(--color-trust)' }} />
              Development Journey
            </h3>
            <p className="glass-text">
              With over 2 years of experience in web development, I&apos;ve worked on a variety of projects
              ranging from small club websites to large-scale enterprise applications.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            style={{
              paddingLeft: '1rem',
              borderLeft: '3px solid rgba(255, 255, 255, 0.1)'
            }}
          >
            <h3 className="glass-heading-3" style={{
              marginBottom: '1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem'
            }}>
              <Rocket size={24} style={{ color: 'var(--color-growth)' }} />
              Approach to Work
            </h3>
            <p className="glass-text">
              I believe in a collaborative approach to development, working closely with clients and
              team members to understand their needs and deliver solutions that exceed expectations.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
