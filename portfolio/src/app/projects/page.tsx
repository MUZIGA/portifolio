import Navigation from "@/components/navigation"
import Projects from "@/components/projects"
import Footer from "@/components/footer"

export default function ProjectsPage() {
  return (
    <main className="bg-background text-foreground overflow-hidden">
      <Navigation />
      <Projects />
      <Footer />
    </main>
  )
}