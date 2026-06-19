import type { Metadata } from "next";

import "@/app/globals.css";

import { FloatingActions } from "@/components/site/floating-actions";
import { ScrollProgress } from "@/components/site/scroll-progress";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { faqSchema, localBusinessSchema } from "@/lib/schema";
import { absoluteUrl } from "@/lib/utils";

export const metadata: Metadata = {
  metadataBase: new URL("https://morhandy.com"),
  title: {
    default: "Maryland Handyman Services | Mor Handy",
    template: "%s | Mor Handy",
  },
  description:
    "Mor Handy provides professional home repair, maintenance, plumbing, electrical, carpentry, painting, drywall, landscaping, and handyman services throughout Maryland.",
  alternates: {
    canonical: absoluteUrl(),
  },
  icons: {
    icon: [
      { url: "/images/logo/logo.png", type: "image/png" },
    ],
    apple: [
      { url: "/images/logo/logo.png", type: "image/png" },
    ],
    shortcut: "/images/logo/logo.png",
  },
  openGraph: {
    title: "Maryland Handyman Services | Mor Handy",
    description:
      "One trusted team for home repairs, seasonal maintenance, and property improvements throughout Maryland.",
    url: absoluteUrl(),
    siteName: "Mor Handy",
    images: [
      {
        url: absoluteUrl("/images/logo/logo.png"),
        width: 1200,
        height: 630,
        alt: "Mor Handy professional handyman services in Maryland - Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maryland Handyman Services | Mor Handy",
    description: "One trusted team for home repairs, seasonal maintenance, and property improvements throughout Maryland.",
    images: [absoluteUrl("/images/logo/logo.png")],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ScrollProgress />
        <SiteHeader />
        {children}
        <SiteFooter />
        <FloatingActions />
        <script
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([localBusinessSchema, faqSchema]),
          }}
          type="application/ld+json"
        />
      </body>
    </html>
  );
}
