"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Github, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

const projects = [
  {
    title: "Nebula Planner",
    description: "A full-stack application built with React and TypeScript for course planning and scheduling",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Python"],
    github: "https://github.com/UTDNebula/planner",
    live: "https://planner.utdnebula.com/",
  },
  {
    title: "CareCompare",
    description: "A full-stack hackathon application with image processing and NLP for healthcare comparison",
    technologies: ["Flask", "NLP", "CV", "Python"],
    github: "https://github.com/crispynoodlesoup/CareCompare",
    live: "https://care-compare-beryl.vercel.app/",
  },
  {
    title: "ML-IDS",
    description: "Backend application for comparing machine learning intrusion detection system models",
    technologies: ["Pandas", "ML", "MySQL"],
    github: "https://github.com/Peytonbarre/MachineLearningIDS",
  },
  {
    title: "Pluto: Club Finance",
    description: "A full-stack application for managing club finances with budget tracking and reporting",
    technologies: ["Next.js", "TypeScript", "PostgreSQL"],
    github: "https://github.com/skathiresan3/club-finance",
  },
]

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const itemsPerPage = 3

  const nextProjects = () => {
    setCurrentIndex((prev) => (prev + itemsPerPage >= projects.length ? 0 : prev + itemsPerPage))
  }

  const prevProjects = () => {
    setCurrentIndex((prev) => (prev - itemsPerPage < 0 ? Math.max(0, projects.length - itemsPerPage) : prev - itemsPerPage))
  }

  const visibleProjects = projects.slice(currentIndex, currentIndex + itemsPerPage)
  const totalPages = Math.ceil(projects.length / itemsPerPage)
  const currentPage = Math.floor(currentIndex / itemsPerPage)

  return (
    <section className="projects" style={{ padding: '4rem 2rem' }}>
      <div className="container" style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <h2 className="glass-heading-1" style={{ marginBottom: '1rem' }}>Featured Projects</h2>
          <p className="glass-text" style={{ maxWidth: '600px', margin: '0 auto' }}>Building solutions that matter</p>
        </motion.div>

        <div style={{ position: 'relative' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            marginBottom: '3rem'
          }}>
            <AnimatePresence mode="wait">
              {visibleProjects.map((project, idx) => (
                <motion.div
                  key={`${currentIndex}-${idx}`}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3, delay: idx * 0.1 }}
                  className="glass-card"
                  style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
                >
                  <h3 className="glass-heading-3" style={{ marginBottom: '1rem' }}>{project.title}</h3>
                  <p className="glass-text" style={{ marginBottom: '1.5rem', flex: 1, minHeight: '60px' }}>{project.description}</p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                    {project.technologies.map((tech) => (
                      <span key={tech} className="glass-badge mono">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div style={{ display: 'flex', gap: '0.75rem', marginTop: 'auto', flexWrap: 'wrap' }}>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass-btn"
                      style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', flex: 1, justifyContent: 'center' }}
                    >
                      <Github size={16} />
                      Code
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="glass-btn-primary"
                        style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', flex: 1, justifyContent: 'center' }}
                      >
                        <ExternalLink size={16} />
                        Live
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1.5rem' }}>
            <button
              onClick={prevProjects}
              className="glass-btn"
              style={{ padding: '0.75rem', borderRadius: '12px' }}
              aria-label="Previous projects"
              disabled={currentIndex === 0}
            >
              <ChevronLeft size={20} />
            </button>

            {/* Page Indicators */}
            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index * itemsPerPage)}
                  style={{
                    width: index === currentPage ? '24px' : '8px',
                    height: '8px',
                    borderRadius: '4px',
                    background: index === currentPage ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 255, 255, 0.2)',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  aria-label={`Go to page ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextProjects}
              className="glass-btn"
              style={{ padding: '0.75rem', borderRadius: '12px' }}
              aria-label="Next projects"
              disabled={currentIndex + itemsPerPage >= projects.length}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Responsive styles */}
      <style jsx>{`
        @media (max-width: 1024px) {
          .container > div > div {
            grid-template-columns: 1fr 1fr !important;
          }
        }

        @media (max-width: 640px) {
          .container > div > div {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
