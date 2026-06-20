import Image from "next/image";
import Link from "next/link";
import { CalendarCheck, Mail, MapPin, Phone } from "lucide-react";

import {
  calendlyUrl,
  email,
  phoneDisplay,
  phoneHref,
  serviceAreas,
  services,
} from "@/lib/site-data";

const footerLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing & Packages" },
  { href: "/service-areas", label: "Service Areas" },
  { href: "/reviews", label: "Reviews" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
  { href: "/articles", label: "Articles" },
  { href: "/terms-of-service", label: "Terms of Service" },
  { href: "/privacy-policy", label: "Privacy Policy" },
];

export function SiteFooter() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr] lg:px-8">
        <div>
          <Link className="flex items-center gap-3" href="/">
            <Image
              alt="Mor Handy logo"
              height={76}
              src="/images/logo/logo.png"
              title="Mor Handy logo"
              width={80}
            />
            <div>
              <span className="block text-xl font-black">Mor Handy</span>
              <span className="block text-xs font-bold uppercase tracking-[0.16em] text-white/58">
                DMV Area home maintenance
              </span>
            </div>
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-7 text-white/70">
            Professional repair, maintenance, and improvement services
            for DMV Area (Washington, Maryland, and Virginia) homeowners who want one trusted team.
          </p>
          <div className="mt-6 grid gap-3 text-sm text-white/78">
            <Link className="flex items-center gap-3 hover:text-gold" href={phoneHref}>
              <Phone className="h-4 w-4" />
              {phoneDisplay}
            </Link>
            <Link className="flex items-center gap-3 hover:text-gold" href={`mailto:${email}`}>
              <Mail className="h-4 w-4" />
              {email}
            </Link>
            <Link className="flex items-center gap-3 hover:text-gold" href={calendlyUrl}>
              <CalendarCheck className="h-4 w-4" />
              Book an estimate
            </Link>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-black uppercase tracking-[0.18em] text-gold">
            Pages
          </h2>
          <div className="mt-4 grid gap-2">
            {footerLinks.map((link) => (
              <Link
                className="text-sm text-white/70 transition hover:text-white"
                href={link.href}
                key={link.href}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-sm font-black uppercase tracking-[0.18em] text-gold">
            Services
          </h2>
          <div className="mt-4 grid gap-2">
            {services.slice(0, 9).map((service) => (
              <Link
                className="text-sm text-white/70 transition hover:text-white"
                href={`/services/${service.slug}`}
                key={service.slug}
              >
                {service.title}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-sm font-black uppercase tracking-[0.18em] text-gold">
            Service Areas
          </h2>
          <div className="mt-4 grid grid-cols-2 gap-2">
            {serviceAreas.map((area) => (
              <Link
                className="flex items-start gap-2 text-sm text-white/70 transition hover:text-white"
                href={`/service-areas/${area.slug}`}
                key={area.slug}
              >
                <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                {area.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-center text-xs text-white/48 sm:flex-row sm:text-left">
          <p>Copyright {new Date().getFullYear()} Mor Handy. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 sm:justify-end">
            <Link className="transition hover:text-white" href="/terms-of-service">
              Terms of Service
            </Link>
            <Link className="transition hover:text-white" href="/privacy-policy">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
