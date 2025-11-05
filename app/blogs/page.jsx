import React from "react";
import Container from "../components/common/container";
import BlogHeader from "../components/blogs/BlogHeader";
import BlogRight from "../components/blogs/BlogRight";
import BlogsCard from "../components/blogs/BlogsCard";
import ReusableButton from "../components/common/HireOrContact";
import { fetchBlogs } from "../lib/fetchBlogs";

export const revalidate = 3600;

export default async function Blogs() {
  const { data } = await fetchBlogs();

  return (
    <main className="min-h-screen py-12 sm:py-16 mt-20 sm:mt-28 lg:mt-32">
      <Container>
        <BlogHeader />
        <div className="mt-12 lg:mt-16 lg:grid lg:grid-cols-[2fr_1fr] lg:gap-x-8 xl:gap-x-12 relative">
          <BlogsCard blogs={data} />
          <BlogRight />
        </div>

        <div className="relative mt-16 lg:mt-24 overflow-hidden rounded-2xl bg-white-200 dark:bg-gray-800 dark:backdrop-blur-md">
          <div className="relative p-8 sm:p-10 lg:p-12 text-center shadow-xl ring-1 ring-gray-200/50 dark:ring-gray-800/50">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary-400 to-primary-500 mb-6 shadow-lg">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-primary bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent mb-4">
              Ready to Get Started?
            </h3>

            <p className="text-gray-600 dark:text-gray-300 font-primary text-base sm:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              Let's discuss your project and see how I can help you build
              something amazing. Book a free consultation to get started.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <ReusableButton
                href="/meeting/azmir"
                ariaLabel="Book Free Call azmir"
                text="Book Free Call"
                className="text-orange dark:text-orange-400 font-primary font-semibold py-3 sm:py-4 px-10 sm:px-14 border-2 border-primary-500 dark:border-primary-500 hover:bg-primary-500 dark:hover:bg-primary-500 hover:text-white transition-all ease-out duration-300 rounded-md"
              />

              <ReusableButton
                href="/contact"
                ariaLabel="Contact azmir"
                text="Contact Me"
                className="text-orange dark:text-orange-400 font-primary font-semibold py-3 sm:py-4 px-10 sm:px-14 border-2 border-primary-500 dark:border-primary-500 hover:bg-primary-500 dark:hover:bg-primary-500 hover:text-white transition-all ease-out duration-300 rounded-md"
              />
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}

export async function generateMetadata({ params, searchParams }) {
  return {
    title: "Blogs - MERN Stack | Full-Stack | Software Developer",
    description:
      "Building high-performance Web & Mobile Apps with MERN Stack, Next.js & React Native.",
    keywords: [
      "MERN Stack developer",
      "Next.js developer",
      "React Native developer",
      "MVP development",
      "scalable web apps",
      "mobile app development",
      "startup development",
      "e-commerce development",
      "health wellness apps",
      "real estate apps",
      "EdTech solutions",
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "NestJS",
      "PostgreSQL",
      "Firebase",
      "REST API",
      "GraphQL",
      "Figma to code",
      "game developer",
    ],
    robots: {
      index: true,
      follow: true,
    },
    authors: [{ name: "Azmir - MERN Stack & Full-Stack JavaScript Developer" }],
    category: "Blogs & Case Study",
    alternates: {
      canonical: "/blogs",
    },
    openGraph: {
      title: "Blogs - MERN Stack | Full-Stack | Software Developer",
      description:
        "Building scalable Web & Mobile Apps for Coaches, Startups, Health, Real Estate & EdTech using MERN Stack, Next.js & React Native.",
      images: [
        {
          url: "/og/azmir_og_learg.png",
          width: 1200,
          height: 630,
          alt: "Azmir - MERN Stack & Full-Stack Developer",
        },
      ],
      siteName: "Azmir Uddin Alif",
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Blogs - MERN Stack | Full-Stack | Software Developer",
      description:
        "Contact me for scalable web and mobile app development services",
      images: ["/og/azmir_og_learg.png"],
      creator: "@azmiruddinalif",
    },
  };
}
