"use client"

import { Star } from "lucide-react"

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Project Manager at TechCorp",
      content: "Judith delivered exceptional work on our e-commerce platform. Her attention to detail and technical expertise made the project a huge success.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "CTO at StartupXYZ",
      content: "Working with Judith was fantastic. She's not only technically skilled but also great at communication and meeting deadlines.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Design Lead at Creative Agency",
      content: "Judith perfectly translated our designs into responsive, performant web applications. Highly recommend her services!",
      rating: 5,
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <p className="text-primary font-semibold text-sm tracking-widest uppercase">TESTIMONIALS</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-balance">What Clients Say</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card/50 border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-foreground/80 mb-6 leading-relaxed">"{testimonial.content}"</p>
              <div>
                <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                <p className="text-sm text-foreground/60">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials