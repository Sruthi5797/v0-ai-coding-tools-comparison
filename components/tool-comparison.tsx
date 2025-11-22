"use client"

import { motion } from "framer-motion"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card } from "@/components/ui/card"

const tools = [
  {
    name: "Lovable",
    productivity: "Very High - Instant UI generation saves hours",
    codeQuality: "Good - Clean, maintainable React code",
    performance: "Fast - Optimized components out of the box",
    dx: "Excellent - Natural language interface",
    outcomes: "Best for rapid prototyping and MVPs",
  },
  {
    name: "Vercel",
    productivity: "High - Streamlined deployment pipeline",
    codeQuality: "Excellent - Production-grade infrastructure",
    performance: "Exceptional - Edge network optimization",
    dx: "Excellent - Zero-config deployments",
    outcomes: "Best for production applications",
  },
  {
    name: "Bolt.new",
    productivity: "Very High - Full-stack generation in seconds",
    codeQuality: "Good - Modern framework patterns",
    performance: "Good - Standard optimization practices",
    dx: "Very Good - Visual development environment",
    outcomes: "Best for complete app scaffolding",
  },
  {
    name: "Stitch",
    productivity: "High - Component-level AI assistance",
    codeQuality: "Excellent - Context-aware suggestions",
    performance: "Good - Developer-controlled optimization",
    dx: "Very Good - IDE integration",
    outcomes: "Best for existing codebases",
  },
]

export function ToolComparison() {
  return (
    <section id="tools" className="py-32 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Tool Comparison</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            See how different AI coding tools stack up across key metrics
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="overflow-hidden rounded-2xl bg-card/80 backdrop-blur-sm border-border/50">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="hover:bg-transparent">
                    <TableHead className="font-semibold text-base w-32">Tool</TableHead>
                    <TableHead className="font-semibold text-base min-w-48">Productivity</TableHead>
                    <TableHead className="font-semibold text-base min-w-48">Code Quality</TableHead>
                    <TableHead className="font-semibold text-base min-w-48">Performance</TableHead>
                    <TableHead className="font-semibold text-base min-w-48">Developer Experience</TableHead>
                    <TableHead className="font-semibold text-base min-w-48">Project Outcomes</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {tools.map((tool, index) => (
                    <motion.tr
                      key={tool.name}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="hover:bg-muted/50 transition-colors"
                    >
                      <TableCell className="font-semibold">{tool.name}</TableCell>
                      <TableCell className="text-muted-foreground">{tool.productivity}</TableCell>
                      <TableCell className="text-muted-foreground">{tool.codeQuality}</TableCell>
                      <TableCell className="text-muted-foreground">{tool.performance}</TableCell>
                      <TableCell className="text-muted-foreground">{tool.dx}</TableCell>
                      <TableCell className="text-muted-foreground">{tool.outcomes}</TableCell>
                    </motion.tr>
                  ))}
                </TableBody>
              </Table>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
