import React from "react";
import Image from "next/image";

const WormCompany = () => {
  return (
    <>
      <div className="py-10 text-center">
        <h4 className="font-primary font-normal text-black-400">
          A FEW OF THE PLACES I WORKED
        </h4>

        <div className="flex items-center gap-x-7 justify-center mt-5">
          <div className="w-[40px] flex items-center justify-center bg-white rounded-md overflow-hidden">
            <Image
              src="/assets/cocoon.svg"
              alt="Cocoon"
              width={80}
              height={80}
              className="object-contain filter grayscale brightness-25"
            />
          </div>

          <div className="w-[80px] flex items-center justify-center bg-white rounded-md overflow-hidden">
            <Image
              src="/assets/CampiXlogo.svg"
              alt="CampiX"
              width={80}
              height={80}
              className="object-contain filter grayscale brightness-25"
            />
          </div>

          <div className="w-[80px] h-[80px] flex items-center justify-center bg-white rounded-md overflow-hidden">
            <Image
              src="/assets/cbg.png"
              alt="CBG"
              width={80}
              height={80}
              className="object-contain filter grayscale brightness-25"
            />
          </div>

          <div className="w-[80px] h-[80px] flex items-center justify-center bg-white rounded-md overflow-hidden">
            <Image
              src="/assets/stepupsoft.png"
              alt="StepUpSoft"
              width={80}
              height={80}
              className="object-contain filter grayscale brightness-25"
            />
          </div>

          <div className="w-[60px] flex items-center justify-center bg-white rounded-md overflow-hidden">
            <Image
              src="/assets/doatkolom.png"
              alt="Doat Kolom"
              width={80}
              height={80}
              className="object-contain filter grayscale brightness-25"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default WormCompany;
