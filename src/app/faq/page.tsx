import type { Metadata } from "next";

import { CalendlySection } from "@/components/site/calendly-section";
import { FAQList } from "@/components/sections/faq-list";
import { PageHero } from "@/components/sections/page-hero";
import { faqs } from "@/lib/site-data";

export const metadata: Metadata = {
  title: {
    absolute: "Mor Handy FAQ | Maryland Handyman Questions",
  },
  description:
    "Answers to common Mor Handy questions about estimates, scheduling, service areas, multiple repairs, materials, and maintenance plans.",
};

const extraFaqs = [
  {
    question: "What payment methods do you accept?",
    answer:
      "Payment details are confirmed during scheduling or estimate follow-up. Mor Handy keeps billing clear so you understand what is due and when.",
  },
  {
    question: "Do you offer commercial services?",
    answer:
      "Mor Handy focuses primarily on residential repair and maintenance, with select small commercial or property support requests reviewed by scope.",
  },
  {
    question: "Can I upload photos before the estimate?",
    answer:
      "Yes. Photos are helpful for drywall, fixtures, leaks, damaged trim, exterior maintenance, and appliance or airflow issues because they make the first estimate conversation sharper.",
  },
  {
    question: "Do you offer emergency repairs?",
    answer:
      "Mor Handy prioritizes fast communication, but availability depends on schedule and project type. Call directly for time-sensitive repair concerns.",
  },
];

export default function FAQPage() {
  return (
    <main>
      <PageHero
        copy="Clear answers before you book. Use this page to understand estimates, scheduling, service areas, materials, and how to bundle repair work."
        eyebrow="FAQ"
        title="Home Repair Questions, Answered Clearly"
      />
      <section className="bg-white py-16 sm:py-24">
        <div className="container-page max-w-4xl">
          <FAQList items={[...faqs, ...extraFaqs]} />
        </div>
      </section>
      <CalendlySection
        copy="Still deciding? Book an estimate and Mor Handy will help clarify the scope before the project begins."
        title="Ask About Your Project During The Estimate"
      />
    </main>
  );
}
