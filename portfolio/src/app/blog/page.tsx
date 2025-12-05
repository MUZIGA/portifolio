import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Link from "next/link"
import { Calendar, Clock } from "lucide-react"

export default function BlogPage() {
  const articles = [
    {
      title: "Building Responsive Web Applications with Next.js",
      excerpt: "Learn how to create modern, responsive web applications using Next.js and Tailwind CSS with best practices for performance.",
      date: "2025-01-15",
      readTime: "5 min read",
      slug: "responsive-nextjs-apps"
    },
    {
      title: "TypeScript Best Practices for React Developers",
      excerpt: "Discover essential TypeScript patterns and practices that will make your React applications more maintainable and type-safe.",
      date: "2025-01-10",
      readTime: "7 min read",
      slug: "typescript-react-best-practices"
    }
  ]

  return (
    <main className="bg-background text-foreground overflow-hidden">
      <Navigation />
      <section className="py-20 px-4 sm:px-6 lg:px-8 mt-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <p className="text-primary font-semibold text-sm tracking-widest uppercase">BLOG</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-balance">Articles & Insights</h1>
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
          </div>

          <div className="space-y-8">
            {articles.map((article, index) => (
              <article
                key={index}
                className="bg-card/50 border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300"
              >
                <h2 className="text-2xl font-bold mb-3 hover:text-primary transition-colors">
                  {article.title}
                </h2>
                <p className="text-foreground/70 mb-4 leading-relaxed">{article.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-foreground/60">
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    <span>{new Date(article.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={16} />
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}