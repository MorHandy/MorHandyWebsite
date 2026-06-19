"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarCheck,
  CheckCircle2,
  Phone,
  Star,
} from "lucide-react";

import { AreaMap } from "@/components/sections/area-map";
import { CalendlySection } from "@/components/site/calendly-section";
import { FAQList } from "@/components/sections/faq-list";
import { ScrollReveal } from "@/components/site/scroll-reveal";
import { SectionHeading } from "@/components/sections/section-heading";
import { ServiceCard } from "@/components/sections/service-card";

import { Button } from "@/components/ui/button";
import {
  calendlyUrl,
  phoneDisplay,
  phoneHref,
  primaryServices,
  reviews,
  trustPoints,
} from "@/lib/site-data";

/* ── animated count-up hook ─────────────────────────────────── */
function useCountUp(target: number, duration = 1800, active = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [active, target, duration]);
  return count;
}

/* ── stat item with count-up ────────────────────────────────── */
function StatItem({
  value,
  suffix,
  label,
  active,
}: {
  value: number;
  suffix: string;
  label: string;
  active: boolean;
}) {
  const count = useCountUp(value, 1600, active);
  return (
    <div className="flex flex-col items-center gap-2 text-center">
      <span className="text-5xl font-black text-gold tabular-nums">
        {count}
        {suffix}
      </span>
      <span className="text-sm font-bold uppercase tracking-widest text-white/60">
        {label}
      </span>
    </div>
  );
}

/* ── inline animated SVGs for "How It Works" ────────────────── */

function SvgCalendar() {
  return (
    <svg
      aria-hidden="true"
      className="mx-auto h-20 w-20"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      viewBox="0 0 56 56"
    >
      <style>{`
        @keyframes page-flip{
          0%,100%{transform:rotateY(0deg)}
          50%{transform:rotateY(-20deg)}
        }
        .cal-page{transform-origin:left center;animation:page-flip 2.8s ease-in-out infinite}
      `}</style>
      <rect className="cal-page" fill="white" fillOpacity=".08" height="38" rx="4" stroke="currentColor" strokeOpacity=".9" width="38" x="9" y="9" />
      <line stroke="currentColor" strokeOpacity=".9" x1="9" x2="47" y1="20" y2="20" />
      <line stroke="currentColor" strokeOpacity=".4" x1="18" x2="18" y1="9" y2="16" />
      <line stroke="currentColor" strokeOpacity=".4" x1="38" x2="38" y1="9" y2="16" />
      <rect fill="currentColor" fillOpacity=".5" height="5" rx="1" width="5" x="15" y="26" />
      <rect fill="currentColor" fillOpacity=".5" height="5" rx="1" width="5" x="25" y="26" />
      <rect fill="currentColor" fillOpacity=".7" height="5" rx="1" width="5" x="35" y="26" />
      <rect fill="currentColor" fillOpacity=".5" height="5" rx="1" width="5" x="15" y="36" />
      <rect fill="currentColor" fillOpacity=".5" height="5" rx="1" width="5" x="25" y="36" />
    </svg>
  );
}

function SvgMagnify() {
  return (
    <svg
      aria-hidden="true"
      className="mx-auto h-20 w-20"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      viewBox="0 0 56 56"
    >
      <style>{`
        @keyframes scan{
          0%,100%{transform:translate(0,0)}
          25%{transform:translate(4px,-4px)}
          50%{transform:translate(-4px,2px)}
          75%{transform:translate(2px,4px)}
        }
        .mag-group{animation:scan 3s ease-in-out infinite}
      `}</style>
      <g className="mag-group">
        <circle cx="24" cy="24" r="13" stroke="currentColor" strokeOpacity=".9" />
        <line stroke="currentColor" strokeOpacity=".9" strokeWidth="2.2" x1="33" x2="47" y1="33" y2="47" />
        <circle cx="24" cy="24" fill="currentColor" fillOpacity=".12" r="8" stroke="none" />
        <path d="M19 24a5 5 0 0 1 5-5" strokeOpacity=".6" />
      </g>
    </svg>
  );
}

