import Image from "next/image";
import HelpBody from "./HelpBody";
import ReusableButton from "../../common/HireOrContact";

const Help = () => {
  return (
    <>
      <div className="py-20 lg:py-[140px]">
        <div className="flex flex-col lg:flex-row items-center gap-x-56">
          <div className="max-w-[600px] order-1 lg:order-[0] text-center lg:text-left">
            <h4 className="font-primary text-2xl lg:text-4xl font-bold lg:leading-10 text-black-300 dark:text-white">
              When I can help?
            </h4>
            <p className="font-secondary text-sm lg:text-lg font-normal text-black-300 mt-3 dark:text-white/70">
              I help startups and teams launch, scale, or fix clunky UIs with
              clean code, modern tech, and scalable architecture.
            </p>

            <ReusableButton
              href="/meeting/azmir"
              ariaLabel="book a call with azmir"
              text="Let's Book For a Free Call"
              className="text-orange lg:mx-0 mx-auto text-sm lg:text-base bg-transparent font-secondary font-medium py-3 mt-5 mb-3 hover:bg-orange border border-orange hover:text-white transition-all ease-linear duration-100 inline-block px-5 rounded-md"
            />
          </div>
          <Image
            src="/assets/analysis.webp"
            alt="processIcon"
            width={200}
            loading="lazy"
            height={200}
            className="dark:invert"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/w8AAgMBgA1bK9cAAAAASUVORK5CYII="
          />
        </div>
        <HelpBody />
      </div>
    </>
  );
};

export default Help;
