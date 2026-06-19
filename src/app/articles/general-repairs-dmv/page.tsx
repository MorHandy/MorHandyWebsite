import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { CalendlySection } from "@/components/site/calendly-section";
import { FAQList } from "@/components/sections/faq-list";
import { Button } from "@/components/ui/button";
import { absoluteUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "General Handyman Repairs in the DMV | Complete Guide",
  description:
    "The ultimate guide to home maintenance, tackling your punch list, and finding reliable general handyman services in the DC, Maryland, and Virginia (DMV) area.",
  alternates: {
    canonical: "/articles/general-repairs-dmv",
  },
  openGraph: {
    title: "General Handyman Repairs in the DMV | Complete Guide",
    description:
      "Don't let your home repair to-do list overwhelm you. Discover how professional handyman services in the DMV can tackle everything from door repairs to furniture assembly.",
    images: [
      {
        url: "/images/services/general-handyman-services.png",
        alt: "Mor Handy general repair service",
      },
    ],
  },
};

const expandedFaqs = [
  {
    question: "What is considered a general handyman repair?",
    answer:
      "General handyman repairs cover minor home improvements and fixes such as hanging shelves, assembling furniture, fixing loose doors, repairing trim, and knocking out punch-list tasks that don't require specialized licensing.",
  },
  {
    question: "Do you service all of the DMV area?",
    answer:
      "Yes, Mor Handy serves many parts of the DMV (DC, Maryland, and Virginia), including Baltimore, Annapolis, and select Northern Virginia communities. Our local experts understand regional home styles and typical weather impacts.",
  },
  {
    question: "Should I hire a handyman or a specialized contractor?",
    answer:
      "If you have a list of small to medium tasks (like changing a fixture, patching drywall, and fixing a fence), a handyman is far more cost-effective. For major structural changes or full-scale remodels, you'll need specialized contractors.",
  },
  {
    question: "How do I prepare for a handyman visit?",
    answer:
      "Write down a complete 'punch list' of everything you need fixed. Clear the work areas, secure pets, and point out all issues when the technician arrives so they can tackle multiple jobs in one visit.",
  },
  {
    question: "Can a handyman help with exterior repairs in Maryland?",
    answer:
      "Absolutely. Exterior punch-list items like fence picket replacements, minor deck repairs, and weatherstripping doors are common requests to protect homes from humid DMV summers and cold winters.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "General Handyman Repairs in the DMV | Complete Guide",
  description:
    "The ultimate guide to home maintenance, tackling your punch list, and finding reliable general handyman services in the DC, Maryland, and Virginia (DMV) area.",
  image: absoluteUrl("/images/services/general-handyman-services.png"),
  author: {
    "@type": "Organization",
    name: "Mor Handy",
  },
  publisher: {
    "@type": "Organization",
    name: "Mor Handy",
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl("/images/logo/mor-handy-logo.png"),
    },
  },
  mainEntityOfPage: absoluteUrl("/articles/general-repairs-dmv"),
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: expandedFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function GeneralRepairsArticlePage() {
  return (
    <main>
      <article>
        <header className="premium-grid bg-mist py-16 sm:py-20">
          <div className="container-page grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-center">
            <div>
              <p className="text-sm font-black text-rust">
                DMV Home Maintenance Guide
              </p>
              <h1 className="mt-4 text-4xl font-black leading-[1.05] tracking-tight text-ink sm:text-6xl">
                The Ultimate Guide to General Handyman Repairs in the DMV
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate">
                Whether you own a historic rowhouse in DC, a suburban home in
                Maryland, or a modern townhome in Virginia, keeping up with home
                repairs is essential. Discover how to tackle your punch list and
                when to call in the pros.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild>
                  <Link href="/services/general-repair-services">
                    Book General Repairs
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/contact">Ask an Expert</Link>
                </Button>
              </div>
            </div>
            <figure className="image-frame aspect-[4/5]">
              <Image
                alt="Mor Handy general repair service installing hardware in a Maryland home"
                className="object-cover"
                fill
                priority
                sizes="(min-width: 1024px) 36vw, 100vw"
                src="/images/services/general-handyman-services.png"
                title="Professional handyman repairing a door"
              />
            </figure>
          </div>
        </header>

        <div className="container-page grid gap-10 py-14 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div className="article-content">
            <h2>Featured Snippet Answer</h2>
            <p>
              A general handyman service in the DMV area handles minor home
              improvements, repairs, and punch-list tasks. This includes hanging
              shelves, furniture assembly, door repair, trim fixing, and minor
              drywall patching. Hiring a handyman is the most cost-effective way
              to complete multiple small home repairs in a single visit without
              needing specialized contractors.
            </p>

            <h2>Why Routine Home Repairs Matter in the DMV</h2>
            <p>
              The Washington D.C., Maryland, and Virginia (DMV) area experiences
              all four seasons intensely. From humid, sticky summers to freezing
              winters, your home takes a beating. Ignoring small issues like a
              wobbly handrail or a door that won't properly latch isn't just an
              eyesore—it's a safety hazard and an energy drain. 
            </p>
            <p>
              Drafty doors let expensive heating and cooling escape. Loose shelves
              can fall and damage property. By knocking out your punch list early,
              you protect your home's equity and ensure your family's safety.
            </p>

            <h2>Step-by-Step Guide: Tackling Your Punch List</h2>
            <p>
              Don't let a massive list of broken things overwhelm you. Here is
              the best strategy to get your home back in shape:
            </p>
            <ol>
              <li>
                <strong>Walk the property:</strong> Grab a notepad and walk
                through every room, noting anything broken, loose, or squeaky.
              </li>
              <li>
                <strong>Categorize the tasks:</strong> Group tasks by tools
                needed (e.g., painting, drilling, plumbing).
              </li>
              <li>
                <strong>Prioritize safety:</strong> Fix loose handrails, wobbly
                steps, and door locks first.
              </li>
              <li>
                <strong>Call a professional:</strong> For the tasks you don't
                have time (or tools) to do, hire a local DMV handyman. A pro can
                often knock out 10 items in a single afternoon.
              </li>
            </ol>

            <figure className="my-10 overflow-hidden rounded-lg border border-ink/10 bg-white">
              <div className="relative aspect-[4/5] sm:aspect-[1.7/1]">
                <Image
                  alt="Carpenter measuring wood for repairs"
                  className="object-cover"
                  fill
                  sizes="(min-width: 768px) 720px, 100vw"
                  src="/images/services/carpentry-woodwork-service.webp"
                  title="Measuring for custom home repairs"
                />
              </div>
              <figcaption className="px-5 py-4 text-sm text-slate">
                Precision matters. A professional handyman measures twice and cuts once to ensure a perfect fit.
              </figcaption>
            </figure>

            <h2>Common Mistakes Homeowners Make</h2>
            <p>
              Many homeowners try to save money by doing everything themselves,
              but DIY can quickly turn into &quot;Destroy It Yourself.&quot; Using the wrong
              wall anchors to hang a heavy TV or improperly weatherstripping a
              door can lead to expensive damage. Another huge mistake is hiring
              five different contractors (a painter, a carpenter, a plumber) for
              tiny jobs when one skilled general handyman could do it all.
            </p>

            <h2>Expert Insights on DMV Home Maintenance</h2>
            <p>
              According to the <a href="https://www.hud.gov/" className="font-bold text-rust underline" target="_blank" rel="noopener noreferrer">U.S. Department of Housing and Urban Development (HUD)</a>, regular home maintenance is critical to preserving affordable, safe housing. In the DMV, where historic homes are common (especially in places like Annapolis and Capitol Hill), using the right materials to repair older fixtures is vital to maintaining the home's charm and structural integrity.
            </p>

            <h2>Internal Links For Next Steps</h2>
            <ul>
              <li>
                <Link className="font-bold text-rust underline" href="/services/general-repair-services">
                  General repair services
                </Link>
              </li>
              <li>
                <Link className="font-bold text-rust underline" href="/services/carpentry-services">
                  Carpentry and woodwork
                </Link>
              </li>
              <li>
                <Link className="font-bold text-rust underline" href="/service-areas/baltimore-city">
                  Handyman services in Baltimore City
                </Link>
              </li>
              <li>
                <Link className="font-bold text-rust underline" href="/services/seasonal-maintenance">
                  Seasonal maintenance plans
                </Link>
              </li>
            </ul>
          </div>

          <aside className="h-fit rounded-lg border border-ink/10 bg-white p-5 shadow-sm lg:sticky lg:top-28">
            <p className="text-sm font-black text-rust">
              Punch List Priorities
            </p>
            <ul className="mt-4 grid gap-3 text-sm leading-6 text-slate">
              <li>Fix loose handrails & stairs.</li>
              <li>Repair doors that won't latch.</li>
              <li>Anchor heavy furniture & TVs.</li>
              <li>Patch drywall holes & dents.</li>
              <li>Weatherstrip drafty doors.</li>
            </ul>
            <Button asChild className="mt-6 w-full">
              <Link href="/contact">Book a Handyman</Link>
            </Button>
          </aside>
        </div>

        <section className="bg-mist py-16 sm:py-24">
          <div className="container-page grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-black text-rust">
                FAQ
              </p>
              <h2 className="mt-4 text-3xl font-black tracking-tight text-ink sm:text-5xl">
                Common Questions About Handyman Repairs
              </h2>
            </div>
            <FAQList items={expandedFaqs} />
          </div>
        </section>
      </article>
      <CalendlySection
        copy="Stop staring at your broken fixtures and unfinished projects. Book a free estimate and get your weekend back."
        title="Ready To Crush Your Punch List?"
      />
      <script
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([articleSchema, faqSchema]),
        }}
        type="application/ld+json"
      />
    </main>
  );
}
