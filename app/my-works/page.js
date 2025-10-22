import React from "react";
import Container from "../components/common/container";
import MyWorkData from "./MyWorkData";

// Generate metadata for the page
export async function generateMetadata({ params, searchParams }) {
  return {
    title: "My Works - MERN Stack | Full-Stack | Software Developer",
    description:
      "Explore MVPs & scalable web/mobile apps I've built for coaches, startups, health & wellness, real estate, e-commerce & EdTech using MERN Stack, Next.js & React Native.",
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
    category: "Web Development Portfolio",
    alternates: {
      canonical: "/my-works",
    },
    openGraph: {
      title: "My Works - MERN Stack | Full-Stack | Software Developer",
      description:
        "Explore MVPs & scalable web/mobile apps I've built for coaches, startups, health & wellness, real estate, e-commerce & EdTech using MERN Stack, Next.js & React Native.",
      images: "/og/azmir_og_learg.png",
    },
  };
}

const MyWorks = () => {
  return (
    <section>
      <Container>
        <MyWorkData />
      </Container>
    </section>
  );
};

export default MyWorks;
