"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Zap, RefreshCw, Sparkles, Target, ExternalLink } from "lucide-react"

const features = [
  {
    icon: Sparkles,
    title: "Build 10x Faster",
    description:
      "AI-first tools reduce boilerplate and automate repetitive tasks. Developers ship production-ready websites in hours instead of weeks.",
    link: "https://www.ksred.com/ai-first-software-development/",
    source: "KSRed Blog"
  },
  {
    icon: RefreshCw,
    title: "Iterate Without Friction",
    description:
      "Rapid feedback loops let you test ideas instantly, refine designs in real-time, and deploy changes with zero friction. Experiment more, launch faster.",
    link: "https://www.stephanmiller.com/the-great-vibe-coding-experiment/",
    source: "Developer Blog"
  },
  {
    icon: Zap,
    title: "Better Developer Experience",
    description:
      "Intuitive AI assistants and intelligent code suggestions reduce cognitive load. Focus on creative solutions instead of syntax and boilerplate.",
    link: "https://prismic.io/blog/claude-code",
    source: "Prismic Blog"
  },
  {
    icon: Target,
    title: "Production-Ready Results",
    description:
      "Ship higher-quality projects faster. 90%+ of AI-first developers continue using these tools—time savings and reduced boilerplate justify occasional tweaks.",
    link: "https://www.producthunt.com/products/lovable/reviews",
    source: "Product Hunt Reviews"
  },
]


export function Features() {
  return (
    <section className="py-32 px-4 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Why AI-First Development</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto text-balance">
            Modern tools that transform the way you build software
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <motion.a
              key={feature.title}
              href={feature.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group block"
            >
              <Card className="p-8 h-full bg-slate-800/40 backdrop-blur-sm border-slate-700/50 rounded-2xl hover:bg-slate-800/60 hover:border-blue-500/30 transition-all">
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-3">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center ring-1 ring-blue-500/20">
                      <feature.icon className="h-6 w-6 text-blue-400" />
                    </div>
                    <ExternalLink className="h-4 w-4 text-slate-500 group-hover:text-blue-400 flex-shrink-0 transition-colors" />
                  </div>
                  <h3 className="text-2xl font-semibold text-slate-100 group-hover:text-blue-300 transition-colors">{feature.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{feature.description}</p>
                  <div className="pt-2 border-t border-slate-700/50">
                    <span className="text-xs text-slate-500 group-hover:text-slate-400 transition-colors">
                      {feature.source}
                    </span>
                  </div>
                </div>
              </Card>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
