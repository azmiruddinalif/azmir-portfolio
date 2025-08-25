"use client";
import React, { useState } from "react";
import Container from "../../common/container";
import TabIndex from "./tabs-index";
import Skills from "./skills";
import Image from "next/image";

const MySkills = () => {
  const [activeTab, setActiveTab] = useState("frontend");

  return (
    <section className="py-20 bg-white-200 dark:bg-gray-800/40 relative overflow-hidden">
      <Container>
        <div className="lg:max-w-7xl mx-auto">
          {/* Hero Header */}
          <div className="text-center mb-16">
            <div className="inline-block relative">
              <h4 className="font-primary text-2xl lg:text-3xl font-bold lg:leading-10 text-black-300 dark:text-white">
                My Skills
              </h4>
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-orange to-transparent"></div>
            </div>
            <p className="font-primary text-sm lg:text-lg font-normal text-black-300 mt-5 dark:text-white/70">
              Crafting digital experiences with cutting-edge technologies
            </p>
          </div>

          {/* Main Content Area */}
          <div className="relative">
            {/* Floating Tab Navigation */}
            <div className="flex justify-center lg:mb-12">
              <TabIndex activeTab={activeTab} setActiveTab={setActiveTab} />
            </div>

            {/* Skills Showcase */}
            <div className="relative">
              {/* Content */}
              <div className="relative z-10 p-8 lg:p-12">
                <Skills activeTab={activeTab} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default MySkills;
