import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { CalendlySection } from "@/components/site/calendly-section";
import { FAQList } from "@/components/sections/faq-list";
import { Button } from "@/components/ui/button";
import { absoluteUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Essential HVAC and Appliance Maintenance in Maryland | Mor Handy",
  description:
    "Keep your home systems running smoothly with this comprehensive guide to appliance troubleshooting and HVAC maintenance in the DMV area.",
  alternates: {
    canonical: "/articles/appliance-hvac-maintenance-dmv",
  },
  openGraph: {
    title: "Essential HVAC and Appliance Maintenance in Maryland",
    description:
      "Avoid expensive emergency repairs. Discover how routine maintenance and basic appliance troubleshooting save Maryland homeowners thousands of dollars a year.",
    images: [
      {
        url: "/images/services/hvac-appliance-repair.png",
        alt: "Mor Handy appliance and HVAC repair",
      },
    ],
  },
};

const expandedFaqs = [
  {
    question: "How often should I change my HVAC filter?",
    answer:
      "Most Maryland homes should replace standard HVAC filters every 60 to 90 days. Homes with pets, allergies, or heavy dust should swap them out every 30 days.",
  },
  {
    question: "Why is my AC running but not cooling the house?",
    answer:
      "This is commonly caused by a clogged air filter, dirty condenser coils, or a blocked condensate drain. It can also indicate low refrigerant, which requires a certified HVAC technician.",
  },
  {
    question: "Can a handyman clean my dryer vent?",
    answer:
      "Yes. Handymen frequently perform dryer vent cleanings. This is a critical safety task that prevents house fires and helps your clothes dryer run much more efficiently.",
  },
  {
    question: "Why does my washing machine smell like mildew?",
    answer:
      "Front-loading washers are prone to trapping moisture in the rubber door gasket. Wipe down the gasket after use, leave the door slightly open, and periodically run a clean cycle with a specialized washer cleaner or white vinegar.",
  },
  {
    question: "When should I replace an appliance versus repairing it?",
    answer:
      "A general rule is the '50% rule': if an appliance is more than halfway through its expected lifespan and the repair costs more than 50% of the price of a new one, it is usually better to replace it.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Essential HVAC and Appliance Maintenance in Maryland",
  description:
    "Keep your home systems running smoothly with this comprehensive guide to appliance troubleshooting and HVAC maintenance in the DMV area.",
  image: absoluteUrl("/images/services/hvac-appliance-repair.png"),
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
  mainEntityOfPage: absoluteUrl("/articles/appliance-hvac-maintenance-dmv"),
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

export default function ApplianceHvacArticlePage() {
  return (
    <main>
      <article>
        <header className="premium-grid bg-mist py-16 sm:py-20">
          <div className="container-page grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-center">
            <div>
              <p className="text-sm font-black text-rust">
                HVAC & Appliance Maintenance
              </p>
              <h1 className="mt-4 text-4xl font-black leading-[1.05] tracking-tight text-ink sm:text-6xl">
                Essential HVAC and Appliance Maintenance in Maryland
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate">
                Your home's mechanical systems work tirelessly through Maryland's
                extreme weather. Learn how to troubleshoot basic appliance issues
                and maintain your HVAC system before a total breakdown occurs.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild>
                  <Link href="/services/appliance-repairs">
                    Book HVAC & Appliance Help
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/contact">Ask an Expert</Link>
                </Button>
              </div>
            </div>
            <figure className="image-frame aspect-[4/5]">
              <Image
                alt="Mor Handy appliance and HVAC repair service checking outdoor equipment"
                className="object-cover"
                fill
                priority
                sizes="(min-width: 1024px) 36vw, 100vw"
                src="/images/services/hvac-appliance-repair.png"
                title="Professional HVAC maintenance"
              />
            </figure>
          </div>
        </header>

        <div className="container-page grid gap-10 py-14 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div className="article-content">
            <h2>Featured Snippet Answer</h2>
            <p>
              Essential HVAC and appliance maintenance in Maryland includes
              changing air filters every 30 to 90 days, cleaning dryer vents
              annually to prevent fires, flushing the water heater, and ensuring
              the outdoor AC condenser is clear of debris. Routine maintenance by
              a professional handyman extends the lifespan of these costly
              systems and prevents expensive emergency breakdowns during extreme
              weather.
            </p>

            <h2>Why Maintenance Is Cheaper Than Replacement</h2>
            <p>
              The average cost to replace an HVAC system in the DMV area can
              easily exceed $8,000. Replacing a refrigerator or a high-end washer/dryer
              set runs into the thousands. Most mechanical failures do not happen
              overnight; they are the result of months or years of neglect. A
              system that is choking on a dirty filter or a dryer pushing air
              through a clogged vent has to work twice as hard, burning out
              motors and compressors prematurely.
            </p>

            <h2>Top 5 Appliance & HVAC Tasks to Prioritize</h2>
            <p>
              Don't wait until the middle of a July heatwave or a January freeze
              to find out your systems are failing. Add these tasks to your
              maintenance calendar:
            </p>
            <ol>
              <li>
                <strong>Change the HVAC Air Filter:</strong> The single most
                important task for indoor air quality and system longevity.
              </li>
              <li>
                <strong>Clean the Dryer Vent:</strong> Lint buildup restricts
                airflow, ruins clothes, and causes thousands of house fires
                every year.
              </li>
              <li>
                <strong>Clear the AC Condenser:</strong> Remove leaves, sticks,
                and overgrown landscaping from around your outdoor AC unit. It
                needs at least 2 feet of clearance to breathe.
              </li>
              <li>
                <strong>Check Refrigerator Coils:</strong> Vacuum the dust off
                the condenser coils (usually located at the bottom or back) so
                the fridge doesn't overheat.
              </li>
              <li>
                <strong>Test Smoke & CO Detectors:</strong> If you are relying on
                gas appliances or an attached garage, functional carbon monoxide
                detectors are non-negotiable.
              </li>
            </ol>

            <figure className="my-10 overflow-hidden rounded-lg border border-ink/10 bg-white">
              <div className="relative aspect-[4/5] sm:aspect-[1.7/1]">
                <Image
                  alt="Technician checking an outdoor HVAC condenser unit"
                  className="object-cover"
                  fill
                  sizes="(min-width: 768px) 720px, 100vw"
                  src="/images/services/hvac-appliance-repair.png"
                  title="Checking the outdoor AC condenser"
                />
              </div>
              <figcaption className="px-5 py-4 text-sm text-slate">
                Keeping the area around your condenser clear of debris ensures optimal airflow and cooling efficiency.
              </figcaption>
            </figure>

            <h2>When to Call a Handyman vs. an HVAC Technician</h2>
            <p>
              A general handyman is perfect for the preventative maintenance that
              homeowners forget to do: changing filters, cleaning dryer vents,
              and checking appliance connections. However, if your AC is blowing
              warm air due to a refrigerant leak, or your furnace is refusing to
              ignite, you must call a licensed HVAC technician. Handymen bridge
              the gap between DIY chores and major mechanical repairs.
            </p>

            <h2>Expert Insights on Energy Efficiency</h2>
            <p>
              According to the <a href="https://www.energy.gov/energysaver/maintaining-your-air-conditioner" className="font-bold text-rust underline" target="_blank" rel="noopener noreferrer">U.S. Department of Energy</a>, replacing a dirty, clogged filter with a clean one can lower your air conditioner's energy consumption by 5% to 15%. In a humid climate like Maryland, efficient air conditioning is vital not just for comfort, but for preventing mold growth by properly dehumidifying the indoor air.
            </p>

            <h2>Internal Links For Next Steps</h2>
            <ul>
              <li>
                <Link className="font-bold text-rust underline" href="/services/appliance-repairs">
                  Basic HVAC and appliance support
                </Link>
              </li>
              <li>
                <Link className="font-bold text-rust underline" href="/articles/air-filter-change">
                  Deep dive: How often to change air filters
                </Link>
              </li>
              <li>
                <Link className="font-bold text-rust underline" href="/services/seasonal-maintenance">
                  Seasonal home maintenance checks
                </Link>
              </li>
              <li>
                <Link className="font-bold text-rust underline" href="/services/electrical-services">
                  Electrical upgrades for smart thermostats
                </Link>
              </li>
            </ul>
          </div>

          <aside className="h-fit rounded-lg border border-ink/10 bg-white p-5 shadow-sm lg:sticky lg:top-28">
            <p className="text-sm font-black text-rust">
              Appliance Warning Signs
            </p>
            <ul className="mt-4 grid gap-3 text-sm leading-6 text-slate">
              <li>AC running constantly but not cooling.</li>
              <li>Clothes taking multiple cycles to dry.</li>
              <li>Refrigerator feeling warm to the touch.</li>
              <li>Loud banging from the washing machine.</li>
              <li>Ice buildup on the HVAC refrigerant line.</li>
            </ul>
            <Button asChild className="mt-6 w-full">
              <Link href="/contact">Book Maintenance</Link>
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
                Common HVAC & Appliance Questions
              </h2>
            </div>
            <FAQList items={expandedFaqs} />
          </div>
        </section>
      </article>
      <CalendlySection
        copy="Don't wait for your AC to fail in July. Book a maintenance check and get your filters and vents cleared."
        title="Is Your HVAC System Struggling to Keep Up?"
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
