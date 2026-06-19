import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { ServiceIcon } from "@/components/site/service-icons";
import type { Service } from "@/lib/site-data";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      className="group flex h-full flex-col overflow-hidden rounded-xl border border-ink/10 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-gold/60 hover:shadow-[0_22px_54px_rgba(0,0,0,0.14)]"
      href={`/services/${service.slug}`}
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-stone">
        <Image
          alt={service.imageAlt}
          className="object-cover transition duration-500 group-hover:scale-[1.04]"
          fill
          sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          src={service.image}
          title={service.imageAlt}
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-4">
          <div className="rounded-lg bg-gold/12 p-3 text-ink transition-all duration-300 group-hover:-translate-y-0.5 group-hover:scale-110 group-hover:bg-gold/22">
            <ServiceIcon name={service.icon} />
          </div>
          <ArrowUpRight className="h-5 w-5 flex-shrink-0 text-slate/60 transition group-hover:text-rust" />
        </div>
        <h3 className="mt-4 text-lg font-black leading-tight tracking-tight text-ink">
          {service.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-6 text-slate line-clamp-3">{service.description}</p>
      </div>
    </Link>
  );
}
