import type { Metadata } from "next";
import Link from "next/link";
import { CalendarCheck, Mail, Phone } from "lucide-react";

import { CalendlySection } from "@/components/site/calendly-section";
import { PageHero } from "@/components/sections/page-hero";
import { Button } from "@/components/ui/button";
import { calendlyUrl, email, phoneDisplay, phoneHref } from "@/lib/site-data";

export const metadata: Metadata = {
  title: {
    absolute: "Contact Mor Handy | Request A Free Estimate",
  },
  description:
    "Contact Mor Handy for home repair, handyman, plumbing, electrical, drywall, painting, appliance repair, landscaping, and maintenance services in Maryland.",
};

export default function ContactPage() {
  return (
    <main>
      <PageHero
        copy="Tell us about your project and we will help turn it into a clear repair, maintenance, or improvement plan."
        eyebrow="Contact"
        title="Let's Get Your Project Started"
      />
      <section className="bg-white py-16 sm:py-24">
        <div className="container-page grid gap-8 lg:grid-cols-3">
          <Link
            className="rounded-lg border border-ink/10 bg-mist p-6 transition hover:border-gold"
            href={phoneHref}
          >
            <Phone className="h-7 w-7 text-rust" />
            <h2 className="mt-5 text-2xl font-black text-ink">Call Mor Handy</h2>
            <p className="mt-3 text-sm leading-7 text-slate">{phoneDisplay}</p>
          </Link>
          <Link
            className="rounded-lg border border-ink/10 bg-mist p-6 transition hover:border-gold"
            href={`mailto:${email}`}
          >
            <Mail className="h-7 w-7 text-rust" />
            <h2 className="mt-5 text-2xl font-black text-ink">Email The Team</h2>
            <p className="mt-3 text-sm leading-7 text-slate">{email}</p>
          </Link>
          <Link
            className="rounded-lg border border-ink/10 bg-mist p-6 transition hover:border-gold"
            href={calendlyUrl}
          >
            <CalendarCheck className="h-7 w-7 text-rust" />
            <h2 className="mt-5 text-2xl font-black text-ink">Book Online</h2>
            <p className="mt-3 text-sm leading-7 text-slate">
              Choose a time for your estimate.
            </p>
          </Link>
        </div>
        <div className="container-page mt-10 rounded-lg border border-ink/10 bg-ink p-6 text-white sm:p-8">
          <p className="text-sm font-black text-gold">
            Best estimate details
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight">
            Include Photos, Address, Service Needed, And Project Details
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-white/72">
            The more specific the request, the faster Mor Handy can identify the
            right visit type, materials, route timing, and scope questions.
          </p>
          <Button asChild className="mt-6">
            <Link href={calendlyUrl}>Request Free Estimate</Link>
          </Button>
        </div>
      </section>
      <CalendlySection />
    </main>
  );
}
