"use client"

import { Code2, Palette, Zap, Terminal, Layout, Layers } from "lucide-react"

const Services = () => {
  const services = [
    {
      icon: Code2,
      title: "Web Development",
      description:
        "Full-stack web development with React, Next.js, and TypeScript. Building scalable and maintainable applications.",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "Responsive and accessible user interfaces with modern design principles. Pixel-perfect implementations.",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description:
        "Optimizing applications for speed and performance. SEO-friendly implementations and efficient code practices.",
    },
    {
      icon: Terminal,
      title: "Backend Integration",
      description: "API integration with PostgreSQL and MongoDB. Building robust backend solutions with Node.js.",
    },
    {
      icon: Layout,
      title: "Responsive Design",
      description: "Mobile-first approach ensuring seamless experience across all devices and screen sizes.",
    },
    {
      icon: Layers,
      title: "Testing & QA",
      description: "Comprehensive testing strategies with unit and integration tests for reliable applications.",
    },
  ]

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <p className="text-primary font-semibold text-sm tracking-widest uppercase">SERVICES</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-balance">What I Can Do For You</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="bg-card/50 border border-border hover:border-primary/50 rounded-2xl p-8 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
              >
                <Icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services
