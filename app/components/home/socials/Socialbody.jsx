import React from "react";
import { SocialData } from "./social-data";
import Image from "next/image";

const SocialBody = () => {
  return (
    <>
      <div className="grid lg:grid-cols-3 gap-5 mt-5">
        {SocialData.map((data, index) => {
          return (
            <div
              className="w-full rounded-md bg-white-200 p-10 lg:hover:scale-105 transition-all ease-linear duration-100"
              key={index}
            >
              <Image src={data.image} width={50} height={50} alt="image" />
              <h4 className="font-primary text-[28px] leading-10 text-black-300 font-semibold mt-5">
                {data.title}
              </h4>
              <p className="font-primary text-base text-black-300 font-normal mt-1">
                {data.des}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SocialBody;
