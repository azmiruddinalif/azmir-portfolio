"use client";
import React from "react";
import Container from "../../common/container";
import { experiences } from "./experience";
import JourneyCard from "./journey-card";

const Journey = () => {
  return (
    <section className="bg-white dark:bg-gray-900 py-20">
      <Container>
        <div className="text-center mb-16">
          <h2 className="font-primary text-3xl font-bold text-gray-900 dark:text-white">
            Professional Journey
          </h2>
          <p className="mt-2 text-sm lg:text-base font-primary font-normal text-black-400 dark:text-white/70 max-w-2xl mx-auto">
            Delivering scalable and high-performance applications across web,
            mobile, and cloud platforms for global clients.
          </p>
        </div>

        <div className="relative space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="md:sticky transition-all duration-300"
              style={{
                top: `${20 + index * 5}vh`,
              }}
            >
              <JourneyCard exp={exp} index={index} isEven={index % 2 === 0} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Journey;
