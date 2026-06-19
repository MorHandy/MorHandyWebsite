import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";

import { CalendlySection } from "@/components/site/calendly-section";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/sections/section-heading";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/site/scroll-reveal";
import { reviews } from "@/lib/site-data";

export const metadata: Metadata = {
  title: {
    absolute: "Mor Handy Reviews & Projects | Maryland Home Repair Testimonials",
  },
  description:
    "Read customer-style review examples and see Mor Handy project categories, repair examples, and home improvement proof for Maryland homeowners.",
};

const projectCategories = [
  {
    title: "Plumbing Rescue",
    copy: "Clogged sinks, dirty drains, disposal issues, and under-sink repairs handled with visible diagnostics and a clean closeout.",
    image: "/images/results/sink-flow-after.png",
    alt: "Clean sink water flow after Mor Handy plumbing repair",
  },
  {
    title: "Exterior Cleanup",
    copy: "Debris, overgrowth, surface wear, and outdoor problem areas organized into a practical repair and cleanup plan.",
    image: "/images/results/exterior-cleanup-before.png",
    alt: "Exterior cleanup project before Mor Handy property maintenance",
  },
  {
    title: "Deck And Surface Care",
    copy: "Weathered decks and worn exterior surfaces reviewed for repair, cleaning, paint, or replacement recommendations.",
    image: "/images/results/deck-surface-before.png",
    alt: "Weathered deck surface before repair or refinishing",
  },
  {
    title: "Electrical And Fixture Checks",
    copy: "Corrosion, loose parts, exposed mounting issues, and fixture concerns documented before work starts.",
    image: "/images/results/electrical-part-corrosion.png",
    alt: "Corroded electrical part documented before Mor Handy repair planning",
  },
];

const results = [
  {
    title: "Disposal and Sink Diagnosis",
    tag: "Plumbing",
    image: "/images/results/sink-disposal-before.png",
    alt: "Garbage disposal and sink plumbing before repair",
  },
  {
    title: "Clogged Sink Recovery",
    tag: "Drain Issue",
    image: "/images/results/sink-clog-before.png",
    alt: "Cloudy clogged sink water before drain repair",
  },
  {
    title: "Restored Sink Flow",
    tag: "After Result",
    image: "/images/results/sink-flow-after.png",
    alt: "Clear running water after sink repair",
  },
  {
    title: "Aging Pipe Assessment",
    tag: "Plumbing",
    image: "/images/results/rusty-plumbing-repair-before.png",
    alt: "Rusty plumbing pipe before repair assessment",
  },
  {
    title: "Deck Wear Review",
    tag: "Exterior",
    image: "/images/results/deck-surface-before.png",
    alt: "Weathered deck boards before maintenance",
  },
  {
    title: "Frozen Coil Finding",
    tag: "Appliance",
    image: "/images/results/frozen-appliance-coils-before.png",
    alt: "Frozen appliance coils before service",
  },
  {
    title: "Corroded Part Check",
    tag: "Electrical",
    image: "/images/results/electrical-part-corrosion.png",
    alt: "Corroded electrical component before repair",
  },
  {
    title: "Radiator Wall Repair",
    tag: "Interior",
    image: "/images/results/radiator-wall-repair-before.png",
    alt: "Wall damage behind radiator before repair",
  },
  {
    title: "Under-Sink Plumbing",
    tag: "Plumbing",
    image: "/images/results/under-sink-plumbing-repair.jpg",
    alt: "Under sink plumbing repair area",
  },
  {
    title: "Brick Mount Repair",
    tag: "Electrical",
    image: "/images/results/brick-electrical-mount-repair.jpg",
    alt: "Brick wall electrical mounting repair",
  },
];

function getInitials(name: string) {
  return name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase();
}

