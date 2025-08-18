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
            <h4 className="font-primary text-2xl lg:text-3xl font-bold lg:leading-10 text-black-300">
              Development Plans That Accelerate Your Growth
            </h4>
            <p className="font-primary text-sm lg:text-lg font-normal text-black-300 mt-3">
              Fuel your business with robust, scalable web and mobile solutions.
              Our development plans are clear, flexible, and designed to help
              your brand succeed online.
            </p>
            <Link href="/how-it-works" target="_blank">
              <Button
                text="How it works"
                className="text-white font-primary lg:mx-0 mx-auto text-sm lg:text-base font-semibold py-3 mt-5 mb-3 hover:bg-transparent border border-black-100 hover:text-black-100 transition-all ease-linear duration-100"
              />
            </Link>
          </div>
          <Image src="/assets/plans.png" alt="plans" width={140} height={140} />
        </div>
        <ServicePlansBody />
      </div>
    </>
  );
};

export default Plans;