function SvgCheck() {
  return (
    <svg
      aria-hidden="true"
      className="mx-auto h-20 w-20"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      viewBox="0 0 56 56"
    >
      <style>{`
        @keyframes draw-check{
          0%{stroke-dashoffset:60}
          60%{stroke-dashoffset:0}
          100%{stroke-dashoffset:0}
        }
        @keyframes pop-circle{
          0%,40%{opacity:0;transform:scale(.6)}
          60%{opacity:1;transform:scale(1.08)}
          100%{opacity:1;transform:scale(1)}
        }
        .check-circle{transform-origin:28px 28px;animation:pop-circle 2s ease-out infinite}
        .check-path{stroke-dasharray:60;animation:draw-check 2s ease-out infinite}
      `}</style>
      <circle className="check-circle" cx="28" cy="28" fill="currentColor" fillOpacity=".1" r="20" stroke="currentColor" strokeOpacity=".7" />
      <polyline className="check-path" points="18,28 25,35 38,20" strokeOpacity=".95" strokeWidth="2.2" />
    </svg>
  );
}

/* ── inline animated SVGs for "Why Mor Handy" cards ─────────── */

function SvgPhone() {
  return (
    <svg
      aria-hidden="true"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
    >
      <style>{`
        @keyframes ring{0%,100%{transform:rotate(0deg)}15%{transform:rotate(-12deg)}30%{transform:rotate(12deg)}45%{transform:rotate(-8deg)}60%{transform:rotate(8deg)}75%{transform:rotate(-4deg)}90%{transform:rotate(4deg)}}
        .svg-phone{transform-origin:12px 12px;animation:ring 3s ease-in-out infinite}
      `}</style>
      <g className="svg-phone">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 11.6 19 19.49 19.49 0 0 1 5 12.39a19.79 19.79 0 0 1-2-8.19A2 2 0 0 1 4.91 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L9.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </g>
    </svg>
  );
}

function SvgClock() {
  return (
    <svg
      aria-hidden="true"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
    >
      <style>{`
        @keyframes tick{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}
        .clock-hand{transform-origin:12px 12px;animation:tick 4s linear infinite}
      `}</style>
      <circle cx="12" cy="12" r="10" />
      <g className="clock-hand">
        <line x1="12" x2="12" y1="12" y2="6" />
      </g>
      <line x1="12" x2="16" y1="12" y2="12" />
    </svg>
  );
}

function SvgShieldCheck() {
  return (
    <svg
      aria-hidden="true"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
    >
      <style>{`
        @keyframes pulse-shield{0%,100%{opacity:1}50%{opacity:.5}}
        .shield-glow{animation:pulse-shield 2.4s ease-in-out infinite}
      `}</style>
      <path className="shield-glow" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9,12 11,14 15,10" strokeWidth="2" />
    </svg>
  );
}

/* ── Guarantee banner animated shield ───────────────────────── */

function SvgGuaranteeShield() {
  return (
    <svg
      aria-hidden="true"
      className="h-24 w-24 shrink-0 text-gold"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.4"
      viewBox="0 0 96 96"
    >
      <style>{`
        @keyframes shield-pulse{0%,100%{transform:scale(1)}50%{transform:scale(1.06)}}
        @keyframes star-spin{0%{transform:rotate(0deg) translateX(32px) rotate(0deg)}100%{transform:rotate(360deg) translateX(32px) rotate(-360deg)}}
        .g-shield{transform-origin:48px 48px;animation:shield-pulse 3s ease-in-out infinite}
        .g-star{transform-origin:48px 48px;animation:star-spin 8s linear infinite;opacity:.35}
      `}</style>
      <g className="g-star">
        <circle cx="48" cy="48" r="2" fill="currentColor" stroke="none" />
      </g>
      <g className="g-shield">
        <path d="M48 8L16 20v22c0 22 32 46 32 46s32-24 32-46V20L48 8z" fill="currentColor" fillOpacity=".08" strokeOpacity=".9" />
        <polyline points="34,48 44,58 62,38" strokeWidth="3" />
      </g>
    </svg>
  );
}



