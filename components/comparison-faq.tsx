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
    <section className="border-b border-border">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-foreground md:text-4xl">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-foreground">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
