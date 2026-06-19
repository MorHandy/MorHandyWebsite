import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Maintenance Packages & Pricing | Mor Handy",
  description:
    "Explore Mor Handy's Essential ($69/mo), Standard ($149/mo), and Premium ($299/mo) home maintenance packages. Transparent pricing, no contracts, Maryland-local team.",
  alternates: { canonical: "https://morhandy.com/pricing" },
};

import Link from "next/link";
import {
  ArrowRight,
  CalendarCheck,
  Check,
  Phone,
  ShieldCheck,
  Star,
  Zap,
} from "lucide-react";

import { CalendlySection } from "@/components/site/calendly-section";
import { ScrollReveal } from "@/components/site/scroll-reveal";
import { SectionHeading } from "@/components/sections/section-heading";
import { Button } from "@/components/ui/button";
import { BrandPattern } from "@/components/site/service-icons";
import { calendlyUrl, phoneDisplay, phoneHref } from "@/lib/site-data";

/* ── custom SVG icons for Why Packages ─────────────────────── */

function SvgShieldProtect() {
  return (
    <svg aria-hidden="true" className="h-10 w-10" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" viewBox="0 0 48 48">
      <style>{`
        @keyframes shield-glow{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.7;transform:scale(1.05)}}
        .sp-shield{transform-origin:24px 24px;animation:shield-glow 3s ease-in-out infinite}
      `}</style>
      <g className="sp-shield">
        <path d="M24 4L8 10v12c0 11 16 22 16 22s16-11 16-22V10L24 4z" fill="currentColor" fillOpacity=".1" strokeOpacity=".9" />
        <polyline points="17,24 22,29 31,19" strokeWidth="2.2" />
      </g>
    </svg>
  );
}

function SvgCalendarSchedule() {
  return (
    <svg aria-hidden="true" className="h-10 w-10" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" viewBox="0 0 48 48">
      <style>{`
        @keyframes cal-flip{0%,100%{transform:scaleY(1)}50%{transform:scaleY(.9)}}
        .cs-page{transform-origin:24px 24px;animation:cal-flip 2.6s ease-in-out infinite}
      `}</style>
      <g className="cs-page">
        <rect fill="currentColor" fillOpacity=".08" height="32" rx="4" stroke="currentColor" strokeOpacity=".9" width="32" x="8" y="9" />
        <line x1="8" x2="40" y1="19" y2="19" />
        <line strokeOpacity=".5" x1="16" x2="16" y1="9" y2="16" />
        <line strokeOpacity=".5" x1="32" x2="32" y1="9" y2="16" />
        <rect fill="currentColor" fillOpacity=".55" height="4" rx="1" width="4" x="14" y="24" />
        <rect fill="currentColor" fillOpacity=".55" height="4" rx="1" width="4" x="22" y="24" />
        <rect fill="currentColor" fillOpacity=".8" height="4" rx="1" width="4" x="30" y="24" />
        <rect fill="currentColor" fillOpacity=".55" height="4" rx="1" width="4" x="14" y="32" />
        <rect fill="currentColor" fillOpacity=".55" height="4" rx="1" width="4" x="22" y="32" />
      </g>
    </svg>
  );
}

function SvgHandshake() {
  return (
    <svg aria-hidden="true" className="h-10 w-10" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" viewBox="0 0 48 48">
      <style>{`
        @keyframes shake{0%,100%{transform:rotate(0deg)}25%{transform:rotate(-4deg)}75%{transform:rotate(4deg)}}
        .hs-grip{transform-origin:24px 28px;animation:shake 2.4s ease-in-out infinite}
      `}</style>
      <g className="hs-grip">
        <path d="M8 20l8-6 6 4h4l6-4 8 6" strokeOpacity=".9" />
        <path d="M8 20c0 0 4 12 16 14s16-14 16-14" fill="currentColor" fillOpacity=".08" strokeOpacity=".8" />
        <line x1="18" x2="22" y1="18" y2="26" strokeOpacity=".5" />
        <line x1="26" x2="30" y1="18" y2="26" strokeOpacity=".5" />
      </g>
    </svg>
  );
}


/* ── package data ──────────────────────────────────────────── */

