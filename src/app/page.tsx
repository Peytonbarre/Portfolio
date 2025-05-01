import Hero from "@/components/Hero"
import About from "@/components/About"
import Projects from "@/components/Projects"
import Skills from "@/components/Skills"
import Contact from "@/components/Contact"

export default function Home() {
  return (
    <div className="space-y-32">
      <section id="hero" className="min-h-screen flex items-center">
        <Hero />
      </section>
      
      <section id="about" className="scroll-mt-16">
        <About />
      </section>
      
      <section id="projects" className="scroll-mt-16">
        <Projects />
      </section>
      
      <section id="skills" className="scroll-mt-16">
        <Skills />
      </section>
      
      <section id="contact" className="scroll-mt-16">
        <Contact />
      </section>
    </div>
  )
}
