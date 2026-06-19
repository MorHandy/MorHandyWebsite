import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

import { faqs } from "@/lib/site-data";

export function FAQList({
  items = faqs,
}: {
  items?: { question: string; answer: string }[];
}) {
  return (
    <Accordion.Root className="grid gap-3" collapsible type="single">
      {items.map((faq, index) => (
        <Accordion.Item
          className="rounded-lg border border-ink/10 bg-white"
          key={faq.question}
          value={`item-${index}`}
        >
          <Accordion.Header>
            <Accordion.Trigger className="group flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-black text-ink">
              {faq.question}
              <ChevronDown className="h-5 w-5 shrink-0 text-slate transition group-data-[state=open]:rotate-180" />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="px-5 pb-5 text-sm leading-7 text-slate">
            {faq.answer}
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
