import React from "react";
import { ServiceData } from "./service-data";
import Image from "next/image";

const ServiceBody = () => {
  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
        {ServiceData.map((data, index) => {
          const Icon = data.icon;
          return (
            <div
              className="w-full rounded-md bg-white-200 dark:bg-gray-800/40 dark:backdrop-blur-md p-5 lg:p-10 lg:hover:scale-105 transition-all ease-linear duration-100"
              key={index}
            >
              <Image
                src={data.icon}
                width={50}
                height={50}
                alt="icon"
                className="dark:invert"
              />
              <h4 className="font-primary text-base lg:text-[28px] leading-10 text-black-300 font-semibold mt-3 dark:text-white">
                {data.title}
              </h4>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ServiceBody;
