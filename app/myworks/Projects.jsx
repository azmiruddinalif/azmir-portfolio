import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GoArrowRight } from "react-icons/go";

const Projects = ({
  image,
  link,
  category,
  description,
  clientName,
  title,
  clientLogo,
}) => {
  return (
    <>
      <div className="grid lg:grid-cols-[1fr_1fr] gap-x-12 items-center group transition-transform duration-500 ease-out">
        <div className="rounded-lg overflow-hidden relative">
          <Image
            src={image}
            width={1000}
            height={1000}
            alt="project"
            className="group-hover:scale-110 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out"></div>
        </div>
        <div className="flex flex-col justify-between items-start h-full">
          <div>
            <div className="px-5 py-2 bg-white-200 inline-block rounded-full mb-5 mt-5 lg:mt-0">
              <span className="font-primary text-sm text-black-200 font-semibold">
                {" "}
                {category}
              </span>
            </div>
            <div className="flex items-center justify-between lg:flex-none">
              <h2 className="font-primary text-2xl lg:text-4xl font-bold text-black-200 mb-3">
                {title}
              </h2>
              <Link
                href={link}
                className="flex lg:hidden items-center gap-x-3 font-primary text-base font-semibold text-black-200 hover:underline transition-all duration-300 ease-out"
              >
                {" "}
                {/* Check It Out{" "} */}
                <GoArrowRight
                  color="#000"
                  size={20}
                  className=" transition-transform duration-300 ease-out"
                />
              </Link>
            </div>
            <p className="font-primary text-base font-normal text-black-400 mb-5">
              {description}
            </p>
            <Link
              href={link}
              className="hidden lg:flex items-center gap-x-3 font-primary text-base font-semibold text-black-200 hover:underline transition-all duration-300 ease-out"
            >
              {" "}
              Check It Out <GoArrowRight color="#000" size={20} />
            </Link>
          </div>
          <p className="font-primary text-lg text-black-40 flex items-center gap-x-1">
            Client:
            <Image src={clientLogo} width={30} height={30} alt="logo" />{" "}
            <span className="font-semibold">{clientName}</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Projects;
