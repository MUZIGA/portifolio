"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Mail, Phone, MapPin, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CVPage() {
  return (
    <main className="bg-background text-foreground overflow-hidden">
      <Navigation />
      <section className="py-20 px-4 sm:px-6 lg:px-8 mt-16 bg-gradient-to-br from-background via-card/20 to-background">
        <div className="max-w-4xl mx-auto">
          {/* Header Card */}
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-3xl p-12 mb-12 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent/5 rounded-full blur-xl"></div>
            <div className="relative z-10">
              <div className="w-32 h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full mx-auto mb-6 flex items-center justify-center border-4 border-primary/30">
                <span className="text-4xl font-bold text-primary">JM</span>
              </div>
              <h1 className="text-5xl font-bold mb-4 gradient-text">Judith Muziga</h1>
              <p className="text-2xl text-primary mb-8 font-medium">Frontend Developer</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="bg-white/50 backdrop-blur-sm rounded-xl p-4 border border-primary/20">
                  <Mail size={20} className="text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium">umuzigajudit@gmail.com</p>
                </div>
                <div className="bg-white/50 backdrop-blur-sm rounded-xl p-4 border border-primary/20">
                  <Phone size={20} className="text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium">+250 786 184 438</p>
                </div>
                <div className="bg-white/50 backdrop-blur-sm rounded-xl p-4 border border-primary/20">
                  <MapPin size={20} className="text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium">Rwanda</p>
                </div>
              </div>
              <Button 
                onClick={() => window.print()}
                className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                <Download size={20} className="mr-2" />
                Download CV
              </Button>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="mb-12">
            <div className="bg-card/50 border border-border rounded-2xl p-8 hover:border-primary/50 transition-all">
              <h2 className="text-3xl font-bold mb-6 text-primary flex items-center gap-3">
                <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                  <span className="text-primary font-bold">💼</span>
                </div>
                Professional Summary
              </h2>
              <p className="text-foreground/80 leading-relaxed text-lg">
                Dedicated Frontend Developer with expertise in modern web technologies including React, Next.js, and TypeScript. 
                Experience in healthcare technology, e-commerce solutions, and tax management systems. 
                Passionate about creating user-friendly, responsive web applications with clean, maintainable code.
              </p>
            </div>
          </div>

          {/* Experience */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-primary flex items-center gap-3">
              <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold">🚀</span>
              </div>
              Work Experience
            </h2>
            
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-primary/5 to-transparent border-l-4 border-primary rounded-r-2xl p-8 hover:shadow-lg transition-all">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-2xl font-bold text-foreground">Frontend Developer</h3>
                  <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">2023 - Present</span>
                </div>
                <p className="text-primary font-semibold mb-4">Freelance</p>
                <div className="grid gap-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-foreground/80">Developed MedEase healthcare platform with patient management features</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-foreground/80">Built responsive e-commerce solutions with modern UI/UX</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-foreground/80">Created A2 tax management system with automated calculations</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-foreground/80">Collaborated with clients to deliver custom web applications</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-accent/5 to-transparent border-l-4 border-accent rounded-r-2xl p-8 hover:shadow-lg transition-all">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-2xl font-bold text-foreground">Barista</h3>
                  <span className="bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium">2022 - 2023</span>
                </div>
                <p className="text-accent font-semibold mb-4">Coffee Shop</p>
                <div className="grid gap-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-foreground/80">Provided excellent customer service in fast-paced environment</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-foreground/80">Managed multiple orders and maintained quality standards</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-foreground/80">Developed strong communication and multitasking skills</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-primary">Technical Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">Frontend Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {["HTML5", "CSS3", "JavaScript", "React", "Next.js", "TypeScript", "Tailwind CSS"].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Tools & Others</h3>
                <div className="flex flex-wrap gap-2">
                  {["Git", "VS Code", "Responsive Design", "API Integration", "Database Design"].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-primary">Key Projects</h2>
            <div className="space-y-4">
              <div className="bg-card/50 border border-border rounded-lg p-4">
                <h3 className="font-semibold text-lg">MedEase Healthcare Platform</h3>
                <p className="text-foreground/70 mt-1">Healthcare management system with patient records and appointment scheduling</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">React</span>
                  <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Node.js</span>
                  <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Healthcare</span>
                </div>
              </div>

              <div className="bg-card/50 border border-border rounded-lg p-4">
                <h3 className="font-semibold text-lg">E-Commerce Platform</h3>
                <p className="text-foreground/70 mt-1">Full-featured online store with payment integration and inventory management</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Next.js</span>
                  <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Stripe</span>
                  <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">E-commerce</span>
                </div>
              </div>

              <div className="bg-card/50 border border-border rounded-lg p-4">
                <h3 className="font-semibold text-lg">A2 Tax Management System</h3>
                <p className="text-foreground/70 mt-1">Professional tax calculation and management system with reporting features</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">JavaScript</span>
                  <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Database</span>
                  <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Tax Software</span>
                </div>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-primary">Education & Interests</h2>
            <div className="bg-card/50 border border-border rounded-lg p-4">
              <h3 className="font-semibold">Self-Taught Developer</h3>
              <p className="text-foreground/70 mt-1">Continuous learning through online courses, documentation, and practical projects</p>
              <p className="text-foreground/70 mt-2">
                <strong>Interests:</strong> Web Development, Coffee Culture, Technology Trends, User Experience Design
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}