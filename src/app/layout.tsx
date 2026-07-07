import type { Metadata, Viewport } from "next";
import { Fraunces, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { ThemeScript } from "@/components/ThemeScript";
import { site } from "@/data/site";

// Editorial serif for display voice ("idea to impact"); loaded as a variable
// font so every weight ships in a single file.
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap"
});

// Monospace for the engineering signal: labels, metadata, and the live readout.
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap"
});

const title = "Anna Chester — Full-Stack Software Engineer";
const description =
  "Anna Chester — full-stack software engineer in Toronto, building production systems across web, mobile, and backend. Already shipping for 2.5 years, co-op to senior.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: title,
    template: "%s · Anna Chester"
  },
  description,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  keywords: [
    "Anna Chester",
    "full-stack engineer",
    "software engineer",
    "web developer",
    "mobile developer",
    "Django",
    "Angular",
    "Flutter",
    "React",
    "TypeScript",
    "PostgreSQL",
    "Toronto",
    "University of Toronto"
  ],
  openGraph: {
    title,
    description,
    url: site.url,
    siteName: site.name,
    locale: "en_CA",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title,
    description
  },
  alternates: {
    canonical: site.url
  }
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f3f4ec" },
    { media: "(prefers-color-scheme: dark)", color: "#0b1410" }
  ]
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${site.url}/#person`,
      name: site.name,
      url: site.url,
      jobTitle: site.role,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Toronto",
        addressRegion: "ON",
        addressCountry: "CA"
      },
      sameAs: ["https://www.linkedin.com/in/anna-chester", site.github],
      knowsAbout: [
        "Full-stack development",
        "Angular",
        "React",
        "Django",
        "Flutter",
        "TypeScript",
        "PostgreSQL",
        "Payments",
        "On-device computer vision"
      ]
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      name: site.name,
      url: site.url,
      about: { "@id": `${site.url}/#person` }
    }
  ]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${fraunces.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <ThemeScript />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
