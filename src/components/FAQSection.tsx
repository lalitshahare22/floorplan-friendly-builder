import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What is included in a floor plan design?",
    a: "A floor plan design is a detailed representation of a building's layout, showing the placement of rooms, areas, and structural elements. It includes precise dimensions, annotations, and construction specifications.",
  },
  {
    q: "How long does it take to design a house plan?",
    a: "All our designs are pre-made and available immediately for your convenience.",
  },
  {
    q: "Can I make changes to the house floor plan during the design process?",
    a: "Our designs are pre-designed and ready to be shared with you, so customization during the design phase is not available.",
  },
  {
    q: "How much does it cost to design a floor plan?",
    a: "The cost of each plan is detailed on the respective product page. Please refer to the page for specific pricing information.",
  },
];

const FAQSection = () => {
  return (
    <section className="container py-16 md:py-24">
      <h2 className="text-center text-3xl font-bold text-foreground md:text-4xl">
        Frequently Asked Questions
      </h2>

      <div className="mx-auto mt-12 max-w-2xl">
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="rounded-lg border border-border bg-card px-5"
            >
              <AccordionTrigger className="text-sm font-medium text-foreground hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
