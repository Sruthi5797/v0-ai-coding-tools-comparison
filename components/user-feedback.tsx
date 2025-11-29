import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const feedbackCategories = [
  {
    question: "What did the tool help you build?",
    summary:
      "Users frequently mention building landing pages, dashboards, and full-stack applications with authentication and database integration.",
  },
  {
    question: "What was easier than expected?",
    summary:
      "Most users report that UI generation and deployment were surprisingly straightforward, with minimal configuration required.",
  },
  {
    question: "What was harder than expected?",
    summary:
      "Complex state management and custom business logic often require manual intervention and deeper technical knowledge.",
  },
  {
    question: "What frustrated or slowed you down?",
    summary:
      "Users cite credit limits, learning curve for advanced features, and occasional code quality inconsistencies as main friction points.",
  },
  {
    question: "How accurate or helpful were the AI suggestions?",
    summary:
      "AI suggestions are generally accurate for common patterns, with 70-90% usability. Edge cases may need refinement.",
  },
  {
    question: "Would you use this tool again?",
    summary:
      "The majority of users express strong intent to reuse, particularly for prototyping and MVP development phases.",
  },
]

export function UserFeedback() {
  return (
    <section className="relative border-b border-slate-800/50 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5" />
      
      <div className="container relative mx-auto px-4 py-16 md:py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
            Based on User Feedback
          </h2>
          <p className="mb-12 text-center text-slate-400">
            Real insights from developers using AI coding tools
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {feedbackCategories.map((item, index) => (
              <Card 
                key={index} 
                className="border-slate-700/50 bg-slate-800/40 backdrop-blur-sm hover:bg-slate-800/60 hover:border-blue-500/30 transition-all duration-300"
              >
                <CardHeader>
                  <CardTitle className="text-lg text-slate-200">{item.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-slate-400">{item.summary}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
