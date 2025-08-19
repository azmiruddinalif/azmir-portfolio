"use client";
import dynamic from "next/dynamic";
import React from "react";
const Player = dynamic(
  () => import("@lottiefiles/react-lottie-player").then((mod) => mod.Player),
  {
    ssr: false,
  }
);

const Coding = () => {
  return (
    <>
      <Player
        autoplay
        loop
        src="/lottie/lf30_editor_ipst4mvt.json"
        className="w-full h-[40vh] sm:h-[50vh] lg:h-[80vh]"
      />
    </>
  );
};

export default Coding;
