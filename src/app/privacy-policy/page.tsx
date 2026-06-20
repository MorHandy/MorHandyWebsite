import type { Metadata } from "next";
import Link from "next/link";

import { PageHero } from "@/components/sections/page-hero";
import { email, phoneDisplay, phoneHref } from "@/lib/site-data";
import { absoluteUrl } from "@/lib/utils";

const lastUpdated = "June 20, 2026";

const sections = [
  {
    title: "Information We Collect",
    body: [
      "Mor Handy may collect information you provide directly when you request an estimate, complete a contact form, book through a scheduling link, call, email, or otherwise communicate with our business. This may include your name, address, email address, phone number, service request details, property details, photos, and project notes.",
      "We may also collect limited technical information automatically through the website, such as IP address, browser type, device information, referring pages, on-site behavior, and general analytics data that help us understand website performance and lead quality.",
    ],
  },
  {
    title: "How We Use Information",
    body: [
      "Mor Handy uses collected information to respond to inquiries, prepare estimates, schedule service, communicate about appointments, improve customer support, operate the website, and market relevant home repair and maintenance services.",
      "We may also use information to troubleshoot site issues, protect against spam or misuse, comply with legal obligations, maintain business records, and improve how homeowners find and use our website.",
    ],
  },
  {
    title: "Cookies, Analytics, And Tracking",
    body: [
      "This website may use cookies, analytics tools, scheduling widgets, and similar technologies to understand traffic sources, measure page performance, and improve the user experience.",
      "Third-party providers such as analytics, advertising, scheduling, map, hosting, or form-processing services may set or read their own cookies according to their own privacy policies. You can usually control cookies through your browser settings, although some features may not function properly if cookies are disabled.",
    ],
  },
  {
    title: "How We Share Information",
    body: [
      "Mor Handy does not sell personal information for cash consideration. We may share information with trusted service providers and business tools that support our operations, such as website hosting, analytics, customer communications, payment processing, scheduling, mapping, email, CRM, or subcontractor coordination where needed to fulfill your request.",
      "We may also disclose information when required by law, to enforce our rights, to protect safety or property, or in connection with a business transition such as a merger, acquisition, or asset sale.",
    ],
  },
  {
    title: "Data Retention",
    body: [
      "We retain personal information for as long as reasonably necessary to respond to inquiries, provide services, maintain records, resolve disputes, comply with legal obligations, and protect our business interests.",
      "Retention periods may vary based on whether you became a customer, the type of project involved, payment and tax documentation requirements, and ongoing service or warranty questions.",
    ],
  },
  {
    title: "Your Choices And Rights",
    body: [
      "You may contact Mor Handy to request updates or corrections to the personal information you have provided, to opt out of non-essential marketing communications, or to ask questions about how your information is handled.",
      "Depending on your state of residence, you may have additional privacy rights under applicable law. Mor Handy will review and respond to valid privacy requests in accordance with the laws that apply to our business and the information involved.",
    ],
  },
  {
    title: "Data Security",
    body: [
      "Mor Handy uses reasonable administrative, technical, and organizational measures designed to help protect personal information against unauthorized access, disclosure, misuse, or loss.",
      "No website, email transmission, or online storage system can be guaranteed completely secure, so we encourage customers not to send highly sensitive information through unsecured channels unless specifically requested and protected.",
    ],
  },
  {
    title: "Children's Privacy",
    body: [
      "Mor Handy's website and services are intended for adult homeowners, property managers, and other adults seeking home services. We do not knowingly collect personal information directly from children under 13 through this website.",
      "If you believe a child has submitted personal information through the site, please contact us so we can review and remove it where appropriate.",
    ],
  },
  {
    title: "Third-Party Websites",
    body: [
      "This website may link to third-party websites or embedded tools, including scheduling, maps, social media, or review platforms. Mor Handy is not responsible for the privacy or data handling practices of those third parties.",
      "We encourage you to review the privacy policies of any third-party services you use through links or embeds on this site.",
    ],
  },
  {
    title: "Policy Updates",
    body: [
      "Mor Handy may update this Privacy Policy from time to time to reflect new tools, legal developments, business operations, or service offerings. Any updates will be posted on this page with a revised effective date.",
      "Your continued use of the website after changes are posted indicates acceptance of the updated policy.",
    ],
  },
];

export const metadata: Metadata = {
  title: {
    absolute: "Privacy Policy | Mor Handy Maryland Handyman Services",
  },
  description:
    "Read the Mor Handy privacy policy to learn how we collect, use, share, and protect customer and website visitor information for Maryland handyman and home repair services.",
  keywords: [
    "Mor Handy privacy policy",
    "Maryland handyman privacy policy",
    "home service website privacy",
    "customer information policy",
    "estimate request privacy policy",
  ],
  alternates: {
    canonical: absoluteUrl("/privacy-policy"),
  },
  openGraph: {
    title: "Privacy Policy | Mor Handy",
    description:
      "How Mor Handy collects, uses, shares, and protects website visitor and customer information.",
    url: absoluteUrl("/privacy-policy"),
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy | Mor Handy",
    description:
      "Review how Mor Handy handles customer and visitor data, analytics, cookies, and privacy requests.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main>
      <PageHero
        copy="Learn how Mor Handy collects, uses, shares, and protects website visitor and customer information when you browse the site, request an estimate, or schedule home services."
        eyebrow="Legal"
        title="Privacy Policy"
      />
      <section className="bg-white py-16 sm:py-24">
        <div className="container-page max-w-4xl">
          <div className="rounded-2xl border border-ink/10 bg-mist px-6 py-5 text-sm leading-7 text-slate sm:px-8">
            <p>
              <strong className="text-ink">Last updated:</strong> {lastUpdated}
            </p>
            <p className="mt-3">
              This policy is a general website privacy notice for Mor Handy. If you need state-specific disclosures, consent language, or advertising-platform disclosures, review it with qualified privacy counsel.
            </p>
          </div>

          <div className="mt-10 space-y-10">
            {sections.map((section) => (
              <article key={section.title}>
                <h2 className="text-3xl font-black tracking-tight text-ink">
                  {section.title}
                </h2>
                <div className="mt-4 space-y-4 text-base leading-8 text-slate">
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 rounded-2xl bg-mist px-6 py-8 sm:px-8">
            <h2 className="text-2xl font-black tracking-tight text-ink">
              Contact Mor Handy About Privacy Questions
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-slate">
              If you want to update your information, ask a privacy question, or opt out of non-essential marketing communications, contact our team directly.
            </p>
            <div className="mt-6 flex flex-col gap-3 text-sm font-bold sm:flex-row sm:flex-wrap sm:items-center">
              <Link className="text-rust transition hover:text-ink" href={phoneHref}>
                {phoneDisplay}
              </Link>
              <Link
                className="text-rust transition hover:text-ink"
                href={`mailto:${email}`}
              >
                {email}
              </Link>
              <Link className="text-rust transition hover:text-ink" href="/contact">
                Visit the contact page
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
