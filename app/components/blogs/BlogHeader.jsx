import Image from "next/image";
import React from "react";

const BlogHeader = () => {
  return (
    <section className="flex justify-between items-center">
      <div className="max-w-lg">
        <h5 className="font-primary font-medium text-black text-lg dark:text-white/70">
          👑 Insights and Inspirations:
        </h5>
        <h1 className="font-primary font-extrabold text-4xl text-black-300 mt-2 dark:text-white">
          Ideas That Shape the Future
        </h1>
        <p className="font-primary text-base font-normal text-black-100 mt-3 dark:text-white/40">
          A mix of ideas, lessons, and sparks of inspiration from my journey in
          tech and creativity.
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
    </section>
  );
};

export default BlogHeader;
