import Image from "next/image";
import React from "react";
import Button from "../../common/button";
import SocialBody from "./Socialbody";

const Socials = () => {
  return (
    <>
      <div className="py-[140px]">
        <div className="flex items-center justify-between">
          <div className="max-w-[600px]">
            <h4 className="font-primary text-3xl font-bold leading-10 text-black-300">
              Follow me on social media to explore my work, get updates, and
              stay in touch!
            </h4>
            <p className="font-primary text-lg font-normal text-black-300 mt-3">
              Follow me on social media for tips, tutorials, project updates,
              and a look behind the scenes of my web development journey.
            </p>
            <Button
              text="Let's Book a Free Call"
              className="text-white font-primary font-semibold py-3 mt-5 mb-3 hover:bg-transparent border border-black-100 hover:text-black-100 transition-all ease-linear duration-100"
            />
          </div>
          <Image
            src="/assets/social.png"
            alt="workIcon"
            width={140}
            height={140}
          />
        </div>
        <div>
          <SocialBody />
        </div>
      </div>
    </>
  );
};

export default Socials;
