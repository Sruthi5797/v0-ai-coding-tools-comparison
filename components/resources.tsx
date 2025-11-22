"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  BookOpen,
  FileCode,
  Lightbulb,
  Package,
  Users,
  Puzzle,
  ArrowUpRight,
  GraduationCap,
  Sparkles,
} from "lucide-react"

const resources = [
  {
    icon: GraduationCap,
    title: "Interactive Tutorials",
    description: "Step-by-step guides for getting started",
    href: "#",
  },
  {
    icon: FileCode,
    title: "Starter Templates",
    description: "Pre-built projects to jumpstart development",
    href: "#",
  },
  {
    icon: Lightbulb,
    title: "Example Projects",
    description: "Real-world applications built with AI tools",
    href: "#",
  },
  {
    icon: BookOpen,
    title: "API References",
    description: "Complete documentation for each platform",
    href: "#",
  },
  {
    icon: Package,
    title: "Tool Documentation",
    description: "In-depth guides and best practices",
    href: "#",
  },
  {
    icon: Sparkles,
    title: "Design Guides",
    description: "UI/UX patterns and component libraries",
    href: "#",
  },
  {
    icon: Puzzle,
    title: "Best Practices",
    description: "Tips for optimal AI-assisted development",
    href: "#",
  },
  {
    icon: Users,
    title: "Community Links",
    description: "Join discussions and share experiences",
    href: "#",
  },
]

export function Resources() {
  return (
    <section id="resources" className="py-32 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Resources for Builders</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Everything you need to master AI-first development
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {resources.map((resource, index) => (
            <motion.div
              key={resource.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Card className="p-6 h-full bg-card/50 backdrop-blur-sm border-border/50 rounded-2xl hover:bg-card/80 transition-colors group cursor-pointer">
                <a href={resource.href} className="space-y-3 block">
                  <div className="flex items-start justify-between">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <resource.icon className="h-5 w-5 text-primary" />
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                  </div>
                  <h3 className="font-semibold">{resource.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{resource.description}</p>
                </a>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <Button size="lg" variant="outline" className="text-lg px-8 h-12 rounded-2xl bg-transparent">
            Explore All Resources
            <ArrowUpRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
