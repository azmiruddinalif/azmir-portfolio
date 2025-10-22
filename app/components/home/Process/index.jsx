import React from "react";
import Container from "../../common/container";
import Button from "../../common/button";
import Image from "next/image";
import { ProcessData } from "./Pprodess-data";
import CardBase from "../../common/Card";
import Link from "next/link";

const WorkProcess = () => {
  return (
    <>
      <div className="bg-white-200 py-[100px] dark:bg-gray-800/40 dark:backdrop-blur-md">
        <Container>
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="max-w-[550px] order-1 lg:order-[0] text-center lg:text-left">
              <h4 className="font-primary text-2xl lg:text-3xl font-bold lg:leading-10 text-black-300 dark:text-white">
                My Development Process
              </h4>
              <p className="font-primary text-sm lg:text-lg font-normal text-black-300 mt-3 dark:text-white/70">
                a data-driven, user-focused process designed to build reliable, scalable, and maintainable
                full-stack applications.
              </p>
              <Link href="/how-it-works" target="_blank">
                <Button
                  text="How it works ?"
                  className="text-orange lg:mx-0 mx-auto text-sm lg:text-base bg-transparent font-primary font-semibold py-3 mt-5 mb-3 hover:bg-orange border border-orange hover:text-white transition-all ease-linear duration-100 "
                />
              </Link>
            </div>
            <Image
              src="/assets/process.svg"
              alt="processIcon"
              width={200}
              height={200}
              className="dark:invert"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/w8AAgMBgA1bK9cAAAAASUVORK5CYII="
            />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
            {ProcessData.map((data) => (
              <CardBase
                key={data.step}
                className="p-8 rounded-md relative flex flex-col justify-between shadow-soft dark:bg-gray-800/40 dark:backdrop-blur-md">
                <CardBase.Header>
                  <Image
                    src={data.img}
                    alt="steps"
                    width={data.width}
                    height={data.height}
                    className="dark:invert"
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/w8AAgMBgA1bK9cAAAAASUVORK5CYII="
                  />
                  <span className="absolute top-2 right-2 px-5 py-2 bg-black-400 rounded-full text-white dark:bg-gray-700 font-primary text-xs">
                    Step {data.step.toString().padStart(2, "0")}
                  </span>
                </CardBase.Header>
                <CardBase.Body>
                  <h4 className="mt-3 font-primary text-lg font-bold dark:text-white">{data.title}</h4>
                  <p className="mt-1 font-primary text-base text-black-300 dark:text-white/70">{data.desc}</p>
                </CardBase.Body>
              </CardBase>
            ))}
          </div>
        </Container>
      </div>
    </>
  );
};

export default WorkProcess;
