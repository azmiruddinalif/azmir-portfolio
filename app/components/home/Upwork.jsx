"use client";
import dynamic from "next/dynamic";
import React, { useEffect, useRef, useState } from "react";
import Container from "../common/container";
import Image from "next/image";
import Button from "../common/button";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Player = dynamic(
  () => import("@lottiefiles/react-lottie-player").then((mod) => mod.Player),
  {
    ssr: false,
  }
);

const AnimatedHighlight = ({ children, delay = 0, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setTimeout(() => {
            setIsVisible(true);
            setHasAnimated(true);
          }, delay);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay, hasAnimated]);

  return (
    <span
      ref={ref}
      className={`relative inline-block ${className}`}
      style={{ position: "relative" }}
    >
      <span
        className="absolute inset-0 bg-orange"
        style={{
          transform: isVisible ? "scaleX(1)" : "scaleX(0)",
          transformOrigin: "left",
          transition: "transform 0.8s ease-out",
          borderRadius: "3px",
          zIndex: 0,
          opacity: 0.3,
        }}
      />
      <span
        className="relative"
        style={{
          zIndex: 1,
          position: "relative",
          backgroundColor: "transparent",
        }}
      >
        {children}
      </span>
    </span>
  );
};

const Upwork = () => {
  const router = useRouter();
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  const handleRedirect = () => {
    router.push("/my-works");
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="bg-white-200 py-10 lg:py-25 dark:bg-gray-800/40 dark:backdrop-blur-md"
    >
      <Container>
        <div className="flex justify-center mb-8">
          <Image
            src="/assets/setup.svg"
            alt="upwork"
            width={100}
            loading="lazy"
            height={100}
            className="dark:invert"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/w8AAgMBgA1bK9cAAAAASUVORK5CYII="
          />
        </div>
        <div className="text-center mt-0 lg:mt-8">
          <h4 className="text-2xl lg:text-4xl font-bold font-primary text-black-400 dark:text-white">
           Turning Ideas into {" "}
            <b className="bg-clip-text text-transparent bg-linear-to-r font-bold from-primary-600 to-secondary-600 dark:from-primary-400 selection:text-gray-800 dark:selection:text-gray-200">
              Scalable Digital Products
            </b>
          </h4>
          <p className="max-w-[900px] mx-auto mt-6 font-secondary text-black-400 text-sm lg:text-[17px] leading-6 lg:leading-8  dark:text-white/70">
            As a{" "}
            <AnimatedHighlight delay={500}>
              <Link
                href="/my-work/logensa#HyperMern"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange underline hover:text-primary-600"
              >
                MERN Stack and web application Developer
              </Link>
            </AnimatedHighlight>
            , I specialize in architecting &amp; developing robust MVPs,
            dynamic web platforms, &amp; scalable mobile applications from the
            ground up. Leveraging modern technologies like React.js, Next.js,
            Node.js, Express, MongoDB, &amp; React Native, I enjoy translating
            complex concepts into high-performing, user-centric digital
            products. My engineering approach places a strong emphasis on clean
            code architecture, seamless user experiences, &amp; optimized
            database performance. By prioritizing both rapid delivery &amp;
            technical excellence, I ensure that every solution is built for
            adaptability, security, &amp; long-term maintainability whether
            I'm crafting responsive frontend interfaces or engineering resilient
            backend systems.
          </p>
        </div>
        <Button
          onClick={handleRedirect}
          text="View My Works"
          className="text-orange text-sm lg:text-base bg-transparent font-secondary font-medium py-3 mt-8 mb-3 mx-auto hover:bg-orange border border-orange hover:text-white transition-all ease-linear duration-100 "
        />
      </Container>
    </div>
  );
};

export default Upwork;
