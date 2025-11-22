"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Zap, RefreshCw, Sparkles, Target } from "lucide-react"

const features = [
  {
    icon: Sparkles,
    title: "AI-Native Workflows",
    description:
      "Built from the ground up with AI assistance at every step, enabling natural collaboration between human creativity and machine intelligence.",
  },
  {
    icon: RefreshCw,
    title: "Rapid Iteration Loops",
    description:
      "Ship faster with instant feedback cycles. Test, refine, and deploy with unprecedented speed and confidence.",
  },
  {
    icon: Zap,
    title: "Better Developer Experience",
    description:
      "Intuitive interfaces and intelligent suggestions reduce cognitive load, letting you focus on what matters most.",
  },
  {
    icon: Target,
    title: "Impactful Project Outcomes",
    description: "Deliver higher quality results in less time. Turn ambitious ideas into production-ready solutions.",
  },
]

export function Features() {
  return (
    <section className="py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Why AI-First Development</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Modern tools that transform the way you build software
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-8 h-full bg-card/50 backdrop-blur-sm border-border/50 rounded-2xl hover:bg-card/80 transition-colors">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
