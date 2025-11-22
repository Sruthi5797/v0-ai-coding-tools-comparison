"use client"

import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { ToolComparison } from "@/components/tool-comparison"
import { UserInsights } from "@/components/user-insights"
import { Resources } from "@/components/resources"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Features />
      <ToolComparison />
      <UserInsights />
      <Resources />
      <Footer />
    </main>
  )
}
