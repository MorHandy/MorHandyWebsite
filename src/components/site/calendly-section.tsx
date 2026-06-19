"use client";

import { CalendarCheck } from "lucide-react";
import Link from "next/link";

import { calendlyEmbedUrl, calendlyUrl } from "@/lib/site-data";
import { Button } from "@/components/ui/button";

export function CalendlySection({
  eyebrow = "Book your estimate",
  title = "Put Your Home Repair List On The Calendar",
  copy = "Choose a time that works, tell us what needs attention, and Mor Handy will follow up with a clear next step.",
}: {
  eyebrow?: string;
  title?: string;
  copy?: string;
}) {
  const iframeUrl = `${calendlyEmbedUrl}&embed_domain=morhandy.com&embed_type=Inline`;

  return (
    <section className="bg-ink py-16 text-white sm:py-20">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <div className="flex flex-col justify-center">
          <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-md border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold text-gold">
            <CalendarCheck className="h-4 w-4" />
            {eyebrow}
          </div>
          <h2 className="max-w-xl text-3xl font-black tracking-tight sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 max-w-xl text-base leading-8 text-white/74">{copy}</p>
          <div className="mt-8 grid gap-3 text-sm text-white/78 sm:grid-cols-2">
            <span className="rounded-md border border-white/12 bg-white/8 px-4 py-3">
              Free estimate request
            </span>
            <span className="rounded-md border border-white/12 bg-white/8 px-4 py-3">
              Fast route confirmation
            </span>
            <span className="rounded-md border border-white/12 bg-white/8 px-4 py-3">
              Photos and details welcome
            </span>
            <span className="rounded-md border border-white/12 bg-white/8 px-4 py-3">
              Clear scope before work begins
            </span>
          </div>
        </div>
        <div className="overflow-hidden rounded-lg border border-white/12 bg-white shadow-[0_24px_62px_rgba(0,0,0,0.22)]">
          <iframe
            className="calendly-booking-frame"
            loading="lazy"
            src={iframeUrl}
            title="Schedule a Mor Handy estimate with Calendly"
          />
          <div className="border-t border-ink/10 bg-white p-4 text-center">
            <p className="text-sm font-semibold text-slate">
              Calendar not showing? Open the booking page directly.
            </p>
            <Button asChild className="mt-3" size="sm">
              <Link href={calendlyUrl}>Open Calendly</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
