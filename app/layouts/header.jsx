import React from "react";
import { MenuData } from "./menudata/menu";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/30 border-b border-b-white-100 transition-all duration-300">
      <div className="flex items-center justify-between px-5 max-w-[95%] mx-auto">
        <div>
          <Image src="/assets/logo.svg" alt="logo" width={80} height={80} />
        </div>
        <ul className="flex items-center justify-end">
          {MenuData.map((data, index) => (
            <li
              key={index}
              className="font-primary font-normal text-base relative group text-black-200"
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
        </ul>
      </div>
    </nav>
  );
};

export default Header;
