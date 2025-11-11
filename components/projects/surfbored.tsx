"use client";

import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { markdownToHtml } from "@/lib/markdown-to-html";

export const Surfbored = () => {
  const [activeTab, setActiveTab] = useState<"features" | "demo">("features");

  const description1 = "surfbored is the only social app designed to get you **off your phone** and into real experiences with the people you care about.";
  const description2 = `we succeed when you close the app and go do something memorable.
              create shared boards to plan outings with others, get intelligent
              suggestions from AI that learns from your completed activities,
              and archive your favorite moments in a private scrapbook. **Beta coming
              soon, join the early access waitlist!**`;

  return (
    <div className="w-full h-full bg-white rounded-2xl overflow-hidden b-10 relative border-2 border-gray-100 shadow-lg transition-shadow hover:shadow-2xl">
      {/* Background Waves */}
      <div className="absolute bottom-0 left-0 w-full h-[250px] z-0 opacity-70">
        <Image
          src="/img/projects/surfbored/layered-waves.png"
          alt="Waves Bottom"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
          className="z-0"
        />
      </div>
      <div className="absolute bottom-0 left-0 w-full h-[250px] z-5 bg-gradient-to-b from-white to-transparent"></div>
      {/* Content */}
      <div className="grid md:grid-cols-2 gap-8 p-8 relative z-10">
        {/* Left Column - Project Info */}
        <div className="flex flex-col justify-center space-y-6">
          {/* Title */}
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0">
              <Image
                src="/img/projects/surfbored/surfbored.svg"
                alt="SurfBored Logo"
                width={80}
                height={80}
                className="w-16 h-16 md:w-20 md:h-20 rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl bg-gradient-to-b from-black/80 to-black/40 bg-clip-text text-transparent drop-shadow-2xl mb-2 tracking-tight">
                surfbored
              </h2>
              <p className="text-xl text-gray-600 italic">
                the anti-social media app
              </p>
            </div>
          </div>

          {/* Website Link */}
          <div>
            <Link
              href="https://surfbored.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#337AB5] hover:text-[#FF7B85] font-medium transition-colors"
            >
              <span>surfbored.app</span>
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
            <p
              className="text-gray-500 dark:text-gray-400 leading-relaxed"
              dangerouslySetInnerHTML={{
                __html: markdownToHtml(description1),
              }}
            ></p>
            <p
              className="text-gray-500 dark:text-gray-400 leading-relaxed"
              dangerouslySetInnerHTML={{
                __html: markdownToHtml(description2),
              }}
            >
            </p>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap gap-4">
            <Link
              href="https://www.linkedin.com/company/surfbored/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#337AB5] text-white rounded-lg hover:bg-[#5AA3E1] transition-colors hover:ring-2 hover:ring-[#337AB5] font-medium shadow-md tracking-tight"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </Link>
            <Link
              href="https://www.surfbored.app/#signup"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#FF7B85] hover:bg-[#FF7B85] text-white rounded-lg hover:ring-2 hover:ring-[#CC4C56] transition-colors font-medium shadow-md tracking-tight"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                />
              </svg>
              join waitlist
            </Link>
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-[#235F91] text-white rounded-full text-sm font-medium">
              Terraform
            </span>
            <span className="px-3 py-1 bg-[#235F91] text-white rounded-full text-sm font-medium">
              AWS
            </span>
            <span className="px-3 py-1 bg-[#235F91] text-white rounded-full text-sm font-medium">
              PostgreSQL
            </span>
            <span className="px-3 py-1 bg-[#235F91] text-white rounded-full text-sm font-medium">
              TypeScript
            </span>
            <span className="px-3 py-1 bg-[#235F91] text-white rounded-full text-sm font-medium">
              Deno
            </span>
          </div>
        </div>

        {/* Right Column - Tabbed Content */}
        <div className="flex flex-col space-y-4">
          {/* Tab Selector */}
          <div className="flex justify-center">
            <div className="inline-flex rounded-lg p-1 gap-3">
              <button
                onClick={() => setActiveTab("features")}
                className={cn(
                  "px-6 py-2 rounded-md font-medium transition-all duration-200",
                  activeTab === "features"
                    ? "bg-[#7DC4FF]/20 text-[#235E90] ring-2 ring-[#337AB5]"
                    : "text-gray-600 hover:text-gray-800 hover:bg-[#7DC4FF]/20"
                )}
              >
                images
              </button>
              <button
                onClick={() => setActiveTab("demo")}
                className={cn(
                  "px-6 py-2 rounded-md font-medium transition-all duration-200",
                  activeTab === "demo"
                    ? "bg-[#7DC4FF]/20 text-[#235E90] ring-2 ring-[#337AB5]"
                    : "text-gray-600 hover:text-gray-800 hover:bg-[#7DC4FF]/20"
                )}
              >
                demo
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="flex-1 flex items-center justify-center">
            {activeTab === "features" ? (
              <div className="w-full flex items-center justify-center py-8">
                <div className="relative w-full max-w-md h-[500px]">
                  {/* Left Phone - Behind and tilted left */}
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[200px] -rotate-12 z-0 opacity-80">
                    <Image
                      src="/img/projects/surfbored/explore.png"
                      alt="SurfBored Screenshot 2"
                      width={390}
                      height={844}
                      className="rounded-[40px] shadow-2xl object-cover"
                    />
                  </div>

                  {/* Center Phone - Front and center */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] z-10">
                    <Image
                      src="/img/projects/surfbored/main.png"
                      alt="SurfBored Screenshot 1"
                      width={390}
                      height={844}
                      className="rounded-[40px] shadow-2xl object-cover"
                    />
                  </div>

                  {/* Right Phone - Behind and tilted right */}
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[200px] rotate-12 z-0 opacity-80">
                    <Image
                      src="/img/projects/surfbored/boards.png"
                      alt="SurfBored Screenshot 3"
                      width={390}
                      height={844}
                      className="rounded-[40px] shadow-2xl object-cover"
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div className="w-full overflow-hidden md:h-[575px] flex justify-center items-center">
                <div className="aspect-video w-full rounded-lg shadow-lg">
                  <iframe
                    className="w-full h-full rounded-xl"
                    src="https://www.youtube.com/embed/UBtV1R-3Op4?si=RWM7Ul-uF6L03tmi"
                    title="Surfbored Demo"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
