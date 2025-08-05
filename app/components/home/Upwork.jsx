"use client";
import dynamic from "next/dynamic";
import React from "react";
import Container from "../common/container";
const Player = dynamic(
  () => import("@lottiefiles/react-lottie-player").then((mod) => mod.Player),
  {
    ssr: false,
  }
);

const Upwork = () => {
  return (
    <div className="bg-white-200 py-5">
      {/* <Player
        autoplay
        loop
        src="/lottie/upwork.json"
        style={{ height: "700px", width: "100%" }}
      /> */}
      <Container>
        <div className="text-center">
          <h4 className="text-3xl font-bold font-primary">
            Former <b className="text-green">Upwork's Verified</b> MERN Stack
            Developer
          </h4>
          <p className="max-w-[750px] mx-auto mt-3 font-primary font-normal text-black-400 text-base leading-8">
            As a Verified MERN Stack Developer on Upwork, I’ve successfully
            delivered <b>scalable web and mobile applications</b> for global
            clients—leveraging{" "}
            <b>
              React.js, Next.js, Node.js, Express, MongoDB, and React Native
            </b>{" "}
            to turn complex ideas into high-performing digital products. With
            experience working for international companies, I focus on clean
            architecture, <b>fast delivery, and long-term maintainability</b>.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Upwork;
