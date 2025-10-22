import Image from "next/image";
import Link from "next/link";
import Button from "../../common/button";
import SocialBody from "./Socialbody";

const Socials = () => {
  return (
    <>
      <section id="socials" className="py-[140px]">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="max-w-[600px] order-1 lg:order-[0] text-center lg:text-left">
            <h4 className="font-primary text-2xl lg:text-3xl font-bold lg:leading-10 text-black-300 dark:text-white">
              Follow me on social media to explore my work, get updates, and
              stay in touch!
            </h4>
            <p className="font-primary text-sm lg:text-lg font-normal text-black-300 mt-3 dark:text-white/70">
              Follow me on social media for tips, tutorials, project updates,
              and a look behind the scenes of my web development journey.
            </p>
            <Link href="/meeting/azmir" target="_blank">
              <Button
                text="Let's Book For a Free Call"
                className="text-white lg:mx-0 mx-auto text-sm lg:text-base bg-orange font-primary font-semibold py-3 mt-5 mb-3 border hover:bg-transparent border-orange hover:text-orange transition-all ease-linear duration-100 "
              />
            </Link>
          </div>
          <Image
            src="/assets/social.png"
            alt="workIcon"
            width={140}
            height={140}
            loading="lazy"
            className="dark:invert"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/w8AAgMBgA1bK9cAAAAASUVORK5CYII="
          />
        </div>
        <div>
          <SocialBody />
        </div>
      </section>
    </>
  );
};

export default Socials;
