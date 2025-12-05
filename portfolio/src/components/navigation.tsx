"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { href: "#home", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold gradient-text">
            MJ
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-foreground">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-sm font-medium text-foreground/80 hover:text-primary transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
