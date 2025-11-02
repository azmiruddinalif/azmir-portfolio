"use client";
import React from "react";
import Marquee from "react-fast-marquee";
import { testimonials } from "./testimonials";
import { TestimonialCard } from "./Testimonial-card";
import Container from "../../common/container";

export default function TestimonialMarquee() {
  const row1 = testimonials.slice(0, 5);
  const row2 = testimonials.slice(5, 10);

  return (
    <div className="relative w-full py-12 lg:py-32 bg-gray-50 dark:bg-gray-800/40 dark:backdrop-blur-md overflow-hidden">
      <Container>
        <div className="text-center mb-16">
          <h4 className="font-primary text-2xl lg:text-4xl font-bold text-black-300 dark:text-white text-center">
            What Clients Say About My Work
          </h4>
          <p className="mt-3 text-sm lg:text-base font-secondary font-normal text-black-400 dark:text-white/70 max-w-2xl mx-auto">
            Real experiences from clients who turned their ideas into powerful
            digital products. Read how collaboration, delivery, and results made
            an impact.
          </p>
        </div>
      </Container>

      {/* --- Gradient Overlays (like your RecentWorkBody) --- */}
      <div className="absolute top-0 left-0 z-10 h-full w-32 bg-gradient-to-r from-white to-transparent dark:from-gray-900 dark:to-transparent pointer-events-none" />
      <div className="absolute top-0 right-0 z-10 h-full w-32 bg-gradient-to-l from-white to-transparent dark:from-gray-900 dark:to-transparent pointer-events-none" />

      {/* --- Row 1 --- */}
      <Marquee
        autoFill
        gradient={false}
        pauseOnHover
        speed={35}
        direction="left"
        className="flex items-center"
      >
        <div className="flex gap-3 px-3">
          {row1.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex-shrink-0"
              style={{ width: "auto" }}
            >
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>
      </Marquee>

      {/* --- Row 2 --- */}

      <Marquee
        autoFill
        gradient={false}
        pauseOnHover
        speed={35}
        direction="right"
        className="flex items-center"
      >
        <div className="flex gap-3 px-3 mt-7">
          {row2.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex-shrink-0"
              style={{ width: "auto" }}
            >
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
}
