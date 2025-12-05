"use client"

import { Github, Linkedin, Twitter, Mail, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-background to-card/20"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div className="space-y-6 animate-fade-in">
          <div className="flex gap-3">
            <Link
              href="https://github.com"
              target="_blank"
              className="w-10 h-10 rounded-full border-2 border-primary flex items-center justify-center hover:bg-primary/10 transition-colors"
            >
              <Github size={18} className="text-primary" />
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              className="w-10 h-10 rounded-full border-2 border-primary flex items-center justify-center hover:bg-primary/10 transition-colors"
            >
              <Linkedin size={18} className="text-primary" />
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              className="w-10 h-10 rounded-full border-2 border-primary flex items-center justify-center hover:bg-primary/10 transition-colors"
            >
              <Twitter size={18} className="text-primary" />
            </Link>
            <Link
              href="mailto:judith@example.com"
              className="w-10 h-10 rounded-full border-2 border-primary flex items-center justify-center hover:bg-primary/10 transition-colors"
            >
              <Mail size={18} className="text-primary" />
            </Link>
          </div>

          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl font-bold text-balance leading-tight">
              I am <span className="gradient-text">Muziga Judith</span>
            </h1>
            <p className="text-lg text-foreground/80 max-w-xl leading-relaxed">
              Frontend Developer with expertise in React, Next.js, and TypeScript. Building beautiful, responsive web
              applications with a focus on user experience and performance.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link href="#projects">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                View My Work <ArrowRight size={18} className="ml-2" />
              </Button>
            </Link>
            <Link href="#contact">
              <Button
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary/10 font-semibold bg-transparent"
              >
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>

        {/* Hero Image */}
        <div className="hidden lg:flex justify-center">
          <div className="w-80 h-80 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl flex items-center justify-center border-2 border-primary/30 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
            <div className="text-7xl font-bold text-primary/20">MJ</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
