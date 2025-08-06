"use client";
import React, { useState } from "react";
import { MenuData } from "./menudata/menu";
import Link from "next/link";
import Image from "next/image";
import Container from "../components/common/container";
import Button from "../components/common/button";

const Header = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const servicesItem = MenuData.find((item) => item.title === "Services");

  return (
    <header className="relative z-50">
      {/* Top Nav */}
      <nav className="fixed top-0 left-0 w-full backdrop-blur-md bg-white/30 border-b border-b-white-100 transition-all duration-300 z-50">
        <Container>
          <div className="flex items-center justify-between">
            <div>
              <Image src="/assets/logo.svg" alt="logo" width={80} height={80} />
            </div>
            <ul className="flex items-center justify-end">
              {MenuData.map((data, index) => (
                <li
                  key={index}
                  className="relative group font-primary font-normal text-base text-black-200"
                  onMouseEnter={() =>
                    data.title === "Services" && setIsServicesOpen(true)
                  }
                  onMouseLeave={() =>
                    data.title === "Services" && setIsServicesOpen(false)
                  }
                >
                  <Link
                    href={data.link}
                    className="relative inline-block px-6 py-8"
                  >
                    <span className="after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[3px] after:bg-black after:transition-all after:duration-300 group-hover:after:w-full">
                      {data.title}
                    </span>
                  </Link>
                </li>
              ))}
              <Button
                text="Hire Me"
                className="text-white font-primary font-semibold py-2 ml-5 hover:bg-transparent border border-black-100 hover:text-black-100 transition-all ease-linear duration-100"
              />
            </ul>
          </div>
        </Container>
      </nav>

      {/* Full Width Dropdown */}
      {isServicesOpen && servicesItem?.dropdown && (
        <div
          className="fixed left-0 top-[50px] w-screen bg-white shadow-soft py-12 px-20 grid grid-cols-3 gap-10 z-40 animate-fadeIn"
          onMouseEnter={() => setIsServicesOpen(true)}
          onMouseLeave={() => setIsServicesOpen(false)}
        >
          {servicesItem.dropdown.map((item, subIndex) => (
            <Link
              href={item.link}
              key={subIndex}
              className="flex items-start gap-4 hover:bg-gray-100 p-4 rounded-lg transition-all duration-200"
            >
              <Image
                src={item.icon}
                alt={item.title}
                width={80}
                height={80}
                className="flex-shrink-0"
              />
              <div>
                <h4 className="text-lg font-bold text-black font-primary">
                  {item.title}
                </h4>
                <p className="text-sm text-black-400 font-primary">
                  {item.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
