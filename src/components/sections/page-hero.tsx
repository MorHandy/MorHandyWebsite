import Link from "next/link";
import { CalendarCheck, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { calendlyUrl, phoneDisplay, phoneHref } from "@/lib/site-data";

export function PageHero({
  eyebrow,
  title,
  copy,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  copy: string;
  align?: "center" | "left";
}) {
  return (
    <section className="premium-grid bg-mist py-16 sm:py-20">
      <div
        className={
          align === "center"
            ? "container-page text-center"
            : "container-page max-w-4xl"
        }
      >
        <p className="text-sm font-black text-rust">
          {eyebrow}
        </p>
        <h1
          className={
            align === "center"
              ? "mx-auto mt-4 max-w-4xl text-4xl font-black leading-[1.05] tracking-tight text-ink sm:text-6xl"
              : "mt-4 max-w-4xl text-4xl font-black leading-[1.05] tracking-tight text-ink sm:text-6xl"
          }
        >
          {title}
        </h1>
        <p
          className={
            align === "center"
            ? "mx-auto mt-5 max-w-[68ch] text-lg leading-8 text-slate"
            : "mt-5 max-w-[68ch] text-lg leading-8 text-slate"
          }
        >
          {copy}
        </p>
        <div
          className={
            align === "center"
              ? "mt-8 flex flex-col justify-center gap-3 sm:flex-row"
              : "mt-8 flex flex-col gap-3 sm:flex-row"
          }
        >
          <Button asChild size="lg" variant="navy" className="w-full sm:w-auto">
            <Link href={calendlyUrl}>
              <CalendarCheck className="h-5 w-5 shrink-0" />
              <span className="truncate">Get Free Estimate</span>
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
            <Link href={phoneHref}>
              <Phone className="h-5 w-5 shrink-0" />
              <span className="truncate">{phoneDisplay}</span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
