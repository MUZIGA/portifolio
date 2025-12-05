"use client"

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend",
      skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "TypeScript", "Tailwind CSS", "Responsive Design"],
    },
    {
      category: "Backend",
      skills: ["Node.js", "PostgreSQL", "MongoDB", "RESTful APIs", "Database Design"],
    },
    {
      category: "Tools & Testing",
      skills: ["Git", "Jest", "React Testing Library", "Vercel", "CI/CD", "VS Code"],
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <p className="text-primary font-semibold text-sm tracking-widest uppercase">EXPERTISE</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-balance">Skills & Technologies</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-card/50 border border-border rounded-2xl p-8 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-primary mb-6">{category.category}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-4 py-2 bg-primary/10 border border-primary/30 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
