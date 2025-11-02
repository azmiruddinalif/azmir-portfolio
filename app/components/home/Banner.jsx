import Image from "next/image";
import Link from "next/link";
import Button from "../common/button";
import Availability from "./availability";
import Coding from "./Coding";
import ReusableButton from "../common/HireOrContact";

const Banner = () => {
  return (
    <>
      {/* Main Content - Responsive grid with consistent centering */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.9fr_2fr] items-center gap-6 sm:gap-8 lg:gap-0 sm:px-6 lg:px-0 mt-20 lg:mt-40 mb-4">
        {/* Text Content - Maintains center alignment on mobile, left on desktop */}
        <div className="order-2 lg:order-1 text-center lg:text-left">
          <div className="flex justify-center lg:justify-start mb-4">
            <Availability />
          </div>

          <div className="max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
            {/* Greeting - Responsive text */}
            <h6 className="font-secondary text-xs sm:text-sm lg:text-base font-bold text-black-300 my-2 sm:my-3 dark:text-white">
              👋 Hi! I'm Azmir Uddin Alif
            </h6>

            {/* Main Title - Better responsive scaling */}
            <h1 className="font-primary text-black-200 text-2xl sm:text-4xl lg:text-[57px] font-bold text-theme-primary leading-tight dark:text-white">
              <span className="bg-clip-text text-transparent bg-linear-to-r font-bold from-primary-600 to-secondary-600 dark:from-primary-400 selection:text-gray-800 dark:selection:text-gray-200">
                Full Stack Developer
              </span>
            </h1>

            {/* Description - Responsive text size */}
            <p className="font-secondary text-theme-secondary text-black-400 text-xs sm:text-sm lg:text-base mt-2 sm:mt-3 leading-relaxed dark:text-gray-100/80">
              I am a Full Stack & MERN developer skilled in React JS, Next.js,
              React Native, Node.js, Express.js, and MongoDB. I build scalable
              web and mobile applications and MVPs with high performance,
              responsive design, and reliable backend solutions.
            </p>

            {/* Action Buttons - Responsive layout */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2 sm:gap-x-2 mt-4 sm:mt-5">
              <ReusableButton
                href="#socials"
                text="My Socials"
                ariaLabel="azmir social media"
                className="w-full sm:w-auto text-white text-sm bg-orange rounded-md lg:text-base font-secondary font-semibold py-3 px-4 sm:px-6 hover:bg-transparent border border-orange hover:text-orange transition-all ease-linear duration-100 sm:mb-3"
              />

              <ReusableButton
                href="/meeting/azmir"
                ariaLabel="hire azmir"
                text="Hire Me"
                className="w-full sm:w-auto text-orange text-sm lg:text-base bg-transparent font-secondary font-semibold py-3 px-4 sm:px-6 hover:bg-orange border border-orange hover:text-white transition-all rounded-md ease-linear duration-100 mb-2 sm:mb-3"
              />
            </div>

            {/* Subtitle - Responsive text */}
            <span className="font-secondary text-xs sm:text-sm font-normal text-theme-muted block dark:text-gray-400">
              I work independently, offering exceptional value and quality in my
              services.
            </span>
          </div>
        </div>

        <div className="order-1 lg:order-2 mt-4 sm:mt-5 lg:mt-0 flex justify-center overflow-hidden relative">
          {/* Light mode image */}
          <Image
            src="/assets/azmir-2.webp"
            alt="Azmir Uddin Alif"
            width={700}
            height={700}
            placeholder="blur"
            priority
            loading="eager"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//8/AzYwirKBEXAABgAX+wP9xCMZDQAAAABJRU5ErkJggg=="
            className="rounded-xl"
          />
        </div>
      </div>
    </>
  );
};

export default Banner;
