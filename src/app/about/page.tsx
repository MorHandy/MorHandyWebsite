import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { CalendlySection } from "@/components/site/calendly-section";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/sections/section-heading";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: {
    absolute: "About Mor Handy | Maryland Home Repair Experts",
  },
  description:
    "Mor Handy was built to give Maryland homeowners a more reliable handyman, repair, and home maintenance experience.",
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        copy="Mor Handy was founded on a simple idea: homeowners deserve reliable help they can trust with their property, schedule, and peace of mind."
        eyebrow="About Mor Handy"
        title="A Better Handyman Experience Starts Here"
      />
      <section className="bg-white py-16 sm:py-24">
        <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="image-frame aspect-[4/5]">
            <Image
              alt="Mor Handy technician helping with HVAC and filter maintenance"
              className="object-cover"
              fill
              sizes="(min-width: 1024px) 42vw, 100vw"
              src="/images/articles/breathe-easier-hvac-service.jpg"
              title="Mor Handy technician helping with HVAC and filter maintenance"
            />
          </div>
          <div>
            <SectionHeading
              centered={false}
              copy="Too many homeowners deal with contractors who do not return calls, miss appointments, or leave projects unfinished. Mor Handy is changing that experience with dependable service and professional communication."
              eyebrow="Mission"
              title="Make Home Maintenance Simple, Stress-Free, And Dependable"
            />
            <div className="mt-8 grid gap-4">
              {[
                "Reliable service from the first call",
                "Clear communication before work begins",
                "Quality workmanship on small and multi-step repairs",
                "A long-term home maintenance partner",
              ].map((item) => (
                <div className="flex items-center gap-3 text-base font-bold text-ink" key={item}>
                  <CheckCircle2 className="h-5 w-5 text-forest" />
                  {item}
                </div>
              ))}
            </div>
            <Button asChild className="mt-8" variant="outline">
              <Link href="/services">
                Explore Services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      <section className="bg-mist py-16 sm:py-24">
        <div className="container-page grid gap-5 md:grid-cols-3">
          {[
            [
              "Our Mission",
              "Help Maryland homeowners protect, improve, and maintain their homes through reliable service, transparent communication, and quality craftsmanship.",
            ],
            [
              "Our Vision",
              "Become Maryland's most trusted home maintenance company by making one-call home care feel professional, organized, and dependable.",
            ],
            [
              "Our Standard",
              "Treat every visit like the beginning of a long-term relationship, not a quick one-time job.",
            ],
          ].map(([title, copy]) => (
            <article className="rounded-lg border border-ink/10 bg-white p-6 shadow-sm" key={title}>
              <h2 className="text-xl font-black text-ink">{title}</h2>
              <p className="mt-4 text-sm leading-7 text-slate">{copy}</p>
            </article>
          ))}
        </div>
      </section>
      <CalendlySection
        copy="Tell us what is piling up around the house and we will help turn it into a clean, scheduled repair plan."
        title="Ready For A More Reliable Repair Experience?"
      />
    </main>
  );
}
