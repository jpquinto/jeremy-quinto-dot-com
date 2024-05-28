'use client';

import { fetchBlogs } from "@/actions/fetchBlogs";
import Link from "next/link"
import { useEffect, useState } from "react";
import { BlogCarousel } from "./blog-carousel";

export const BlogListing = () => {

    const [blogPosts, setBlogPosts] = useState<any>([]);

    useEffect(() => {
        const getBlogs = async () => {
            const blogPosts = await fetchBlogs();
            setBlogPosts(blogPosts);
        };
        getBlogs();
    }, []);

    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800 shadow-lg" id="blog">
          <div className="container space-y-5 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block text-purple-700 rounded-lg bg-white shadow-2xl px-3 py-1">#blog</div>
                <h2 className="text-4xl tracking-tight sm:text-6xl">blog</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  i write some tutorials and guides on web development, programming, and other tech-related topics. you can check them out below
                </p>
                <Link href='/blog' className="text-purple-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed hover:text-amber-700 hover:underline transition-colors">
                  see full blog →
                </Link>
              </div>
            </div>
            <BlogCarousel posts={blogPosts} />
          </div>
        </section>
    )
}