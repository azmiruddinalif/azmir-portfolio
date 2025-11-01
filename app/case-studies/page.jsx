import React from "react";
import Container from "../components/common/container";
import MyCaseStudies from "./MyCaseStudies";

const CaseStudies = () => {
  return (
    <section>
      <Container>
        <MyCaseStudies />
      </Container>
    </section>
  );
};

export default CaseStudies;

// generate meta data
export async function generateMetadata({ params, searchParams }) {
  return {
    title: "Case Studies - Azmir - MERN Stack | Next.js | Full-Stack Developer",
    description:
      "Dive into real-world case studies of scalable web and mobile applications built with the MERN stack, Next.js, and React Native. Explore how I help startups, agencies, and founders transform ideas into user-focused digital products that scale.",
    keywords: [
      "MERN stack case studies",
      "Next.js projects",
      "React Native apps",
      "web app development",
      "mobile app development",
      "startup case studies",
      "software development portfolio",
      "real-world web projects",
      "scalable applications",
      "product development",
      "Node.js backend",
      "Express.js API",
      "MongoDB architecture",
      "React front-end design",
      "UX-driven development",
      "business automation",
      "healthcare software",
      "SaaS solutions",
      "AI integration projects",
      "digital transformation",
    ],
    robots: {
      index: true,
      follow: true,
    },
    authors: [{ name: "Azmir Uddin Alif - MERN Stack & Full-Stack Developer" }],
    category: "Case Studies | Portfolio | Web & Mobile Development",
    alternates: {
      canonical: "/case-studies",
    },
    openGraph: {
      title: "Case Studies - MERN Stack | Next.js | Full-Stack Developer",
      description:
        "Explore real client projects — from SaaS platforms to AI-driven applications — built with the MERN stack, Next.js, and React Native.",
      images: [
        {
          url: "/og/azmir_case_studies_og.png",
          width: 1200,
          height: 630,
          alt: "Case Studies - Azmir Uddin Alif’s Development Portfolio",
        },
      ],
      siteName: "Azmir Uddin Alif",
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Case Studies - MERN Stack | Full-Stack Developer",
      description:
        "Real-world client projects showcasing scalable web & mobile app development with the MERN Stack, Next.js, and React Native.",
      images: ["/og/azmir_case_studies_og.png"],
      creator: "@azmiruddinalif",
    },
  };
}
