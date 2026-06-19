import Link from "next/link";
import { MapPin, Navigation } from "lucide-react";

import { serviceAreas } from "@/lib/site-data";

export function AreaMap() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="container-page">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-black text-rust">
              Service areas
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-ink sm:text-5xl">
              Maryland Repair Help, Mapped Clearly
            </h2>
            <p className="mt-4 text-base leading-8 text-slate">
              Mor Handy serves homeowners across Baltimore, Anne Arundel County,
              Annapolis, Glen Burnie, Catonsville, Sykesville, Frederick,
              Southern Maryland, Maryland City, Washington, and select Virginia
              requests.
            </p>
            <div className="mt-6 grid gap-2 sm:grid-cols-2">
              {serviceAreas.map((area) => (
                <Link
                  className="flex items-center gap-2 rounded-md border border-ink/10 px-3 py-3 text-sm font-bold text-ink transition hover:border-gold hover:bg-gold/10"
                  href={`/service-areas/${area.slug}`}
                  key={area.slug}
                >
                  <MapPin className="h-4 w-4 text-rust" />
                  {area.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="relative min-h-[520px] overflow-hidden rounded-lg border border-ink/10 bg-ink p-6 text-white shadow-[0_24px_60px_rgba(0,0,0,0.14)]">
            <div className="absolute inset-0 opacity-25 premium-grid" />
            <div className="absolute left-[18%] top-[18%] h-72 w-72 rounded-full border border-gold/50" />
            <div className="absolute left-[10%] top-[8%] h-[420px] w-[420px] rounded-full border border-white/12" />
            <div className="relative z-10">
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-md bg-gold text-ink">
                  <Navigation className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-sm font-black text-gold">Mor Handy radius</p>
                  <h3 className="text-2xl font-black">Central Maryland Coverage</h3>
                </div>
              </div>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {serviceAreas.map((area, index) => (
                  <Link
                    className="group flex items-start gap-3 rounded-md border border-white/12 bg-white/8 p-3 transition hover:border-gold hover:bg-white/12"
                    href={`/service-areas/${area.slug}`}
                    key={area.slug}
                  >
                    <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gold text-xs font-black text-ink">
                      {index + 1}
                    </span>
                    <span>
                      <span className="block text-sm font-black text-white">
                        {area.name}
                      </span>
                      <span className="mt-1 block text-xs leading-5 text-white/68">
                        {area.label}
                      </span>
                    </span>
                  </Link>
                ))}
              </div>
              <div className="mt-6 rounded-md border border-gold/30 bg-gold/10 p-4">
                <p className="text-sm leading-6 text-white/82">
                  Service routes are organized around Baltimore, Anne Arundel,
                  Annapolis, Glen Burnie, Catonsville, Sykesville, Frederick,
                  Southern Maryland, Washington, and select Virginia requests.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
