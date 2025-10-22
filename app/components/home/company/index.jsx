import React from "react";
import Image from "next/image";

const WormCompany = () => {
  return (
    <>
      <div className="py-10 text-center">
        <h4 className="font-primary font-normal text-sm lg:text-base text-black-400 dark:text-white">
          A FEW OF THE PLACES I WORKED
        </h4>

        <div className="flex items-center gap-x-7 justify-center lg:mt-5">
          <div className="w-[40px] flex items-center justify-center rounded-md overflow-hidden">
            <Image
              src="/assets/cocoon.svg"
              alt="Cocoon"
              width={80}
              height={80}
              loading="lazy"
              className="object-contain dark:invert"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/w8AAgMBgA1bK9cAAAAASUVORK5CYII="
            />
          </div>

          <div className="w-[80px] flex items-center justify-center rounded-md overflow-hidden">
            <Image
              src="/assets/CampiXlogo.svg"
              alt="CampiX"
              width={80}
              height={80}
              loading="lazy"
              className="object-contain dark:invert"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/w8AAgMBgA1bK9cAAAAASUVORK5CYII="
            />
          </div>

          <div className="w-[80px] h-[80px] flex items-center justify-center rounded-md overflow-hidden">
            <Image
              src="/assets/cbg.png"
              alt="CBG"
              width={80}
              height={80}
              loading="lazy"
              className="object-contain dark:invert"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/w8AAgMBgA1bK9cAAAAASUVORK5CYII="
            />
          </div>

          <div className="w-[80px] h-[80px] flex items-center justify-center rounded-md overflow-hidden">
            <Image
              src="/assets/stepupsoft.png"
              alt="StepUpSoft"
              width={80}
              height={80}
              loading="lazy"
              className="object-contain dark:invert"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/w8AAgMBgA1bK9cAAAAASUVORK5CYII="
            />
          </div>

          <div className="w-[60px] flex items-center justify-center rounded-md overflow-hidden">
            <Image
              src="/assets/doatkolom.png"
              alt="Doat Kolom"
              width={80}
              height={80}
              loading="lazy"
              className="object-contain dark:invert"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/w8AAgMBgA1bK9cAAAAASUVORK5CYII="
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default WormCompany;
