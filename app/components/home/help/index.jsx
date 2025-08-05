import Image from "next/image";
import React from "react";
import Button from "../../common/button";
import HelpBody from "./HelpBody";

const Help = () => {
  return (
    <>
      <div className="py-[140px]">
        <div className="flex items-center gap-x-56">
          <div className="max-w-[600px]">
            <h4 className="font-primary text-3xl font-bold leading-10 text-black-300">
              When I can help?
            </h4>
            <p className="font-primary text-lg font-normal text-black-300 mt-3">
              When you're launching from scratch, scaling fast, or stuck with a
              clunky UI, I jump in with clean code, modern tech, and scalable
              architecture.
            </p>
            <Button
              text="Let's Book For a Free Call"
              className="text-black-100 bg-white font-primary font-semibold py-3 mt-5 mb-3 hover:bg-black border border-black-100 hover:text-white transition-all ease-linear duration-100 "
            />
          </div>
          <Image
            src="/assets/analysis.webp"
            alt="processIcon"
            width={200}
            height={200}
          />
        </div>
        <HelpBody />
      </div>
    </>
  );
};

export default Help;
