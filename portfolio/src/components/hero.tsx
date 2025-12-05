"use client"

import { Github, Linkedin, Twitter, Mail, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 hero-bg bg-pattern relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid opacity-30"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">

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
            <Link href="/projects">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                View My Work <ArrowRight size={18} className="ml-2" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button className="border-2 border-primary text-primary hover:bg-primary/10 font-semibold bg-transparent">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>

        {/* Hero Image */}
        <div className="hidden lg:flex justify-center">
          <div className="w-80 h-80 rounded-full border-4 border-primary/20 relative overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5 shadow-2xl">
            <img
              src="/image.jpg"
              alt="Muziga Judith - Frontend Developer"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
