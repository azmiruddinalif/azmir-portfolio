"use client";

import React, { useEffect, useState, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import CardBase from "../common/Card";
import clsx from "clsx";
import BlogCardSkeleton from "./BlogCardSkeleton";
import useInfiniteBlogs from "@/app/hooks/useInfiniteBlogs";

export default function BlogsCard({ blogs: initialBlogs = [] }) {
  const [page, setPage] = useState(1);

  const { blogs, loading, hasMore, observerRef } = useInfiniteBlogs(
    "/api/blogs",
    initialBlogs
  );

  // ✅ First load skeleton
  if (!blogs?.length && loading) {
    return (
      <div className="space-y-8">
        <BlogCardSkeleton />
        <BlogCardSkeleton />
        <BlogCardSkeleton />
      </div>
    );
  }

  // ✅ Empty state
  if (!blogs?.length && !loading) {
    return (
      <p className="text-center text-gray-500 py-10 dark:text-gray-400">
        No blogs found. Check back soon!
      </p>
    );
  }

  // ✅ Blog card render
  return (
    <div className="space-y-8">
      {blogs.map((blog) => {
        const data = blog.attributes || blog;
        const {
          title,
          blog_description,
          date_of_post,
          tags,
          blog_image,
          slug,
        } = data;

        const imageUrl =
          blog_image?.formats?.medium?.url ||
          blog_image?.url ||
          blog_image?.data?.attributes?.formats?.medium?.url ||
          blog_image?.data?.attributes?.url;

        const cleanedText = blog_description?.replace(/[#*_>\-\n]/g, "") || "";
        const shortDesc =
          cleanedText.length > 400
            ? cleanedText.slice(0, 400).trim() + "..."
            : cleanedText;

        const firstTwoTags =
          tags?.slice?.(0, 2) || tags?.data?.slice?.(0, 2) || [];

        return (
          <Link
            href={`/blogs/${slug}`}
            key={blog.id}
            className="block group hover:no-underline"
          >
            <CardBase
              className={clsx(
                "rounded-xl overflow-hidden bg-white border border-gray-200",
                "dark:bg-gray-800/40 dark:backdrop-blur-md dark:border-gray-800/90",
                "shadow-sm hover:shadow-md transition-all duration-300"
              )}
            >
              <CardBase.Body className="p-5 md:p-6">
                <div
                  className={clsx(
                    "flex flex-col gap-4 sm:gap-6",
                    "sm:flex-row md:items-start md:gap-x-5"
                  )}
                >
                  {/* 📝 Text Section */}
                  <div className="flex-1 order-2 sm:order-1">
                    <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 font-primary group-hover:text-primary-600 dark:text-white transition-colors">
                      {title}
                    </h2>

                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed line-clamp-5 sm:line-clamp-3 md:line-clamp-5 font-primary dark:text-white/60">
                      {shortDesc || "No description available."}
                    </p>
                  </div>

                  {/* 🖼️ Image Section */}
                  {imageUrl && (
                    <CardBase.Header
                      className={clsx(
                        "relative w-full h-56 sm:h-40 md:h-56 rounded-md overflow-hidden flex-shrink-0 order-1 sm:order-2",
                        "sm:w-1/3"
                      )}
                    >
                      <Image
                        src={imageUrl}
                        alt={title || "Blog Image"}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      />
                    </CardBase.Header>
                  )}
                </div>

                {/* 📅 Footer */}
                <div className="flex flex-wrap items-center justify-between text-xs text-gray-500 mt-5 gap-y-3">
                  <div className="flex gap-2 flex-wrap">
                    {firstTwoTags.map((tag) => (
                      <span
                        key={tag.id}
                        className="bg-gray-100 dark:bg-gray-800/90 dark:backdrop-blur-md px-2 py-1 rounded-md text-gray-700 dark:text-white/60 text-xs font-medium"
                      >
                        {tag.tag || tag.attributes?.tag}
                      </span>
                    ))}
                  </div>

                  {date_of_post && (
                    <span className="text-gray-400 dark:text-gray-500">
                      {new Date(date_of_post).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                  )}
                </div>
              </CardBase.Body>
            </CardBase>
          </Link>
        );
      })}

      {/* 🌀 Infinite Scroll Trigger */}
      {hasMore && (
        <div ref={observerRef} className="flex flex-col items-center space-y-5">
          {loading && (
            <>
              <BlogCardSkeleton />
              <BlogCardSkeleton />
            </>
          )}
        </div>
      )}

      {/* 🎉 End message */}
      {!hasMore && (
        <p className="text-center text-gray-400 text-sm mt-10">
          🎉 You’ve reached the end.
        </p>
      )}
    </div>
  );
}
