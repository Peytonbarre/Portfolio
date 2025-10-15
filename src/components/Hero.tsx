"use client"

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'

export default function Hero() {
  return (
    <section className="hero" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '10px 2rem 60px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="container" style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 2rem',
        width: '100%'
      }}>
        <div style={{
          maxWidth: '900px',
          margin: '0 auto',
          textAlign: 'left'
        }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="glass-display" style={{ marginBottom: '1.5rem', lineHeight: '1.05' }}>
              Peyton Barre
              <br />
              <span style={{ opacity: 0.5 }}>Full Stack Developer</span>
            </h1>

            <p className="glass-text-large" style={{
              maxWidth: '700px',
              marginBottom: '2.5rem',
              lineHeight: '1.8',
              opacity: 0.7
            }}>
              Building elegant solutions to complex problems. Specializing in web applications,
              cloud development, and platform security with modern technologies.
            </p>

            <div style={{ display: 'flex', gap: '1rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
              <a href="#projects" className="glass-btn-primary" style={{ padding: '1rem 2rem' }}>
                View My Work
              </a>
              <a href="#contact" className="glass-btn" style={{ padding: '1rem 2rem' }}>
                Get in Touch
              </a>
            </div>

            {/* Key metrics */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
              gap: '2rem',
              maxWidth: '600px',
              marginTop: '1rem'
            }}>
              <div>
                <div className="glass-text-tiny" style={{ marginBottom: '0.5rem' }}>EXPERIENCE</div>
                <div className="mono" style={{ fontSize: '1.5rem', fontWeight: '300' }}>2+ Years</div>
                <div className="glass-text-small" style={{ opacity: 0.5 }}>Full stack dev</div>
              </div>
              <div>
                <div className="glass-text-tiny" style={{ marginBottom: '0.5rem' }}>PROJECTS</div>
                <div className="mono" style={{ fontSize: '1.5rem', fontWeight: '300' }}>10+</div>
                <div className="glass-text-small" style={{ opacity: 0.5 }}>Shipped to prod</div>
              </div>
              <div>
                <div className="glass-text-tiny" style={{ marginBottom: '0.5rem' }}>FOCUS</div>
                <div className="mono" style={{ fontSize: '1.5rem', fontWeight: '300' }}>Cloud</div>
                <div className="glass-text-small" style={{ opacity: 0.5 }}>AWS & Azure</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background subtle gradient */}
      <div style={{
        position: 'absolute',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(255, 255, 255, 0.03) 0%, transparent 70%)',
        borderRadius: '50%',
        top: '20%',
        right: '10%',
        pointerEvents: 'none',
        zIndex: -1
      }} />
    </section>
  )
}
