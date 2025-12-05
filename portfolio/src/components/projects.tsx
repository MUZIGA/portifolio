"use client"

import Link from "next/link"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce platform built with Next.js, TypeScript, and PostgreSQL. Features include product catalog, shopping cart, and payment integration.",
      tags: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS", "Stripe"],
      link: "https://nextjs-ecommerce-template.vercel.app",
      github: "https://github.com/vercel/commerce",
    },
    {
      title: "Task Management App",
      description:
        "Collaborative task management application with real-time updates. Built with React and MongoDB for data persistence and user collaboration.",
      tags: ["React", "Node.js", "MongoDB",  "JWT Auth"],
      link: "https://react-todo-app-typescript.vercel.app",
      github: "https://github.com/microsoft/TypeScript-React-Starter",
    },
    {
      title: "Analytics Dashboard",
      description:
        "Data visualization dashboard displaying real-time analytics and metrics. Responsive design with interactive charts and filtering capabilities.",
      tags: ["Next.js",  "TypeScript", "Tailwind CSS", "APIs"],
      link: "https://ui.shadcn.com/examples/dashboard",
      github: "https://github.com/shadcn-ui/ui",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <p className="text-primary font-semibold text-sm tracking-widest uppercase">PORTFOLIO</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-balance">Featured Projects</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-card/50 border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 group"
            >
              <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
              <p className="text-foreground/70 mb-4 leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 bg-primary/10 border border-primary/30 text-primary rounded-full text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <Link href={project.link} target="_blank" rel="noopener noreferrer">
                  <Button className="border-2 border-primary text-primary hover:bg-primary/10 bg-transparent px-4 py-2">
                    <ExternalLink size={16} className="mr-2" />
                    View Project
                  </Button>
                </Link>
                <Link href={project.github} target="_blank" rel="noopener noreferrer">
                  <Button className="border-2 border-primary text-primary hover:bg-primary/10 bg-transparent px-4 py-2">
                    <Github size={16} className="mr-2" />
                    View Code
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
