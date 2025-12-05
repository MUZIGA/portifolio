"use client"

import Link from "next/link"
import { Github, Linkedin, Twitter, Mail } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 border-t border-slate-700 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="font-bold text-lg gradient-text">MJ</h3>
            <p className="text-sm text-slate-300">Frontend Developer </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-sm uppercase tracking-widest text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-slate-300 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-300 hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-slate-300 hover:text-primary transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-300 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-sm uppercase tracking-widest text-white">Skills</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="text-slate-300">React & Next.js</span>
              </li>
              <li>
                <span className="text-slate-300">TypeScript</span>
              </li>
              <li>
                <span className="text-slate-300">Frontend developer</span>
              </li>
              <li>
                <span className="text-slate-300">UI/UX Design</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-sm uppercase tracking-widest text-white">Follow</h4>
            <div className="flex gap-4">
              <Link
                href="https://github.com"
                target="_blank"
                className="text-slate-300 hover:text-primary transition-colors"
              >
                <Github size={20} />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                className="text-slate-300 hover:text-primary transition-colors"
              >
                <Linkedin size={20} />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                className="text-slate-300 hover:text-primary transition-colors"
              >
                <Twitter size={20} />
              </Link>
              <Link
                href="mailto:judith@example.com"
                className="text-slate-300 hover:text-primary transition-colors"
              >
                <Mail size={20} />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-slate-400">
            <p>&copy; {currentYear} Muziga Judith. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
