"use client"

import { motion } from "framer-motion"
import { Github, ExternalLink } from "lucide-react"

const projects = [
  {
    title: "Nebula Planner",
    description: "A full-stack application built with React and TypeScript",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Pyton"],
    github: "https://github.com/UTDNebula/planner",
    live: "https://planner.utdnebula.com/",
  },
  {
    title: "CareCompare",
    description: "A full-stack hackathon application with image processing and NLP",
    technologies: ["Flask", "NLP", "CV", "Python"],
    github: "https://github.com/crispynoodlesoup/CareCompare",
    live: "https://care-compare-beryl.vercel.app/",
  },
  {
    title: "ML-IDS",
    description: "Backend application for comparing ML-IDS models",
    technologies: ["Pandas", "ML", "mySQL"],
    github: "https://github.com/Peytonbarre/MachineLearningIDS",
  },
  {
    title: "Pluto: Club Finance",
    description: "A full-stack application for managing club finances",
    technologies: ["Next.js", "Typescript", "PostgreSQL"],
    github: "https://github.com/skathiresan3/club-finance",
  },
]

export default function Projects() {
  return (
    <section className="projects">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="projects-header"
        >
          <h2>My Projects</h2>
          <p>Here are some of the projects I've worked on</p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="project-card"
            >
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              
              <div className="project-technologies">
                {project.technologies.map((tech) => (
                  <span key={tech} className="project-tag">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <Github className="project-icon" />
                  GitHub
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <ExternalLink className="project-icon" />
                    Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 