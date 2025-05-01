"use client"

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Set initial position lower than center (you can adjust the -30% value to position it exactly where you want)
    if (heroRef.current) {
      heroRef.current.style.transform = 'translateY(-10%)'
    }

    const handleScroll = () => {
      if (heroRef.current) {
        const scrollY = window.scrollY
        const speed = 0.6
        const maxScroll = 300 // Maximum pixels the image can move
        const translateY = Math.min(scrollY * speed, maxScroll)
        heroRef.current.style.transform = `translateY(calc(-10% + ${translateY}px))`
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left"
          >
            <span className="hero-greeting">Hello, I&apos;m</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl">Peyton Barre</h1>
            <div className="hero-title">
              <span className="gradient-text text-2xl md:text-3xl lg:text-4xl">Full Stack Developer</span>
            </div>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base md:text-lg"
          >
            I&apos;m a passionate developer specializing in creating functional web applications, cloud development,
            and platform security. With expertise in modern technologies and a focus on user experience, I bring ideas to life 
            through clean, efficient code.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="hero-social flex justify-center md:justify-start"
          >
            <a
              href="mailto:peytonbarre54@gmail.com"
              className="social-link"
              title="Email"
            >
              <Mail />
            </a>
            <a
              href="https://github.com/PeytonBarre"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              title="GitHub"
            >
              <Github />
            </a>
            <a
              href="https://www.linkedin.com/in/peytonbarre/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              title="LinkedIn"
            >
              <Linkedin />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="hero-cta flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <a href="#projects" className="primary text-center">View My Work</a>
            <a href="#contact" className="secondary text-center">Get in Touch</a>
          </motion.div>
        </div>
        <div className="hero-image" ref={heroRef}>
          <Image 
            src="/photo.jpg" 
            alt="Peyton Barre"
            width={500}
            height={500}
            priority
            quality={90}
            loading="eager"
            className="w-full h-full object-cover rounded-[3rem] relative z-[1]"
          />
          <div className="hero-image-glow" />
        </div>
      </div>
    </section>
  )
} 