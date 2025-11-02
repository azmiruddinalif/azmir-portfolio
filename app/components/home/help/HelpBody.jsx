import React from "react";
import { HelpData } from "./Helpdata";
import Image from "next/image";

const HelpBody = () => {
  return (
    <>
      <div className="grid md:grid-cols-2 gap-8 mt-12">
        {HelpData.map((data, index) => (
          <div key={index} className="flex gap-x-3">
            <div className="shrink-0">
              <Image
                src={data.img}
                alt="check"
                width={20}
                loading="lazy"
                height={20}
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/w8AAgMBgA1bK9cAAAAASUVORK5CYII="
              />
            </div>
            <div>
              <h4 className="font-primary text-sm lg:text-xl text-black-300 font-bold leading-[0.8] dark:text-white">
                {data.title}
              </h4>
              <p className="font-secondary font-normal text-xs lg:text-base max-w-[500px] mt-4 dark:text-white/70">
                {data.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default HelpBody;
