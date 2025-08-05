"use client";
import dynamic from "next/dynamic";
import React from "react";
const Player = dynamic(
  () => import("@lottiefiles/react-lottie-player").then((mod) => mod.Player),
  {
    ssr: false,
  }
);

const CarAnimation = () => {
  return (
    <>
      <Player
        autoplay
        loop
        src="/lottie/Car_IgniteAnimation.json"
        style={{ height: "300px", width: "300px" }}
      />
    </>
  );
};

export default CarAnimation;
