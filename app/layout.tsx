import { Analytics } from "@vercel/analytics/react";
import { Navbar } from "@/components/navbar";
import { SEO } from "@/components/SEO";
import type { Metadata } from "next";
import "./globals.css";
import { Inter } from 'next/font/google'; 

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"], 
});

const title = "Jeremy Quinto | Software Developer";
const description = "A full stack software developer based in the Bay Area, California.";

export const metadata: Metadata = {
  title: title,
  description: description,
  openGraph: {
    url: "https://jeremyquinto.com",
    title: title,
    description: description,
    images: [
      {
        url: "https://jeremyquinto.com/img/cover-image.png",
        width: 1831,
        height: 1217,
        alt: "Jeremy Quinto",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: title,
    description: description,
    images: ["https://jeremyquinto.com/img/cover-image.png"],
  },
  category: "technology",
  authors: [{ name: "Jeremy Quinto" }],
  other: {
    copyright: "Jeremy Quinto",
    "design-by": "Jeremy Quinto",
    "revisit-after": "7 days",
    distribution: "California",
    rating: "general",
    language: "EN",
    city: "Danville",
    country: "United States",
    zipcode: "94506",
    "geo.placename": "Danville, California, United States",
    "geo.region": "US-CA",
    subject: description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}> {/* Apply the Inter font globally */}
      <Analytics />
      <SEO title={title} description={description} />
      <body>
        <div className="flex flex-col min-h-[100dvh] max-w-[100dvw] overflow-x-hidden relative">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
