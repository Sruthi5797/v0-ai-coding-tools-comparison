import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "Which tool is best for rapid prototyping?",
    answer:
      "Lovable and Bolt.new excel at rapid prototyping with their natural language interfaces and quick iteration cycles. You can go from idea to working prototype in minutes.",
  },
  {
    question: "Do these tools require coding experience?",
    answer:
      "While some basic technical understanding helps, most tools are designed to be accessible to non-developers. However, developers will get more value from advanced features and customization options.",
  },
  {
    question: "Can I export and own the generated code?",
    answer:
      "Yes, all mentioned tools allow you to export the generated code. You own the code and can modify, deploy, or integrate it into existing projects as needed.",
  },
  {
    question: "How do pricing models compare across tools?",
    answer:
      "Most tools offer free tiers with credit limits, followed by subscription plans ranging from $20-100/month for professional use. Enterprise plans with custom pricing are available for larger teams.",
  },
  {
    question: "Are these tools suitable for production applications?",
    answer:
      "Yes, particularly when combined with proper code review and testing. Vercel is specifically optimized for production deployments, while others may require additional refinement for enterprise-grade applications.",
  },
  {
    question: "Can multiple developers collaborate on the same project?",
    answer:
      "Collaboration features vary by tool. Vercel offers robust team collaboration with Git integration. Check individual tool documentation for specific collaboration capabilities.",
  },
]

export function ComparisonFAQ() {
  return (
    <section className="relative border-b border-slate-800/50 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-orange-500/5" />
      
      <div className="container relative mx-auto px-4 py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl bg-gradient-to-r from-amber-400 via-orange-400 to-amber-400 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="mb-12 text-center text-slate-400">
            Everything you need to know about AI coding tools
          </p>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-slate-700/50 rounded-lg bg-slate-800/40 backdrop-blur-sm px-6 hover:bg-slate-800/60 hover:border-amber-500/30 transition-all duration-300"
              >
                <AccordionTrigger className="text-left text-slate-200 hover:text-amber-400 transition-colors py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-400 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
