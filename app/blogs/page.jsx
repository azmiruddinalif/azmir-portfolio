import React from "react";
import Container from "../components/common/container";
import BlogHeader from "../components/blogs/BlogHeader";
import BlogRight from "../components/blogs/BlogRight";
import { getBaseUrl } from "../lib/getBaseUrl";
import BlogsCard from "../components/blogs/BlogsCard";
import ReusableButton from "../components/common/HireOrContact";

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

async function getBlogs() {
  const baseUrl = await getBaseUrl();
  const res = await fetch(`${baseUrl}/api/blogs`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch blogs");
  return res.json();
}

export default async function Blogs() {
  const { data } = await getBlogs();

  return (
    <>
      <main className="min-h-screen py-12 sm:py-16 mt-20 sm:mt-28 lg:mt-32 ">
        {/* Decorative background elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-30 dark:opacity-20">
          <div className="absolute top-20 right-10 w-72 h-72 bg-orange-200 dark:bg-orange-900 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-72 h-72 bg-pink-200 dark:bg-pink-900 rounded-full blur-3xl"></div>
        </div>

        <Container>
          <BlogHeader />
          <div className="mt-12 lg:mt-16 lg:grid lg:grid-cols-[2fr_1fr] lg:gap-x-8 xl:gap-x-12 relative">
            <BlogsCard blogs={data} />
            <BlogRight />
          </div>

          {/* Enhanced CTA Section */}
          <div className="relative mt-16 lg:mt-24 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-pink-500/10 to-orange-500/10 dark:from-orange-500/20 dark:via-pink-500/20 dark:to-orange-500/20 rounded-2xl blur-xl"></div>
            <div className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 sm:p-10 lg:p-12 text-center shadow-xl ring-1 ring-gray-200/50 dark:ring-gray-800/50">
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
                  className="group relative overflow-hidden text-white bg-gradient-to-r from-primary-400 to-primary-500 font-primary font-semibold py-3 sm:py-4 px-8 sm:px-10 rounded-md transition-all ease-out duration-300 "
                />

                <ReusableButton
                  href="/contact"
                  ariaLabel="Contact azmir"
                  text="Contact Me"
                  className="text-orange dark:text-orange-400 font-primary font-semibold py-3 sm:py-4 px-10 sm:px-14 border-2 border-primary-500 dark:border-orange-500 hover:bg-primary-500 dark:hover:bg-primary-500 hover:text-white transition-all ease-out duration-300 rounded-md"
                />
              </div>
            </div>
          </div>
        </Container>
      </main>
    </>
  );
}
