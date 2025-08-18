import React from "react";
import { skillsData } from "./skills-data";
import Image from "next/image";

const Skills = ({ activeTab }) => {
  return (
    <>
      <div className="grid grid-cols-3 lg:grid-cols-4 gap-2">
        {skillsData[activeTab].map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col md:flex-row items-center gap-2 p-4 border rounded-xl"
          >
            <Image
              src={skill.icon}
              alt={skill.name}
              width={100}
              height={100}
              className="w-6 h-6 object-contain"
            />
            <span className="font-bold font-primary text-xs lg:text-sm text-black-300">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </>
  );
};

export default Skills;
