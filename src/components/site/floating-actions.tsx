"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { CalendarCheck, Phone, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { calendlyUrl, phoneHref } from "@/lib/site-data";

export function FloatingActions() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const dismissed = window.sessionStorage.getItem("morhandy-popup-dismissed");
    if (dismissed) return;

    const timer = window.setTimeout(() => setShowPopup(true), 4000);
    return () => window.clearTimeout(timer);
  }, []);

  function dismissPopup() {
    window.sessionStorage.setItem("morhandy-popup-dismissed", "true");
    setShowPopup(false);
  }

  return (
    <>
      <div className="fixed inset-x-0 bottom-3 z-40 mx-auto flex w-[calc(100%-24px)] max-w-md justify-between gap-2 sm:hidden">
        <Button
          asChild
          className="flex-1 px-3 shadow-[0_10px_24px_rgba(0,0,0,0.16)]"
          size="sm"
        >
          <Link href={calendlyUrl}>
            <CalendarCheck className="h-4 w-4 shrink-0" />
            <span className="truncate">Book Now</span>
          </Link>
        </Button>
        <Button
          asChild
          className="flex-1 px-3 shadow-[0_10px_24px_rgba(0,0,0,0.16)]"
          size="sm"
          variant="navy"
        >
          <Link href={phoneHref}>
            <Phone className="h-4 w-4 shrink-0" />
            <span className="truncate">Call Us</span>
          </Link>
        </Button>
      </div>
      <div className="fixed bottom-6 left-6 z-40 hidden md:block">
        <Button asChild className="shadow-[0_14px_34px_rgba(0,0,0,0.18)]">
          <Link href={calendlyUrl}>
            <CalendarCheck className="h-4 w-4" />
            Book With Us
          </Link>
        </Button>
      </div>
      <div className="fixed bottom-6 right-6 z-40 hidden md:block">
        <Button asChild className="shadow-[0_14px_34px_rgba(0,0,0,0.18)]" variant="navy">
          <Link href={phoneHref}>
            <Phone className="h-4 w-4" />
            Call Us
          </Link>
        </Button>
      </div>
      {showPopup ? (
        <div className="fixed inset-x-4 bottom-24 z-50 mx-auto max-w-md rounded-lg border border-ink/10 bg-white p-5 shadow-[0_24px_70px_rgba(0,0,0,0.2)] md:bottom-24 md:right-8 md:left-auto">
          <button
            aria-label="Close booking prompt"
            className="absolute right-3 top-3 rounded-full p-1 text-ink/55 transition hover:bg-ink/5 hover:text-ink"
            onClick={dismissPopup}
            type="button"
          >
            <X className="h-5 w-5" />
          </button>
          <p className="text-sm font-black text-rust">
            Fast help
          </p>
          <h2 className="mt-2 pr-8 text-2xl font-black tracking-tight text-ink">
            Need help with a repair this week?
          </h2>
          <p className="mt-3 text-sm leading-6 text-slate">
            Call Mor Handy directly from your phone and we&apos;ll help you figure
            out the right next step.
          </p>
          <div className="mt-5 flex gap-3">
            <Button asChild className="flex-1" size="sm" variant="navy">
              <Link href={phoneHref}>Call Us</Link>
            </Button>
            <Button asChild className="flex-1" size="sm" variant="outline">
              <Link href={calendlyUrl}>Request Estimate</Link>
            </Button>
          </div>
        </div>
      ) : null}
    </>
  );
}
