"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GoArrowRight } from "react-icons/go";
import { marked } from "marked";

const CaseStudyCard = ({
  image,
  link,
  category,
  description,
  title,
  clientName,
  clientLogo,
}) => {
  // short preview limit for list page
  const preview =
    description?.length > 300 ? description.slice(0, 300) + "..." : description;

  return (
    <div className="grid lg:grid-cols-[1fr_1fr] gap-x-12 items-center group transition-transform duration-500 ease-out">
      {/* Image Section */}
      <div className="rounded-lg overflow-hidden relative">
        <Image
          src={image}
          width={1000}
          height={1000}
          alt={title || "case study image"}
          className="group-hover:scale-110 transition-transform duration-700 ease-out object-cover"
          placeholder="blur"
          loading="lazy"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/w8AAgMBgA1bK9cAAAAASUVORK5CYII="
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out"></div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col justify-between items-start h-full">
        <div>
          {/* Category */}
          <div className="px-5 py-2 bg-white-200 inline-block rounded-full mb-5 mt-5 lg:mt-0 dark:bg-gray-800/40 dark:backdrop-blur-md">
            <span className="font-secondary text-sm text-black-200 font-medium dark:text-white">
              {category || "Case Study"}
            </span>
          </div>

          {/* Title & Link */}
          <div className="flex items-center justify-between lg:flex-none">
            <h2 className="font-primary text-lg md:text-2xl lg:text-4xl font-bold text-black-200 mb-3 dark:text-white">
              {title}
            </h2>
          </div>

          {/* Rich Text Description */}
          <div
            className="prose prose-sm sm:prose-base lg:prose-lg max-w-none
            text-black-400 dark:text-white/70 font-primary leading-relaxed
            prose-headings:text-black-200 dark:prose-headings:text-white
            prose-strong:text-black-200 dark:prose-strong:text-white
            prose-li:marker:text-orange-500 dark:prose-li:marker:text-orange-400
            prose-a:text-orange-500 hover:prose-a:underline
            dark:prose-a:text-orange-400 transition-all duration-300 ease-out line-clamp-4"
            dangerouslySetInnerHTML={{
              __html: marked.parse(preview || ""),
            }}
          />

          {/* Desktop CTA */}
        </div>
        <Link
          href={link}
          className="flex items-center gap-x-3 font-secondary text-sm lg:text-base font-medium text-black-200 hover:underline transition-all duration-300 ease-out dark:text-white/70 mt-4"
        >
          Read Case Study <GoArrowRight color="currentColor" size={20} />
        </Link>
      </div>
    </div>
  );
};

export default CaseStudyCard;
