import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { SEO } from "@/components/seo";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <div className="flex flex-col min-h-[100dvh]">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
