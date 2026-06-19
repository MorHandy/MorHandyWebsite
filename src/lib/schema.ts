import { absoluteUrl } from "@/lib/utils";
import { calendlyUrl, email, faqs, phoneDisplay, serviceAreas } from "@/lib/site-data";

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": absoluteUrl("/#localbusiness"),
  name: "Mor Handy",
  url: absoluteUrl(),
  logo: absoluteUrl("/images/logo/mor-handy-logo.png"),
  image: absoluteUrl("/images/services/general-handyman-services.png"),
  telephone: phoneDisplay,
  email,
  priceRange: "$$",
  description:
    "Mor Handy provides professional home repair, handyman, plumbing, electrical, painting, carpentry, drywall, landscaping, appliance repair, and seasonal maintenance services throughout Maryland.",
  areaServed: serviceAreas.map((area) => ({
    "@type": "Place",
    name: area.name,
  })),
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "15:00",
    },
  ],
  potentialAction: {
    "@type": "ReserveAction",
    target: calendlyUrl,
    name: "Book a Mor Handy estimate",
  },
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export function serviceSchema(name: string, description: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: {
      "@id": absoluteUrl("/#localbusiness"),
    },
    areaServed: serviceAreas.map((area) => area.name),
    url: absoluteUrl(path),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
