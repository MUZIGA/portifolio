"use client"

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <p className="text-primary font-semibold text-sm tracking-widest uppercase">ABOUT</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-balance">About Me</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-foreground/80 leading-relaxed">
              I'm a passionate frontend developer with a strong foundation in building user-centric web applications. My
              journey in web development has equipped me with expertise in modern JavaScript frameworks and a deep
              understanding of responsive design principles.
            </p>

            <p className="text-lg text-foreground/80 leading-relaxed">
              I specialize in creating seamless user experiences by combining clean code practices with intuitive UI
              design. My full-stack capabilities allow me to collaborate effectively with backend teams and understand
              the complete development lifecycle.
            </p>

            <p className="text-lg text-foreground/80 leading-relaxed">
              When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, and sharing
              knowledge with the developer community. I'm always looking for opportunities to grow and take on
              challenging projects that push my boundaries.
            </p>

            <div className="pt-4 space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-primary font-bold min-w-fit">📍 Location:</span>
                <span className="text-foreground/70">Available for remote opportunities</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary font-bold min-w-fit">💼 Status:</span>
                <span className="text-foreground/70">Open to opportunities</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary font-bold min-w-fit">📧 Email:</span>
                <a href="mailto:judith@example.com" className="text-primary hover:underline">
                  judith@example.com
                </a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-card/50 border border-border rounded-2xl p-8 text-center hover:border-primary/50 transition-colors">
              <div className="text-4xl font-bold text-primary mb-2">10+</div>
              <p className="text-foreground/70 text-sm">Projects Completed</p>
            </div>
            <div className="bg-card/50 border border-border rounded-2xl p-8 text-center hover:border-primary/50 transition-colors">
              <div className="text-4xl font-bold text-primary mb-2">5+</div>
              <p className="text-foreground/70 text-sm">Years Coding</p>
            </div>
            <div className="bg-card/50 border border-border rounded-2xl p-8 text-center hover:border-primary/50 transition-colors">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <p className="text-foreground/70 text-sm">Client Satisfaction</p>
            </div>
            <div className="bg-card/50 border border-border rounded-2xl p-8 text-center hover:border-primary/50 transition-colors">
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <p className="text-foreground/70 text-sm">Available Support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
