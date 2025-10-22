import React from "react";
import {
  firstWorkData,
  RecentWorkData,
  secondWorkData,
} from "./recent-wrok-data";
import Marquee from "react-fast-marquee";
import Image from "next/image";

const RecentWorkBody = () => {
  return (
    <div className="relative overflow-hidden mt-16">
      {/* Left Gradient */}
      <div className="absolute top-0 left-0 z-10 h-full w-24 bg-gradient-to-r from-white to-transparent dark:from-gray-900 dark:to-transparent pointer-events-none" />

      {/* Right Gradient */}
      <div className="absolute top-0 right-0 z-10 h-full w-24 bg-gradient-to-l from-white to-transparent dark:from-gray-900 dark:to-transparent pointer-events-none" />

      {/* First Row */}
      <Marquee pauseOnHover gradient={false} speed={50}>
        <div className="flex gap-6 px-3">
          {firstWorkData.map((item) => (
            <Image
              src={item.image}
              alt="data"
              width={300}
              height={300}
              loading="lazy"
              key={item.image}
              className="w-[300px] h-[200px] object-contain"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/w8AAgMBgA1bK9cAAAAASUVORK5CYII="
            />
          ))}
        </div>
      </Marquee>

      <Marquee pauseOnHover gradient={false} speed={50} direction="right">
        <div className="flex gap-6 px-3 mt-7">
          {secondWorkData.map((item, idx) => (
            <Image
              src={item.image}
              alt="data"
              width={300}
              height={300}
              loading="lazy"
              key={item.image}
              className="w-[300px] h-[200px] object-contain"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/w8AAgMBgA1bK9cAAAAASUVORK5CYII="
            />
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default RecentWorkBody;
