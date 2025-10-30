import React from "react";
import { ServiceData } from "./service-data";
import Image from "next/image";

const ServiceBody = () => {
  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
        {ServiceData.map((data, index) => {
          return (
            <div
              className="group relative w-full rounded-xl bg-white dark:bg-gray-800/50 p-8 lg:p-9 border border-gray-300 dark:border-gray-700/50 hover:shadow-soft hover:-translate-y-2 transition-all duration-300 overflow-hidden"
              key={index}
            >
              {/* Content */}
              <div className="relative z-10">
                {/* Icon container with gradient ring */}
                <div className="relative w-20 h-20 mb-6">
                  <div className="relative w-full h-full bg-white dark:bg-gray-900/80 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md">
                    <Image
                      src={data.icon}
                      width={40}
                      height={40}
                      alt="icon"
                      loading="lazy"
                      className="dark:invert group-hover:scale-110 transition-transform duration-300"
                      placeholder="blur"
                      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/w8AAgMBgA1bK9cAAAAASUVORK5CYII="
                    />
                  </div>
                </div>

                {/* Title with gradient on hover */}
                <h4 className="font-primary text-xl lg:text-[28px] leading-snug text-gray-900 dark:text-white font-bold group-hover:bg-gradient-to-r group-hover:from-primary-500 group-hover:via-primary-600 group-hover:to-primary-700 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  {data.title}
                </h4>

                {/* Subtle underline animation */}
                <div className="mt-4 h-1 w-0 bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700 rounded-full group-hover:w-16 transition-all duration-500"></div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ServiceBody;
