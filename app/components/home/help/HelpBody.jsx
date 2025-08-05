import React from "react";
import { HelpData } from "./Helpdata";
import Image from "next/image";

const HelpBody = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-8 mt-12">
        {HelpData.map((data, index) => (
          <div key={index}>
            <div className="flex items-center gap-x-3">
              <Image src={data.img} alt="check" width={20} height={20} />
              <h4 className="font-primary text-lg text-black-300 font-semibold">
                {data.title}
              </h4>
            </div>
            <p className="font-primary text-base max-w-[500px] mt-2">
              {data.desc}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default HelpBody;
