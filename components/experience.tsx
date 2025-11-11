import { markdownToHtml } from "@/lib/markdown-to-html";
import { Component } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { HexGrid } from "./hex-grid";

export const Experience = () => {
  const experiences = [
    {
      title: "CTO & Founding Software Engineer",
      logo: "/img/experience/surfbored.svg",
      company: "SurfBored",
      website: "https://www.surfbored.app/",
      period: "Aug 2025 - Present",
      description: [
        "collaborated with the founder to design and implement the **core backend API utilizing Deno and TypeScript**, focusing on high development velocity and robust code structure",
        "served as the sole **Solutions Architect**, designing the entire application and network architecture with a primary focus on maximizing **cost savings and capital efficiency** on a pre-seed startup budget",
        "designed and deployed **critical data ingestion jobs** using AWS EventBridge and Lambda to process and normalize real-time data feeds from multiple external APIs (e.g., Ticketmaster, Yelp, Weather API)",
      ],
      tags: [
        "AWS",
        "TypeScript",
        "Deno",
        "Terraform",
        "Docker",
        "PostgreSQL",
        "Bedrock",
        "Lambda",
      ],
    },
    {
      title: "Founding Backend & Infra Engineer",
      logo: "/img/experience/corkvision.jpg",
      company: "CorkVision",
      website: "https://www.corkvision.com/",
      period: "May 2025 - Present",
      description: [
        "single-handedly drove core AI chatbot performance by leading the design and implementation of a **Text-to-SQL RAG (Retrieval-Augmented Generation) system**, improving agent generation quality in key LLM metrics: **ROUGE-N increased by 27% and BERTScore by 45%**",
        "acted as the primary **Solutions Architect**, guiding technical decisions that resulted in **major infrastructure cost savings** (approx. 25% reduction) across multiple service deployments by optimizing resource provisioning",
        "managed and maintained the **complete application infrastructure and networking deployment**, leveraging Infrastructure-as-Code (IaC) with Terraform across complex, multi-account AWS environments",
        "developed and deployed core backend Express.js API containerized on AWS ECS, **implementing 80+ endpoints** backed by 1000s unit and integration tests to ensure stability, and OpenAPI YAML documentation for long-term maintainability",
      ],
      tags: [
        "AWS",
        "TypeScript",
        "Express.js",
        "Terraform",
        "Docker",
        "PostgreSQL",
        "Bedrock",
        "Lambda",
      ],
    },
    {
      title: "Full-Stack Software Developer",
      logo: "/img/experience/iron-cove.png",
      company: "Iron Cove Solutions",
      website: "https://ironcovesolutions.com/",
      period: "Mar 2024 - June 2025",
      description: [
        "led the development and deployment of a modern, fully responsive company website makeover (Next.js, Vercel, Tailwind), which drove core business metrics: **+100% increase in overall traffic and a 12% uplift in organic leads**",
        "designed, built, and maintained a full-stack custom HR orchestration application leveraging AWS serverless services, WebSocket APIs, and Next.js to automate user lifecycle management and license provisioning with Okta workflows",
        "served as a **technical cloud consultant**, leading client-facing meetings to define and scope complex cloud platform integrations with non-technical stakeholders, and collaborating with client engineering teams to deliver solutions",
      ],
      tags: [
        "Next.js",
        "AWS",
        "Consulting",
        "TypeScript",
        "TailwindCSS",
        "Contentful CMS",
      ],
    },
  ];

  return (
    <section
      className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 shadow-lg relative"
      id="experience"
    >
      {/* Background Hex Grid */}
      <div className="z-0 absolute top-0 left-0 w-full flex justify-center">
        <HexGrid />
      </div>
      <div className="container space-y-6 px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block text-lime-700 rounded-lg bg-lime-100 px-3 py-1">
              #experience
            </div>
            <h2 className="bg-gradient-to-b from-black/80 to-black/20 bg-clip-text text-transparent drop-shadow-2xl text-4xl tracking-tight sm:text-6xl pb-3">
              experience
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              my professional experience as a software engineer
            </p>
          </div>
        </div>
        <Component
          role="presentation"
          className="text-gray-500 h-4 w-4 mx-auto"
        />
          {/* Timeline */}
          <div className="max-w-5xl mx-auto mt-12 relative z-10 opacity-70">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative flex gap-4 md:gap-8 pb-12 last:pb-0"
              >
                {/* Timeline Line */}
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-lime-400 border-4 border-white shadow-md z-10" />
                  {index !== experiences.length - 1 && (
                    <div className="w-0.5 h-full bg-lime-400 mt-2" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all border border-gray-200 hover:scale-[1.01]">
                  <div>
                    <Image
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      width={60}
                      height={60}
                      className="mb-4 aspect-square object-contain rounded-lg"
                    />
                  </div>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-3">
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold text-gray-800 tracking-tighter">
                        {exp.title}
                      </h3>
                      <div>
                        <Link
                          href={exp.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex md:text-lg tracking-tighter items-center gap-2 text-lime-700 hover:text-lime-500 font-medium transition-colors"
                        >
                          <span>{exp.company}</span>
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
                    </div>
                    <span className="text-sm text-gray-500 font-medium whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {exp.description.map((item, i) => (
                      <li
                        key={i}
                        className="text-gray-600 text-sm flex items-start gap-2"
                      >
                        <span className="text-lime-400">•</span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: markdownToHtml(item),
                          }}
                        ></span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-lime-50 text-lime-700 rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
      </div>
    </section>
  );
};
