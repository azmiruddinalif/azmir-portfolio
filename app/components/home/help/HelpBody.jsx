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
              <Image src={data.img} alt="check" width={20} height={20} />
            </div>
            <div className="">
              <h4 className="font-primary text-lg text-black-300 font-semibold leading-[0.8]">
                {data.title}
              </h4>
              <p className="font-primary text-base max-w-[500px] mt-2">
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
