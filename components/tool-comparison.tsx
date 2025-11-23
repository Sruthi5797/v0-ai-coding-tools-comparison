"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { toolsData, toolsList } from "@/lib/comparison-data"
import { Home, ChevronRight } from "lucide-react"

export function ToolComparison() {
  const [tool1, setTool1] = useState("Lovable")
  const [tool2, setTool2] = useState("Vercel")

  const data1 = toolsData[tool1 as keyof typeof toolsData]
  const data2 = toolsData[tool2 as keyof typeof toolsData]

  return (
    <section id="tools" className="min-h-screen py-16 px-4 bg-gradient-to-b from-slate-950 via-indigo-950/20 to-slate-950">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section with Breadcrumbs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 space-y-6"
        >
          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2 text-sm text-slate-500">
            <Home className="h-4 w-4" />
            <ChevronRight className="h-4 w-4" />
            <span>Models</span>
            <ChevronRight className="h-4 w-4" />
            <span>Compare</span>
            <ChevronRight className="h-4 w-4" />
            <span className="text-blue-400">{tool1} vs {tool2}</span>
          </div>

          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Compare {tool1} vs {tool2}
            </h1>
            <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto text-balance leading-relaxed">
              Get a detailed comparison of AI language models including features, pricing, API costs, performance benchmarks, and real-world capabilities to help you choose the right tool for your needs.
            </p>
          </div>

          {/* Interactive Selectors */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8 max-w-3xl mx-auto">
            <div className="flex items-center gap-4 w-full md:w-auto">
              <span className="text-sm font-medium whitespace-nowrap text-slate-300">Compare</span>
              <Select value={tool1} onValueChange={setTool1}>
                <SelectTrigger className="w-full md:w-[280px] bg-slate-800/50 backdrop-blur-sm border-slate-700/50 hover:border-blue-500/50 transition-colors">
                  <SelectValue placeholder="Select tool" />
                </SelectTrigger>
                <SelectContent>
                  {toolsList.map((tool) => (
                    <SelectItem key={tool} value={tool}>
                      {tool}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <span className="text-slate-500 font-medium">to</span>

            <Select value={tool2} onValueChange={setTool2}>
              <SelectTrigger className="w-full md:w-[280px] bg-slate-800/50 backdrop-blur-sm border-slate-700/50 hover:border-blue-500/50 transition-colors">
                <SelectValue placeholder="Select tool" />
              </SelectTrigger>
              <SelectContent>
                {toolsList.map((tool) => (
                  <SelectItem key={tool} value={tool}>
                    {tool}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </motion.div>

        {/* Tabbed Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Tabs defaultValue="overview" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="pricing">Pricing</TabsTrigger>
                <TabsTrigger value="benchmarks">Benchmarks</TabsTrigger>
                <TabsTrigger value="faq">FAQ</TabsTrigger>
              </TabsList>
            </div>

            {/* Overview Tab */}
            <TabsContent value="overview">
              <div className="grid md:grid-cols-2 gap-6">
                <ComparisonCard title={data1.name} data={data1.overview} />
                <ComparisonCard title={data2.name} data={data2.overview} />
              </div>
            </TabsContent>

            {/* Pricing Tab */}
            <TabsContent value="pricing">
              <div className="grid md:grid-cols-2 gap-6">
                <PricingCard title={data1.name} pricing={data1.pricing} />
                <PricingCard title={data2.name} pricing={data2.pricing} />
              </div>
            </TabsContent>

            {/* Benchmarks Tab */}
            <TabsContent value="benchmarks">
              <div className="grid md:grid-cols-2 gap-6">
                <BenchmarkCard title={data1.name} benchmarks={data1.benchmarks} />
                <BenchmarkCard title={data2.name} benchmarks={data2.benchmarks} />
              </div>
            </TabsContent>

            {/* FAQ Tab */}
            <TabsContent value="faq">
              <div className="grid md:grid-cols-2 gap-6">
                <FAQCard title={data1.name} faqs={data1.faq} />
                <FAQCard title={data2.name} faqs={data2.faq} />
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  )
}

function ComparisonCard({ title, data }: { title: string; data: any }) {
  return (
    <Card className="p-8 bg-slate-800/40 backdrop-blur-sm border-slate-700/50 hover:bg-slate-800/60 hover:border-blue-500/30 transition-all duration-300">
      <h3 className="text-2xl font-bold mb-4 text-blue-400">{title}</h3>
      <div className="space-y-4">
        <p className="text-slate-300 leading-relaxed">{data.description}</p>
        <div>
          <h4 className="font-semibold mb-2 text-slate-200">Key Features:</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            {data.keyFeatures.map((feature: string, i: number) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="pt-4 border-t border-slate-700/50">
          <p className="text-sm text-slate-300"><span className="font-semibold text-blue-400">Best For:</span> {data.useCase}</p>
          <p className="text-sm text-slate-400 mt-2"><span className="font-semibold text-slate-300">Tech Stack:</span> {data.technology}</p>
        </div>
      </div>
    </Card>
  )
}

function PricingCard({ title, pricing }: { title: string; pricing: { free: string; pro: string; enterprise: string } }) {
  return (
    <Card className="p-8 bg-slate-800/40 backdrop-blur-sm border-slate-700/50">
      <h3 className="text-2xl font-bold mb-6 text-purple-400">{title}</h3>
      <div className="space-y-4">
        <div className="p-4 rounded-lg bg-slate-700/30 border border-slate-600/30">
          <h4 className="font-semibold mb-2 text-slate-200">Free</h4>
          <p className="text-sm text-slate-400">{pricing.free}</p>
        </div>
        <div className="p-4 rounded-lg bg-slate-700/30 border border-slate-600/30">
          <h4 className="font-semibold mb-2 text-slate-200">Pro</h4>
          <p className="text-sm text-slate-400">{pricing.pro}</p>
        </div>
        <div className="p-4 rounded-lg bg-slate-700/30 border border-slate-600/30">
          <h4 className="font-semibold mb-2 text-slate-200">Enterprise</h4>
          <p className="text-sm text-slate-400">{pricing.enterprise}</p>
        </div>
      </div>
    </Card>
  )
}

function BenchmarkCard({ title, benchmarks }: { title: string; benchmarks: Record<string, string> }) {
  return (
    <Card className="p-8 bg-slate-800/40 backdrop-blur-sm border-slate-700/50">
      <h3 className="text-2xl font-bold mb-6 text-green-400">{title}</h3>
      <div className="space-y-4">
        {Object.entries(benchmarks).map(([key, value]) => (
          <div key={key}>
            <div className="flex justify-between mb-2">
              <span className="font-medium capitalize text-slate-200">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
              <span className="text-slate-400">{value}</span>
            </div>
            <div className="h-2 bg-slate-700/50 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" 
                style={{ width: `${parseInt(value)}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}

function FAQCard({ title, faqs }: { title: string; faqs: any[] }) {
  return (
    <Card className="p-8 bg-slate-800/40 backdrop-blur-sm border-slate-700/50">
      <h3 className="text-2xl font-bold mb-6 text-amber-400">{title}</h3>
      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <div key={i} className="pb-4 border-b border-slate-700/50 last:border-0">
            <h4 className="font-semibold mb-2 text-slate-200">{faq.q}</h4>
            <p className="text-sm text-slate-400">{faq.a}</p>
          </div>
        ))}
      </div>
    </Card>
  )
}
