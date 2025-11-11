"use client";

import { fetchSpotifyProjectBlogs } from "@/actions/fetchBillboardifyBlogs";
import { useEffect, useState } from "react";
import { BlogPost } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";

interface BillboardifyBlogPostsProps {
    posts?: BlogPost[];
}

export const BillboardifyBlogPosts = ({
    posts = [],
}: BillboardifyBlogPostsProps) => {

  if (posts.length === 0) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <p className="text-gray-500">No blog posts found.</p>
      </div>
    );
  }

  return (
    <div className="w-full overflow-y-auto px-4">
      <div className="space-y-3 min-h-[575px]">
        {posts.map((post, index) => (
          <Link
            key={post.id}
            href={post.url}
            target="_blank"
            className="flex gap-4 p-3 bg-white rounded-lg border w-full border-gray-200 hover:border-amber-300 hover:shadow-md transition-all duration-200 group"
          >
            {/* Cover Image */}
            <div className="flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden relative">
              <Image
                src={post.coverImage.url}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col justify-center min-w-0">
              {/* Title with number */}
              <div className="flex items-start gap-2">
                <span className="flex-shrink-0 text-amber-600 font-bold text-sm">
                  #{index + 1}
                </span>
                <h4 className="font-semibold text-gray-800 text-sm line-clamp-2 group-hover:text-amber-700 transition-colors">
                  {post.title}
                </h4>
              </div>

              {/* Subtitle/Brief */}
              {post.subtitle && (
                <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                  {post.subtitle}
                </p>
              )}

              {/* Meta info */}
              <div className="flex items-center gap-2 mt-2 text-xs text-gray-400">
                <span>{format(post.publishedAt, "MMM d, yyyy")}</span>
                <span>•</span>
                <span>{post.readTimeInMinutes} min read</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};