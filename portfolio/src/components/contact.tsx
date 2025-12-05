"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <p className="text-primary font-semibold text-sm tracking-widest uppercase">GET IN TOUCH</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-balance">Let's Work Together</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-card/50 border border-border rounded-2xl p-8 text-center hover:border-primary/50 transition-colors">
            <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="font-bold mb-2">Email</h3>
            <a href="mailto:umuzigajudit@gmail.com" className="text-primary hover:underline">
              umuzigajudit@gmail.com
            </a>
          </div>

          <div className="bg-card/50 border border-border rounded-2xl p-8 text-center hover:border-primary/50 transition-colors">
            <Phone className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="font-bold mb-2">Phone</h3>
            <a href="tel:+250786184438" className="text-primary hover:underline">
              +250 786 184 438
            </a>
          </div>

          <div className="bg-card/50 border border-border rounded-2xl p-8 text-center hover:border-primary/50 transition-colors">
            <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="font-bold mb-2">Location</h3>
            <p className="text-foreground/70">Open to Remote Work</p>
          </div>
        </div>

        <div className="bg-card/50 border border-border rounded-2xl p-12 max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold mb-3">Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-input border border-border rounded-lg px-4 py-3 text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-3">Your Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-input border border-border rounded-lg px-4 py-3 text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-3">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full bg-input border border-border rounded-lg px-4 py-3 text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>

            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