export default function ReviewsPage() {
  return (
    <main>
      <PageHero
        align="center"
        copy="Trust is the product. See the kind of practical home repair work we do, and read why Maryland homeowners choose Mor Handy for communication, arrival windows, and repairs done correctly."
        eyebrow="Reviews & Projects"
        title="Real Work. Real Reviews."
      />

      {/* ── REVIEW CARDS ────────────────────────────────────────── */}
      <section className="bg-white py-16 sm:py-24">
        <div className="container-page">
          <SectionHeading
            centered
            eyebrow="Reviews"
            title="Why Maryland Homeowners Trust Mor Handy"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {reviews.map((review, index) => (
              <ScrollReveal delay={index * 0.08} key={`${review.name}-${index}`}>
                <article
                  className="relative flex h-full flex-col rounded-xl border border-ink/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                  style={{ borderLeft: "3px solid #cf9c3d" }}
                >
                  {/* Decorative quote mark */}
                  <svg
                    aria-hidden="true"
                    className="absolute right-5 top-5 h-10 w-10 text-gold/12"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                  >
                    <path d="M10 8C6.686 8 4 10.686 4 14v10h10V14H7c0-1.657 1.343-3 3-3V8zm18 0c-3.314 0-6 2.686-6 6v10h10V14h-7c0-1.657 1.343-3 3-3V8z" />
                  </svg>

                  <div className="flex gap-0.5 text-gold">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star className="h-4 w-4 fill-current" key={i} />
                    ))}
                  </div>

                  <p className="mt-4 flex-1 text-base leading-7 text-slate">
                    &ldquo;{review.text}&rdquo;
                  </p>

                  <div className="mt-6 flex items-center gap-3 border-t border-ink/10 pt-5">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-ink text-sm font-black text-white">
                      {getInitials(review.name)}
                    </div>
                    <div>
                      <p className="font-black text-ink">{review.name}</p>
                      <p className="text-xs text-slate">
                        {review.location} &middot; {review.service}
                      </p>
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECT CATEGORIES ──────────────────────────────────── */}
      <section className="bg-mist py-16 sm:py-24">
        <div className="container-page">
          <SectionHeading
            centered
            copy="Mor Handy project pages are designed to show the kind of practical home repair, maintenance, and improvement work homeowners actually need."
            eyebrow="Projects"
            title="Real Home Maintenance Work, Organized Clearly"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {projectCategories.map((project, index) => (
              <ScrollReveal delay={index * 0.07} key={project.title}>
                <article className="group flex flex-col overflow-hidden rounded-xl border border-ink/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-stone">
                    <Image
                      alt={project.alt}
                      className="object-cover transition duration-500 group-hover:scale-[1.03]"
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      src={project.image}
                      title={project.alt}
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h2 className="text-xl font-black text-ink">{project.title}</h2>
                    <p className="mt-3 flex-1 text-sm leading-7 text-slate">{project.copy}</p>
                    <Button asChild className="mt-5 self-start" size="sm" variant="outline">
                      <Link href="/contact">
                        Start Similar Project
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── RESULTS GALLERY ─────────────────────────────────────── */}
      <section className="bg-white py-16 sm:py-24">
        <div className="container-page">
          <SectionHeading
            centered
            copy="A homeowner should be able to see the kind of problems you actually solve. This gallery is organized around real conditions: clogs, corrosion, exterior wear, appliance issues, and cleanup scopes."
            eyebrow="Results gallery"
            title="Real Job Photos, Clear Problem Context"
          />
          <div className="mt-8 flex justify-center">
            <Button asChild variant="outline">
              <Link href="/contact">
                Send Your Project Photos
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {results.map((result) => (
              <figure
                className="group overflow-hidden rounded-xl border border-ink/10 bg-white shadow-sm transition hover:-translate-y-1 hover:border-gold/40 hover:shadow-md"
                key={result.image + result.title}
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-stone">
                  <Image
                    alt={result.alt}
                    className="object-cover transition duration-500 group-hover:scale-[1.04]"
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    src={result.image}
                    title={result.alt}
                  />
                </div>
                <figcaption className="p-4">
                  <span className="inline-block rounded-full bg-rust/10 px-2.5 py-0.5 text-xs font-black uppercase tracking-wider text-rust">
                    {result.tag}
                  </span>
                  <p className="mt-2 text-base font-black text-ink">{result.title}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <CalendlySection
        copy="Book the estimate, tell us what needs attention, and experience the repair process Maryland homeowners expect."
        title="Ready To Become The Next Review?"
      />
    </main>
  );
}
