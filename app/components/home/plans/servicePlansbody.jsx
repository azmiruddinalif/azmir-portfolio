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
            className="relative flex flex-col justify-between w-full rounded-md dark:bg-gray-800/40 dark:backdrop-blur-md bg-white p-5 xl:p-10 lg:hover:scale-105 transition-all ease-linear duration-100 border border-black-300 dark:border-white/10"
            key={index}
          >
            {/* Full-Stack Recommended Badge */}
            {plan.recommended && (
              <div className="absolute top-5 right-5 bg-black-200 text-white text-xs font-semibold px-3 py-2 rounded-full dark:bg-gray-800/40 dark:backdrop-blur-md">
                Recommended
              </div>
            )}

            <h4 className="font-primary text-lg xl:text-[28px] leading-10 text-black font-semibold lg:mt-10 xl:mt-5 dark:text-white">
              {plan.title}
            </h4>

            <p className="font-primary text-sm xl:text-base text-black font-normal mt-1 mb-5 dark:text-white/70">
              {plan.description}
            </p>

            <div className="flex flex-col gap-2 mb-5">
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
              className="font-primary text-base text-black font-semibold flex items-center gap-x-2 underline dark:text-white"
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
