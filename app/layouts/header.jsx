"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Button from "../components/common/button";
import Container from "../components/common/container";
import { MenuData } from "./menudata/menu";

const Header = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const servicesItem = MenuData.find((item) => item.title === "Services");

  let hoverTimeout = null;

  const handleMouseEnter = () => {
    if (hoverTimeout) clearTimeout(hoverTimeout);
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    hoverTimeout = setTimeout(() => {
      setIsServicesOpen(false);
    }, 200); // 200ms delay before closing
  };

  // Disable body scroll when sidebar is open
  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [sidebarOpen]);

  return (
    <header className="relative z-50">
      {/* Top Nav */}
      <nav className="fixed top-0 left-0 w-full backdrop-blur-md bg-white/30 border-b border-b-white-100 transition-all duration-300 z-50">
        <Container>
          <div className="flex items-center justify-between py-2 lg:py-0">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-4">
              <Image
                src="/assets/logo.svg"
                alt="logo"
                width={150}
                height={150}
              />
            </Link>

            {/* Desktop Menu */}
            <ul className="hidden md:flex items-center justify-end">
              {MenuData.map((data, index) => (
                <li
                  key={index}
                  className="relative group font-primary font-normal text-base text-black-200"
                  onMouseEnter={
                    data.title === "Services" ? handleMouseEnter : undefined
                  }
                  onMouseLeave={
                    data.title === "Services" ? handleMouseLeave : undefined
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

                  {data.title === "Services" &&
                    isServicesOpen &&
                    servicesItem?.dropdown && (
                      <div
                        className="hidden fixed left-0 top-[100px] w-screen bg-white shadow-soft py-12 px-20 lg:grid grid-cols-3 gap-10 z-40 animate-fadeIn"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
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
                </li>
              ))}
              <Link
                href="https://www.upwork.com/freelancers/~014fe9b65d77d048f1"
                target="_blank"
              >
                <Button
                  text="Hire Me"
                  className="text-white font-primary font-semibold py-2 ml-5 hover:bg-transparent border border-black-100 hover:text-black-100 transition-all ease-linear duration-100"
                />
              </Link>
            </ul>

            {/* Hamburger Icon - Mobile */}
            <button
              onClick={() => setSidebarOpen(true)}
              className="md:hidden flex items-center justify-center p-2 focus:outline-none"
              aria-label="Open Menu"
            >
              <svg
                className="w-8 h-8 text-black-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </Container>
      </nav>

      {/* Full Width Dropdown - Desktop Services */}
      {isServicesOpen && servicesItem?.dropdown && (
        <div
          className="hidden fixed left-0 top-[50px] w-screen bg-white shadow-soft py-12 px-20 lg:grid grid-cols-3 gap-10 z-40 animate-fadeIn"
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

      {/* Sidebar - Mobile */}
      <div
        className={`fixed top-0 right-0 h-full w-[280px] bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out
          ${sidebarOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button
            onClick={() => setSidebarOpen(false)}
            aria-label="Close Menu"
            className="p-2 focus:outline-none"
          >
            <svg
              className="w-6 h-6 text-black-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>

        {/* Sidebar Links */}
        <nav className="flex flex-col px-6 gap-6 font-primary text-black-200">
          {MenuData.map((data, index) => {
            if (data.title === "Services" && data.dropdown) {
              return (
                <div key={index}>
                  <button
                    onClick={() =>
                      setIsServicesOpen((prev) =>
                        sidebarOpen && isServicesOpen ? false : true
                      )
                    }
                    className="w-full text-left flex justify-between items-center font-semibold text-lg"
                  >
                    <span className="font-primary text-base font-bold">
                      {data.title}
                    </span>
                    <svg
                      className={`w-5 h-5 transition-transform duration-300 ${
                        isServicesOpen ? "rotate-180" : "rotate-0"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </button>

                  {isServicesOpen && (
                    <div className="mt-2 flex flex-col gap-3 pl-4">
                      {data.dropdown.map((subItem, subIndex) => (
                        <Link
                          href={subItem.link}
                          key={subIndex}
                          className="hover:text-black-400 font-normal"
                          onClick={() => setSidebarOpen(false)}
                        >
                          <span className="font-primary text-sm">
                            {subItem.title}
                          </span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            } else {
              return (
                <Link
                  href={data.link}
                  key={index}
                  className="font-semibold text-lg"
                  onClick={() => setSidebarOpen(false)}
                >
                  <span className="font-primary text-base font-bold">
                    {data.title}
                  </span>
                </Link>
              );
            }
          })}
        </nav>

        {/* CTA Button */}
        <div className="absolute bottom-8 left-0 w-full px-6">
          <Link
            href="https://www.upwork.com/freelancers/~014fe9b65d77d048f1"
            target="_blank"
          >
            <Button
              text="Hire Me"
              className="text-white font-primary font-semibold py-2 ml-5 hover:bg-transparent border border-black-100 hover:text-black-100 transition-all ease-linear duration-100"
            />
          </Link>
        </div>
      </div>

      {/* Glassy Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-white bg-opacity-20 backdrop-blur-sm z-40"
          onClick={() => setSidebarOpen(false)}
          aria-hidden="true"
        />
      )}
    </header>
  );
};

export default Header;
