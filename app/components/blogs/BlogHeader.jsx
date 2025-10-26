import Image from "next/image";
import React from "react";

const BlogHeader = () => {
  return (
    <section className="flex justify-between items-center">
      <div className="w-full flex flex-col lg:flex-row items-center justify-between">
        <div className="max-w-[750px] order-1 lg:order-[0] text-center lg:text-left">
          <h4 className="font-primary text-xl text-black-200 font-bold dark:text-white/70">
            👑 Insights and Inspirations:
          </h4>
          <h1 className="font-primary text-5xl font-bold text-black-200 mt-2 dark:text-white">
            Ideas That Shape the Future
          </h1>
          <p className="max-w-[600px] mt-3 text-black-300 font-primary dark:text-white/70">
            A blend of ideas, hard-won lessons, and bursts of inspiration drawn
            from my ongoing journey through technology and creativity.
          </p>
        </div>
        <Image
          src="/assets/book.webp"
          alt="book image"
          width={100}
          height={100}
          placeholder="blur"
          className="shrink-0 dark:invert"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//8/AzYwirKBEXAABgAX+wP9xCMZDQAAAABJRU5ErkJggg=="
        />
      </div>
    </section>
  );
};

export default BlogHeader;
