"use client";
import React, { useState } from "react";
import Container from "../../common/container";
import TabIndex from "./tabs-index";
import Skills from "./skills";
import dynamic from "next/dynamic";
import Link from "next/link";
import Button from "../../common/button";
import Image from "next/image";
const Player = dynamic(
  () => import("@lottiefiles/react-lottie-player").then((mod) => mod.Player),
  {
    ssr: false,
  }
);

const MySkills = () => {
  const [activeTab, setActiveTab] = useState("frontend");

  return (
    <section className="py-12 bg-white-200 dark:bg-gray-800/40 dark:backdrop-blur-md">
      <Container>
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="max-w-[500px] order-1 lg:order-[0] text-center lg:text-left">
            <h4 className="font-primary text-2xl lg:text-3xl font-bold lg:leading-10 text-black-300 dark:text-white">
              All over my skills find here
            </h4>
            <p className="font-primary text-sm lg:text-lg font-normal text-black-300 mt-3 dark:text-white/70">
              I create modern, user-friendly digital experiences that combine
              creativity, performance, and scalability
            </p>
          </div>
          <Image
            src="/assets/skills.png"
            alt="workIcon"
            width={100}
            height={100}
            className="dark:invert"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_3.5fr] gap-x-12 mt-12">
          <div>
            <TabIndex activeTab={activeTab} setActiveTab={setActiveTab} />
          </div>
          <div>
            <Skills activeTab={activeTab} />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default MySkills;
