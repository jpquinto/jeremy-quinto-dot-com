"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { PictureCarousel } from "../ui/picture-carousel";
import { fetchSpotifyProjectBlogs } from "@/actions/fetchBillboardifyBlogs";
import { IronCoveSolutionsBackground, IronCoveSolutionsBackground2 } from "./iron-cove-solutions-background";
import Link from "next/link";

export const IronCoveSolutions = () => {
  const [activeTab, setActiveTab] = useState<
    "before" | "after"
  >("after");

  const after = {
    images: [
      {
        src: "/img/projects/ironcovesolutions/after-1.png",
        alt: "ICS After 1",
        caption: "home page with dynamic content sourced from contentful cms",
      },
      {
        src: "/img/projects/ironcovesolutions/after-2.png",
        alt: "ICS After 2",
        caption: "home page with dynamic content sourced from contentful cms",
      },
      {
        src: "/img/projects/ironcovesolutions/after-3.png",
        alt: "ICS After 3",
        caption: "consulting pages",
      },
      {
        src: "/img/projects/ironcovesolutions/after-4.png",
        alt: "ICS After 4",
        caption:
          "technology pages",
      },
      {
        src: "/img/projects/ironcovesolutions/after-5.png",
        alt: "ICS After 5",
        caption: "pricing page",
      },
      {
        src: "/img/projects/ironcovesolutions/after-6.png",
        alt: "ICS After 5",
        caption: "blog listing page with articles sourced from contentful cms and localized in three different languages",
      },
    ],
    colors: {
      buttonBg: "bg-pink-50",
      buttonText: "text-pink-700",
      buttonHoverBg: "hover:bg-pink-100",
      dotActive: "bg-pink-400",
      dotInactive: "bg-pink-300/70",
      dotHover: "hover:bg-pink-400",
    },
  };

  const before = {
    images: [
      {
        src: "/img/projects/ironcovesolutions/before-1.png",
        alt: "Pre-Migration 1",
        caption:
          "old technology pages with outdated design and poor user experience",
      },
      {
        src: "/img/projects/ironcovesolutions/before-2.png",
        alt: "Pre-Migration 2",
        caption:
          "old home page with cluttered layout and lack of clear messaging",
      },
      {
        src: "/img/projects/ironcovesolutions/before-3.png",
        alt: "Pre-Migration 3",
        caption:
          "old consulting page with cluttered information and unappealing visuals",
      },
      {
        src: "/img/projects/ironcovesolutions/before-4.png",
        alt: "Pre-Migration 4",
        caption:
          "old information page with outdated design",
      },
    ],
    colors: {
      buttonBg: "bg-blue-50",
      buttonText: "text-blue-700",
      buttonHoverBg: "hover:bg-blue-100",
      dotActive: "bg-blue-400",
      dotInactive: "bg-blue-300/70",
      dotHover: "hover:bg-blue-400",
    },
  };

  const carousel = activeTab === "after" ? after : before;

  return (
    <div className="w-full h-full bg-white rounded-2xl overflow-hidden b-10 relative border-2 border-gray-100">
      {/* Background Image */}
      <div className="absolute bottom-0 left-0 z-0 opacity-70 -translate-x-1/2 translate-y-1/2">
        <IronCoveSolutionsBackground />
      </div>
      <div className="absolute top-0 right-0 z-0 opacity-70 translate-x-1/2 -translate-y-1/2">
        <IronCoveSolutionsBackground2 />
      </div>
      {/* Content */}
      <div className="grid md:grid-cols-2 gap-8 p-8 relative z-10">
        {/* Left Column - Project Info */}
        <div className="flex flex-col justify-center space-y-6">
          {/* Title */}
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0">
              <Image
                src="/img/projects/ironcovesolutions/logo.png"
                alt="Iron Cove Solutions Logo"
                width={80}
                height={80}
                className="rounded-lg object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl bg-gradient-to-b from-black/80 to-black/40 bg-clip-text text-transparent drop-shadow-2xl mb-2 tracking-tight pb-2">
                ironcovesolutions.com
              </h2>
              <p className="text-xl text-gray-600 italic">
                renovated and modernized company website
              </p>
            </div>
          </div>

          {/* Website Link */}
          <div>
            <Link
              href="https://ironcovesolutions.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-700 hover:text-pink-400 font-medium transition-colors"
            >
              <span>visit the site</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </Link>
          </div>

          {/* Description */}
          <div className="space-y-4">
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
              as the lead developer for iron cove solutions, i spearheaded a
              complete renovation and modernization of the company's website to
              better reflect its brand and services. the website features a
              clean, responsive design built with next.js and tailwindcss,
              ensuring optimal performance across all devices.
            </p>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
              with over 600 pages of dynamic content sourced from contentful cms
              and accessed through a GraphQL API, the website provides
              comprehensive information about the company's offerings. i
              implemented many different SEO tactics to improve the website's
              visibility on search engines, resulting in greatly increased
              traffic and engagement. the site also includes a blog section
              where the company regularly publishes articles related to its
              industry, further establishing its authority and expertise, and is
              localized in three different languages.
            </p>
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-[#0074D4] text-white rounded-full text-sm font-medium">
              Next.js
            </span>
            <span className="px-3 py-1 bg-[#0074D4] text-white rounded-full text-sm font-medium">
              Tailwind
            </span>
            <span className="px-3 py-1 bg-[#0074D4] text-white rounded-full text-sm font-medium">
              TypeScript
            </span>
            <span className="px-3 py-1 bg-[#0074D4] text-white rounded-full text-sm font-medium">
              Contentful CMS
            </span>
            <span className="px-3 py-1 bg-[#0074D4] text-white rounded-full text-sm font-medium">
              GraphQL
            </span>
          </div>
        </div>

        {/* Right Column - Tabbed Content */}
        <div className="flex flex-col space-y-4">
          {/* Tab Selector */}
          <div className="flex justify-center">
            <div className="inline-flex rounded-lg p-1 gap-3">
              <button
                onClick={() => setActiveTab("before")}
                className={cn(
                  "px-6 py-2 rounded-md font-medium transition-all duration-200",
                  activeTab === "before"
                    ? "bg-blue-100 text-blue-700 ring-2 ring-blue-200"
                    : "text-gray-600 hover:bg-blue-50 hover:text-blue-700"
                )}
              >
                before migration
              </button>
              <button
                onClick={() => setActiveTab("after")}
                className={cn(
                  "px-6 py-2 rounded-md font-medium transition-all duration-200",
                  activeTab === "after"
                    ? "bg-pink-100 text-pink-700 ring-2 ring-pink-400"
                    : "text-gray-600 hover:bg-pink-50 hover:text-pink-700"
                )}
              >
                after migration
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="flex-1 flex items-center justify-center">
            <div className="w-full flex items-center justify-center pb-8">
              <PictureCarousel
                images={carousel.images}
                colors={carousel.colors}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
