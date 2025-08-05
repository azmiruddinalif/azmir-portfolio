import React from "react";
import Container from "../../common/container";
import CarAnimation from "./car-animation";
import Timeline from "./Timeline";
import Image from "next/image";

const Journey = () => {
  return (
    <>
      <div className="bg-white-200 pb-[80px]">
        <Container>
          <div className="text-center">
            <CarAnimation />
            <div className="-mt-12">
              <h4 className="font-primary text-3xl font-bold text-black-300">
                My Journey as a Full Stack JavaScript Developer
              </h4>
              <p className="mt-2 text-base font-primary font-normal text-black-400">
                Year-by-year growth in building powerful web and mobile
                applications across modern JavaScript frameworks.
              </p>
            </div>
          </div>
          <Timeline />
          <div>
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-x-3 w-[60%]">
                <div className="w-[40px] h-[40px] bg-white-300 rounded-lg flex items-center justify-center shrink-0">
                  <Image
                    src="/assets/startup.png"
                    alt="icon"
                    width={20}
                    height={20}
                  />
                </div>
                <span className="font-primary font-normal text-black-300">
                  {" "}
                  Senior Software Developer | CampiX.AI - United States (Remote)
                </span>
              </div>
              <div>
                <span className="font-primary font-normal text-sm text-black-300">
                  July 2025 - Present
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-x-3 w-[60%]">
                <div className="w-[40px] h-[40px] bg-white-300 rounded-lg flex items-center justify-center shrink-0">
                  <Image
                    src="/assets/startup.png"
                    alt="icon"
                    width={20}
                    height={20}
                  />
                </div>
                <span className="font-primary font-normal text-black-300">
                  {" "}
                  Senior Software Developer | StepUp Soft - Germany (Remote)
                </span>
              </div>
              <div>
                <span className="font-primary font-normal text-sm text-black-300">
                  Dec 2023 - June 2025
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-x-3 w-[60%]">
                <div className="w-[40px] h-[40px] bg-white-300 rounded-lg flex items-center justify-center shrink-0">
                  <Image
                    src="/assets/startup.png"
                    alt="icon"
                    width={20}
                    height={20}
                  />
                </div>
                <span className="font-primary font-normal text-black-300">
                  {" "}
                  Senior Full Stack Developer | Created By Cocoon - UK (Remote)
                </span>
              </div>
              <div>
                <span className="font-primary font-normal text-sm text-black-300">
                  November 2021 - December 2023
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-x-3 w-[60%]">
                <div className="w-[40px] h-[40px] bg-white-300 rounded-lg flex items-center justify-center shrink-0">
                  <Image
                    src="/assets/startup.png"
                    alt="icon"
                    width={20}
                    height={20}
                  />
                </div>
                <span className="font-primary font-normal text-black-300">
                  {" "}
                  Full Stack Developer | Creative Business Group - Bangladesh
                  (On-site)
                </span>
              </div>
              <div>
                <span className="font-primary font-normal text-sm text-black-300">
                  October 2020 - November 2021
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-x-3 w-[60%]">
                <div className="w-[40px] h-[40px] bg-white-300 rounded-lg flex items-center justify-center shrink-0">
                  <Image
                    src="/assets/startup.png"
                    alt="icon"
                    width={20}
                    height={20}
                  />
                </div>
                <span className="font-primary font-normal text-black-300">
                  {" "}
                  Full Stack Developer | Doatkolom - Bangladesh (Remote)
                </span>
              </div>
              <div>
                <span className="font-primary font-normal text-sm text-black-300">
                  January 2018 - October 2020
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
