"use client"

import { motion } from "framer-motion"
import { Code, Rocket } from "lucide-react"

export default function About() {
  return (
    <section className="about">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="about-content"
        >
          <div className="about-header">
            <h2>About Me</h2>
            <p>Passionate about creating elegant solutions to complex problems</p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="about-card"
          >
            <h3>
              <Code className="icon" />
              Development Journey
            </h3>
            <p>
              With over 2 years of experience in web development, I&apos;ve worked on a variety of projects
              ranging from small club websites to large-scale enterprise applications.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="about-card"
          >
            <h3>
              <Rocket className="icon" />
              Approach to Work
            </h3>
            <p>
              I believe in a collaborative approach to development, working closely with clients and
              team members to understand their needs and deliver solutions that exceed expectations.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 