import React from "react";
import { SocialData } from "./social-data";
import Image from "next/image";
import Link from "next/link";

const SocialBody = () => {
  return (
    <>
      <div className="grid lg:grid-cols-3 gap-5 mt-5">
        {SocialData.map((data, index) => {
          return (
            <div
              className="w-full rounded-md bg-white-200 p-10 lg:hover:scale-105 transition-all ease-linear duration-100 flex flex-col justify-between"
              key={index}
            >
              <Image src={data.image} width={50} height={50} alt="image" />
              <h4 className="font-primary text-[28px] leading-10 text-black-300 font-semibold mt-5">
                {data.title}
              </h4>
              <p className="font-primary text-base text-black-300 font-normal mt-1 mb-5">
                {data.des}
              </p>
              <Link
                href={data.link}
                className="font-primary text-base text-black-300 font-semibold flex items-center gap-x-2 underline"
              >
                View {data.title}
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SocialBody;
