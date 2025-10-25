import React from "react";
import Container from "../components/common/container";
import BlogHeader from "../components/blogs/BlogHeader";
import BlogRight from "../components/blogs/BlogRight";
import { getBaseUrl } from "../lib/getBaseUrl";
import BlogsCard from "../components/blogs/BlogsCard";

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
      <main className="min-h-screen py-16 mt-32">
        <Container>
          <BlogHeader />
          <div className="mt-22 lg:grid lg:grid-cols-[3fr_1fr] lg:gap-x-6">
            <BlogsCard blogs={data} />
            <BlogRight />
          </div>
        </Container>
      </main>
    </>
  );
}
