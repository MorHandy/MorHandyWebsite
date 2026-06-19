import type { Metadata } from "next";

import { CalendlySection } from "@/components/site/calendly-section";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/sections/section-heading";
import { ServiceCard } from "@/components/sections/service-card";
import { services } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Maryland Home Repair Services",
  description:
    "Explore Mor Handy services for general repairs, electrical, plumbing, appliance repair, painting, carpentry, drywall, landscaping, and seasonal maintenance.",
};

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        copy="Mor Handy brings the most requested residential repair and maintenance services under one roof so Maryland homeowners can stop chasing separate contractors."
        eyebrow="Services"
        title="Professional Home Services Under One Roof"
      />
      <section className="bg-white py-16 sm:py-24">
        <div className="container-page">
          <SectionHeading
            copy="Each service page is built around the problem homeowners actually need solved: clear scope, clean workmanship, and a fast path to an estimate."
            eyebrow="Complete service menu"
            title="Choose The Repair Or Maintenance Visit You Need"
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>
      <CalendlySection
        copy="Pick a time, add photos if helpful, and Mor Handy will help you choose the right service visit for your home."
        title="Not Sure Which Service Fits Your Project?"
      />
    </main>
  );
}
