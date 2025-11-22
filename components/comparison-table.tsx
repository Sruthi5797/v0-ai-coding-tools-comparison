import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const tools = [
  {
    name: "Lovable",
    productivity: "Fastest time to first prototype; excellent for rapid MVP development",
    quality: "Clean, modern code with good component structure",
    performance: "Fast rendering and responsive UI generation",
    dx: "Intuitive interface with natural language prompting",
    outcomes: "Best for landing pages, dashboards, and consumer apps",
  },
  {
    name: "Vercel",
    productivity: "Streamlined deployment and instant previews save hours",
    quality: "Production-grade code with performance optimizations",
    performance: "Edge network ensures lightning-fast global delivery",
    dx: "Seamless Git integration and zero-config deployments",
    outcomes: "Ideal for Next.js apps, e-commerce, and enterprise projects",
  },
  {
    name: "Bolt.new",
    productivity: "Quick prototyping with full-stack capabilities",
    quality: "Solid foundations with room for customization",
    performance: "Good balance between speed and functionality",
    dx: "Browser-based development environment",
    outcomes: "Great for full-stack apps and API integrations",
  },
  {
    name: "Stitch",
    productivity: "Efficient component generation and iteration",
    quality: "Maintainable code following design system patterns",
    performance: "Optimized component rendering",
    dx: "Design-to-code workflow reduces handoff friction",
    outcomes: "Perfect for design system implementation and UI libraries",
  },
]

export function ComparisonTable() {
  return (
    <section className="border-b border-border">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="min-w-[120px] font-semibold text-foreground">Tool</TableHead>
                <TableHead className="min-w-[200px] font-semibold text-foreground">
                  Productivity (Time Savings)
                </TableHead>
                <TableHead className="min-w-[200px] font-semibold text-foreground">
                  Code Quality & Maintainability
                </TableHead>
                <TableHead className="min-w-[200px] font-semibold text-foreground">
                  Performance (Speed & Responsiveness)
                </TableHead>
                <TableHead className="min-w-[200px] font-semibold text-foreground">Developer Experience (DX)</TableHead>
                <TableHead className="min-w-[200px] font-semibold text-foreground">
                  Project Outcomes (Suitability)
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tools.map((tool) => (
                <TableRow key={tool.name}>
                  <TableCell className="font-medium text-foreground">{tool.name}</TableCell>
                  <TableCell className="text-muted-foreground">{tool.productivity}</TableCell>
                  <TableCell className="text-muted-foreground">{tool.quality}</TableCell>
                  <TableCell className="text-muted-foreground">{tool.performance}</TableCell>
                  <TableCell className="text-muted-foreground">{tool.dx}</TableCell>
                  <TableCell className="text-muted-foreground">{tool.outcomes}</TableCell>
                </TableRow>
              ))}
              {/* Placeholder rows */}
              <TableRow className="opacity-40">
                <TableCell className="font-medium text-muted-foreground">[More tools...]</TableCell>
                <TableCell className="text-muted-foreground">—</TableCell>
                <TableCell className="text-muted-foreground">—</TableCell>
                <TableCell className="text-muted-foreground">—</TableCell>
                <TableCell className="text-muted-foreground">—</TableCell>
                <TableCell className="text-muted-foreground">—</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  )
}
