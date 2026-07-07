import type { Metadata } from "next";
import { Fraunces, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeScript } from "@/components/ThemeScript";

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

const description =
  "Anna Chester is a full-stack software engineer who builds systems that grow from idea to impact — across web, mobile, and backend. A new grad already shipping production software for 2.5 years.";

export const metadata: Metadata = {
  metadataBase: new URL("https://annachester.dev"),
  title: {
    default: "Anna Chester — Full-Stack Software Engineer",
    template: "%s · Anna Chester"
  },
  description,
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
    "University of Toronto"
  ],
  openGraph: {
    title: "Anna Chester — Full-Stack Software Engineer",
    description,
    url: "https://annachester.dev",
    siteName: "Anna Chester",
    locale: "en_CA",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Anna Chester — Full-Stack Software Engineer",
    description
  },
  alternates: {
    canonical: "https://annachester.dev"
  }
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
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
