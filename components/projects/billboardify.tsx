"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { PictureCarousel } from "../ui/picture-carousel";
import { BillboardifyBlogPosts } from "./billboardify-blog-posts";
import { fetchSpotifyProjectBlogs } from "@/actions/fetchBillboardifyBlogs";
import Link from "next/link";
import { GitHubLink } from "../ui/github-link";
import { markdownToHtml } from "@/lib/markdown-to-html";

export const Billboardify = () => {
  const [activeTab, setActiveTab] = useState<"images" | "architecture" | "blog">("images");

  const [blogPosts, setBlogPosts] = useState<any>([]);

  useEffect(() => {
    const getBlogs = async () => {
      const blogPosts = await fetchSpotifyProjectBlogs();
      setBlogPosts(blogPosts);
    };
    getBlogs();
  }, []);

  const overview = {
    images: [
        {
            src: "/img/projects/billboardify/song-page-2.png",
            alt: "Billboardify Screenshot 1",
            caption:
            "custom pages with listening history and analytics for individual songs, artists, and albums",
        },
        {
            src: "/img/projects/billboardify/songs-chart-2.png",
            alt: "Billboardify Screenshot 2",
            caption:
            "personal hot 100 chart generated weekly, as well as charts for top artists and albums",
        },
        {
            src: "/img/projects/billboardify/songs-chart.png",
            alt: "Billboardify Screenshot 3",
            caption: "my personal hot 100 chart",
        },
        {
            src: "/img/projects/billboardify/ai-chat.png",
            alt: "Billboardify Screenshot 4",
            caption:
            "AI chatbot to answer questions about listening history, queue songs, and generate custom playlists",
        },
        {
            src: "/img/projects/billboardify/song-page.png",
            alt: "Billboardify Screenshot 5",
            caption: "album-specific analytics and chart history",
        },
    ],
    colors: {
        buttonBg: "bg-purple-50",
        buttonText: "text-purple-700",
        buttonHoverBg: "hover:bg-purple-100",
        dotActive: "bg-purple-400",
        dotInactive: "bg-purple-300/70",
        dotHover: "hover:bg-purple-400",
    }
  }

  const architecture = {
    images: [
      {
        src: "/img/projects/billboardify/diagram-1.png",
        alt: "Billboardify Diagram 1",
        caption:
          "ingestion and aggregation pipeline using AWS Lambda, EventBridge, DynamoDB, and RDS to process Spotify listening data",
      },
      {
        src: "/img/projects/billboardify/diagram-2.png",
        alt: "Billboardify Diagram 2",
        caption:
          "agentic AI architecture using LangGraph, Text-to-SQL RAG, and vector databases to allow natural language interactions with music data",
      },
      {
        src: "/img/projects/billboardify/diagram-3.png",
        alt: "Billboardify Diagram 3",
        caption: "querying listening history from natural language prompts using LangGraph and Text-to-SQL RAG",
      },
      {
        src: "/img/projects/billboardify/diagram-4.png",
        alt: "Billboardify Diagram 4",
        caption:
          "human-in-the-loop workflow for continuous improvement of AI chatbot responses",
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

  const carousel = activeTab === "images" ? overview : architecture;

  const description1 = "billboardify transforms your Spotify listening history into **personalized Billboard-style charts**, generating weekly rankings for your top songs, artists, and albums. the platform features an AI-powered chatbot that lets you explore your music data through natural language queries, control Spotify playback, and automatically generate custom playlists based on your listening patterns and preferences.";

  const description2 = "built on a robust AWS infrastructure, i created an **automated ETL pipeline** with Lambda functions, EventBridge, and RDS to continuously ingest and aggregate listening data. The system combines **LangGraph and Text-to-SQL RAG** with vector databases to power intelligent conversational interactions, all wrapped in a sleek Next.js frontend with infrastructure managed through Terraform and GitHub Actions.";

  return (
    <div className="w-full h-full bg-white rounded-2xl overflow-hidden b-10 relative border-2 border-gray-100 shadow-lg transition-shadow hover:shadow-2xl">
      {/* Background Waves */}
      <div className="absolute bottom-0 left-0 w-full h-[150px] z-0 opacity-70">
        <Image
          src="/img/projects/billboardify/background-waves.png"
          alt="Waves Bottom"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
          className="z-0 blur-sm opacity-50"
        />
      </div>
      {/* Content */}
      <div className="grid md:grid-cols-2 gap-8 p-8 relative z-10">
        {/* Left Column - Project Info */}
        <div className="flex flex-col justify-center space-y-6">
          {/* Title */}
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0">
              <Image
                src="/img/projects/billboardify/logo.png"
                alt="Billboardify Logo"
                width={80}
                height={80}
                className="w-16 h-16 md:w-20 md:h-20 rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl bg-gradient-to-b from-black/80 to-black/40 bg-clip-text text-transparent drop-shadow-2xl mb-2 tracking-tight pb-2">
                billboardify
              </h2>
              <p className="text-xl text-gray-600 italic">
                advanced spotify analytics and ai music chatbot
              </p>
            </div>
          </div>

          <GitHubLink url={"https://github.com/jpquinto/billboardify"} />

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

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm font-medium">
              AWS
            </span>
            <span className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm font-medium">
              Lambda
            </span>
            <span className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm font-medium">
              API Gateway
            </span>
            <span className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm font-medium">
              TypeScript
            </span>
            <span className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm font-medium">
              Next.js
            </span>
            <span className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm font-medium">
              LangGraph
            </span>
            <span className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm font-medium">
              RDS
            </span>
            <span className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm font-medium">
              DynamoDB
            </span>
          </div>
        </div>

        {/* Right Column - Tabbed Content */}
        <div className="flex flex-col space-y-4">
          {/* Tab Selector */}
          <div className="flex justify-center">
            <div className="inline-flex rounded-lg p-1 gap-3">
              <button
                onClick={() => setActiveTab("images")}
                className={cn(
                  "px-6 py-2 rounded-md font-medium transition-all duration-200",
                  activeTab === "images"
                    ? "bg-purple-100 text-purple-700 ring-2 ring-purple-400"
                    : "text-gray-600 hover:bg-purple-50 hover:text-purple-700"
                )}
              >
                overview
              </button>
              <button
                onClick={() => setActiveTab("architecture")}
                className={cn(
                  "px-6 py-2 rounded-md font-medium transition-all duration-200",
                  activeTab === "architecture"
                    ? "bg-pink-100 text-pink-400 ring-2 ring-pink-200"
                    : "text-gray-600 hover:bg-pink-50 hover:text-pink-400"
                )}
              >
                architecture
              </button>
              <button
                onClick={() => setActiveTab("blog")}
                className={cn(
                  "px-6 py-2 rounded-md font-medium transition-all duration-200",
                  activeTab === "blog"
                    ? "bg-amber-100 text-amber-700 ring-2 ring-amber-400"
                    : "text-gray-600 hover:bg-amber-50 hover:text-amber-700"
                )}
              >
                blog posts
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="flex-1 flex items-center justify-center">
            {activeTab === "images" || activeTab === "architecture" ? (
              <div className="w-full flex items-center justify-center pb-8">
                <PictureCarousel
                  images={carousel.images}
                  colors={carousel.colors}
                />
              </div>
            ) : (
              <div className="w-full flex items-center justify-center pb-8">
                <BillboardifyBlogPosts posts={blogPosts} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};