"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { BsBoxArrowInUpRight } from "react-icons/bs";
import Button from "../components/common/button";
import Projects from "./Projects";
import { WorkData } from "./workdata";

const MyWorkData = () => {
  const router = useRouter();

  const handleRedirect = () => {
    router.push("https://github.com/azmiruddinalif");
  };

  const handleProjectClick = (slug) => {
    console.log(slug);

    router.push(`/my-work/${slug}`);
  };

  return (
    <>
      <div className="my-28 lg:my-[200px] cursor-pointer" role="button">
        <div className="order-1 lg:order-[0] text-center lg:text-left flex justify-between">
          <div className="w-full flex flex-col lg:flex-row items-center justify-between">
            <div className="max-w-[550px] order-1 lg:order-[0] text-center lg:text-left">
              <h4 className="font-primary text-xl text-black-200 font-bold dark:text-white/70">
                👑My Projects
              </h4>
              <h1 className="font-primary text-5xl font-bold text-black-200 mt-2 dark:text-white">
                Things I’ve Built
              </h1>
              <p className="max-w-[500px] mt-3 text-black-300 font-primary dark:text-white/70">
                As a MERN stack developer, I merge technical skill with UX
                design to build seamless, user-centered digital experiences.
              </p>
              <Button
                onClick={handleRedirect}
                text="Visit My GitHub"
                className="text-white lg:mx-0 mx-auto text-sm lg:text-base bg-orange font-primary font-semibold border py-3 mt-5 mb-3 hover:bg-transparent border-orange hover:text-orange transition-all ease-linear duration-100 "
                icon={<BsBoxArrowInUpRight />}
              />
            </div>
            <Image
              src="/assets/process.svg"
              alt="processIcon"
              width={200}
              height={200}
              loading="lazy"
              className="dark:invert"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/w8AAgMBgA1bK9cAAAAASUVORK5CYII="
            />
          </div>
        </div>
        <div className="mt-20">
          {WorkData.map((project, idx) => (
            <div
              key={idx}
              onClick={() => handleProjectClick(project.slug)}
              className="mb-10 border-b border-b-white-100 dark:border-b-white-300/10 last:border-b-transparent pb-10"
            >
              <Projects
                title={project.title}
                clientName={project.clientName}
                category={project.category}
                image={project.image}
                link={project.link}
                description={project.description}
                clientLogo={project.clientLogo}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MyWorkData;
