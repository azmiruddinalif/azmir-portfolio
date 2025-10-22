import React from "react";
import Image from "next/image";
import Container from "../components/common/container";
import Link from "next/link";
import { aboutCards } from "./aboutCards";
import Button from "../components/common/button";

export async function generateMetadata({ params, searchParams }) {
  return {
    title: "Azmir - MERN Stack | Full-Stack | Software Developer",
    description: "Building high-performance Web & Mobile Apps with MERN Stack, Next.js & React Native.",
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
      description: "Learn about my journey, skills, and experience as a MERN Stack & Full-Stack Developer",
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
        <section className="container mx-auto px-4 py-16">
          {/* Introduction */}
          {/* Achievements Timeline */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center dark:text-white">
              Who I Am
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6 dark:text-white/85">
              Since I dove into <b>scalable web & app-building</b>, I’ve
              realized it’s not just about writing code it’s about turning ideas
              into digital experiences that solve real problems and move
              businesses forward. Over the <b>last 6 years</b>, I’ve helped
              startups, small businesses, and growing companies transform their
              challenges into scalable products. Here’s the journey that shaped
              me:
            </p>

            <p className="text-lg text-gray-600 leading-relaxed dark:text-white/85 mb-12">
              <strong>2017:</strong> My first real project came from a local
              barista who managed orders on scraps of paper. I built a simple
              order-tracking web app that automated his daily workflow and
              stored all transactions digitally. That prototype caught the
              attention of a small investor, who backed the café with{" "}
              <strong>$10,000 in funding</strong>. It was my first taste of how
              technology could make a tangible business impact.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed dark:text-white/85 mb-12">
              <strong>2018:</strong> Partnered with an overwhelmed event planner
              struggling to coordinate bookings across multiple platforms. I
              built a cross-platform
              <strong> React Native </strong> app that unified scheduling,
              client tracking, and payments in one dashboard. The tool cut her
              manual workload in half and boosted new sign-ups by{" "}
              <strong>40%</strong>. That year taught me how product thinking and
              empathy can simplify chaos.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed dark:text-white/85 mb-12">
              <strong>2019:</strong> A small boutique in Dhaka faced website
              crashes every holiday season. I engineered a{" "}
              <strong>Node.js + MongoDB</strong> backend optimized for heavy
              concurrent traffic and built a caching layer that handled a{" "}
              <strong>300% surge</strong>
              without downtime. Their online revenue doubled that quarter. That
              was my first deep dive into backend scalability.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed dark:text-white/85 mb-12">
              <strong>2020:</strong> A healthcare startup reached out in panic
              their SaaS platform kept crashing during live patient rollouts. I
              refactored their backend architecture, introduced load balancing,
              and rebuilt the front-end with <strong>React + REST API</strong>
              integration. Within weeks, the system was handling{" "}
              <strong>5,000 daily users</strong>
              with zero downtime. It wasn’t just a technical rescue it restored
              the founder’s trust in technology.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed dark:text-white/85 mb-12">
              <strong>2021:</strong> Worked with a solo tutor running an online
              class business. Her website couldn’t handle user growth. I
              migrated her system to a modular MERN architecture and integrated{" "}
              <strong>low-cost cloud hosting</strong> solutions that scaled
              seamlessly. In six months, she grew from{" "}
              <strong>50 to 10,000 users</strong>, generating stable recurring
              income for her family.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed dark:text-white/85 mb-12">
              <strong>2022:</strong> A food delivery startup was days away from
              pitching investors when their backend couldn’t handle concurrent
              orders. I designed a
              <strong> transaction-safe Express API </strong> with rate limiting
              and optimized MongoDB indexes, enabling{" "}
              <strong>10,000+ transactions daily</strong>. That technical
              reliability helped them secure a{" "}
              <strong>$50,000 investment</strong>.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed dark:text-white/85 mb-12">
              <strong>2023:</strong> A university graduate approached me to
              bring his fitness idea to life but he had almost no budget. I
              built an MVP using <strong>Next.js and Firebase</strong>
              in just six weeks, focusing on core features and clean UX. Within
              the first month, the app gained <strong>200 users</strong> and
              attracted early investor interest. That experience reminded me how
              far lean, focused execution can go.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed dark:text-white/85 mb-12">
              <strong>2024:</strong> A family-run bookstore’s website was slow
              and outdated. I completely rebuilt it using{" "}
              <strong>Next.js, Tailwind, and Strapi</strong> as a headless CMS.
              The new version served <strong>1,000+ daily users</strong> with{" "}
              <strong>50% faster load times</strong>
              and integrated analytics that doubled online sales in three
              months.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed dark:text-white/85 mb-12">
              <strong>Present:</strong> Currently partnering with a global
              marketing agency to upgrade their SaaS using{" "}
              <strong>Next.js 14</strong> and advanced performance optimizations
              like lazy loading, caching, and API revalidation. The system now
              supports <strong>15,000+ users</strong> and scales automatically
              with demand. My focus is on making it future-ready and lightning
              fast.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed dark:text-white/85 mb-12">
              Development, to me, is not about writing features it’s about
              creating tools that make people’s lives easier. Every project
              pushes me to think deeper, learn faster, and build better. If
              you’re building something meaningful, let’s create it together.
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
          <div className="max-w-4xl mx-auto mb-20">
            <h2 className="text-4xl font-bold text-gray-800 mb-10 text-center dark:text-white">
              What I Do
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Web Development */}
              <div className="bg-white p-6 rounded-xl shadow-lg text-center dark:bg-gray-800/40 dark:backdrop:blur-md">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">💻</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 dark:text-white">
                  Web Development
                </h3>
                <p className="text-gray-600 dark:text-white/50">
                  Building responsive and modern web applications using MERN
                  Stack and Next.js
                </p>
              </div>

              {/* Full-Stack Development */}
              <div className="bg-white p-6 rounded-xl shadow-lg text-center dark:bg-gray-800/40 dark:backdrop:blur-md">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🧩</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 dark:text-white">
                  Full-Stack Development
                </h3>
                <p className="text-gray-600 dark:text-white/50">
                  Developing complete web and mobile app ecosystems with React,
                  Node.js, Express, and MongoDB
                </p>
              </div>

              {/* Performance Optimization */}
              <div className="bg-white p-6 rounded-xl shadow-lg text-center dark:bg-gray-800/40 dark:backdrop:blur-md">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">⚡</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 dark:text-white">
                  Performance Optimization
                </h3>
                <p className="text-gray-600 dark:text-white/50">
                  Optimizing code, APIs, and databases for speed, scalability,
                  and seamless user experience
                </p>
              </div>
            </div>
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
