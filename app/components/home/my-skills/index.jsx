"use client";
import React, { useState } from "react";
import Container from "../../common/container";
import TabIndex from "./tabs-index";
import Skills from "./skills";
import dynamic from "next/dynamic";
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
        <div className="text-center mb-12">
          <Player
            autoplay
            loop
            src="/lottie/coding.json"
            style={{ height: "250px", width: "250px" }}
          />
          <h4 className="font-primary text-2xl lg:text-3xl font-bold text-black-300 dark:text-white">
            All over my skills find here
          </h4>
          <p className="mt-2 text-sm lg:text-lg font-primary font-normal text-black-400 dark:text-white/70">
            I create modern, user-friendly digital experiences that combine
            creativity, performance, and scalability
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_3.5fr] gap-x-12">
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
