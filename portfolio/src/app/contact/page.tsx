import Navigation from "@/components/navigation"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function ContactPage() {
  return (
    <main className="bg-background text-foreground overflow-hidden">
      <Navigation />
      <Contact />
      <Footer />
    </main>
  )
}