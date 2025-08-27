import Image from "next/image";
import Link from "next/link";
import { PiWarningCircle } from "react-icons/pi";
import Button from "../../common/button";
import ProjectBody from "./ProjectBody";

const Projects = () => {
  return (
    <>
      <section className="py-[100px]">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="max-w-[600px] order-1 lg:order-[0] text-center lg:text-left">
            <h4 className="font-primary text-2xl lg:text-3xl font-bold lg:leading-10 text-black-300 dark:text-white">
              Check out some of the projects I've worked on
            </h4>
            <p className="font-primary text-sm lg:text-lg font-normal text-black-300 mt-3 dark:text-white-300/70">
              Built full-stack MERN web and cross-platform mobile apps. Focused
              on client goals, user needs, and real business value.
            </p>
            <Button
              text={<Link href="/my-works">View All Works</Link>}
              className="text-white font-primary text-sm lg:text-base mx-auto lg:mx-0 font-semibold py-3 mt-5 mb-3 hover:bg-transparent border border-orange hover:text-orange transition-all ease-linear duration-100"
            />
          </div>
          <Image
            src="/assets/project.webp"
            alt="projectIcon"
            width={180}
            height={180}
            className="dark:invert"
          />
        </div>
        <ProjectBody />
        <div className="w-full p-3 bg-green-200 mt-8 rounded-lg border-l-3 border-l-green">
          <span className="font-primary text-xs lg:text-sm text-green flex gap-x-2">
            <PiWarningCircle size={20} />
            <span>
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
          </span>
        </div>
      </section>
    </>
  );
};

export default Projects;
