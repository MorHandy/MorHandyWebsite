import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { CalendlySection } from "@/components/site/calendly-section";
import { FAQList } from "@/components/sections/faq-list";
import { Button } from "@/components/ui/button";
import { absoluteUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Quick Plumbing Repairs to Prevent Water Damage in the DMV",
  description:
    "Don't let small leaks turn into major floods. Discover essential plumbing repairs and maintenance tips for DC, Maryland, and Virginia homes.",
  alternates: {
    canonical: "/articles/plumbing-repair-guide-dmv",
  },
  openGraph: {
    title: "Plumbing Repairs to Prevent Water Damage in the DMV",
    description:
      "A leaky faucet isn't just annoying, it's expensive. Learn the signs of plumbing failure and how quick handyman repairs save DMV homeowners thousands.",
    images: [
      {
        url: "/images/services/plumbing-repair-services.png",
        alt: "Mor Handy plumbing service",
      },
    ],
  },
};

const expandedFaqs = [
  {
    question: "Can a handyman replace a toilet?",
    answer:
      "Yes. Handymen frequently replace toilets, fix running flappers, and install new bathroom fixtures. This is often much more affordable than calling a dedicated plumbing contractor.",
  },
  {
    question: "Why is my faucet leaking from the base?",
    answer:
      "A leak at the base of the faucet usually points to worn-out O-rings or a failed cartridge. Replacing these internal parts or installing a brand-new fixture will solve the problem and stop water waste.",
  },
  {
    question: "How do I stop my toilet from running constantly?",
    answer:
      "A running toilet is typically caused by a faulty flapper valve or a fill valve that isn't shutting off properly. A quick replacement of the toilet's internal hardware usually fixes the issue.",
  },
  {
    question: "What plumbing issues require a licensed plumber?",
    answer:
      "You should hire a licensed plumber if you need to move underground pipes, repair a collapsed sewer line, install a new water heater, or rough-in plumbing for a new bathroom addition.",
  },
  {
    question: "How can I prevent frozen pipes during a Maryland winter?",
    answer:
      "Disconnect all garden hoses in the fall, install foam insulation over exposed pipes in unheated areas (like garages or crawlspaces), and leave cabinet doors open during extreme cold snaps to let warm air circulate.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Quick Plumbing Repairs to Prevent Water Damage in the DMV",
  description:
    "Don't let small leaks turn into major floods. Discover essential plumbing repairs and maintenance tips for DC, Maryland, and Virginia homes.",
  image: absoluteUrl("/images/services/plumbing-repair-services.png"),
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
  mainEntityOfPage: absoluteUrl("/articles/plumbing-repair-guide-dmv"),
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

export default function PlumbingArticlePage() {
  return (
    <main>
      <article>
        <header className="premium-grid bg-mist py-16 sm:py-20">
          <div className="container-page grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-center">
            <div>
              <p className="text-sm font-black text-rust">
                Plumbing Repair & Maintenance
              </p>
              <h1 className="mt-4 text-4xl font-black leading-[1.05] tracking-tight text-ink sm:text-6xl">
                Quick Plumbing Repairs to Prevent Water Damage in the DMV
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate">
                Small plumbing problems escalate quickly. Learn how to catch
                leaks early, swap out old fixtures, and protect your Maryland or
                Virginia home from devastating water damage.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild>
                  <Link href="/services/plumbing-services">
                    Book Plumbing Repairs
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/contact">Ask an Expert</Link>
                </Button>
              </div>
            </div>
            <figure className="image-frame aspect-[4/5]">
              <Image
                alt="Mor Handy plumbing service repairing a fixture in a Maryland bathroom"
                className="object-cover"
                fill
                priority
                sizes="(min-width: 1024px) 36vw, 100vw"
                src="/images/services/plumbing-repair-services.png"
                title="Professional plumbing fixture repair"
              />
            </figure>
          </div>
        </header>

        <div className="container-page grid gap-10 py-14 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div className="article-content">
            <h2>Featured Snippet Answer</h2>
            <p>
              To prevent water damage in the DMV area, homeowners should
              immediately address minor plumbing repairs such as leaky faucets,
              running toilets, and slow drains. A local handyman can quickly
              replace faulty valves, swap out old sink fixtures, and install new
              toilets, saving you the high cost of an emergency plumber while
              preventing mold and structural rot.
            </p>

            <h2>Why A Leaky Faucet is a Red Flag</h2>
            <p>
              It is easy to ignore a dripping faucet, especially if it is in a
              guest bathroom. However, a faucet that drips just once per second
              can waste over 3,000 gallons of water per year. Furthermore, the
              constant moisture creates a breeding ground for mold and can rot
              the vanity cabinet from the inside out.
            </p>
            <p>
              In regions like the DMV, where humidity levels are high, adding
              constant standing water from a plumbing leak drastically increases
              the risk of mildew. Replacing the fixture early is significantly
              cheaper than tearing out moldy drywall.
            </p>

            <h2>Common Plumbing Services Handled by a Handyman</h2>
            <p>
              You don't always need to pay standard plumbing contractor rates.
              A professional handyman is highly skilled at tackling the most
              common household plumbing annoyances:
            </p>
            <ul>
              <li><strong>Fixture Upgrades:</strong> Replacing bathroom and kitchen sink faucets.</li>
              <li><strong>Toilet Repairs:</strong> Fixing running flappers, replacing the wax ring, or installing a completely new toilet.</li>
              <li><strong>Shower Heads:</strong> Upgrading to low-flow or rain shower heads.</li>
              <li><strong>Minor Drain Issues:</strong> Clearing simple clogs in P-traps.</li>
              <li><strong>Garbage Disposals:</strong> Swapping out a jammed or burned-out disposal unit under the sink.</li>
            </ul>

            <figure className="my-10 overflow-hidden rounded-lg border border-ink/10 bg-white">
              <div className="relative aspect-[4/5] sm:aspect-[1.7/1]">
                <Image
                  alt="Plumbing tools and new fixtures ready for installation"
                  className="object-cover"
                  fill
                  sizes="(min-width: 768px) 720px, 100vw"
                  src="/images/services/plumbing-repair-services.png"
                  title="Upgrading bathroom fixtures"
                />
              </div>
              <figcaption className="px-5 py-4 text-sm text-slate">
                Upgrading a faucet not only fixes leaks but instantly modernizes the look of a bathroom vanity.
              </figcaption>
            </figure>

            <h2>When to Turn Off the Main Water Valve</h2>
            <p>
              Every homeowner in the DMV needs to know exactly where their main
              water shut-off valve is located. If a pipe bursts or a toilet
              overflows uncontrollably, you have seconds to act before major
              water damage occurs. The valve is typically located in the
              basement near the front foundation wall, or in a utility closet.
            </p>

            <h2>Expert Insights on Water Conservation</h2>
            <p>
              The <a href="https://www.epa.gov/watersense" className="font-bold text-rust underline" target="_blank" rel="noopener noreferrer">EPA WaterSense program</a> notes that 10% of homes have leaks that waste 90 gallons or more per day. By upgrading to WaterSense labeled fixtures, a typical household can save thousands of gallons of water annually. This is particularly important for Maryland and Virginia homeowners on municipal water and sewer billing, where costs continue to rise.
            </p>

            <h2>Internal Links For Next Steps</h2>
            <ul>
              <li>
                <Link className="font-bold text-rust underline" href="/services/plumbing-services">
                  Minor plumbing repairs
                </Link>
              </li>
              <li>
                <Link className="font-bold text-rust underline" href="/services/drywall-services">
                  Drywall repair (if water damage occurred)
                </Link>
              </li>
              <li>
                <Link className="font-bold text-rust underline" href="/service-areas/anne-arundel-county">
                  Handyman services in Anne Arundel County
                </Link>
              </li>
              <li>
                <Link className="font-bold text-rust underline" href="/services/seasonal-maintenance">
                  Seasonal home checks
                </Link>
              </li>
            </ul>
          </div>

          <aside className="h-fit rounded-lg border border-ink/10 bg-white p-5 shadow-sm lg:sticky lg:top-28">
            <p className="text-sm font-black text-rust">
              Plumbing Red Flags
            </p>
            <ul className="mt-4 grid gap-3 text-sm leading-6 text-slate">
              <li>Water pooling around the toilet base.</li>
              <li>Musty smells under the kitchen sink.</li>
              <li>A toilet that randomly refills itself.</li>
              <li>Water stains on the ceiling below a bathroom.</li>
              <li>A sudden spike in your water bill.</li>
            </ul>
            <Button asChild className="mt-6 w-full">
              <Link href="/contact">Book a Repair</Link>
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
                Common Plumbing Repair Questions
              </h2>
            </div>
            <FAQList items={expandedFaqs} />
          </div>
        </section>
      </article>
      <CalendlySection
        copy="Stop putting pots under leaky pipes. Book a professional to swap out your failing fixtures today."
        title="Is Your Faucet Driving You Crazy?"
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
