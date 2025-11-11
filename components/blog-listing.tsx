'use client';

import { fetchBlogs } from "@/actions/fetchBlogs";
import Link from "next/link"
import { useEffect, useState } from "react";
import { BlogCarousel } from "./blog-carousel";
import { BlogCategories } from "./blog-categories";
import { ChevronUp, Component } from "lucide-react";

export const BlogListing = () => {

    const [blogPosts, setBlogPosts] = useState<any>([]);

    useEffect(() => {
        const getBlogs = async () => {
            const blogPosts = await fetchBlogs();
            setBlogPosts(blogPosts);
        };
        getBlogs();
    }, []);

    // Function to handle scrolling to the top
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth', // Smooth scroll animation
      });
    };

    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white shadow-lg relative" id="blog">
          <div className="container space-y-5 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block text-lime-700 rounded-lg bg-white shadow-2xl px-3 py-1">#blog</div>
                <h2 className="bg-gradient-to-b from-black/80 to-black/20 bg-clip-text text-transparent drop-shadow-2xl text-4xl tracking-tight sm:text-6xl pb-3">blog</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 pb-3">
                  i write some tutorials and guides on web development, programming, and other tech-related topics. you can check them out below
                </p>
                <Link 
                  href='/blog'
                  target="_blank"
                  className="text-lime-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed hover:text-amber-700 hover:underline transition-colors"
                  aria-label="see full blog (opens in new tab)"
                >
                  see full blog →
                </Link>
              </div>
            </div>
            <div className="space-y-6">
              <BlogCarousel posts={blogPosts} />
              <Component role="presentation" className="text-gray-500 h-4 w-4 mx-auto" />
              <BlogCategories />
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full flex justify-center z-50">
            <button onClick={() => scrollToTop()} className="mb-3 text-muted-foreground">
              <ChevronUp role="presentation" className="h-4 w-4 mx-auto" />
              <p>scroll to top</p>
            </button>
          </div>
        </section>
    )
}