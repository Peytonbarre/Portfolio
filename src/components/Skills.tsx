"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from 'react'

// Define your skills with their levels (weight)
const skillsData = [
  { text: 'AWS', level: 'expert' },
  { text: 'TypeScript', level: 'expert' },
  { text: 'Next.js', level: 'expert' },
  { text: 'React', level: 'expert' },
  { text: 'Node.js', level: 'advanced' },
  { text: 'Git', level: 'advanced' },
  { text: 'REST APIs', level: 'advanced' },
  { text: 'Tailwind CSS', level: 'advanced' },
  { text: 'MongoDB', level: 'intermediate' },
  { text: 'PostgreSQL', level: 'intermediate' },
  { text: 'Security', level: 'intermediate' },
  { text: 'GraphQL', level: 'intermediate' },
  { text: 'Docker', level: 'intermediate' },
  { text: 'Azure', level: 'intermediate' },
  { text: 'Flask', level: 'intermediate' },
  { text: 'CI/CD', level: 'intermediate' },
]

export default function Skills() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const getFontSize = (level: string) => {
    switch(level) {
      case 'expert': return '1.4rem';
      case 'advanced': return '1.2rem';
      case 'intermediate': return '1rem';
      default: return '1rem';
    }
  }

  const getOpacity = (level: string) => {
    switch(level) {
      case 'expert': return 1;
      case 'advanced': return 0.85;
      case 'intermediate': return 0.7;
      default: return 0.7;
    }
  }

  return (
    <section className="skills" style={{ padding: '8rem 2rem' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <h2 className="glass-heading-1" style={{ marginBottom: '1rem' }}>Skills</h2>
          <p className="glass-text">Technologies and tools I work with</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="glass-container"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '1.5rem',
            padding: '3rem',
            minHeight: '400px'
          }}
        >
          {skillsData.map((skill, index) => (
            <motion.span
              key={skill.text}
              className="glass-badge mono"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
                ease: "easeOut"
              }}
              whileHover={{
                scale: 1.1,
                y: -5,
                transition: { duration: 0.2 }
              }}
              style={{
                fontSize: getFontSize(skill.level),
                fontWeight: skill.level === 'expert' ? 700 : skill.level === 'advanced' ? 600 : 500,
                opacity: getOpacity(skill.level),
                cursor: 'default',
                userSelect: 'none'
              }}
            >
              {skill.text}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  )
} 