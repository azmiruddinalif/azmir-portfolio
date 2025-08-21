import React from "react";
import Link from "next/link";
import { planData } from "./plans-data";

const ServicePlansBody = () => {
  return (
    <div className="grid lg:grid-cols-3 gap-5 mt-5">
      {planData.map((plan, index) => {
        let ctaLink = "#contact";
        if (
          plan.title === "MVP Services" ||
          plan.title === "Full-Stack Solutions"
        ) {
          ctaLink = "meeting/azmir";
        } else if (plan.title === "Mobile & PWA Apps") {
          ctaLink = "mailto:alifazmiruddin@gmail.com";
        }

        return (
          <div
            className="relative flex flex-col justify-between w-full rounded-md dark:bg-gray-800/40 dark:backdrop-blur-md lg:hover:scale-105 transition-all ease-linear duration-100 border border-primary-400/50 dark:border-white/10 group hover:shadow-soft"
            key={index}
          >
            {/* Full-Stack Recommended Badge */}
            <div className="px-5 xl:px-10 pt-5 xl:pt-10 group-hover:bg-gradient-to-t group-hover:from-white group-hover:to-primary-600/15 group-hover:dark:bg-gradient-to-t group-hover:dark:from-gray-900/10 group-hover:dark:to-primary-600/20">
              {plan.recommended && (
                <div className="absolute top-5 right-5 bg-orange text-white text-xs font-semibold px-3 py-2 rounded-full dark:bg-gray-800/40 dark:backdrop-blur-md group-hover:dark:bg-orange/20">
                  Recommended
                </div>
              )}

              <h4 className="font-primary text-lg xl:text-[28px] leading-10 text-black font-semibold sm:mt-10 xl:mt-5 dark:text-white mt-8 group-hover:text-orange">
                {plan.title}
              </h4>

              <p className="font-primary text-sm xl:text-base text-black font-normal mt-1 mb-5 dark:text-white/70">
                {plan.description}
              </p>
            </div>

            <div className="flex flex-col gap-2 mb-5 px-5 xl:px-10">
              {plan.services.map((service, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 font-primary text-sm xl:text-base"
                >
                  <span className="font-semibold text-black dark:text-white/70">
                    {idx + 1}.
                  </span>
                  <span className="text-black dark:text-white/70">
                    {service}
                  </span>
                </div>
              ))}
            </div>

            <Link
              href={ctaLink}
              className="font-primary text-base text-black font-semibold flex items-center gap-x-2 underline dark:text-white px-5 xl:px-10 pb-5 xl:pb-10 hover:text-orange"
            >
              {plan.cta}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default ServicePlansBody;
