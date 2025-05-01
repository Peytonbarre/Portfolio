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

  return (
    <section className="skills">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="skills-header"
        >
          <h2>Skills</h2>
          <p>Technologies and tools I work with</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="skills-cloud"
        >
          {skillsData.map((skill, index) => (
            <motion.span
              key={skill.text}
              className={`skill-tag ${skill.level}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut"
              }}
              whileHover={{
                scale: 1.1,
                y: -5,
                transition: { duration: 0.2 }
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