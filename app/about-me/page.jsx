import React from "react";
import Image from "next/image";
import Container from "../components/common/container";
import Link from "next/link";
import { aboutCards } from "./aboutCards";
import Button from "../components/common/button";
import ServiceCards from "./ServiceCards";

export async function generateMetadata({ params, searchParams }) {
  return {
    title: "Azmir - MERN Stack | Full-Stack | Software Developer",
    description:
      "Building high-performance Web & Mobile Apps with MERN Stack, Next.js & React Native.",
    openGraph: {
      title: "About Me - Azmir Uddin Alif | MERN Stack Developer",
      description:
        "Learn about my journey, skills, and experience as a MERN Stack & Full-Stack Developer building solutions for startups and businesses.",
      images: [
        {
          url: "/og/azmir_og_learg.png",
          width: 1200,
          height: 630,
          alt: "About Azmir Uddin Alif - MERN Stack & Full-Stack Developer",
        },
      ],
      siteName: "Azmir Uddin Alif",
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "About Me - Azmir Uddin Alif | MERN Stack Developer",
      description:
        "Learn about my journey, skills, and experience as a MERN Stack & Full-Stack Developer",
      images: ["/og/azmir_og_learg.png"],
      creator: "@azmiruddinalif",
    },
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
    category: "About Me & Developer Profile",
    alternates: {
      canonical: "/about-me",
    },
  };
}

const About = () => {
  return (
    <div className="mt-42">
      {/* Hero Section */}
      <section>
        <div className="text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-black dark:text-white">
            About Me
          </h1>
          <p className="text-xl md:text-2xl opacity-90 text-black dark:text-white">
            Passionate Developer | Problem Solver | Tech Enthusiast
          </p>
        </div>
      </section>

      {/* Main Content */}
      <Container>
        <section className="mx-auto px-4 py-16">
          {/* Introduction */}
          {/* Achievements Timeline */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center dark:text-white">
              Who I Am
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6 dark:text-white/85">
              Since stepping into web and app development, I’ve realized it’s never just about writing code. It’s about turning raw ideas into real, scalable products that actually move businesses forward.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6 dark:text-white/85">
              With 6+ years of hands-on experience, I’ve built and scaled digital products across startups and growing platforms. As a Full-Stack Developer specializing in MERN, Next.js, React Native, and Node.js, I focus on performance, scalability, and building systems that don’t break when growth hits.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-12 dark:text-white/85">
              Here’s how that journey unfolded:
            </p>

            <p className="text-lg text-gray-600 leading-relaxed dark:text-white/85 mb-12">
              <strong>2017:</strong> Built my first MVP, transforming a simple manual workflow into a functional product that proved early traction and secured initial funding.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed dark:text-white/85 mb-12">
              <strong>2018:</strong> Developed a React Native mobile app that streamlined operations, reduced manual workload significantly, and improved user engagement.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed dark:text-white/85 mb-12">
              <strong>2019:</strong> Architected a Node.js + MongoDB backend capable of handling 3x traffic spikes with zero downtime during peak demand.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed dark:text-white/85 mb-12">
              <strong>2020:</strong> Re-engineered a failing SaaS platform into a stable system supporting thousands of daily users without crashes.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed dark:text-white/85 mb-12">
              <strong>2021:</strong> Scaled a SaaS product from early-stage usage to high user volume with cost-efficient infrastructure and optimized performance.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed dark:text-white/85 mb-12">
              <strong>2022:</strong> Built a high-throughput backend system handling thousands of daily transactions, ensuring reliability under pressure.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed dark:text-white/85 mb-12">
              <strong>2023:</strong> Delivered a complete MVP within tight timelines, validating product-market fit and attracting early traction.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed dark:text-white/85 mb-12">
              <strong>2024:</strong> Transformed a slow, outdated system into a modern, high-performance platform with significantly improved load times and user experience.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed dark:text-white/85 mb-12">
              <strong>Present:</strong> Building and optimizing large-scale applications using Next.js, focusing on performance techniques like lazy loading, code splitting, and efficient data handling to ensure long-term scalability.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed dark:text-white/85 mb-12">
              What this really comes down to: solving real problems with clean architecture, efficient systems, and thoughtful execution.
            </p>

            <p className="text-xl text-gray-800 font-bold leading-relaxed mb-12 dark:text-white/90">
              I build fast. I build scalable. I build for growth.
            </p>
          </div>

          {/* Image Grid Section */}
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto mb-20">
            {aboutCards.map((card) => (
              <div
                key={card.id}
                className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition hover:scale-105 duration-300 dark:bg-gray-800/40 dark:backdrop-blur-md"
              >
                <Link href={card.link} className="block">
                  <div className="relative h-80">
                    <Image
                      src={card.image}
                      alt={card.alt}
                      fill
                      className="object-cover"
                      placeholder="blur"
                      loading="lazy"
                      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/w8AAgMBgA1bK9cAAAAASUVORK5CYII="
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-3 hover:text-orange transition dark:text-white">
                      {card.title}
                    </h3>
                    <p className="text-gray-600 mb-4 dark:text-white/80">
                      {card.description}
                    </p>
                    <span className="inline-block text-orange font-semibold hover:underline">
                      {card.linkText}
                    </span>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* Skills Section */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-gray-800 mb-10 text-center dark:text-white">
              What I Do
            </h2>
            <ServiceCards />
          </div>

          {/* Call to Action */}
          <div className="mt-12 text-center">
            <div className="rounded-2xl p-8 border border-black-800 dark:border-white/10">
              <h3 className="text-xl font-bold text-gray-800 mb-4 dark:text-white">
                Have a projects in mind?
              </h3>
              <p className="text-gray-600 mb-6 dark:text-white">
                Interested in collaborating or have a project in mind? I'd love
                to hear from you!
              </p>
              <div className="flex gap-4 justify-center">
                <Link href="mailto:alifazmiruddin@gmail.com">
                  <Button
                    text="Contact Me"
                    className="text-white font-primary font-normal py-3 mt-5 mb-3 mx-auto hover:bg-transparent border border-orange hover:text-orange transition-all ease-linear duration-100"
                  />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default About;