const packages = [
  {
    id: "essential",
    tier: "Tier 1",
    name: "Essential Home Wellness",
    tagline: "Peace of mind for the essentials",
    price: 69,
    period: "/ month",
    popular: false,
    cta: "Get Started",
    accentColor: "border-ink/20",
    badgeColor: "bg-slate/10 text-slate",
    savings: "Save up to $240/yr vs. a-la-carte",
    description:
      "This foundational package covers the most critical annual maintenance tasks — keeping your home safe and its core systems running correctly. Perfect for homeowners who want peace of mind without the overhead.",
    features: [
      "Semi-Annual Gutter Cleaning",
      "Annual Smoke & CO Detector Check",
      "Annual Water Heater Flush",
      "Dryer Vent Cleaning",
      "Exterior Faucet Winterization (Fall)",
      "Annual Home Safety Inspection",
    ],
    included: [],
  },
  {
    id: "standard",
    tier: "Tier 2",
    name: "Standard Home Care",
    tagline: "Our most popular package",
    price: 149,
    period: "/ month",
    popular: true,
    cta: "Choose Standard",
    accentColor: "border-gold",
    badgeColor: "bg-gold text-ink",
    savings: "Save up to $540/yr vs. a-la-carte",
    description:
      "Everything in Essential, plus preventative maintenance to keep your home running efficiently and looking its best year-round. This is what most Maryland homeowners actually need.",
    features: [
      "Semi-Annual HVAC Filter Replacement",
      "Refrigerator Coil Cleaning",
      "Caulking Inspection & Touch-up",
      "Pressure Washing (Up to 500 sq. ft.)",
      "Ceiling Fan Inspections",
      "Priority Scheduling",
    ],
    included: ["Everything in Essential"],
  },
  {
    id: "premium",
    tier: "Tier 3",
    name: "Premium Home Wellness",
    tagline: "Total home protection",
    price: 299,
    period: "/ month",
    popular: false,
    cta: "Go Premium",
    accentColor: "border-rust/40",
    badgeColor: "bg-rust/10 text-rust",
    savings: "Best value — save $1,000+/yr",
    description:
      "The ultimate in-home maintenance for the discerning homeowner who wants to proactively protect their investment. In-depth inspections, hands-on service, and complimentary handyman hours included.",
    features: [
      "Comprehensive Bi-Annual Home Inspection",
      "Pressure Washing (Up to 1,500 sq. ft.)",
      "Deck & Patio Safety Inspection",
      "Minor Drywall & Paint Touch-ups",
      "Gutter & Downspout Minor Repairs",
      "Complimentary Handyman Hours",
    ],
    included: ["Everything in Essential", "Everything in Standard"],
  },
];

const objections = [
  {
    q: "Is there a contract or commitment?",
    a: "No long-term contracts. Month-to-month, cancel any time. We keep clients by doing great work — not paperwork.",
  },
  {
    q: "What if I need something outside the package?",
    a: "Package members get priority access to our full service menu at preferred member pricing. Think of it as your home on retainer.",
  },
  {
    q: "How does scheduling work?",
    a: "We reach out 2 weeks before each scheduled service to confirm timing. Standard+ members get priority booking slots.",
  },
  {
    q: "Are parts and materials included?",
    a: "Package pricing covers labor and standard consumables (filters, caulk, etc.). If a repair needs special materials, we quote transparently before proceeding.",
  },
];

const whyPackages = [
  {
    SvgIcon: SvgShieldProtect,
    title: "Catch Problems Early",
    copy: "A $69/mo package can prevent a $4,000 water heater failure or a $900 gutter repair. Preventative maintenance is always cheaper than emergency repair.",
  },
  {
    SvgIcon: SvgCalendarSchedule,
    title: "Never Miss a Maintenance Date",
    copy: "We track your schedule and reach out when it's time. No more forgetting to flush the water heater or clean the dryer vent.",
  },
  {
    SvgIcon: SvgHandshake,
    title: "One Team, Full History",
    copy: "Your technician knows your home's quirks. No repeating yourself, no strangers in your house — just a consistent, trusted relationship.",
  },
];



/* ── comparison table data ──────────────────────────────────── */
const comparisonRows = [
  { feature: "Gutter Cleaning (semi-annual)", essential: true, standard: true, premium: true },
  { feature: "Smoke & CO Detector Check", essential: true, standard: true, premium: true },
  { feature: "Water Heater Flush", essential: true, standard: true, premium: true },
  { feature: "Dryer Vent Cleaning", essential: true, standard: true, premium: true },
  { feature: "Exterior Faucet Winterization", essential: true, standard: true, premium: true },
  { feature: "Annual Safety Inspection", essential: true, standard: true, premium: true },
  { feature: "HVAC Filter Replacement", essential: false, standard: true, premium: true },
  { feature: "Refrigerator Coil Cleaning", essential: false, standard: true, premium: true },
  { feature: "Caulking Inspection & Touch-up", essential: false, standard: true, premium: true },
  { feature: "Pressure Washing (500 sq. ft.)", essential: false, standard: true, premium: true },
  { feature: "Ceiling Fan Inspections", essential: false, standard: true, premium: true },
  { feature: "Priority Scheduling", essential: false, standard: true, premium: true },
  { feature: "Bi-Annual Comprehensive Inspection", essential: false, standard: false, premium: true },
  { feature: "Pressure Washing (1,500 sq. ft.)", essential: false, standard: false, premium: true },
  { feature: "Deck & Patio Safety Inspection", essential: false, standard: false, premium: true },
  { feature: "Drywall & Paint Touch-ups", essential: false, standard: false, premium: true },
  { feature: "Gutter & Downspout Minor Repairs", essential: false, standard: false, premium: true },
  { feature: "Complimentary Handyman Hours", essential: false, standard: false, premium: true },
];

