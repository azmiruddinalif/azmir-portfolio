"use client";
import dynamic from "next/dynamic";
import React from "react";
const Player = dynamic(
  () => import("@lottiefiles/react-lottie-player").then((mod) => mod.Player),
  {
    ssr: false,
  }
);

const Availability = () => {
  return (
    <div className="px-3 py-2 bg-green-200 w-fit mx-auto lg:mx-0 flex items-center gap-x-1.5 rounded-full">
      <Player
        autoplay
        loop
        src="/lottie/GreenFlashingCircleIcon.json"
        style={{ height: "14px", width: "14px" }}
      />
      <span className="font-secondary text-xs text-green">
       Working on modern web applications
      </span>
    </div>
  );
};

export default Availability;
