"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"

const insights = [
  {
    title: "Lovable: Fast Full-Stack Prototyping",
    description:
      "Developers build MVPs and client projects by describing them in a prompt—often launching in hours. Lovable's AI manages both design and backend with seamless GitHub integration.",
    link: "https://www.producthunt.com/products/lovable/reviews",
    source: "Product Hunt Reviews"
  },
  {
    title: "Vercel v0: Developer-Friendly AI",
    description:
      "Vercel v0.dev makes launching and iterating sites intuitive for technical and non-tech founders. Users praise its onboarding speed, reliability, and open-source flexibility for instant deployments.",
    link: "https://annjose.com/post/v0-dev-firsthand/",
    source: "Developer Blog"
  },
  {
    title: "Bolt.new: AI Vibe Coding",
    description:
      "Bolt.new lets creators spin up project sites using conversational prompts. Users love the playful, minimal barrier to entry for AI-powered content creation.",
    link: "https://www.bolt.new",
    source: "Official Site"
  },
  {
    title: "Stitch: Generative Design At Scale",
    description:
      "Stitch AI enables fast page generation and multiplatform publishing. People highlight easy customization and real-time previews for campaigns and portfolios.",
    link: "https://www.stitch.page",
    source: "Official Site"
  },
  {
    title: "Intuitive Prototyping with Visily & B12",
    description:
      "Platforms like Visily and B12 empower non-devs to launch branded sites in days using AI-powered flows, drag-and-drop, and instant feedback.",
    link: "https://www.b12.io/resource-center/ai/user-stories-how-real-businesses-customized-their-ai-websites/",
    source: "Case Studies"
  },
  {
    title: "Common AI Tool Frustrations",
    description:
      "Debugging code, handling edge cases, and non-obvious AI limitations frustrate users. Clear inputs and documentation help improve outcomes.",
    link: "https://www.reddit.com/r/nocode/comments/1itruan/loveabledev_review/",
    source: "Reddit Discussion"
  },
  {
    title: "Would Use Again",
    description:
      "90%+ of users would use AI website builders again. Time savings and reduction in repetitive work far outweigh occasional manual tweaks.",
    link: "https://www.producthunt.com/products/lovable/reviews",
    source: "User Reviews"
  },
  {
  title: "Readdy: Distinctive AI Website Launches",
  description:
    "Readdy empowers founders to stand out with original, AI-generated sites in minutes. Custom branding and instant publishing get new ventures online faster than legacy platforms.",
  link: "https://readdy.ai",
  source: "Official Website"
},
{
  title: "Webstudio: Open Source & No-Code Power",
  description:
    "Webstudio’s AI-driven platform lets anyone visually build and deploy robust sites—without code. Early adopters highlight seamless CMS integration, rapid prototyping, and scalable publishing.",
  link: "https://webstudio.is",
  source: "User Feedback"
}
]

export function UserInsights() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-slate-950 via-purple-950/20 to-slate-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-3"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            What Builders Are Saying
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Real insights from developers using AI-first tools
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {insights.map((insight, index) => (
            <motion.a
              key={insight.title}
              href={insight.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group block"
            >
              <Card className="p-6 h-full bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-xl hover:bg-slate-800/60 hover:border-purple-500/30 transition-all duration-300">
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-base font-semibold text-slate-200 group-hover:text-purple-300 transition-colors">
                      {insight.title}
                    </h3>
                    <ExternalLink className="h-4 w-4 text-slate-500 group-hover:text-purple-400 flex-shrink-0 transition-colors" />
                  </div>
                  
                  <p className="text-sm text-slate-400 leading-relaxed line-clamp-4">
                    {insight.description}
                  </p>
                  
                  <div className="pt-2 border-t border-slate-700/50">
                    <span className="text-xs text-slate-500 group-hover:text-slate-400 transition-colors">
                      {insight.source}
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
