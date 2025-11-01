"use client";
import React from "react";
import Link from "next/link";
import CardBase from "../../common/Card";
import Image from "next/image";

export const ProcessSteps = ({ data = ProcessData }) => {
  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto mt-8">
        {/* Process Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((item) => (
            <Link
              key={item.step}
              href={`/process/${item.slug || item.step}`}
              className="block group relative"
            >
              <CardBase className="relative p-8 rounded-3xl bg-white dark:bg-gray-800/40 dark:backdrop-blur-md border border-gray-200/90 dark:border-gray-700/30  transition-all duration-500 hover:shadow-2xl hover:shadow-primary-500/10 dark:hover:shadow-primary-500/20 hover:-translate-y-2 overflow-hidden cursor-pointer">
                <CardBase.Header className="relative z-10">
                  {/* Step Badge */}
                  <div className="absolute -top-3 -right-3 min-w-[4rem] h-16 px-4 bg-gradient-to-br from-primary-300 via-primary-500 to-primary-600 rounded-2xl flex items-center justify-center shadow-md shadow-primary-500/30 dark:shadow-primary-500/40 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <span className="text-white font-bold text-lg tracking-wider">
                      {item.step.toString().padStart(2, "0")}
                    </span>
                  </div>

                  {/* Image or SVG fallback */}
                  <div className="relative w-fit p-6 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700/50 dark:to-gray-800/50 dark:backdrop-blur-sm rounded-xl shadow-soft transition-all duration-500">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />

                    <div className="relative z-10 w-16 h-16 flex items-center justify-center text-4xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-2">
                      {item.img ? (
                        <Image
                          src={item.img}
                          alt={item.title || "step"}
                          width={item.width || 64}
                          height={item.height || 64}
                          loading="lazy"
                          className="dark:invert"
                          placeholder="blur"
                          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/w8AAgMBgA1bK9cAAAAASUVORK5CYII="
                        />
                      ) : (
                        <svg
                          className="w-full h-full text-blue-600 dark:text-blue-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                      )}
                    </div>
                  </div>
                </CardBase.Header>

                <CardBase.Body className="relative z-10 mt-8 space-y-4">
                  {/* Title */}
                  <h4 className="font-primary text-xl font-bold text-gray-900 dark:text-white group-hover:bg-gradient-to-r group-hover:from-primary-500 group-hover:to-primary-600 dark:group-hover:from-primary-500 dark:group-hover:to-primary-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {item.title}
                  </h4>

                  {/* Description */}
                  <p className="font-primary text-sm leading-relaxed text-gray-600 dark:text-gray-300 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
                    {item.desc}
                  </p>
                  {/* CTA */}
                  <div className="pt-2 flex items-center gap-2 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 delay-100">
                    <span className="text-transparent bg-gradient-to-r from-primary-500 to-primary-600 bg-clip-text text-sm font-semibold">
                      Explore Step
                    </span>
                    <div className="relative">
                      <svg
                        className="w-5 h-5 text-primary-600 dark:text-primary-400 transform group-hover:translate-x-2 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                      <div className="absolute inset-0 bg-primary-400 blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
                    </div>
                  </div>
                </CardBase.Body>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent dark:via-primary-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </CardBase>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
