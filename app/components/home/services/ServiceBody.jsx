import React from "react";
import { ServiceData } from "./service-data";

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
              <div className="w-12 h-12 bg-white rounded-full shadow flex flex-wrap items-center justify-center transition-all group-hover:bg-black-500 mb-8">
                <Icon />
              </div>
              <h4 className="font-primary text-[28px] leading-10 text-black-300 font-semibold">
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
