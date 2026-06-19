import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

import { AreaMap } from "@/components/sections/area-map";
import { CalendlySection } from "@/components/site/calendly-section";
import { PageHero } from "@/components/sections/page-hero";
import { serviceAreas } from "@/lib/site-data";

export const metadata: Metadata = {
  title: {
    absolute: "Mor Handy Service Areas In Maryland",
  },
  description:
    "Mor Handy serves Baltimore City, Baltimore County, Maryland City, Southern Maryland, Virginia, Anne Arundel County, Annapolis, Washington, Catonsville, Sykesville, Glen Burnie, and Frederick.",
};

export default function ServiceAreasPage() {
  return (
    <main>
      <PageHero
        copy="Mor Handy provides home repairs, maintenance, improvements, and seasonal property care across Maryland and select nearby areas."
        eyebrow="Service Areas"
        title="Home Repair Help Across Maryland"
      />
      <section className="bg-white py-16 sm:py-24">
        <div className="container-page grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {serviceAreas.map((area) => (
            <Link
              className="group rounded-lg border border-ink/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-gold hover:shadow-[0_22px_54px_rgba(0,0,0,0.14)]"
              href={`/service-areas/${area.slug}`}
              key={area.slug}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-gold/15 text-rust">
                  <MapPin className="h-6 w-6" />
                </div>
                <ArrowRight className="h-5 w-5 text-slate transition group-hover:text-rust" />
              </div>
              <h2 className="mt-5 text-2xl font-black text-ink">{area.name}</h2>
              <p className="mt-2 text-sm font-bold text-rust">
                {area.label}
              </p>
              <p className="mt-4 text-sm leading-7 text-slate">{area.intro}</p>
            </Link>
          ))}
        </div>
      </section>
      <AreaMap />
      <CalendlySection
        copy="Choose an estimate time and include your address, photos, and the service you need so Mor Handy can route the right visit."
        title="Check Availability In Your Area"
      />
    </main>
  );
}
