import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { CalendlySection } from "@/components/site/calendly-section";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/sections/section-heading";
import { articles } from "@/lib/site-data";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Home Maintenance Guides & Articles | Mor Handy",
  description:
    "Read comprehensive guides and SEO-optimized articles about home maintenance, electrical, plumbing, handyman repairs, and more for the DMV area.",
};

export default function ArticlesPage() {
  return (
    <main>
      <PageHero
        copy="Practical guides, maintenance checklists, and professional advice to help Maryland, DC, and Virginia homeowners protect their property and avoid costly repairs."
        eyebrow="Articles & Guides"
        title="Home Maintenance Insights For The DMV"
      />
      <section className="bg-white py-16 sm:py-24">
        <div className="container-page">
          <SectionHeading
            copy="Learn the warning signs of home issues before they become expensive emergencies. Our guides cover everything from seasonal maintenance to specialized repair knowledge."
            eyebrow="Latest Insights"
            title="Professional Advice From Experienced Handymen"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/articles/${article.slug}`}
                className="group flex flex-col overflow-hidden rounded-xl border border-ink/10 bg-white shadow-sm transition hover:shadow-md"
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-mist">
                  <Image
                    src={article.image}
                    alt={article.imageAlt}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-105"
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-bold leading-tight text-ink">
                    {article.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate">
                    {article.description}
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-sm font-bold text-rust">
                    Read Article
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CalendlySection
        copy="Don't have time to fix it yourself? Book a free estimate and let Mor Handy handle the repairs while you relax."
        title="Ready To Stop Reading And Start Fixing?"
      />
    </main>
  );
}
