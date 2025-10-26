"use client";
import Image from "next/image";
import React, { useState } from "react";
import ReusableButton from "../common/HireOrContact";
import { faqs } from "./faq-data";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

const BlogRight = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <>
      <div className="sticky top-24 h-[calc(100vh-6rem)] border-l border-black/10 p-6 dark:border-white/10 hidden md:block">
        <div className="w-24 h-24 rounded-full overflow-hidden">
          <Image
            src="/assets/azmir-blog.jpg"
            alt="azmir-blog"
            width={700}
            height={700}
            placeholder="blur"
            className="w-full h-full object-cover object-top"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//8/AzYwirKBEXAABgAX+wP9xCMZDQAAAABJRU5ErkJggg=="
          />
        </div>
        <div>
          <h3 className="font-primary lg:text-xl xl:text-2xl my-3 font-extrabold dark:text-white">
            Azmir Uddin Alif
          </h3>
          <p className="lg:text-xs xl:text-sm font-primary font-normal text-black-400 dark:text-white/50">
            Helped 20+ Startup & Businesses Scale to $10M+ with Web & Mobile
            Apps | MERN | Next.js | React Native | Full-stack Developer
          </p>
          <div className="flex items-center justify-between">
            <ReusableButton
              href="/meeting/azmir"
              ariaLabel="hire azmir"
              text="Hire Me"
              className="text-center text-orange lg:text-xs xl:text-sm bg-transparent font-primary font-semibold py-2 w-[48%] hover:bg-orange border border-orange hover:text-white transition-all rounded-md ease-linear duration-100 mb-2 sm:mb-3 inline-block mt-5"
            />
            <ReusableButton
              href="/how-it-works"
              text="How it works"
              ariaLabel="how azmir works"
              className="text-center text-orange lg:text-xs xl:text-sm bg-transparent font-primary font-semibold py-2 w-[48%] hover:bg-orange border border-orange hover:text-white transition-all rounded-md ease-linear duration-100 mb-2 sm:mb-3 inline-block mt-5"
            />
          </div>
          <div className="mt-6 pt-4 border-t border-black/10 dark:border-white/10">
            <h4 className="font-primary font-semibold text-xl text-black dark:text-white mb-4">
              Frequently Asked Questions
            </h4>
            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-black/10 dark:border-white/10 rounded-md"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="flex gap-x-3 justify-between items-center w-full text-left p-3 font-primary font-medium text-sm dark:text-white"
                  >
                    {faq.question}
                    {openIndex === index ? (
                      <BsChevronUp size={16} />
                    ) : (
                      <BsChevronDown size={16} />
                    )}
                  </button>
                  {openIndex === index && (
                    <p className="px-3 pb-3 text-sm text-gray-600 dark:text-white/70">
                      {faq.answer}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogRight;
