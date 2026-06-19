import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { CalendlySection } from "@/components/site/calendly-section";
import { FAQList } from "@/components/sections/faq-list";
import { Button } from "@/components/ui/button";
import { articleFaqs } from "@/lib/site-data";
import { absoluteUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "How Often To Change Air Filter In Maryland",
  description:
    "Learn how often to change your air filter in Maryland, warning signs of a dirty filter, and when to book Mor Handy for HVAC filter service.",
  alternates: {
    canonical: "/articles/air-filter-change",
  },
  openGraph: {
    title: "How Often To Change Air Filter In Maryland",
    description:
      "A practical homeowner guide to HVAC air filter changes, airflow problems, allergy signs, dust, smells, and higher energy bills.",
    images: [
      {
        url: "/images/articles/air-filter-needs-change.jpg",
        alt: "Five signs your air filter needs a change",
      },
    ],
  },
};

const expandedFaqs = [
  ...articleFaqs,
  {
    question: "Is it bad to change an air filter too often?",
    answer:
      "Changing an air filter early is usually not harmful, but it may waste money if the filter is still clean. The bigger risk is using the wrong filter type or ignoring airflow problems caused by a restrictive filter.",
  },
  {
    question: "Why does my house get dusty after I change the filter?",
    answer:
      "If dust continues after a filter change, check for gaps around the filter slot, leaky ducts, dirty return grilles, open windows, recent renovation dust, or a filter that does not fit tightly.",
  },
  {
    question: "Can a dirty filter make my AC freeze?",
    answer:
      "Yes. Restricted airflow can contribute to coil freezing because the system cannot move enough warm air across the coil. If you see ice, turn the system off and schedule service.",
  },
  {
    question: "Should I use the cheapest air filter?",
    answer:
      "Cheap fiberglass filters may protect equipment from large debris, but they do less for indoor particles. Many homes benefit from a pleated filter that balances filtration and airflow.",
  },
  {
    question: "What happens if I install the filter backward?",
    answer:
      "A backward filter can restrict airflow and reduce filtration performance. Look for the arrow printed on the frame and point it in the direction of airflow toward the system.",
  },
  {
    question: "Do pets mean I need to change filters more often?",
    answer:
      "Yes. Pet hair and dander can load a filter quickly. Many pet households should check filters every 30 days and replace them every 30 to 60 days depending on dust and system use.",
  },
  {
    question: "Can a filter help with smells?",
    answer:
      "A clean filter can help reduce some trapped particles, but persistent musty smells may point to moisture, dirty vents, drain issues, duct concerns, or another HVAC problem.",
  },
  {
    question: "How do I know my filter size?",
    answer:
      "Most filters list the size on the frame, such as 16x20x1 or 20x25x1. If the label is missing, measure length, width, and depth before buying a replacement.",
  },
  {
    question: "Do thicker filters last longer?",
    answer:
      "Many thicker media filters can last longer, but only if your system is built for them. A standard one-inch filter usually needs more frequent replacement.",
  },
  {
    question: "Can Mor Handy set up filter reminders?",
    answer:
      "Yes. Mor Handy can help homeowners include filter replacement in a seasonal maintenance plan so the task does not get missed during busy months.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How Often To Change Air Filter In Maryland",
  description:
    "A practical guide for Maryland homeowners on when to change HVAC air filters, warning signs, maintenance cadence, and when to schedule service.",
  image: absoluteUrl("/images/articles/air-filter-needs-change.jpg"),
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
  mainEntityOfPage: absoluteUrl("/articles/air-filter-change"),
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

export default function AirFilterArticlePage() {
  return (
    <main>
      <article>
        <header className="premium-grid bg-mist py-16 sm:py-20">
          <div className="container-page grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-center">
            <div>
              <p className="text-sm font-black text-rust">
                HVAC maintenance guide
              </p>
              <h1 className="mt-4 text-4xl font-black leading-[1.05] tracking-tight text-ink sm:text-6xl">
                How Often Should You Change Your Air Filter In Maryland?
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate">
                Most Maryland homeowners should change a standard HVAC air
                filter every 60 to 90 days. Homes with pets, allergies, heavy
                dust, renovation work, or high heating and cooling use should
                check the filter every 30 days and replace it sooner when it
                looks loaded.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild>
                  <Link href="/services/appliance-repairs">Book Filter Help</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/services/seasonal-maintenance">
                    View Seasonal Maintenance
                  </Link>
                </Button>
              </div>
            </div>
            <figure className="image-frame aspect-[4/5]">
              <Image
                alt="Five signs your air filter needs a change in a Maryland home"
                className="object-cover"
                fill
                priority
                sizes="(min-width: 1024px) 36vw, 100vw"
                src="/images/articles/air-filter-needs-change.jpg"
                title="Five signs your air filter needs a change in a Maryland home"
              />
            </figure>
          </div>
        </header>

        <div className="container-page grid gap-10 py-14 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div className="article-content">
            <h2>Featured Snippet Answer</h2>
            <p>
              Change a standard HVAC air filter every 60 to 90 days in most
              Maryland homes. Replace it every 30 to 45 days if you have pets,
              allergies, heavy dust, wildfire smoke, renovation debris, or high
              HVAC usage. Check monthly because filter life depends on the home,
              not the calendar.
            </p>

            <h2>Why Air Filter Timing Matters</h2>
            <p>
              An air filter is small, inexpensive, and easy to ignore. That is
              exactly why it causes so many comfort problems. When the filter
              loads with dust, hair, dander, and debris, your system has to pull
              air through a clogged surface. The home may feel less comfortable,
              the blower may run longer, and your rooms can collect dust faster.
            </p>
            <p>
              The right cadence protects comfort, indoor air quality, and
              equipment performance. It also gives you a simple maintenance habit
              that catches problems early. If the filter looks dirty after only
              a few weeks, that is useful information about dust, pets, air
              leaks, or system run time.
            </p>

            <figure className="my-10 overflow-hidden rounded-lg border border-ink/10 bg-white">
              <div className="relative aspect-[4/5] sm:aspect-[1.7/1]">
                <Image
                  alt="Dirty air filter compared with a clean air filter"
                  className="object-cover"
                  fill
                  sizes="(min-width: 768px) 720px, 100vw"
                  src="/images/service-flow/air-filter-hidden-problem.jpg"
                  title="Dirty air filter compared with a clean air filter"
                />
              </div>
              <figcaption className="px-5 py-4 text-sm text-slate">
                A loaded filter restricts airflow and makes every HVAC cycle
                work harder than it should.
              </figcaption>
            </figure>

            <h2>The 90-Day Rule Is A Starting Point, Not A Promise</h2>
            <p>
              The common 90-day rule works for a clean, low-traffic home with a
              properly sized filter and normal system use. Maryland homes often
              need a shorter schedule because spring pollen, summer humidity,
              fall debris, and winter heating cycles all change how quickly the
              filter loads.
            </p>
            <ul>
              <li>Low-dust home with no pets: every 60 to 90 days.</li>
              <li>One pet or mild allergies: every 45 to 60 days.</li>
              <li>Multiple pets or heavy allergies: every 30 to 45 days.</li>
              <li>Renovation dust or recent drywall sanding: check weekly.</li>
              <li>Rental, vacant, or seasonal property: inspect before heavy use.</li>
            </ul>

            <h2>Five Signs Your Air Filter Needs A Change</h2>
            <p>
              A filter does not need to be black to be a problem. If the pleats
              are loaded, gray, fuzzy, damp, or visibly blocked, replace it.
              These warning signs are especially important when they appear
              together.
            </p>

            <h3>1. Weak Airflow</h3>
            <p>
              Weak airflow at vents can happen when the system cannot pull
              enough air through the return. A dirty filter is one of the first
              things to check because it is simple, inexpensive, and often
              overlooked.
            </p>

            <h3>2. More Dust Than Usual</h3>
            <p>
              If surfaces look dusty soon after cleaning, the filter may be
              overloaded or poorly fitted. Dust can also come from gaps around
              the filter rack, leaky returns, or renovation debris.
            </p>

            <h3>3. Allergy Flare-Ups At Home</h3>
            <p>
              A clogged filter cannot trap new particles effectively. If
              symptoms feel worse indoors, check the filter, return grille, and
              cleaning schedule before assuming the HVAC system is the only
              issue.
            </p>

            <h3>4. Musty Smells Near Vents</h3>
            <p>
              A funky smell can mean the filter has trapped moisture and
              particles, but it can also point to drain, duct, or humidity
              problems. Start with the filter, then schedule help if the odor
              continues.
            </p>

            <h3>5. Higher Energy Bills</h3>
            <p>
              A clogged filter can make the system run longer because airflow is
              restricted. If bills rise while weather and usage feel similar,
              inspect the filter and look for airflow red flags.
            </p>

            <div className="my-10 grid gap-5 sm:grid-cols-2">
              {[
                [
                  "/images/articles/allergy-overload-dirty-filter.jpg",
                  "Allergy overload from dirty HVAC filter",
                ],
                [
                  "/images/articles/skyrocketing-energy-bills-hvac.jpg",
                  "Higher energy bills from dirty air filter",
                ],
              ].map(([src, alt]) => (
                <figure className="image-frame aspect-[4/5]" key={src}>
                  <Image
                    alt={alt}
                    className="object-cover"
                    fill
                    sizes="(min-width: 768px) 360px, 100vw"
                    src={src}
                    title={alt}
                  />
                </figure>
              ))}
            </div>

            <h2>Step-By-Step Air Filter Replacement</h2>
            <p>
              Turn off the HVAC system, find the filter slot or return grille,
              note the filter size, remove the old filter, and point the arrow
              on the new filter toward the airflow direction. Make sure the
              filter sits flat without gaps, then turn the system back on and
              check airflow.
            </p>
            <ol>
              <li>Turn the system off at the thermostat.</li>
              <li>Open the return grille or filter cabinet.</li>
              <li>Read the size printed on the old filter frame.</li>
              <li>Slide the old filter out carefully to avoid dumping dust.</li>
              <li>Insert the new filter with the airflow arrow facing the unit.</li>
              <li>Close the grille or cabinet fully.</li>
              <li>Set a reminder for the next inspection date.</li>
            </ol>

            <h2>Common Mistakes Homeowners Make</h2>
            <p>
              The biggest mistake is assuming the most expensive filter is
              always the best filter. A very high MERV filter can restrict
              airflow if the system is not designed for it. Another common
              mistake is buying the right length and width but the wrong depth.
              A loose filter lets air bypass the filter surface.
            </p>
            <ul>
              <li>Installing the filter backward.</li>
              <li>Forgetting filters in secondary returns.</li>
              <li>Using a filter that bows or leaves side gaps.</li>
              <li>Ignoring dust after drywall, flooring, or renovation work.</li>
              <li>Waiting for the thermostat to struggle before checking airflow.</li>
            </ul>

            <h2>Advanced Strategy: Build A Seasonal Filter Plan</h2>
            <p>
              The best maintenance schedule changes with the house. In spring,
              pollen and open windows can load filters faster. In summer, long
              AC cycles increase airflow through the filter. In winter, heating
              cycles and closed windows can concentrate indoor particles. A
              seasonal plan is smarter than one repeating reminder.
            </p>
            <p>
              Mor Handy recommends checking the filter at the start of each
              season and again after any dusty project. For recurring home care,
              add filters to a quarterly maintenance checklist alongside gutter
              checks, fixture inspections, exterior cleanup, and small repairs.
            </p>

            <h2>Helpful Official Resources</h2>
            <p>
              For more context on indoor air and HVAC maintenance, review the
              EPA indoor air quality resource, ENERGY STAR heating and cooling
              maintenance guidance, and the U.S. Department of Energy guide to
              maintaining air conditioners.
            </p>
            <ul>
              <li>
                <a
                  className="font-bold text-rust underline"
                  href="https://www.epa.gov/indoor-air-quality-iaq"
                >
                  EPA indoor air quality guidance
                </a>
              </li>
              <li>
                <a
                  className="font-bold text-rust underline"
                  href="https://www.energystar.gov/saveathome/heating-cooling/maintenance-checklist"
                >
                  ENERGY STAR heating and cooling maintenance checklist
                </a>
              </li>
              <li>
                <a
                  className="font-bold text-rust underline"
                  href="https://www.energy.gov/energysaver/maintaining-your-air-conditioner"
                >
                  Department of Energy air conditioner maintenance guide
                </a>
              </li>
            </ul>

            <h2>Internal Links For Next Steps</h2>
            <ul>
              <li>
                <Link className="font-bold text-rust underline" href="/services/appliance-repairs">
                  HVAC and appliance support
                </Link>
              </li>
              <li>
                <Link className="font-bold text-rust underline" href="/services/seasonal-maintenance">
                  Seasonal maintenance plans
                </Link>
              </li>
              <li>
                <Link className="font-bold text-rust underline" href="/services/general-repair-services">
                  General repair services
                </Link>
              </li>
              <li>
                <Link className="font-bold text-rust underline" href="/service-areas/baltimore-county">
                  Baltimore County handyman services
                </Link>
              </li>
            </ul>
          </div>

          <aside className="h-fit rounded-lg border border-ink/10 bg-white p-5 shadow-sm lg:sticky lg:top-28">
            <p className="text-sm font-black text-rust">
              Quick checklist
            </p>
            <ul className="mt-4 grid gap-3 text-sm leading-6 text-slate">
              <li>Check filters monthly.</li>
              <li>Replace most filters every 60 to 90 days.</li>
              <li>Shorten the schedule for pets, dust, or allergies.</li>
              <li>Use the correct size and airflow direction.</li>
              <li>Book help if airflow stays weak after replacement.</li>
            </ul>
            <Button asChild className="mt-6 w-full">
              <Link href="/contact">Ask Mor Handy</Link>
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
                Air Filter Questions Maryland Homeowners Ask
              </h2>
            </div>
            <FAQList items={expandedFaqs} />
          </div>
        </section>
      </article>
      <CalendlySection
        copy="If filter changes keep slipping or weak airflow continues, book a Mor Handy maintenance visit and we will help check the basics."
        title="Need Help With Filters, Airflow, Or Seasonal Maintenance?"
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
