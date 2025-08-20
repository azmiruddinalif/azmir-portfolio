import Image from "next/image";
import Link from "next/link";
import Button from "../../common/button";
import ServiceBody from "./ServiceBody";

const Services = () => {
  return (
    <>
      <div className="py-[140px]">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="max-w-[550px] order-1 lg:order-[0] text-center lg:text-left">
            <h4 className="font-primary text-2xl lg:text-3xl font-bold lg:leading-10 text-black-300 dark:text-white">
              Start your journey with me, I’ve expertise in those Services
            </h4>
            <p className="font-primary text-sm lg:text-lg font-normal text-black-300 mt-3 dark:text-white/70">
             Skilled in building full-stack web and mobile apps with React, Next.js, Node, Express, MongoDB, and React Native.
            </p>
            <Button
              text={
                <Link href="/meeting/azmir" target="_blank">
                  Let's Book a Free Call
                </Link>
              }
              className="text-orange lg:mx-0 mx-auto text-sm lg:text-base bg-transparent font-primary font-semibold py-3 mt-5 mb-3 border hover:bg-orange border-orange hover:text-white transition-all ease-linear duration-100 "
            />
          </div>
          <div className="mb-2 lg:mb-0">
            <Image
              src="/assets/work.webp"
              alt="workIcon"
              width={250}
              height={250}
              className="dark:invert"
            />
          </div>
        </div>
        <div>
          <ServiceBody />
        </div>
      </div>
    </>
  );
};

export default Services;
