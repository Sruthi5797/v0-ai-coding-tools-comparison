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
    description: "Step-by-step video guides for building websites with AI builders like Wix, Hostinger, and Brizy.",
    href: "https://www.youtube.com/watch?v=_DwqD15ExmE", // WordPress AI Website Builder Tutorial 2025
  },
  {
    icon: FileCode,
    title: "Starter Templates",
    description: "Curated AI website templates from Framer, Readdy, and Elementor for instant deployment.",
    href: "https://www.framer.com/marketplace/templates/category/ai/", // Free AI Website Templates
  },
  {
    icon: Lightbulb,
    title: "Example Projects",
    description: "Real AI-generated websites and live demos from top builders like 10Web, ZipWP, and Wegic.",
    href: "https://zipwp.com", // ZipWP Example AI Websites
  },
  {
    icon: BookOpen,
    title: "API References",
    description: "Official documentation for AI website builder APIs and integrations (Wix, 10Web, TeleportHQ).",
    href: "https://teleporthq.io/ai-website-builder", // TeleportHQ AI Website Builder Docs
  },
  {
    icon: Package,
    title: "Tool Documentation",
    description: "Comprehensive guides for using AI website builders: Wix AI, Brizy, Hostinger, and more.",
    href: "https://www.wix.com/blog/how-to-design-a-website-with-ai", // How to Design Website with AI - Wix Guide
  },
  {
    icon: Sparkles,
    title: "Design Guides",
    description: "Best practices for AI-driven web design workflows, layouts, and user experience optimization.",
    href: "https://www.linkedin.com/pulse/how-design-website-ai-2025-best-practices-twendee-6zlec", // AI Web Design Best Practices 2025
  },
  {
    icon: Puzzle,
    title: "Best Practices",
    description: "Expert tips for optimizing AI website builders, SEO, performance, and customization strategies.",
    href: "https://instant.so/blog/ai-web-design", // AI Web Design Best Practices Guide
  },
  {
    icon: Users,
    title: "Community Links",
    description: "Join active communities discussing AI website builders on Reddit, forums, and Discord.",
    href: "https://www.reddit.com/r/Frontend/comments/1nzo98p/whats_actually_the_best_ai_website_builder_right/", // Reddit AI Website Builder Discussion
  },
]



export function Resources() {
  return (
    <section id="resources" className="py-32 px-4 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Resources for Builders</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto text-balance">
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
              <Card className="p-6 h-full bg-slate-800/40 backdrop-blur-sm border-slate-700/50 rounded-2xl hover:bg-slate-800/60 hover:border-green-500/30 transition-all group cursor-pointer">
                <a href={resource.href} target="_blank" rel="noopener noreferrer" className="space-y-3 block">
                  <div className="flex items-start justify-between">
                    <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center ring-1 ring-green-500/20">
                      <resource.icon className="h-5 w-5 text-green-400" />
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-slate-500 group-hover:text-green-400 transition-colors" />
                  </div>
                  <h3 className="font-semibold text-slate-200">{resource.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{resource.description}</p>
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
          <Button size="lg" variant="outline" className="text-lg px-8 h-12 rounded-2xl bg-transparent border-slate-600 hover:border-green-500/50 hover:bg-slate-800/50">
            Explore All Resources
            <ArrowUpRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
