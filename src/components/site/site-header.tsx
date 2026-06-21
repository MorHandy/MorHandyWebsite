"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  CalendarCheck,
  ChevronDown,
  Menu,
  Phone,
  X,
  Wrench,
  Zap,
  Droplets,
  Fan,
  Paintbrush,
  Ruler,
  Grid,
  Leaf,
  Calendar,
  Sparkles
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { calendlyUrl, phoneDisplay, phoneHref, services } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/service-areas", label: "Service Areas" },
  { href: "/pricing", label: "Pricing" },
  { href: "/reviews", label: "Reviews" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

const iconMap: Record<string, React.ElementType> = {
  toolbox: Wrench,
  bolt: Zap,
  water: Droplets,
  fan: Fan,
  paint: Paintbrush,
  ruler: Ruler,
  wall: Grid,
  leaf: Leaf,
  calendar: Calendar,
  sparkles: Sparkles,
};

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/95 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          aria-label="Mor Handy home"
          className="flex items-center gap-3"
          href="/"
          onClick={() => setOpen(false)}
        >
          <Image
            alt="Mor Handy logo"
            className="h-12 w-auto"
            height={76}
            priority
            src="/images/logo/logo.png"
            title="Mor Handy logo"
            width={80}
          />
          <div className="leading-tight">
            <span className="block text-lg font-black tracking-tight text-white">
              Mor Handy
            </span>
            <span className="block text-xs font-bold uppercase tracking-[0.16em] text-white/70">
              Home Maintenance
            </span>
          </div>
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) =>
            item.href === "/services" ? (
              <div className="group relative" key={item.href}>
                <Link
                  className={cn(
                    "inline-flex h-11 items-center gap-1 rounded-md px-3 text-sm font-bold text-white/80 transition hover:bg-white/10 hover:text-white",
                    pathname.startsWith("/services") && "bg-white/10 text-white",
                  )}
                  href={item.href}
                >
                  Services
                  <ChevronDown className="h-4 w-4" />
                </Link>
                <div className="invisible absolute left-0 top-full w-[720px] pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                  <div className="translate-y-2 rounded-lg border border-ink/10 bg-white p-3 shadow-2xl transition-transform duration-200 group-hover:translate-y-0">
                    <div className="grid grid-cols-2 gap-2">
                    {services.map((service) => {
                      const Icon = iconMap[service.icon] || Wrench;
                      return (
                        <Link
                          className="group/service flex items-start gap-3 rounded-md border border-transparent p-3 transition hover:border-gold/40 hover:bg-gold/10"
                          href={`/services/${service.slug}`}
                          key={service.slug}
                        >
                          <div className="mt-0.5 rounded bg-white p-1.5 text-gold shadow-sm transition duration-300 group-hover/service:-rotate-12 group-hover/service:scale-110">
                            <Icon className="h-5 w-5" />
                          </div>
                          <div>
                            <span className="block text-sm font-black text-ink">
                              {service.title}
                            </span>
                            <span className="mt-1 block text-xs leading-5 text-slate">
                              {service.kicker}
                            </span>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            ) : (
              <Link
                className={cn(
                  "inline-flex h-11 items-center rounded-md px-3 text-sm font-bold text-white/80 transition hover:bg-white/10 hover:text-white",
                  pathname === item.href && "bg-white/10 text-white",
                )}
                href={item.href}
                key={item.href}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button asChild size="sm" variant="outline" className="border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white">
            <Link href={phoneHref}>
              <Phone className="h-4 w-4" />
              {phoneDisplay}
            </Link>
          </Button>
          <Button asChild size="sm" className="bg-gold text-ink hover:bg-gold/90">
            <Link href={calendlyUrl}>
              <CalendarCheck className="h-4 w-4" />
              Get Estimate
            </Link>
          </Button>
        </div>

        <button
          aria-expanded={open}
          aria-label="Open navigation menu"
          className="rounded-md border border-white/10 p-2 text-white lg:hidden"
          onClick={() => setOpen((value) => !value)}
          type="button"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/10 bg-ink lg:hidden">
          <nav
            aria-label="Mobile navigation"
            className="mx-auto flex max-h-[calc(100svh-5rem)] max-w-7xl flex-col overflow-y-auto px-4 py-4"
          >
            <div className="grid gap-2">
              {navItems.map((item) =>
                item.href === "/services" ? (
                  <div
                    className="rounded-xl border border-white/10 bg-white/[0.04]"
                    key={item.href}
                  >
                    <button
                      aria-controls="mobile-services-menu"
                      aria-expanded={servicesOpen}
                      className="flex w-full items-center justify-between px-4 py-3 text-left text-base font-bold text-white transition hover:bg-white/5"
                      onClick={() => setServicesOpen((value) => !value)}
                      type="button"
                    >
                      <span>Services</span>
                      <ChevronDown
                        className={cn(
                          "h-5 w-5 text-gold transition-transform duration-200",
                          servicesOpen && "rotate-180",
                        )}
                      />
                    </button>
                    {servicesOpen ? (
                      <div
                        className="border-t border-white/10 px-2 py-2"
                        id="mobile-services-menu"
                      >
                        <Link
                          className="mb-1 flex items-center justify-between rounded-lg px-3 py-3 text-sm font-black text-gold transition hover:bg-white/5"
                          href="/services"
                          onClick={() => setOpen(false)}
                        >
                          <span>All Services</span>
                          <ChevronDown className="h-4 w-4 -rotate-90" />
                        </Link>
                        <div className="grid gap-1">
                          {services.map((service) => (
                            <Link
                              className="rounded-lg px-3 py-3 text-sm font-semibold text-white/86 transition hover:bg-white/5 hover:text-white"
                              href={`/services/${service.slug}`}
                              key={service.slug}
                              onClick={() => setOpen(false)}
                            >
                              {service.navTitle}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : null}
                  </div>
                ) : (
                  <Link
                    className={cn(
                      "rounded-xl px-4 py-3 text-base font-bold text-white transition hover:bg-white/10",
                      pathname === item.href && "bg-white/10",
                    )}
                    href={item.href}
                    key={item.href}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                ),
              )}
            </div>
            <div className="mt-5 rounded-2xl border border-gold/20 bg-white/[0.04] p-4">
              <p className="text-sm font-black uppercase tracking-[0.14em] text-gold">
                Need help fast?
              </p>
              <p className="mt-2 text-sm leading-6 text-white/72">
                Call Mor Handy directly from your phone and we&apos;ll point you to the right service.
              </p>
              <div className="mt-4">
                <Button asChild className="w-full bg-gold text-ink hover:bg-gold/90">
                  <Link href={phoneHref} onClick={() => setOpen(false)}>
                    <Phone className="h-4 w-4" />
                    Call Us Now
                  </Link>
                </Button>
              </div>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
