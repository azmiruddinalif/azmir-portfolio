import React from "react";
import { skillsData } from "./skills-data";
import Image from "next/image";

const Skills = ({ activeTab }) => {
  return (
    <div className="space-y-8">
      {/* Category Title */}
      {/* <div className="text-center">
        <h3 className="text-xl lg:text-3xl font-primary font-bold text-black-300 dark:text-white capitalize mb-2">
          {activeTab} Technologies
        </h3>
        <div className="w-16 h-0.5 bg-orange mx-auto"></div>
      </div> */}

      {/* Skills Grid with Masonry Effect */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {skillsData[activeTab].map((skill, index) => (
          <div
            key={skill.name}
            className="group relative"
            style={{
              animationDelay: `${index * 100}ms`,
              animation: "fadeInUp 0.6s ease-out forwards",
              opacity: 0,
            }}
          >
            <div className="relative overflow-hidden bg-white dark:bg-gray-700/40 rounded-2xl p-4 lg:p-6 border border-gray-100 dark:border-gray-600/30 hover:border-orange/30 dark:hover:border-orange/30 transition-all duration-500 hover:shadow-2xl hover:shadow-orange/20 hover:-translate-y-2 group-hover:scale-[1.02]">
              <div className="absolute inset-0 bg-gradient-to-br from-orange/0 via-orange/5 to-orange/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                <div className="relative">
                  <div className="w-14 lg:w-20 h-14 lg:h-20 bg-gradient-to-br from-orange/20 via-orange/10 to-transparent rounded-2xl flex items-center justify-center group-hover:from-orange/30 group-hover:via-orange/20 transition-all duration-500">
                    <Image
                      src={skill.icon}
                      alt={skill.name}
                      width={40}
                      height={40}
                      loading="lazy"
                      className="object-contain dark:invert group-hover:scale-110 transition-transform duration-500"
                      placeholder="blur"
                      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/w8AAgMBgA1bK9cAAAAASUVORK5CYII="
                    />
                  </div>
                </div>
                <div>
                  <h4 className="font-secondary font-medium text-base text-black-300 dark:text-white group-hover:text-orange transition-colors duration-300">
                    {skill.name}
                  </h4>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-orange to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
