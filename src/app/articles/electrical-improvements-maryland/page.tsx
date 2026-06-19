import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { CalendlySection } from "@/components/site/calendly-section";
import { FAQList } from "@/components/sections/faq-list";
import { Button } from "@/components/ui/button";
import { absoluteUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Safe Electrical Upgrades for Maryland Homes | Mor Handy",
  description:
    "Learn about the top electrical improvements for residential properties in Maryland, including lighting, fans, and safety upgrades.",
  alternates: {
    canonical: "/articles/electrical-improvements-maryland",
  },
  openGraph: {
    title: "Safe Electrical Upgrades for Maryland Homes",
    description:
      "Avoid dangerous DIY electrical work. Discover safe, practical electrical improvements for your Maryland home, from ceiling fans to modern lighting fixtures.",
    images: [
      {
        url: "/images/services/electrical-residential-repair.webp",
        alt: "Electrician working on residential wiring",
      },
    ],
  },
};

const expandedFaqs = [
  {
    question: "Can a handyman replace a light fixture?",
    answer:
      "Yes. A skilled handyman can safely replace existing light fixtures, install ceiling fans where appropriate bracing exists, and swap out old switches and outlets.",
  },
  {
    question: "When should I call an electrician instead of a handyman?",
    answer:
      "You should call a licensed electrician if you need a new electrical panel, are rewiring a whole house, adding new circuits, or dealing with major power failures. A handyman is ideal for swapping out fixtures, switches, and minor troubleshooting.",
  },
  {
    question: "Why do my lights flicker when the AC turns on?",
    answer:
      "Flickering lights when a large appliance kicks on is often due to a sudden voltage drop. While minor dimming can be normal in older homes, severe flickering should be inspected to rule out loose wiring or an overloaded circuit.",
  },
  {
    question: "Are smart switches worth the investment?",
    answer:
      "Yes. Smart switches allow you to schedule lighting, control fixtures remotely, and improve home security. They are a highly requested electrical upgrade in the Maryland and DMV area.",
  },
  {
    question: "How do I know if my outlets are grounded?",
    answer:
      "Outlets with three prongs are typically grounded, but in older homes, a three-prong outlet might have been installed without an actual ground wire. A simple plug-in circuit tester can confirm if the outlet is properly grounded.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Safe Electrical Upgrades for Maryland Homes",
  description:
    "Learn about the top electrical improvements for residential properties in Maryland, including lighting, fans, and safety upgrades.",
  image: absoluteUrl("/images/services/electrical-residential-repair.webp"),
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
  mainEntityOfPage: absoluteUrl("/articles/electrical-improvements-maryland"),
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

export default function ElectricalArticlePage() {
  return (
    <main>
      <article>
        <header className="premium-grid bg-mist py-16 sm:py-20">
          <div className="container-page grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-center">
            <div>
              <p className="text-sm font-black text-rust">
                Electrical Safety & Upgrades
              </p>
              <h1 className="mt-4 text-4xl font-black leading-[1.05] tracking-tight text-ink sm:text-6xl">
                Safe Electrical Improvements for Maryland Homes
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate">
                Upgrading your lighting, installing ceiling fans, and swapping
                out old switches shouldn't be a gamble. Learn the right way to
                handle residential electrical improvements in Maryland.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild>
                  <Link href="/services/electrical-services">
                    Book Electrical Services
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/contact">Ask an Expert</Link>
                </Button>
              </div>
            </div>
            <figure className="image-frame aspect-[4/5]">
              <Image
                alt="Electrician working on residential wiring"
                className="object-cover"
                fill
                priority
                sizes="(min-width: 1024px) 36vw, 100vw"
                src="/images/services/electrical-residential-repair.webp"
                title="Professional handling electrical wiring safely"
              />
            </figure>
          </div>
        </header>

        <div className="container-page grid gap-10 py-14 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div className="article-content">
            <h2>Featured Snippet Answer</h2>
            <p>
              Residential electrical improvements in Maryland include replacing
              outdated light fixtures, installing ceiling fans, upgrading to
              smart switches, and swapping out loose outlets. While major
              rewiring requires a licensed electrician, a skilled handyman can
              safely perform these minor electrical upgrades to improve home
              safety, energy efficiency, and daily convenience.
            </p>

            <h2>Why Old Wiring and Fixtures are a Hidden Danger</h2>
            <p>
              Many homes in Maryland and the greater DMV area were built decades
              ago. While historic homes have incredible charm, their original
              electrical systems were not designed for modern power loads. Even
              if your panel has been upgraded, the actual fixtures, switches,
              and outlets throughout the house might be showing their age.
            </p>
            <p>
              Loose outlets can cause arcing—a major fire hazard. Outdated
              fixtures with brittle wiring can easily short circuit. By proactively
              upgrading these points of contact, you not only improve the aesthetics
              of your home but drastically increase its safety.
            </p>

            <h2>Top Electrical Upgrades to Consider</h2>
            <p>
              If you are looking to refresh your home, these electrical upgrades
              offer the best return on investment:
            </p>
            <ul>
              <li>
                <strong>Ceiling Fans:</strong> Essential for circulating air
                during humid Maryland summers and helping your HVAC system run
                more efficiently.
              </li>
              <li>
                <strong>Smart Switches:</strong> Control your lighting from your
                phone, set vacation schedules, and dim lights without needing
                to change the bulbs.
              </li>
              <li>
                <strong>USB Outlets:</strong> Swap out kitchen and bedroom
                outlets for ones with built-in USB ports to eliminate bulky
                adapters.
              </li>
              <li>
                <strong>Recessed Lighting:</strong> Modernize low-ceiling rooms
                and basements with sleek, energy-efficient LED recessed lighting.
              </li>
            </ul>

            <figure className="my-10 overflow-hidden rounded-lg border border-ink/10 bg-white">
              <div className="relative aspect-[4/5] sm:aspect-[1.7/1]">
                <Image
                  alt="Modern ceiling fan installed in a residential home"
                  className="object-cover"
                  fill
                  sizes="(min-width: 768px) 720px, 100vw"
                  src="/images/services/electrical-residential-repair.webp"
                  title="Ceiling fan installation"
                />
              </div>
              <figcaption className="px-5 py-4 text-sm text-slate">
                Proper ceiling fan installation requires a reinforced ceiling box to support the weight and movement of the unit.
              </figcaption>
            </figure>

            <h2>The Dangers of DIY Electrical Work</h2>
            <p>
              Watching a five-minute online video does not make someone an
              electrician. Reversing the hot and neutral wires on an outlet
              might still allow a lamp to turn on, but it creates a severe shock
              hazard. Overloading a circuit by daisy-chaining fixtures can cause
              wires to overheat inside the walls. 
            </p>

            <h2>Expert Insights on Electrical Safety</h2>
            <p>
              The <a href="https://www.esfi.org/" className="font-bold text-rust underline" target="_blank" rel="noopener noreferrer">Electrical Safety Foundation International (ESFI)</a> reports that thousands of home fires each year are caused by electrical system failures. They strongly recommend having your home's electrical systems inspected if the home is over 40 years old, if you've added major new appliances, or if you frequently trip circuit breakers.
            </p>

            <h2>Internal Links For Next Steps</h2>
            <ul>
              <li>
                <Link className="font-bold text-rust underline" href="/services/electrical-services">
                  Electrical fixture replacement
                </Link>
              </li>
              <li>
                <Link className="font-bold text-rust underline" href="/services/general-repair-services">
                  General handyman services
                </Link>
              </li>
              <li>
                <Link className="font-bold text-rust underline" href="/service-areas/anne-arundel-county">
                  Anne Arundel County services
                </Link>
              </li>
              <li>
                <Link className="font-bold text-rust underline" href="/faq">
                  Frequently Asked Questions
                </Link>
              </li>
            </ul>
          </div>

          <aside className="h-fit rounded-lg border border-ink/10 bg-white p-5 shadow-sm lg:sticky lg:top-28">
            <p className="text-sm font-black text-rust">
              Warning Signs
            </p>
            <ul className="mt-4 grid gap-3 text-sm leading-6 text-slate">
              <li>Outlets that feel warm to the touch.</li>
              <li>Flickering or dimming lights.</li>
              <li>Buzzing sounds from switches.</li>
              <li>Plugs that fall out of outlets easily.</li>
              <li>Frequent tripped breakers.</li>
            </ul>
            <Button asChild className="mt-6 w-full">
              <Link href="/contact">Book Electrical Help</Link>
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
                Common Questions About Home Electrical Work
              </h2>
            </div>
            <FAQList items={expandedFaqs} />
          </div>
        </section>
      </article>
      <CalendlySection
        copy="Don't mess with electricity if you aren't absolutely sure what you're doing. Book a professional to swap those fixtures safely."
        title="Need Help With Your Lighting or Fans?"
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
