import Image from "next/image";
import React from "react";

const JourneyCard = ({ exp, index, isEven }) => {
  // glossy effect for even cards
  const bgClass = isEven
    ? "bg-[#f2f2f2]/60 backdrop-blur-md dark:bg-gray-800/40 border border-gray-200"
    : "bg-white border border-gray-200 dark:bg-gray-800 dark:backdrop-blur-md";

  return (
    <div
      data-index={index}
      className={`w-full ${bgClass} rounded-xl dark:border-gray-700
              p-5 md:p-8 text-gray-900 dark:text-white transition-all duration-300 hover:scale-[1.01] min-h-[280px]`}
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-4 mb-6">
        <div className="relative">
          <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-xl flex items-center justify-center bg-white/80 dark:bg-white">
            <Image
              src={exp.icon}
              alt={`${exp.company} logo`}
              width={100}
              height={100}
              loading="lazy"
              className="w-10 h-10 object-contain"
            />
          </div>
          {index === 0 && (
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-gray-800"></div>
          )}
        </div>

        <div className="flex-1">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-2">
            <div>
              <h3 className="font-bold text-lg lg:text-xl text-gray-900 dark:text-white">
                {exp.role}
              </h3>
              <p className="font-medium text-gray-600 dark:text-gray-300">
                {exp.company}
              </p>
            </div>
            <span className="inline-flex items-center px-3 py-1.5 bg-gray-200/50 dark:bg-gray-700/70 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300">
              {exp.period}
            </span>
          </div>

          <p className="text-sm lg:text-base text-gray-500 dark:text-gray-400 mt-1 flex items-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
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

      {/* Details */}
      <div className="space-y-3">
        {exp.details.map((detail, i) => (
          <div key={i} className="flex items-start gap-3">
            <div className="w-1.5 h-1.5 bg-orange rounded-full mt-2 shrink-0"></div>
            <p className="text-xs lg:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
              {detail}
            </p>
          </div>
        ))}
      </div>

      {/* Technologies */}
      <div className="flex flex-wrap gap-2 mt-5">
        {exp.technologies.map((tech, i) => (
          <span
            key={i}
            className="px-3 py-1 border border-primary-400 dark:border-gray-500 rounded-full text-xs lg:text-sm font-medium text-gray-600 dark:text-white/80"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default JourneyCard;
