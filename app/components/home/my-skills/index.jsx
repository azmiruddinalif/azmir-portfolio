"use client";
import { useState } from "react";
import Container from "../../common/container";
import Skills from "./skills";
import TabIndex from "./tabs-index";

const MySkills = () => {
  const [activeTab, setActiveTab] = useState("frontend");

  return (
    <section className="py-20 bg-white-200 dark:bg-gray-800/40 relative overflow-hidden">
      <Container>
        <div className="lg:max-w-7xl mx-auto">
          {/* Hero Header */}
          <div className="text-center mb-16">
            <div className="inline-block relative">
              <h4 className="font-primary text-2xl lg:text-4xl font-bold lg:leading-10 text-black-300 dark:text-white">
                Things I Do Best
              </h4>
            </div>
            <p className="font-secondary text-sm lg:text-lg font-normal text-black-300 mt-5 dark:text-white/70 max-w-2xl mx-auto">
              I craft digital experiences that blend creativity, performance,
              and the latest technologies built to engage and grow.
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
