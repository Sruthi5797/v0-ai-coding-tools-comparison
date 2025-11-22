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
    <section className="border-b border-border bg-muted/30">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-foreground md:text-4xl">Based on User Feedback</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {feedbackCategories.map((item, index) => (
              <Card key={index} className="border-border">
                <CardHeader>
                  <CardTitle className="text-lg text-foreground">{item.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.summary}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