const homeResults = [
  {
    title: "Sink flow restored",
    image: "/images/results/sink-flow-after.png",
    alt: "Clean sink water flow after Mor Handy plumbing repair",
  },
  {
    title: "Deck wear documented",
    image: "/images/results/deck-surface-before.png",
    alt: "Weathered deck boards before Mor Handy maintenance planning",
  },
  {
    title: "Exterior cleanup scoped",
    image: "/images/results/exterior-cleanup-before.png",
    alt: "Outdoor cleanup project before Mor Handy property care",
  },
  {
    title: "Under-sink issue found",
    image: "/images/results/under-sink-plumbing-repair.jpg",
    alt: "Under-sink plumbing repair area for Mor Handy project",
  },
];

const howItWorks = [
  {
    step: "01",
    title: "Book Online",
    copy: "Pick a time on our calendar in under 2 minutes. Add a photo if you have one — it makes the estimate faster.",
    Svg: SvgCalendar,
  },
  {
    step: "02",
    title: "We Inspect & Plan",
    copy: "A Mor Handy pro visits, documents the issue clearly, and gives you a transparent plan before any work starts.",
    Svg: SvgMagnify,
  },
  {
    step: "03",
    title: "Problem Solved",
    copy: "Clean workmanship, tidy closeout, and a clear follow-up report so you know exactly what was done.",
    Svg: SvgCheck,
  },
];

const whyCards = [
  {
    Svg: SvgPhone,
    title: "Professional communication",
    copy: "You know what is happening before, during, and after the visit.",
  },
  {
    Svg: SvgClock,
    title: "Reliable scheduling",
    copy: "Showing up when promised is part of the workmanship.",
  },
  {
    Svg: SvgShieldCheck,
    title: "Respect for your property",
    copy: "Clean work areas, careful installation, and tidy closeout.",
  },
];

const stats = [
  { value: 100, suffix: "+", label: "Jobs Completed" },
  { value: 12, suffix: "+", label: "Areas Served" },
  { value: 5, suffix: "★", label: "Average Rating" },
  { value: 7, suffix: " days", label: "Avg. Scheduling" },
];

