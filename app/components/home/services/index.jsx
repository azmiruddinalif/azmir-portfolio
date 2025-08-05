import React from "react";
import Button from "../../common/button";
import Image from "next/image";
import ServiceBody from "./ServiceBody";

const Services = () => {
  return (
    <>
      <div className="py-[140px]">
        <div className="flex items-center justify-between">
          <div className="max-w-[550px]">
            <h4 className="font-primary text-3xl font-bold leading-10 text-black-300">
              Start your journey with me, I’ve expertise in those Services
            </h4>
            <p className="font-primary text-lg font-normal text-black-300 mt-3">
              Skilled in turning ideas into full-stack web and mobile
              applications using modern technologies like React.js, Next.js,
              Node.js, Express, MongoDB, and React Native.
            </p>
            <Button
              text="Let's Book a Free Call"
              className="text-black-100 bg-white font-primary font-semibold py-3 mt-5 mb-3 hover:bg-black border border-black-100 hover:text-white transition-all ease-linear duration-100 "
            />
          </div>
          <Image
            src="/assets/work.webp"
            alt="workIcon"
            width={250}
            height={250}
          />
        </div>
        <div>
          <ServiceBody />
        </div>
      </div>
    </>
  );
};

export default Services;
