import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { SEO } from "@/components/SEO";
import type { Metadata } from "next";
import "./globals.css";
import localFont from 'next/font/local';

const Aeonik = localFont({ 
  src: [
    {
      path: "fonts/Aeonik_Regular.ttf",
      weight: "400",
    },
    {
      path: "fonts/Aeonik_Light.ttf",
      weight: "300",
    },
    {
      path: "fonts/Aeonik_Black.ttf",
      weight: "900",
    },
    {
      path: "fonts/Aeonik_Bold.ttf",
      weight: "700",
    },
  ]
})

const title = "Jeremy Quinto | Software Developer";
const description = "A full stack software developer based in the Bay Area, California.";

export const metadata: Metadata = {
  title: title,
  description: description,
  openGraph: {
    url: 'https://jeremyquinto.com',
    title: title,
    description: description,
  },
  twitter: {
    card: 'summary_large_image',
    title: title,
    description: description,
  },
  category: 'technology',
  authors: [{ name: 'Jeremy Quinto' }],
  other: {
    copyright: 'Jeremy Quinto',
    'design-by': 'Jeremy Quinto',
    'revisit-after': '7 days',
    distribution: 'California',
    rating: 'general',
    language: 'EN',
    city: 'Danville',
    country: 'United States',
    zipcode: '94506',
    'geo.placename': 'Danville, California, United States',
    'geo.region': 'US-CA',
    subject: description,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <SEO title={title} description={description} />
      <body className={Aeonik.className}>
        <div className="flex flex-col min-h-[100dvh] max-w-[100dvw] overflow-x-hidden relative">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