export default function Home() {
  /* stats bar intersection observer */
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsActive, setStatsActive] = useState(false);
  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsActive(true);
          obs.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <main>
      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ background: "linear-gradient(150deg, #f8f4ec 0%, #fdf9f2 40%, #f4f7fb 100%)" }}>
        {/* Subtle decorative grid */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 premium-grid opacity-40" />
        {/* Warm accent blob */}
        <div aria-hidden="true" className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
        <div aria-hidden="true" className="pointer-events-none absolute bottom-0 -left-24 h-72 w-72 rounded-full bg-ink/4 blur-3xl" />

        <div className="container-page relative py-20 sm:py-28 lg:py-32">
          <ScrollReveal>
            <div className="mx-auto max-w-4xl text-center">
              {/* Eyebrow badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-sm font-semibold text-gold-dark">
                <span className="h-2 w-2 rounded-full bg-gold animate-pulse" />
                Trusted in the DMV Area (Washington, Maryland, and Virginia)
              </div>

              {/* Main headline */}
              <h1 className="mt-7 text-5xl font-black leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-7xl">
                Your DMV Area Home,{" "}
                <span className="relative whitespace-nowrap">
                  <span className="relative z-10" style={{ color: "#cf9c3d" }}>In Expert Hands.</span>
                  <svg aria-hidden="true" className="absolute -bottom-2 left-0 w-full" fill="none" height="8" viewBox="0 0 300 8" preserveAspectRatio="none">
                    <path d="M0 6 Q75 1 150 6 Q225 11 300 6" stroke="#cf9c3d" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.5" />
                  </svg>
                </span>
              </h1>

              {/* Subheadline */}
              <p className="mx-auto mt-7 max-w-2xl text-xl leading-8 text-slate sm:text-2xl">
                One trusted team for repairs, maintenance, and home improvements — so you never have to juggle multiple contractors again.
              </p>

              {/* CTA buttons */}
              <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                <Button asChild size="lg">
                  <Link href={calendlyUrl}>
                    <CalendarCheck className="h-5 w-5" />
                    Get Free Estimate
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href={phoneHref}>
                    <Phone className="h-5 w-5" />
                    {phoneDisplay}
                  </Link>
                </Button>
              </div>

              {/* Trust badges */}
              <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
                {trustPoints.map((point) => (
                  <div className="flex items-center gap-2 text-sm font-semibold text-slate" key={point}>
                    <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-forest" />
                    {point}
                  </div>
                ))}
              </div>

              {/* Social proof */}
              <div className="mt-10 flex items-center justify-center gap-3">
                <div className="flex -space-x-2">
                  {["TK", "DM", "AB"].map((initials, i) => (
                    <div
                      key={i}
                      className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-ink text-xs font-black text-white shadow-sm"
                    >
                      {initials}
                    </div>
                  ))}
                </div>
                <div className="text-left">
                  <div className="flex gap-0.5 text-gold">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-current" />
                    ))}
                  </div>
                  <p className="text-xs font-semibold text-slate">100+ DMV Area homes served</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Stats row */}
          <ScrollReveal delay={0.15}>
            <div className="mx-auto mt-16 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                { value: "100+", label: "Jobs Done" },
                { value: "12+", label: "Areas Served" },
                { value: "5★", label: "Avg Rating" },
                { value: "1", label: "Team to Call" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-ink/8 bg-white/70 px-4 py-5 text-center shadow-sm backdrop-blur-sm"
                >
                  <p className="text-3xl font-black text-gold">{stat.value}</p>
                  <p className="mt-1 text-xs font-bold uppercase tracking-widest text-slate">{stat.label}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── TRUST BAR ─────────────────────────────────────────── */}
      <section className="border-b border-ink/10 bg-white">
        <div className="container-page grid gap-3 py-5 sm:grid-cols-2 lg:grid-cols-5">
          {trustPoints.map((point) => (
            <div className="flex items-center gap-2 text-sm font-black text-ink" key={point}>
              <CheckCircle2 className="h-5 w-5 text-forest" />
              {point}
            </div>
          ))}
        </div>
      </section>

      {/* ── ANIMATED STATS BAR ────────────────────────────────── */}
      <section className="bg-ink py-14 text-white" ref={statsRef}>
        <div className="container-page grid grid-cols-2 gap-10 sm:grid-cols-4">
          {stats.map((stat) => (
            <StatItem
              active={statsActive}
              key={stat.label}
              label={stat.label}
              suffix={stat.suffix}
              value={stat.value}
            />
          ))}
        </div>
      </section>

      {/* ── HOW IT WORKS ──────────────────────────────────────── */}
      <section className="bg-mist py-16 sm:py-24">
        <div className="container-page">
          <ScrollReveal>
            <SectionHeading
              centered
              copy="No mystery, no runaround — just a clear three-step path from booking to a fixed home."
              eyebrow="The process"
              title="How Mor Handy Works"
            />
          </ScrollReveal>
          <div className="relative mt-14 grid gap-8 md:grid-cols-3">
            {/* Connector line desktop */}
            <div
              aria-hidden="true"
              className="absolute left-[calc(16.67%+2rem)] right-[calc(16.67%+2rem)] top-10 hidden border-t-2 border-dashed border-gold/30 md:block"
            />
            {howItWorks.map(({ step, title, copy, Svg }, index) => (
              <ScrollReveal delay={index * 0.12} key={step}>
                <div className="relative flex flex-col items-center text-center">
                  <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full border-2 border-gold/30 bg-white shadow-lg text-ink">
                    <Svg />
                  </div>
                  <span className="mt-5 text-xs font-black uppercase tracking-[0.18em] text-gold">
                    Step {step}
                  </span>
                  <h3 className="mt-2 text-xl font-black text-ink">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate">{copy}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={0.2}>
            <div className="mt-12 flex justify-center">
              <Button asChild size="lg">
                <Link href={calendlyUrl}>
                  <CalendarCheck className="h-5 w-5" />
                  Book Your Free Estimate
                </Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── WHY MOR HANDY (animated icons) ───────────────────── */}
      <section className="bg-white py-16 sm:py-24">
        <div className="container-page">
          <ScrollReveal>
            <SectionHeading
              copy="Most homeowners do not need ten different contractors. They need one trusted team that can handle repairs, maintenance, improvements, and seasonal upkeep."
              eyebrow="The Mor Handy difference"
              title="A Better Way To Maintain Your Home"
            />
          </ScrollReveal>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {whyCards.map(({ Svg, title, copy }, index) => (
              <ScrollReveal delay={index * 0.05} key={title}>
                <div className="h-full rounded-lg border border-ink/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-md bg-gold/15 text-ink">
                    <Svg />
                  </div>
                  <h3 className="text-xl font-black text-ink">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate">{copy}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES GRID ─────────────────────────────────────── */}
      <section className="bg-mist py-16 sm:py-24">
        <div className="container-page">
          <SectionHeading
            copy="Every service page is built for local search and conversion, with clear scope, practical use cases, and a direct path to book."
            eyebrow="Services"
            title="Professional Home Services Under One Roof"
          />
          <div className="mt-8 flex justify-center">
            <Button asChild variant="outline">
              <Link href="/services">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {primaryServices.map((service, index) => (
              <ScrollReveal delay={index * 0.04} key={service.slug}>
                <ServiceCard service={service} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECT PROOF ─────────────────────────────────────── */}
      <section className="bg-white py-16 sm:py-24">
        <div className="container-page">
          <SectionHeading
            copy="Photos make the estimate sharper. Mor Handy documents the issue, explains the best next step, and keeps the project grounded in what is actually happening at the property."
            eyebrow="Project proof"
            title="Real Problems. Clear Scope. Better Decisions."
          />
          <div className="mt-8 flex justify-center">
            <Button asChild variant="outline">
              <Link href="/reviews">
                View Results Gallery
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {homeResults.map((result, index) => (
              <ScrollReveal delay={index * 0.04} key={result.image}>
                <Link
                  className="group block overflow-hidden rounded-lg border border-ink/10 bg-white shadow-sm transition hover:-translate-y-1 hover:border-gold"
                  href="/reviews"
                >
                  <div className="relative aspect-[1.55/1] bg-stone">
                    <Image
                      alt={result.alt}
                      className="object-cover transition duration-500 group-hover:scale-[1.035]"
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      src={result.image}
                      title={result.alt}
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-base font-black text-ink">{result.title}</p>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOMECARE MEMBERSHIP ───────────────────────────────── */}
      <section className="overflow-hidden bg-ink py-16 text-white sm:py-24">
        <div className="container-page">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-black text-gold">
                HomeCare membership
              </p>
              <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
                Protect Your Home Year-Round
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/72">
                Small issues become expensive problems when they are ignored. The
                Mor Handy HomeCare plan helps homeowners stay ahead through regular
                inspections, reminders, priority scheduling, and member pricing.
              </p>
            </div>
          </ScrollReveal>

          {/* Package teaser cards */}
          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {[
              { tier: "Essential", price: "$69", highlight: false, items: ["Gutter Cleaning", "Smoke & CO Check", "Water Heater Flush", "Annual Inspection"] },
              { tier: "Standard", price: "$149", highlight: true, items: ["Everything Essential", "HVAC Filter Replace", "Pressure Washing", "Priority Scheduling"] },
              { tier: "Premium", price: "$299", highlight: false, items: ["Everything Standard", "Bi-Annual Inspection", "Minor Repairs Included", "Handyman Hours"] },
            ].map((pkg, index) => (
              <ScrollReveal delay={index * 0.08} key={pkg.tier}>
                <div className={`h-full rounded-xl border p-6 transition hover:-translate-y-1 ${
                  pkg.highlight
                    ? "border-gold bg-gold/10 shadow-lg shadow-gold/20"
                    : "border-white/12 bg-white/6"
                }`}>
                  {pkg.highlight && (
                    <span className="mb-3 inline-block rounded-full bg-gold px-3 py-1 text-xs font-black uppercase tracking-wider text-ink">
                      Most Popular
                    </span>
                  )}
                  <p className="text-sm font-black uppercase tracking-widest text-white/50">{pkg.tier}</p>
                  <p className="mt-1 text-4xl font-black text-gold">{pkg.price}<span className="text-base font-bold text-white/50">/mo</span></p>
                  <ul className="mt-4 grid gap-2">
                    {pkg.items.map((item) => (
                      <li className="flex items-center gap-2 text-sm text-white/78" key={item}>
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-gold/70" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.25}>
            <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Button asChild size="lg">
                <Link href="/pricing">
                  <ArrowRight className="h-5 w-5" />
                  View All Packages & Pricing
                </Link>
              </Button>
              <Button asChild size="lg" variant="light">
                <Link href={phoneHref}>
                  <Phone className="h-5 w-5" />
                  {phoneDisplay}
                </Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── REVIEWS ───────────────────────────────────────────── */}
      <section className="bg-mist py-16 sm:py-24">
        <div className="container-page">
          <SectionHeading
            centered
            copy="These review examples are structured for real customer proof and can be replaced with live Google and Facebook review feeds when connected."
            eyebrow="Reviews"
            title="Why DMV Area Homeowners Trust Mor Handy"
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {reviews.map((review, index) => (
              <ScrollReveal delay={index * 0.05} key={review.name}>
                <article className="h-full rounded-lg border border-ink/10 bg-white p-6 shadow-sm">
                  <div className="flex gap-1 text-gold">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <Star className="h-4 w-4 fill-current" key={starIndex} />
                    ))}
                  </div>
                  <p className="mt-5 text-base leading-8 text-slate">
                    &ldquo;{review.text}&rdquo;
                  </p>
                  <div className="mt-6 border-t border-ink/10 pt-5">
                    <p className="font-black text-ink">{review.name}</p>
                    <p className="text-sm text-slate">
                      {review.location} - {review.service}
                    </p>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <AreaMap />

      {/* ── FAQ ───────────────────────────────────────────────── */}
      <section className="bg-mist py-16 sm:py-24">
        <div className="container-page">
          <SectionHeading
            copy="Clear answers reduce hesitation. If you are comparing repair companies, these are the details that matter before you book."
            eyebrow="FAQ"
            title="Questions Homeowners Ask Before Booking"
          />
          <div className="mt-10 mx-auto max-w-3xl">
            <FAQList />
          </div>
        </div>
      </section>

      {/* ── GUARANTEE BANNER ──────────────────────────────────── */}
      <section
        style={{
          background:
            "linear-gradient(135deg, #1a2744 0%, #0f1a30 50%, #1a2744 100%)",
        }}
        className="relative overflow-hidden py-16 text-white"
      >
        {/* decorative arcs */}
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full opacity-10"
          fill="none"
          viewBox="0 0 800 220"
        >
          <path
            d="M0 110 Q200 20 400 110 Q600 200 800 110"
            stroke="white"
            strokeWidth="80"
          />
        </svg>
        <div className="container-page relative flex flex-col items-center gap-8 text-center lg:flex-row lg:text-left">
          <SvgGuaranteeShield />
          <div className="flex-1">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-gold">
              Our promise
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">
              If It Isn&apos;t Right, We Make It Right.
            </h2>
            <p className="mt-4 max-w-xl text-lg leading-8 text-white/72">
              Every Mor Handy job comes with a straightforward commitment:
              professional work, clear communication, and a team that stands
              behind what it does. No excuses, no chasing — just peace of mind
              for your home.
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

      <CalendlySection />
    </main>
  );
}
