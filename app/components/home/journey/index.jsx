import React from "react";
import Container from "../../common/container";
import CarAnimation from "./car-animation";
import Timeline from "./Timeline";
import Image from "next/image";

const Journey = () => {
  return (
    <>
      <div className="bg-white-200 pb-[80px] dark:bg-gray-800/40 dark:backdrop-blur-md">
        <Container>
          <div className="text-center">
            <CarAnimation />
            <div className="-mt-12">
              <h4 className="font-primary text-2xl lg:text-3xl font-bold text-black-300 dark:text-white">
                My Journey as a Full Stack JavaScript Developer
              </h4>
              <p className="mt-2 text-sm lg:text-base font-primary font-normal text-black-400 dark:text-white/70">
                Year-by-year growth in building powerful web and mobile
                applications across modern JavaScript frameworks.
              </p>
            </div>
          </div>
          <Timeline />
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-x-3 w-[60%]">
                <div className="w-[30px] h-[30px] lg:w-[40px] lg:h-[40px] bg-white-300 dark:bg-gray-600 rounded-lg flex items-center justify-center shrink-0">
                  <Image
                    src="/assets/startup.png"
                    alt="icon"
                    width={20}
                    height={20}
                    className="w-4 h-4 dark:invert"
                  />
                </div>
                <span className="font-primary font-normal text-xs lg:text-base text-black-300 dark:text-white-300/80">
                  {" "}
                  Senior Software Developer | CampiX.AI - United States (Remote)
                </span>
              </div>
              <div>
                <span className="font-primary font-normal text-xs lg:text-sm text-black-300 dark:text-white-300/80">
                  July 2025 - Present
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-x-3 w-[60%]">
                <div className="w-[30px] h-[30px] lg:w-[40px] lg:h-[40px] bg-white-300 dark:bg-gray-600 rounded-lg flex items-center justify-center shrink-0">
                  <Image
                    src="/assets/startup.png"
                    alt="icon"
                    width={20}
                    height={20}
                    className="w-4 h-4 dark:invert"
                  />
                </div>
                <span className="font-primary font-normal text-xs lg:text-base text-black-300 dark:text-white-300/80">
                  {" "}
                  Senior Software Developer | StepUp Soft - Germany (Remote)
                </span>
              </div>
              <div>
                <span className="font-primary font-normal text-xs lg:text-sm text-black-300 dark:text-white-300/80">
                  Dec 2023 - June 2025
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-x-3 w-[60%]">
                <div className="w-[30px] h-[30px] lg:w-[40px] lg:h-[40px] bg-white-300 dark:bg-gray-600 rounded-lg flex items-center justify-center shrink-0">
                  <Image
                    src="/assets/startup.png"
                    alt="icon"
                    width={20}
                    height={20}
                    className="w-4 h-4 dark:invert"
                  />
                </div>
                <span className="font-primary font-normal text-xs lg:text-base text-black-300 dark:text-white-300/80">
                  {" "}
                  Senior Full Stack Developer | Created By Cocoon - UK (Remote)
                </span>
              </div>
              <div>
                <span className="font-primary font-normal text-xs lg:text-sm text-black-300 dark:text-white-300/80">
                  Nov 2021 - Dec 2023
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-x-3 w-[60%]">
                <div className="w-[30px] h-[30px] lg:w-[40px] lg:h-[40px] bg-white-300 dark:bg-gray-600 rounded-lg flex items-center justify-center shrink-0">
                  <Image
                    src="/assets/startup.png"
                    alt="icon"
                    width={20}
                    height={20}
                    className="w-4 h-4 dark:invert"
                  />
                </div>
                <span className="font-primary font-normal text-xs lg:text-base text-black-300 dark:text-white-300/80">
                  {" "}
                  Full Stack Developer | Creative Business Group - Bangladesh
                  (On-site)
                </span>
              </div>
              <div>
                <span className="font-primary font-normal text-xs lg:text-sm text-black-300 dark:text-white-300/80">
                  Oct 2020 - Nov 2021
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-x-3 w-[60%]">
                <div className="w-[30px] h-[30px] lg:w-[40px] lg:h-[40px] bg-white-300 dark:bg-gray-600 rounded-lg flex items-center justify-center shrink-0">
                  <Image
                    src="/assets/startup.png"
                    alt="icon"
                    width={20}
                    height={20}
                    className="w-4 h-4 dark:invert"
                  />
                </div>
                <span className="font-primary font-normal text-xs lg:text-base text-black-300 dark:text-white-300/80">
                  {" "}
                  Full Stack Developer | Doatkolom - Bangladesh (Remote)
                </span>
              </div>
              <div>
                <span className="font-primary font-normal text-xs lg:text-sm text-black-300 dark:text-white-300/80">
                  Jan 2018 - Oct 2020
                </span>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Journey;
