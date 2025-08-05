import Image from "next/image";
import React from "react";
import Button from "../../common/button";
import ProjectBody from "./ProjectBody";
import Link from "next/link";
import { PiWarningCircle } from "react-icons/pi";

const Projects = () => {
  return (
    <>
      <div className="py-[100px]">
        <div className="flex items-center justify-between">
          <div className="max-w-[600px]">
            <h4 className="font-primary text-3xl font-bold leading-10 text-black-300">
              Check out some of the projects I've worked on
            </h4>
            <p className="font-primary text-lg font-normal text-black-300 mt-3">
              worked closely with clients to understand their goals and user
              needs, then built full-stack MERN web and cross-platform mobile
              apps that delivered real business value.
            </p>
            <Button
              text="View All Works"
              className="text-white font-primary font-semibold py-3 mt-5 mb-3 hover:bg-transparent border border-black-100 hover:text-black-100 transition-all ease-linear duration-100"
            />
          </div>
          <Image
            src="/assets/project.webp"
            alt="projectIcon"
            width={180}
            height={180}
          />
        </div>
        <ProjectBody />
        <div className="w-full p-3 bg-green-200 mt-8 rounded-lg border-l-3 border-l-green">
          <span className="font-primary text-sm text-green flex gap-x-2">
            <PiWarningCircle size={20} />
            Some of my best MERN and cross-platform projects. Visit my{" "}
            <Link
              href="https://github.com/azmiruddinalif"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold underline"
            >
              GitHub
            </Link>{" "}
            for more.
          </span>
        </div>
      </div>
    </>
  );
};

export default Projects;
