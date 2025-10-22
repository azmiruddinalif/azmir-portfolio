import Image from "next/image";
import React from "react";
import Button from "../../common/button";
import Link from "next/link";
import ServicePlansBody from "./servicePlansbody";

const Plans = () => {
  return (
    <>
      <div id="plans" className="py-[140px]">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="max-w-[600px] order-1 lg:order-[0] text-center lg:text-left">
            <h4 className="font-primary text-2xl lg:text-3xl font-bold lg:leading-10 text-black-300 dark:text-white">
              Development Plans That Accelerate <br /> Your Growth
            </h4>
            <p className="font-primary text-sm lg:text-lg font-normal text-black-300 mt-3 dark:text-white/70">
              Power your business with scalable web and mobile solutions <br /> flexible plans built to grow
              your brand online.
            </p>
            <Link href="/how-it-works" target="_blank">
              <Button
                text="How it works"
                className="text-white lg:mx-0 mx-auto text-sm lg:text-base bg-orange font-primary font-semibold py-3 mt-5 mb-3 border hover:bg-transparent border-orange hover:text-orange transition-all ease-linear duration-100 "
              />
            </Link>
          </div>
          <Image
            src="/assets/plans.png"
            alt="plans"
            width={140}
            height={140}
            className="dark:invert"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/w8AAgMBgA1bK9cAAAAASUVORK5CYII="
          />
        </div>
        <ServicePlansBody />
      </div>
    </>
  );
};

export default Plans;
