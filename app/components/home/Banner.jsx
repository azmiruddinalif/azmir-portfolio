import React from "react";
import Availability from "./availability";
import Image from "next/image";
import Button from "../common/button";
import Coding from "./Coding";

const Banner = () => {
  return (
    <>
      <div className="grid lg:grid-cols-[1.6fr_2fr] items-center">
        <div className="-mt-10 lg:mt-0 order-1 lg:order-[0] text-center lg:text-left">
          <Availability />
          <div className="max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
            <h6 className="font-primary text-sm lg:text-base font-bold text-black-400 my-3">
              👋 Hi! I'm Azmir Uddin Alif & your go-to
            </h6>
            <h1 className="font-primary text-3xl lg:text-4xl font-bold text-black-400">
              MERN Stack Developer
            </h1>
            <p className="font-primary text-black-300 text-sm lg:text-base mt-3">
              For startups to large organizations, transforming complex software
              and application challenges into simple, scalable MERN-based
              solutions.
            </p>
            <div className="mt-4 flex flex-col lg:flex-row items-center gap-x-3">
              <Image
                src="https://cdn.prod.website-files.com/639db6279835785a1ddda5bb/67745bddd340d42d008f0695_Avater%20Group.svg"
                alt="clients"
                width={190}
                height={190}
              />
              <p className="text-black font-primary mt-1 lg:mt-0 text-xs lg:text-sm">
                30+ Happy And Satisfied Clients
              </p>
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-x-2">
              <Button
                text="My Socials"
                className="text-white text-sm lg:text-base font-primary font-semibold py-3 mt-5 mb-3 hover:bg-transparent border border-black-100 hover:text-black-100 transition-all ease-linear duration-100"
              />
              <Button
                text="Hire Me"
                className="text-black-100 text-sm lg:text-base bg-white font-primary font-semibold py-3 mt-5 mb-3 hover:bg-black border border-black-100 hover:text-white transition-all ease-linear duration-100 "
              />
            </div>
            <span className="font-primary text-sm font-normal text-black-400">
              I work independently, offering exceptional value and quality in my
              services.
            </span>
          </div>
        </div>
        <div className="mt-5 lg:mt-0">
          <Coding />
        </div>
      </div>
    </>
  );
};

export default Banner;
