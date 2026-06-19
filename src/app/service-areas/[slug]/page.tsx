import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CalendarCheck, CheckCircle2, MapPin } from "lucide-react";

import { CalendlySection } from "@/components/site/calendly-section";
import { FAQList } from "@/components/sections/faq-list";
import { Button } from "@/components/ui/button";
import { breadcrumbSchema } from "@/lib/schema";
import { calendlyUrl, serviceAreas, services } from "@/lib/site-data";

type AreaPageProps = {
  params: Promise<{ slug: string }>;
};

function getArea(slug: string) {
  return serviceAreas.find((area) => area.slug === slug);
}

export function generateStaticParams() {
  return serviceAreas.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({
  params,
}: AreaPageProps): Promise<Metadata> {
  const { slug } = await params;
  const area = getArea(slug);
  if (!area) return {};

  return {
    title: {
      absolute: `Handyman Services ${area.name} | Mor Handy`,
    },
    description: `Mor Handy provides handyman services, home repairs, maintenance, plumbing, electrical, painting, drywall, appliance repair, and landscaping in ${area.name}.`,
    alternates: {
      canonical: `/service-areas/${area.slug}`,
    },
  };
}

export default async function AreaPage({ params }: AreaPageProps) {
  const { slug } = await params;
  const area = getArea(slug);

  if (!area) {
    notFound();
  }

  const areaFaqs = [
    {
      question: `Does Mor Handy serve ${area.name}?`,
      answer: `Yes. Mor Handy serves ${area.name} with general repairs, maintenance, fixture installation, drywall, painting, plumbing, electrical, appliance support, landscaping, and seasonal home care.`,
    },
    {
      question: `What types of homes do you work on in ${area.name}?`,
      answer: `Mor Handy helps homeowners with single-family homes, townhomes, condos, older properties, and rental or investment properties where practical repair and maintenance support is needed.`,
    },
    {
      question: `Can I book multiple repairs during one ${area.name} visit?`,
      answer: `Yes. A combined punch-list visit is often the most efficient way to handle loose hardware, drywall patches, small plumbing issues, fixture swaps, and other home repairs.`,
    },
  ];

  const schemas = [
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Service Areas", path: "/service-areas" },
      { name: area.name, path: `/service-areas/${area.slug}` },
    ]),
  ];

  return (
    <main>
      <section className="premium-grid bg-mist py-16 sm:py-20">
        <div className="container-page max-w-5xl">
          <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-md bg-gold/15 text-rust">
            <MapPin className="h-7 w-7" />
          </div>
          <p className="text-sm font-black text-rust">
            Handyman services in {area.region}
          </p>
          <h1 className="mt-4 text-4xl font-black leading-[1.05] tracking-tight text-ink sm:text-6xl">
            Professional Home Repair Services In {area.name}
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate">
            {area.intro} Whether the project is a quick repair or an ongoing
            maintenance plan, the goal is simple: make home care easier to book,
            easier to understand, and easier to trust.
          </p>
          <Button asChild className="mt-8" size="lg">
            <Link href={calendlyUrl}>
              <CalendarCheck className="h-5 w-5" />
              Book A {area.name} Estimate
            </Link>
          </Button>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div className="container-page grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-black text-rust">
              Local service notes
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-ink sm:text-5xl">
              Built Around The Way Homes In {area.name} Actually Age
            </h2>
            <p className="mt-5 text-base leading-8 text-slate">
              Homes near {area.landmarks.join(", ")} often need a mix of
              preventive care, small repairs, and updates that make daily life
              easier. Mor Handy helps organize those tasks into one efficient
              service visit.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {services.slice(0, 8).map((service) => (
              <Link
                className="rounded-lg border border-ink/10 bg-mist p-5 transition hover:border-gold hover:bg-white"
                href={`/services/${service.slug}`}
                key={service.slug}
              >
                <h3 className="font-black text-ink">{service.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate">
                  {service.kicker}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-mist py-16 sm:py-24">
        <div className="container-page grid gap-8 md:grid-cols-3">
          {[
            "Tell us the exact repair list",
            "Share photos for faster estimating",
            "Get a clear visit plan before work starts",
          ].map((item) => (
            <div className="rounded-lg border border-ink/10 bg-white p-6" key={item}>
              <CheckCircle2 className="h-6 w-6 text-forest" />
              <h2 className="mt-5 text-xl font-black text-ink">{item}</h2>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div className="container-page grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-black text-rust">
              {area.name} FAQ
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-ink sm:text-5xl">
              Booking Home Repairs In {area.name}
            </h2>
          </div>
          <FAQList items={areaFaqs} />
        </div>
      </section>

      <CalendlySection
        copy={`Pick a time for your ${area.name} estimate and include the services you need so Mor Handy can prepare the right repair plan.`}
        title={`Book A Mor Handy Estimate In ${area.name}`}
      />
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
        type="application/ld+json"
      />
    </main>
  );
}
