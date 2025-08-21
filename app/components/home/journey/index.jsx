"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Container from "../../common/container";
import { experiences } from "./experience";

const Journey = () => {
  useEffect(() => {
    const grid = document.getElementById("experience-grid");
    const slider = document.getElementById("hover-slider");
    const cards = grid.querySelectorAll("[data-index]");

    cards.forEach((card) => {
      card.addEventListener("mouseenter", () => {
        const { offsetTop, offsetLeft, offsetWidth, offsetHeight } = card;
        slider.style.top = `${offsetTop}px`;
        slider.style.left = `${offsetLeft}px`;
        slider.style.width = `${offsetWidth}px`;
        slider.style.height = `${offsetHeight}px`;
        slider.style.opacity = "1";
      });

      card.addEventListener("mouseleave", () => {
        slider.style.opacity = "0";
      });
    });

    return () => {
      cards.forEach((card) => {
        card.replaceWith(card.cloneNode(true));
      });
    };
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 pb-20">
      <Container>
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="font-primary text-2xl lg:text-3xl font-bold text-black-300 dark:text-white text-center">
            Professional Journey
          </h2>
          <p className="mt-2 text-sm lg:text-base font-primary font-normal text-black-400 dark:text-white/70">
            Delivering scalable and high-performance applications across web,
            mobile, and cloud platforms for global clients.
          </p>
        </div>

        {/* Experience Grid */}
        <div className="relative max-w-7xl mx-auto mb-16">
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-0 relative"
            id="experience-grid"
          >
            {/* Hover Slider */}
            <div
              className="absolute top-0 left-0 w-full h-full bg-primary-50 dark:bg-primary-800/50 pointer-events-none transition-all duration-300 opacity-0 z-10"
              id="hover-slider"
            ></div>

            {experiences.map((exp, index) => {
              const isLastCard = index === experiences.length - 1;
              const isEvenIndex = index % 2 === 0;
              const isNotLastTwoCards = index < experiences.length - 2;

              return (
                <div
                  key={index}
                  data-index={index}
                  className={`
                    relative group overflow-hidden
                    bg-white dark:bg-gray-800/40 dark:backdrop-blur-md 
                    border border-gray-200 dark:border-gray-700/50
                    ${isLastCard ? "md:col-span-2" : ""}
                    ${!isLastCard && isEvenIndex ? "md:border-r-0" : ""}
                    ${isNotLastTwoCards ? "border-b-0" : ""}
                    ${isLastCard ? "border-t-0 md:border-t" : ""}
                    hover:shadow-lg dark:hover:shadow-2xl transition-all duration-300
                  `}
                >
                  {/* Card Content */}
                  <div className="p-6 lg:p-8 relative z-10">
                    {/* Company Header */}
                    <div className="flex items-start gap-4 mb-6">
                      {/* Company Logo */}
                      <div className="relative">
                        <div className="w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-700 dark:to-gray-600 rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow duration-300">
                          <Image
                            src={exp.icon}
                            alt={`${exp.company} logo`}
                            width={32}
                            height={32}
                            className="w-8 h-8 lg:w-9 lg:h-9 object-contain dark:brightness-110"
                          />
                        </div>
                        {/* Active indicator for current role */}
                        {index === 0 && (
                          <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-gray-800 shadow-sm"></div>
                        )}
                      </div>

                      {/* Company Details */}
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                          <div>
                            <h3 className="font-primary font-bold text-lg lg:text-xl text-gray-900 dark:text-white leading-tight">
                              {exp.role}
                            </h3>
                            <p className="font-primary font-semibold text-blue-600 dark:text-blue-400 text-base lg:text-lg">
                              {exp.company}
                            </p>
                          </div>
                          <span className="inline-flex items-center px-3 py-1.5 bg-gray-100 dark:bg-gray-700/70 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 shrink-0">
                            {exp.period}
                          </span>
                        </div>
                        <p className="font-primary text-sm lg:text-base text-gray-500 dark:text-gray-400 flex items-center gap-2">
                          <svg
                            className="w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {exp.location}
                        </p>
                      </div>
                    </div>

                    {/* Experience Details */}
                    <div className="space-y-4">
                      <div className="space-y-2">
                        {exp.details.map((detail, detailIndex) => (
                          <div
                            key={detailIndex}
                            className="flex items-start gap-3"
                          >
                            <div className="w-1.5 h-1.5 bg-blue-500 dark:bg-blue-400 rounded-full mt-2.5 shrink-0"></div>
                            <p className="font-primary text-sm lg:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                              {detail}
                            </p>
                          </div>
                        ))}
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="inline-flex items-center px-3 py-1 bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-700/50 rounded-full text-xs lg:text-sm font-medium text-blue-700 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors duration-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Connecting line for attached design */}
                  {!isLastCard && isEvenIndex && (
                    <div className="absolute right-0 top-1/2 transform translate-x-px -translate-y-1/2 w-px h-16 bg-gray-200 dark:bg-gray-700/50 hidden md:block"></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Journey;
