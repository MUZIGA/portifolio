import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import Services from "@/components/services"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import About from "@/components/about"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="bg-background text-foreground overflow-hidden">
      <Navigation />
      <Hero />
      <Services />
      <Skills />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}
