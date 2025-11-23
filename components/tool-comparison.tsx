"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
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
            <div className="flex justify-center mb-8 overflow-x-auto">
              <TabsList className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="pricing">Pricing</TabsTrigger>
                <TabsTrigger value="deployment">Deployment & Scaling</TabsTrigger>
                <TabsTrigger value="integrations">Integrations</TabsTrigger>
                <TabsTrigger value="support">Support & Community</TabsTrigger>
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

            {/* Deployment & Scaling Tab */}
            <TabsContent value="deployment">
              <div className="grid md:grid-cols-2 gap-6">
                <DeploymentCard title={data1.name} deployment={data1.deployment} />
                <DeploymentCard title={data2.name} deployment={data2.deployment} />
              </div>
            </TabsContent>

            {/* Integrations Tab */}
            <TabsContent value="integrations">
              <div className="grid md:grid-cols-2 gap-6">
                <IntegrationsCard title={data1.name} integrations={data1.integrations} />
                <IntegrationsCard title={data2.name} integrations={data2.integrations} />
              </div>
            </TabsContent>

            {/* Support & Community Tab */}
            <TabsContent value="support">
              <div className="grid md:grid-cols-2 gap-6">
                <SupportCard title={data1.name} support={data1.support} />
                <SupportCard title={data2.name} support={data2.support} />
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

function DeploymentCard({ title, deployment }: { title: string; deployment: { infrastructure: string[]; speed: string; regions: string } }) {
  return (
    <Card className="p-8 bg-slate-800/40 backdrop-blur-sm border-slate-700/50">
      <h3 className="text-2xl font-bold mb-6 text-green-400">{title}</h3>
      <div className="space-y-4">
        <div>
          <h4 className="font-semibold mb-3 text-slate-200">Infrastructure</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            {deployment.infrastructure.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-green-400 mt-1">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="pt-4 border-t border-slate-700/50">
          <p className="text-sm text-slate-300 mb-2"><span className="font-semibold text-green-400">Speed:</span> {deployment.speed}</p>
          <p className="text-sm text-slate-300"><span className="font-semibold text-green-400">Regions:</span> {deployment.regions}</p>
        </div>
      </div>
    </Card>
  )
}

function IntegrationsCard({ title, integrations }: { title: string; integrations: { versionControl: string[]; frameworks: string[]; databases: string[] } }) {
  return (
    <Card className="p-8 bg-slate-800/40 backdrop-blur-sm border-slate-700/50">
      <h3 className="text-2xl font-bold mb-6 text-pink-400">{title}</h3>
      <div className="space-y-4">
        <div>
          <h4 className="font-semibold mb-2 text-slate-200">Version Control</h4>
          <div className="flex flex-wrap gap-2">
            {integrations.versionControl.map((item, i) => (
              <Badge key={i} className="bg-pink-500/20 text-pink-300 border-pink-500/30">{item}</Badge>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-2 text-slate-200">Frameworks</h4>
          <div className="flex flex-wrap gap-2">
            {integrations.frameworks.map((item, i) => (
              <Badge key={i} className="bg-blue-500/20 text-blue-300 border-blue-500/30">{item}</Badge>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-2 text-slate-200">Databases</h4>
          <div className="flex flex-wrap gap-2">
            {integrations.databases.map((item, i) => (
              <Badge key={i} className="bg-purple-500/20 text-purple-300 border-purple-500/30">{item}</Badge>
            ))}
          </div>
        </div>
      </div>
    </Card>
  )
}

function SupportCard({ title, support }: { title: string; support: { documentation: string; community: string; customerSupport: string } }) {
  return (
    <Card className="p-8 bg-slate-800/40 backdrop-blur-sm border-slate-700/50">
      <h3 className="text-2xl font-bold mb-6 text-amber-400">{title}</h3>
      <div className="space-y-4">
        <div className="pb-4 border-b border-slate-700/50">
          <h4 className="font-semibold mb-2 text-slate-200">Documentation</h4>
          <p className="text-sm text-slate-400">{support.documentation}</p>
        </div>
        <div className="pb-4 border-b border-slate-700/50">
          <h4 className="font-semibold mb-2 text-slate-200">Community</h4>
          <p className="text-sm text-slate-400">{support.community}</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2 text-slate-200">Customer Support</h4>
          <p className="text-sm text-slate-400">{support.customerSupport}</p>
        </div>
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
