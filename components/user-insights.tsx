"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { MessageSquare, ThumbsUp, AlertCircle, Target, CheckCircle, Repeat } from "lucide-react"

const insights = [
  {
    icon: Target,
    title: "What Builders Are Creating",
    description:
      "From SaaS dashboards to e-commerce platforms, builders are using AI tools to create production-ready applications in days instead of weeks.",
  },
  {
    icon: ThumbsUp,
    title: "Easier Than Expected",
    description:
      "Most users report that UI generation, responsive design, and component integration were surprisingly smooth and intuitive.",
  },
  {
    icon: AlertCircle,
    title: "Learning Curve Moments",
    description:
      "Complex state management, custom API integrations, and advanced animations often require manual refinement and deeper knowledge.",
  },
  {
    icon: MessageSquare,
    title: "Common Frustrations",
    description:
      "Debugging AI-generated code and handling edge cases can slow progress. Clear communication with AI improves results significantly.",
  },
  {
    icon: CheckCircle,
    title: "AI Suggestion Accuracy",
    description:
      "Users rate AI accuracy at 70-85% for standard patterns. Context-aware tools perform better when provided with detailed requirements.",
  },
  {
    icon: Repeat,
    title: "Would Use Again",
    description:
      "90%+ of users would continue using AI coding tools. The time savings and reduced boilerplate justify the occasional manual adjustments.",
  },
]

export function UserInsights() {
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
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">What Builders Are Saying</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Real insights from developers using AI-first tools
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {insights.map((insight, index) => (
            <motion.div
              key={insight.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full bg-card/50 backdrop-blur-sm border-border/50 rounded-2xl hover:bg-card/80 transition-colors">
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <insight.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">{insight.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{insight.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
