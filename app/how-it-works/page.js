import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "../components/common/button";

const howItWorksData = [
  {
    type: "message",
    from: "Azmir",
    content: "Hi, I'm Azmir, your MERN Stack & Full-Stack developer.",
  },
  {
    type: "message",
    from: "Azmir",
    content:
      "With over 6.5 years of experience in building scalable web & mobile applications, I’ve delivered projects for startups, entrepreneurs, and businesses worldwide.",
  },
  {
    type: "message",
    from: "Azmir",
    content:
      "I give full attention to your project, direct collaboration, and ensure high-quality code and UI/UX.",
  },
  {
    type: "message",
    from: "You",
    content: "Sounds good. What technologies do you use?",
  },
  {
    type: "message",
    from: "Azmir",
    content:
      "React, Next.js, Node.js, Express, MongoDB, PostgreSQL, Tailwind CSS, Material UI, React Native, Expo, PWA, and more.",
  },
  {
    type: "message",
    from: "You",
    content: "How does your process work?",
  },
  {
    type: "message",
    from: "Azmir",
    content:
      "Simple. After you reach out, I’ll invite you to connect via Slack or Email. You can submit your project requirements and designs. I provide regular updates with iterations.",
  },
  {
    type: "message",
    from: "Azmir",
    content:
      "No contracts, no unnecessary calls. Work asynchronously if you prefer. You can pause or continue anytime.",
  },
  {
    type: "message",
    from: "You",
    content: "And if I don’t like the work?",
  },
  {
    type: "message",
    from: "Azmir",
    content:
      "I revise until it matches your expectations. I rarely miss the mark.",
  },
  {
    type: "message",
    from: "You",
    content: "Who do you usually work with?",
  },
  {
    type: "message",
    from: "Azmir",
    content:
      "Startups, solo founders, and anyone wanting to build scalable web/mobile products.",
  },
  // Client message: "What's next?" on right side
  {
    type: "message",
    from: "You",
    content: "What's next?",
  },
  // Azmir's reply
  {
    type: "message",
    from: "Azmir",
    content: "Let's have a meeting and discuss your project in detail.",
  },
  // CTA button
  {
    type: "cta",
    title: "Hire & Book a Call",
    href: "/meeting/azmir",
  },
];

export async function generateMetadata({ params, searchParams }) {
  return {
    title: "How it works - MERN Stack & Full-Stack Developer Portfolio",
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
    category: "portfolio",
    alternates: {
      canonical: "/my-works",
    },
  };
}

const HowItWorks = () => {
  return (
    <div className="max-w-6xl mx-auto p-5 mt-30">
      <div className="flex flex-col lg:flex-row items-center justify-between mb-20">
        <div className="max-w-[600px] order-1 lg:order-[0] text-center lg:text-left">
          <h4 className="font-primary text-sm font-medium text-black-300 my-3 dark:text-white-200">
            💚 Trust The Process
          </h4>
          <h1 className="text-4xl font-bold mb-2 font-primary text-black-300 my-2 dark:text-white">
            How I Work?
          </h1>
          <p className="text-gray-600 font-primary text-lg dark:text-white-300/80">
            Learn about my development process and how I deliver scalable web
            and mobile solutions.
          </p>
          <Link href="/meeting/azmir" target="_blank">
            <Button
              text="Hire Me"
              className="text-white font-primary lg:mx-0 mx-auto text-sm lg:text-base font-semibold py-3 mt-5 mb-3 hover:bg-transparent border border-orange hover:text-orange transition-all ease-linear duration-100"
            />
          </Link>
        </div>
        <Image src="/assets/chat.svg" alt="plans" width={100} height={100} />
      </div>

      <div className="flex flex-col gap-6">
        {howItWorksData.map((item, index) => {
          if (item.type === "message") {
            const isAzmir = item.from === "Azmir";

            return (
              <div
                key={index}
                className={`flex ${isAzmir ? "justify-start" : "justify-end"}`}
              >
                {/* Azmir's Messages */}
                {isAzmir && (
                  <div className="flex items-start gap-3">
                    <Image
                      src="/assets/azmir-avatar.jpg"
                      alt="Azmir"
                      width={40}
                      height={40}
                      className="rounded-full object-cover w-10 h-10 shrink-0"
                    />
                    <div className="relative max-w-[70%]">
                      <div className="p-4 rounded-lg bg-gray-100 text-black font-primary text-blac">
                        {item.content}
                      </div>
                      <div className="absolute left-[-6px] top-4 w-0 h-0 border-t-6 border-b-6 border-r-6 border-t-transparent border-b-transparent border-r-gray-100"></div>
                    </div>
                  </div>
                )}

                {/* Client/User Messages with static avatar */}
                {!isAzmir && (
                  <div className="flex items-start gap-3 justify-end">
                    {/* Chat bubble */}
                    <div className="relative max-w-[70%] order-1">
                      <div className="p-4 rounded-lg bg-black text-white">
                        {item.content}
                      </div>
                      {/* Arrow pointing right (toward avatar) */}
                      <div className="absolute right-[-6px] top-4 w-0 h-0 border-t-6 border-b-6 border-l-6 border-t-transparent border-b-transparent border-l-black"></div>
                    </div>

                    {/* Black & white div avatar with "You" */}
                    <div className="rounded-full w-10 h-10 shrink-0 flex items-center justify-center bg-black text-white font-semibold order-2">
                      You
                    </div>
                  </div>
                )}
              </div>
            );
          } else if (item.type === "cta") {
            return (
              <div key={index} className="flex justify-center mt-6">
                <Link href="/meeting/azmir" target="_blank">
                  <Button
                    text="Let's Book For a Free Call"
                    className="text-white font-primary lg:mx-0 mx-auto text-sm lg:text-base font-semibold py-3 mt-5 mb-3 hover:bg-transparent border border-orange hover:text-orange transition-all ease-linear duration-100"
                  />
                </Link>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default HowItWorks;
