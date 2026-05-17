import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeScript } from "@/components/ThemeScript";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-body" });
const space = Space_Grotesk({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  metadataBase: new URL("https://annachester.dev"),
  title: {
    default: "Anna Chester | Full-Stack Software Engineer",
    template: "%s | Anna Chester"
  },
  description:
    "Full-stack software engineer building business-critical systems across web, mobile, backend, payments, localization, internal tools, and technical mentorship.",
  keywords: [
    "Anna Chester",
    "full-stack engineer",
    "software engineer",
    "web developer",
    "mobile developer",
    "Angular",
    "React",
    "Django",
    "PostgreSQL",
    "University of Toronto",
    "Temerity Analytics",
    "DBRS Morningstar"
  ],
  openGraph: {
    title: "Anna Chester | Full-Stack Software Engineer",
    description:
      "Full-stack software engineer building business-critical systems across web, mobile, backend, payments, localization, internal tools, and technical mentorship.",
    url: "https://annachester.dev",
    siteName: "Anna Chester",
    locale: "en_CA",
    type: "website"
  },
  alternates: {
    canonical: "https://annachester.dev"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${manrope.variable} ${space.variable}`}>
      <head>
        <ThemeScript />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
