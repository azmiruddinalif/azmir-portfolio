import React from "react";
import { ServiceData } from "./service-data";
import Image from "next/image";

const ServiceBody = () => {
  return (
    <>
      <div className="grid grid-cols-3 gap-5 mt-5">
        {ServiceData.map((data, index) => {
          const Icon = data.icon;
          return (
            <div
              className="w-full rounded-md bg-white-200 p-10 hover:scale-105 transition-all ease-linear duration-100"
              key={index}
            >
              <Image src={data.icon} width={50} height={50} alt="icon" />
              <h4 className="font-primary text-[28px] leading-10 text-black-300 font-semibold mt-3">
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
