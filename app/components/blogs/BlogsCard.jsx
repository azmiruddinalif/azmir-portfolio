"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import CardBase from "../common/Card";
import BlogCardSkeleton from "./BlogCardSkeleton";
import useInfiniteBlogs from "@/app/hooks/useInfiniteBlogs";

export default function BlogsCard({ blogs: initialBlogs = { data: [] } }) {
  const { blogs, loading, hasMore, observerRef } = useInfiniteBlogs(
    "/api/blogs",
    initialBlogs
  );

  // 🧩 Skeleton during first load
  if (!blogs?.length && loading) {
    return (
      <div className="space-y-6">
        <BlogCardSkeleton />
        <BlogCardSkeleton />
        <BlogCardSkeleton />
      </div>
    );
  }

  // 🚫 No blogs found
  if (!blogs?.length && !loading) {
    return (
      <div className="text-center py-16">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-100 dark:bg-gray-800 mb-4">
          <svg
            className="w-10 h-10 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
        </div>
        <p className="text-lg text-gray-500 dark:text-gray-400 font-primary">
          No blogs found. Check back soon!
        </p>
      </div>
    );
  }

  // 📰 Render blogs
  return (
    <div className="space-y-6 lg:space-y-8">
      {blogs.map((blog) => {
        const {
          id,
          title,
          blog_description,
          date_of_post,
          tags,
          blog_image,
          slug,
        } = blog;

        // 🖼️ Handle different image nesting structures from Strapi
        const imageUrl =
          blog_image?.formats?.medium?.url ||
          blog_image?.url ||
          blog_image?.data?.attributes?.formats?.medium?.url ||
          blog_image?.data?.attributes?.url ||
          "/default-blog.jpg"; // fallback

        // ✍️ Clean description text
        const cleanedText =
          blog_description?.replace(/[#*_>\-\n]/g, "")?.trim() || "";
        const shortDesc =
          cleanedText.length > 400
            ? cleanedText.slice(0, 400).trim() + "..."
            : cleanedText;

        // 🏷️ First two tags
        const firstTwoTags =
          tags?.slice?.(0, 2) || tags?.data?.slice?.(0, 2) || [];

        return (
          <Link
            href={`/blogs/${slug}`}
            key={id}
            className="block group hover:no-underline"
          >
            <CardBase
              className={clsx(
                "rounded-2xl overflow-hidden bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm",
                "border border-gray-200/50 dark:border-gray-800/50",
                "hover:shadow-soft transition-all duration-500 hover:scale-[1.02]"
              )}
            >
              <CardBase.Body className="p-5 sm:p-6 lg:p-7">
                <div
                  className={clsx(
                    "flex flex-col gap-5 sm:gap-6",
                    "sm:flex-row md:items-start lg:gap-x-6"
                  )}
                >
                  {/* 🖼️ Blog Image */}
                  {imageUrl && (
                    <CardBase.Header
                      className={clsx(
                        "relative w-full h-48 sm:h-44 md:h-48 lg:h-52 rounded-xl overflow-hidden flex-shrink-0",
                        "sm:w-2/5 lg:w-1/3 shadow-md group-hover:shadow-xl transition-shadow duration-500",
                        "ring-1 ring-gray-200 dark:ring-gray-800"
                      )}
                    >
                      <Image
                        src={imageUrl}
                        alt={title || "Blog Image"}
                        fill
                        sizes="(max-width: 768px) 100vw, 40vw"
                        className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </CardBase.Header>
                  )}

                  {/* 📝 Blog Text */}
                  <div className="flex-1">
                    {/* Tags */}
                    {firstTwoTags.length > 0 && (
                      <div className="flex gap-2 flex-wrap mb-3">
                        {firstTwoTags.map((tag) => (
                          <span
                            key={tag.id}
                            className="inline-flex items-center bg-gradient-to-r from-primary-400 to-primary-500 text-gray-600 px-3 py-1 rounded-full text-xs font-semibold shadow-sm"
                          >
                            {tag.tag || tag.attributes?.tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Title */}
                    <h2 className="text-xl sm:text-2xl lg:text-2xl xl:text-3xl font-bold text-gray-900 dark:text-white mb-3 font-primary group-hover:text-primary-600 dark:group-hover:text-primary-600 transition-colors duration-300 leading-tight">
                      {title}
                    </h2>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed line-clamp-3 sm:line-clamp-2 lg:line-clamp-3 font-primary mb-4">
                      {shortDesc || "No description available."}
                    </p>

                    {/* Date */}
                    {date_of_post && (
                      <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
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
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        <time dateTime={date_of_post}>
                          {new Date(date_of_post).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })}
                        </time>
                      </div>
                    )}
                  </div>
                </div>
              </CardBase.Body>
            </CardBase>
          </Link>
        );
      })}

      {/* ♾️ Infinite Scroll Trigger */}
      {hasMore && (
        <div ref={observerRef} className="flex flex-col items-center space-y-6">
          {loading && (
            <>
              <BlogCardSkeleton />
              <BlogCardSkeleton />
            </>
          )}
        </div>
      )}

      {/* 🎉 End Message */}
      {!hasMore && blogs.length > 0 && (
        <div className="text-center py-12">
          <div className="inline-flex items-center gap-2 text-gray-400 dark:text-gray-500 text-sm font-medium">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-gray-300 dark:to-gray-700"></div>
            <span>🎉 You've reached the end</span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-gray-300 dark:to-gray-700"></div>
          </div>
        </div>
      )}
    </div>
  );
}