export default function PricingPage() {
  return (
    <main>
      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-ink text-white">
        <BrandPattern className="text-white" />
        <div className="container-page relative py-16 sm:py-24 text-center">
          <ScrollReveal>
            <p className="text-sm font-black text-gold tracking-widest uppercase">
              Home Maintenance Packages
            </p>
            <h1 className="mt-5 text-5xl font-black leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
              Stop Guessing.
              <br />
              <span className="text-gold">Start Protecting.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/82 sm:text-xl">
              Most homeowners wait until something breaks. Our package members
              never have to. Choose a plan, and we handle the rest — proactively,
              on schedule, every year.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Button asChild size="lg">
                <Link href="#packages">
                  <Zap className="h-5 w-5" />
                  See All Packages
                </Link>
              </Button>
              <Button asChild size="lg" variant="light">
                <Link href={phoneHref}>
                  <Phone className="h-5 w-5" />
                  {phoneDisplay}
                </Link>
              </Button>
            </div>
            {/* trust micro-copy */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm font-bold text-white/60">
              <span className="flex items-center gap-2"><Check className="h-4 w-4 text-gold" /> No long-term contracts</span>
              <span className="flex items-center gap-2"><Check className="h-4 w-4 text-gold" /> Cancel anytime</span>
              <span className="flex items-center gap-2"><Check className="h-4 w-4 text-gold" /> Maryland local team</span>
              <span className="flex items-center gap-2"><Check className="h-4 w-4 text-gold" /> 100+ jobs completed</span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── WHY PACKAGES ──────────────────────────────────────── */}
      <section className="bg-white py-16 sm:py-20">
        <div className="container-page">
          <ScrollReveal>
            <SectionHeading
              centered
              eyebrow="Why a maintenance plan?"
              title="Your Home is Your Biggest Asset. Treat It That Way."
              copy="Reactive repairs cost 3–5× more than preventative maintenance. A package plan keeps your systems running, your home safe, and your wallet protected — all year long."
            />
          </ScrollReveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {whyPackages.map((item, index) => (
              <ScrollReveal delay={index * 0.08} key={item.title}>
                <div className="h-full rounded-xl border border-ink/10 bg-mist p-6 transition hover:-translate-y-1 hover:shadow-md">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gold/15 text-ink">
                    <item.SvgIcon />
                  </div>
                  <h3 className="mt-4 text-xl font-black text-ink">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate">{item.copy}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING CARDS ─────────────────────────────────────── */}
      <section className="bg-mist py-16 sm:py-24" id="packages">
        <div className="container-page">
          <ScrollReveal>
            <SectionHeading
              centered
              eyebrow="General Home Maintenance Packages"
              title="Simple, Transparent Pricing"
              copy="Everything is bundled. No surprise invoices. No hidden fees. Just consistent, professional care for your home at a price that makes sense."
            />
          </ScrollReveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {packages.map((pkg, index) => (
              <ScrollReveal delay={index * 0.1} key={pkg.id}>
                <div
                  className={`relative flex h-full flex-col rounded-2xl border-2 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl ${pkg.accentColor} ${pkg.popular ? "shadow-gold/20 shadow-lg" : ""}`}
                >
                  {/* Popular badge */}
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-gold px-4 py-1.5 text-xs font-black uppercase tracking-wider text-ink shadow-md">
                        <Star className="h-3.5 w-3.5 fill-current" />
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="p-7">
                    {/* Tier badge */}
                    <span className={`inline-block rounded-full px-3 py-1 text-xs font-black uppercase tracking-wider ${pkg.badgeColor}`}>
                      {pkg.tier}
                    </span>

                    <h2 className="mt-4 text-2xl font-black text-ink">{pkg.name}</h2>
                    <p className="mt-1 text-sm font-bold text-slate">{pkg.tagline}</p>

                    {/* Price */}
                    <div className="mt-5 flex items-end gap-1">
                      <span className="text-5xl font-black text-ink">${pkg.price}</span>
                      <span className="mb-1.5 text-sm font-bold text-slate">{pkg.period}</span>
                    </div>
                    <p className="mt-1.5 text-xs font-bold text-forest">{pkg.savings}</p>

                    <p className="mt-5 text-sm leading-7 text-slate">{pkg.description}</p>

                    {/* CTA */}
                    <div className="mt-7">
                      <Button
                        asChild
                        className="w-full"
                        size="lg"
                        variant={pkg.popular ? "default" : "outline"}
                      >
                        <Link href={calendlyUrl}>
                          <CalendarCheck className="h-5 w-5" />
                          {pkg.cta}
                        </Link>
                      </Button>
                    </div>

                    {/* Included from lower tiers */}
                    {pkg.included.length > 0 && (
                      <div className="mt-6 rounded-lg border border-ink/8 bg-mist px-4 py-3">
                        {pkg.included.map((item) => (
                          <p className="flex items-center gap-2 text-xs font-bold text-slate" key={item}>
                            <ArrowRight className="h-3.5 w-3.5 shrink-0 text-gold" />
                            {item}
                          </p>
                        ))}
                      </div>
                    )}

                    {/* Feature list */}
                    <div className="mt-6 border-t border-ink/8 pt-6">
                      <p className="mb-3 text-xs font-black uppercase tracking-widest text-ink/50">
                        {pkg.included.length > 0 ? "Plus these services" : "What's included"}
                      </p>
                      <ul className="grid gap-3">
                        {pkg.features.map((feature) => (
                          <li className="flex items-start gap-3 text-sm text-ink" key={feature}>
                            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/15">
                              <Check className="h-3 w-3 text-ink" />
                            </span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Below cards: gentle nudge */}
          <ScrollReveal delay={0.3}>
            <div className="mt-10 flex flex-col items-center gap-3 text-center">
              <p className="text-sm font-bold text-slate">
                Not sure which plan is right for your home?
              </p>
              <Button asChild variant="outline">
                <Link href={phoneHref}>
                  <Phone className="h-4 w-4" />
                  Call us — we&apos;ll help you choose
                </Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── COMPARISON TABLE ───────────────────────────────────── */}
      <section className="bg-white py-16 sm:py-24">
        <div className="container-page">
          <ScrollReveal>
            <SectionHeading
              centered
              eyebrow="Side-by-side comparison"
              title="See Exactly What Each Plan Covers"
              copy="Every service, every tier — laid out plainly so you can make the right call for your home and budget."
            />
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="mt-10 overflow-x-auto rounded-2xl border border-ink/10 shadow-sm">
              <table className="w-full min-w-[640px] text-sm">
                <thead>
                  <tr className="border-b border-ink/10 bg-mist">
                    <th className="px-5 py-4 text-left text-xs font-black uppercase tracking-wider text-ink/60">
                      Service Included
                    </th>
                    <th className="px-5 py-4 text-center text-xs font-black uppercase tracking-wider text-slate">
                      Essential
                      <span className="block text-lg font-black text-ink normal-case tracking-normal">$69/mo</span>
                    </th>
                    <th className="relative px-5 py-4 text-center text-xs font-black uppercase tracking-wider text-gold">
                      Standard
                      <span className="block text-lg font-black text-ink normal-case tracking-normal">$149/mo</span>
                      <span className="absolute right-2 top-2 rounded-full bg-gold/20 px-2 py-0.5 text-[10px] font-black text-gold">Popular</span>
                    </th>
                    <th className="px-5 py-4 text-center text-xs font-black uppercase tracking-wider text-rust">
                      Premium
                      <span className="block text-lg font-black text-ink normal-case tracking-normal">$299/mo</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => (
                    <tr
                      className={`border-b border-ink/8 transition hover:bg-mist/60 ${i % 2 === 0 ? "bg-white" : "bg-mist/30"}`}
                      key={row.feature}
                    >
                      <td className="px-5 py-3.5 font-bold text-ink">{row.feature}</td>
                      <td className="px-5 py-3.5 text-center">
                        {row.essential ? (
                          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-forest/15 mx-auto">
                            <Check className="h-3.5 w-3.5 text-forest" />
                          </span>
                        ) : (
                          <span className="inline-block h-1 w-4 rounded-full bg-ink/15 mx-auto" />
                        )}
                      </td>
                      <td className="px-5 py-3.5 text-center bg-gold/4">
                        {row.standard ? (
                          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-gold/20 mx-auto">
                            <Check className="h-3.5 w-3.5 text-gold-dark" />
                          </span>
                        ) : (
                          <span className="inline-block h-1 w-4 rounded-full bg-ink/15 mx-auto" />
                        )}
                      </td>
                      <td className="px-5 py-3.5 text-center">
                        {row.premium ? (
                          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-rust/10 mx-auto">
                            <Check className="h-3.5 w-3.5 text-rust" />
                          </span>
                        ) : (
                          <span className="inline-block h-1 w-4 rounded-full bg-ink/15 mx-auto" />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="border-t-2 border-ink/10 bg-mist">
                    <td className="px-5 py-4 text-sm font-black text-ink">Monthly Price</td>
                    <td className="px-5 py-4 text-center text-xl font-black text-ink">$69</td>
                    <td className="px-5 py-4 text-center text-xl font-black text-gold bg-gold/4">$149</td>
                    <td className="px-5 py-4 text-center text-xl font-black text-ink">$299</td>
                  </tr>
                  <tr className="bg-mist">
                    <td className="px-5 pb-5" />
                    <td className="px-5 pb-5 text-center">
                      <Button asChild size="sm" variant="outline" className="w-full max-w-[160px]">
                        <Link href={calendlyUrl}>Get Started</Link>
                      </Button>
                    </td>
                    <td className="px-5 pb-5 text-center bg-gold/4">
                      <Button asChild size="sm" className="w-full max-w-[160px]">
                        <Link href={calendlyUrl}>Choose Standard</Link>
                      </Button>
                    </td>
                    <td className="px-5 pb-5 text-center">
                      <Button asChild size="sm" variant="outline" className="w-full max-w-[160px]">
                        <Link href={calendlyUrl}>Go Premium</Link>
                      </Button>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── SOCIAL PROOF STRIP ────────────────────────────────── */}
      <section className="bg-ink py-12 text-white">
        <div className="container-page">
          <div className="grid grid-cols-2 gap-8 text-center sm:grid-cols-4">
            {[
              { value: "100+", label: "Jobs Completed" },
              { value: "5★", label: "Average Rating" },
              { value: "$0", label: "Hidden Fees" },
              { value: "1", label: "Team to Call" },
            ].map((stat) => (
              <div className="flex flex-col gap-1" key={stat.label}>
                <span className="text-4xl font-black text-gold">{stat.value}</span>
                <span className="text-xs font-bold uppercase tracking-widest text-white/60">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ / OBJECTION HANDLING ───────────────────────────── */}
      <section className="bg-mist py-16 sm:py-24">
        <div className="container-page">
          <ScrollReveal>
            <SectionHeading
              centered
              eyebrow="Common questions"
              title="Everything You Want to Know Before You Sign Up"
              copy="We keep things simple and honest. Here are the questions homeowners ask most before choosing a package."
            />
          </ScrollReveal>
          <div className="mt-10 mx-auto max-w-3xl grid gap-5">
            {objections.map((item, index) => (
              <ScrollReveal delay={index * 0.07} key={item.q}>
                <div className="rounded-xl border border-ink/10 bg-white p-6 shadow-sm">
                  <h3 className="text-base font-black text-ink">{item.q}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate">{item.a}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── GUARANTEE BANNER ──────────────────────────────────── */}
      <section
        className="relative overflow-hidden py-16 text-white"
        style={{ background: "linear-gradient(135deg, #1a2744 0%, #0f1a30 50%, #1a2744 100%)" }}
      >
        <svg aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full opacity-10" fill="none" viewBox="0 0 800 220">
          <path d="M0 110 Q200 20 400 110 Q600 200 800 110" stroke="white" strokeWidth="80" />
        </svg>
        <div className="container-page relative flex flex-col items-center gap-8 text-center lg:flex-row lg:text-left">
          <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full border-2 border-gold/30 bg-gold/10">
            <ShieldCheck className="h-12 w-12 text-gold" />
          </div>
          <div className="flex-1">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-gold">Our promise</p>
            <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">
              If It Isn&apos;t Right, We Make It Right.
            </h2>
            <p className="mt-4 max-w-xl text-lg leading-8 text-white/72">
              Every Mor Handy package comes with a straightforward commitment: professional
              work, clear communication, and a team that stands behind everything it does.
              No excuses, no chasing — just peace of mind for your home.
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col">
            <Button asChild size="lg">
              <Link href={calendlyUrl}>
                <CalendarCheck className="h-5 w-5" />
                Get Free Estimate
              </Link>
            </Button>
            <Button asChild size="lg" variant="light">
              <Link href={phoneHref}>
                <Phone className="h-5 w-5" />
                {phoneDisplay}
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── CALENDLY BOOKING ──────────────────────────────────── */}
      <CalendlySection />
    </main>
  );
}
