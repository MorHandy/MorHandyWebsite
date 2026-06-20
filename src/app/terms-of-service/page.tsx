import type { Metadata } from "next";
import Link from "next/link";

import { PageHero } from "@/components/sections/page-hero";
import { email, phoneDisplay, phoneHref } from "@/lib/site-data";
import { absoluteUrl } from "@/lib/utils";

const lastUpdated = "June 20, 2026";

const sections = [
  {
    title: "Acceptance Of These Terms",
    body: [
      "By using Mor Handy's website, requesting an estimate, scheduling service, or communicating with our team, you agree to these Terms of Service. If you do not agree, please do not use this site or book services through it.",
      "These terms apply to website visitors, homeowners, property managers, and anyone engaging Mor Handy for home repair, maintenance, or improvement services in Maryland and the surrounding DMV service area.",
    ],
  },
  {
    title: "Services And Estimates",
    body: [
      "Mor Handy provides repair, maintenance, installation, and home improvement services. All service descriptions on this site are informational and may be adjusted based on jobsite conditions, access, materials, code requirements, safety concerns, or scope changes discovered during inspection.",
      "Quotes and estimates are based on the information available at the time they are issued. Final pricing may change if the actual scope differs from the original request, if hidden damage is discovered, or if additional labor or materials are required to complete the work properly.",
    ],
  },
  {
    title: "Scheduling, Access, And Cancellations",
    body: [
      "Customers are responsible for providing accurate contact information, a safe work environment, and reasonable access to the property at the scheduled service time. Delays caused by restricted access, unsafe conditions, pets, utility shutoffs, or missing decision-makers may require rescheduling or additional charges.",
      "If you need to cancel or reschedule, please contact Mor Handy as early as possible. We reserve the right to reschedule appointments because of weather, emergencies, technician availability, supply delays, or other circumstances outside our reasonable control.",
    ],
  },
  {
    title: "Payments",
    body: [
      "Payment is due according to the invoice or estimate terms provided for your project. Deposits may be required for certain jobs, custom materials, or longer-scope work.",
      "Late or unpaid balances may delay future scheduling and may be subject to collection efforts or other lawful remedies. Customers are responsible for any applicable taxes, permit costs, specialty materials, or third-party fees identified in the project scope.",
    ],
  },
  {
    title: "Customer Responsibilities",
    body: [
      "You agree to provide complete and accurate information about the property, existing conditions, prior repairs, and known hazards that could affect the work. You are also responsible for securing valuables, fragile items, and areas outside the agreed work zone before service begins.",
      "Mor Handy is not responsible for delays, incomplete work, or resulting issues caused by concealed conditions, inaccurate customer information, unauthorized third-party interference, or customer refusal of recommended repairs, code corrections, or safety measures.",
    ],
  },
  {
    title: "Website Content And Intellectual Property",
    body: [
      "All website content, including text, branding, logos, page design, graphics, photos, and original copy, is owned by Mor Handy or used with permission and is protected by applicable intellectual property laws.",
      "You may view and print reasonable portions of this site for personal, non-commercial use only. You may not copy, republish, scrape, reproduce, or distribute site content without prior written permission.",
    ],
  },
  {
    title: "Third-Party Links And Tools",
    body: [
      "This site may include links to third-party platforms such as Calendly, map providers, analytics services, social platforms, or payment tools. Mor Handy does not control those third-party services and is not responsible for their availability, security, content, or privacy practices.",
      "Your use of third-party websites and tools is governed by their own terms and policies.",
    ],
  },
  {
    title: "Disclaimers",
    body: [
      "This website and its content are provided on an \"as is\" and \"as available\" basis for general informational purposes. While Mor Handy works to keep information accurate and current, we do not guarantee that all pricing, service details, availability, timelines, or website content will always be complete, current, or error-free.",
      "Nothing on this website creates a guarantee of service outcome, a binding estimate, or a promise that every requested project can or will be accepted.",
    ],
  },
  {
    title: "Limitation Of Liability",
    body: [
      "To the fullest extent permitted by law, Mor Handy will not be liable for indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of this website or your interaction with our online content, scheduling tools, or third-party integrations.",
      "Any liability related specifically to contracted service work will be limited to the amount paid for the affected service, except where a different limitation is prohibited by law or expressly stated in a written project agreement.",
    ],
  },
  {
    title: "Changes To These Terms",
    body: [
      "Mor Handy may update these Terms of Service from time to time to reflect service changes, legal requirements, or business operations. Updated versions will be posted on this page with a revised effective date.",
      "Continued use of the website or continued engagement with Mor Handy after changes are posted means you accept the revised terms.",
    ],
  },
];

export const metadata: Metadata = {
  title: {
    absolute: "Terms of Service | Mor Handy Maryland Handyman Services",
  },
  description:
    "Read Mor Handy's Terms of Service for website use, estimates, scheduling, payments, service conditions, and homeowner responsibilities for Maryland handyman and home repair services.",
  keywords: [
    "Mor Handy terms of service",
    "Maryland handyman terms",
    "home repair service terms",
    "handyman estimate terms",
    "service scheduling policy",
  ],
  alternates: {
    canonical: absoluteUrl("/terms-of-service"),
  },
  openGraph: {
    title: "Terms of Service | Mor Handy",
    description:
      "Mor Handy's service terms for website use, estimates, scheduling, payments, and Maryland handyman project policies.",
    url: absoluteUrl("/terms-of-service"),
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "Terms of Service | Mor Handy",
    description:
      "Review Mor Handy's terms for website use, estimates, project scheduling, payments, and service policies.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsOfServicePage() {
  return (
    <main>
      <PageHero
        copy="Review the terms that govern use of Mor Handy's website, estimates, scheduling, and handyman service engagement throughout Maryland and the DMV area."
        eyebrow="Legal"
        title="Terms Of Service"
      />
      <section className="bg-white py-16 sm:py-24">
        <div className="container-page max-w-4xl">
          <div className="rounded-2xl border border-ink/10 bg-mist px-6 py-5 text-sm leading-7 text-slate sm:px-8">
            <p>
              <strong className="text-ink">Last updated:</strong> {lastUpdated}
            </p>
            <p className="mt-3">
              These terms are provided for general business and website-use purposes and should be reviewed with legal counsel if you need language tailored to specific contracts, licensing obligations, or regulatory requirements.
            </p>
          </div>

          <div className="mt-10 space-y-10">
            {sections.map((section) => (
              <article key={section.title}>
                <h2 className="text-3xl font-black tracking-tight text-ink">
                  {section.title}
                </h2>
                <div className="mt-4 space-y-4 text-base leading-8 text-slate">
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 rounded-2xl bg-ink px-6 py-8 text-white sm:px-8">
            <h2 className="text-2xl font-black tracking-tight">Questions About These Terms?</h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-white/76">
              Contact Mor Handy if you need clarification before scheduling work or submitting project information through the website.
            </p>
            <div className="mt-6 flex flex-col gap-3 text-sm font-bold sm:flex-row sm:flex-wrap sm:items-center">
              <Link className="text-gold transition hover:text-white" href={phoneHref}>
                {phoneDisplay}
              </Link>
              <Link
                className="text-gold transition hover:text-white"
                href={`mailto:${email}`}
              >
                {email}
              </Link>
              <Link className="text-gold transition hover:text-white" href="/contact">
                Visit the contact page
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
