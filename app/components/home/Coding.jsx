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
        style={{ height: "700px", width: "100%" }}
      />
    </>
  );
};

export default Coding;
