import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { CalendlySection } from "@/components/site/calendly-section";
import { ServiceIcon } from "@/components/site/service-icons";
import { Button } from "@/components/ui/button";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";
import { services } from "@/lib/site-data";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  return {
    title: {
      absolute: service.metaTitle,
    },
    description: service.metaDescription,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      images: [{ url: service.image, alt: service.imageAlt }],
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    notFound();
  }

  const schemas = [
    serviceSchema(
      service.title,
      service.metaDescription,
      `/services/${service.slug}`,
    ),
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Services", path: "/services" },
      { name: service.title, path: `/services/${service.slug}` },
    ]),
  ];

  return (
    <main>
      <section className="premium-grid bg-mist py-16 sm:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_0.82fr] lg:items-center">
          <div>
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-md bg-gold/15 text-ink">
              <ServiceIcon name={service.icon} />
            </div>
            <p className="text-sm font-black text-rust">
              {service.kicker}
            </p>
            <h1 className="mt-4 text-4xl font-black leading-[1.05] tracking-tight text-ink sm:text-6xl">
              {service.headline}
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate">
              {service.description}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="#book">Book This Service</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/services">
                  All Services
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="image-frame aspect-[1.36/1]">
            <Image
              alt={service.imageAlt}
              className="object-cover"
              fill
              priority
              sizes="(min-width: 1024px) 42vw, 100vw"
              src={service.image}
              title={service.imageAlt}
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div className="container-page grid gap-8 lg:grid-cols-3">
          {[
            ["Common Problems", service.problems],
            ["Services Included", service.bullets],
            ["What You Get", service.outcomes],
          ].map(([heading, items]) => (
            <article className="rounded-lg border border-ink/10 bg-white p-6 shadow-sm" key={heading as string}>
              <h2 className="text-2xl font-black text-ink">{heading as string}</h2>
              <div className="mt-5 grid gap-3">
                {(items as string[]).map((item) => (
                  <div className="flex gap-3 text-sm leading-6 text-slate" key={item}>
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-forest" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-mist py-16 sm:py-24">
        <div className="container-page grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-black text-rust">
              Why it matters
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-ink sm:text-5xl">
              Do The Work Once. Do It Right.
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {[
              "Clear estimate before work begins",
              "Clean, respectful work areas",
              "Practical repair recommendations",
              "Option to bundle multiple home tasks",
            ].map((item) => (
              <div className="rounded-lg border border-ink/10 bg-white p-5 text-base font-bold text-ink" key={item}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {service.gallery && service.gallery.length > 0 && (
        <section className="bg-white py-16 sm:py-24">
          <div className="container-page">
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-black text-ink sm:text-4xl">Project Gallery</h2>
              <p className="mt-3 text-lg text-slate">See the results of our {service.title.toLowerCase()} service.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {service.gallery.map((img, idx) => (
                <figure key={idx} className="group overflow-hidden rounded-xl border border-ink/10 bg-white shadow-sm transition hover:-translate-y-1 hover:border-gold/40 hover:shadow-md">
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-stone">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-[1.04]"
                      sizes="(min-width: 640px) 50vw, 100vw"
                    />
                  </div>
                  <figcaption className="p-4">
                    <p className="mt-1 text-base font-black text-ink">{img.title}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      <div id="book">
        <CalendlySection
          copy={`Tell Mor Handy what you need for ${service.title.toLowerCase()}, share any helpful photos, and choose the best estimate window.`}
          title={`Book ${service.title} In Maryland`}
        />
      </div>
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
        type="application/ld+json"
      />
    </main>
  );
}
