"use client";
import dynamic from "next/dynamic";
import React from "react";
import Container from "../common/container";
import Image from "next/image";
import Button from "../common/button";
import { useRouter } from "next/navigation";
const Player = dynamic(
  () => import("@lottiefiles/react-lottie-player").then((mod) => mod.Player),
  {
    ssr: false,
  }
);

const Upwork = () => {
  const router = useRouter();
  const handleRedirect = () => {
    router.push("/meeting/azmir");
  };
  return (
    <div className="bg-white-200 py-10 lg:py-25">
      <Container>
        <div className="flex justify-center mb-8">
          <Image
            src="/assets/setup.svg"
            alt="upwork"
            width={100}
            height={100}
          />
        </div>
        <div className="text-center mt-0 lg:mt-8">
          <h4 className="text-2xl lg:text-3xl font-bold font-primary text-black-400">
            Professional Web Solutions for{" "}
            <b className="text-green">Your Business Growth</b>
          </h4>
          <p className="max-w-[750px] mx-auto mt-3 font-primary font-semibold text-black-400 text-sm lg:text-base leading-6 lg:leading-8">
            As a <b> MERN Stack Developer</b>, I’ve successfully delivered{" "}
            <b>scalable web and mobile applications</b> for global
            clients—leveraging{" "}
            <b>
              React.js, Next.js, Node.js, Express, MongoDB, and React Native
            </b>{" "}
            to turn complex ideas into high-performing digital products. With
            experience working for <b>international clients</b>, I focus on
            clean architecture,{" "}
            <b>fast delivery, and long-term maintainability</b>.
          </p>
        </div>
        <Button
          onClick={handleRedirect}
          text="Let's build yours too"
          className="text-black-100 text-sm lg:text-base bg-white font-primary font-semibold py-3 mt-8 mb-3 mx-auto hover:bg-black border border-black-100 hover:text-white transition-all ease-linear duration-100 "
        />
      </Container>
    </div>
  );
};

export default Upwork;
