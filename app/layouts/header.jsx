"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Button from "../components/common/button";
import Container from "../components/common/container";
import { MenuData } from "./menudata/menu";

const Header = () => {
  const router = useRouter();
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const servicesItem = MenuData.find((item) => item.title === "Services");

  let hoverTimeout = null;

  const handleMouseEnter = () => {
    if (hoverTimeout) clearTimeout(hoverTimeout);
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    hoverTimeout = setTimeout(() => {
      setIsServicesOpen(false);
    }, 200);
  };

  // Initialize dark mode from localStorage
  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode) {
      setIsDarkMode(savedMode === "true");
    } else {
      // Check system preference
      setIsDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);
    }
  }, []);

  // Apply dark mode to document
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", isDarkMode.toString());
  }, [isDarkMode]);

  // Disable body scroll when sidebar is open
  useEffect(() => {
    document.body.style.overflow = sidebarOpen ? "hidden" : "";
  }, [sidebarOpen]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <header className="relative z-50">
      {/* Top Nav */}
      <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-7xl px-4">
        <nav
          className={`border rounded-2xl shadow-lg transition-all duration-300 py-2 lg:py-0 ${
            isDarkMode
              ? "bg-gray-900 border-gray-400/20"
              : "bg-white border border-white-200"
          }`}
        >
          <div className="px-6">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-4">
                <Image
                  src="/assets/logo.svg"
                  alt="logo"
                  width={110}
                  height={110}
                />
              </Link>

              {/* Desktop Menu */}
              <ul className="hidden md:flex items-center justify-end">
                {MenuData.map((data, index) => (
                  <li
                    key={index}
                    className={`relative group font-primary font-normal text-sm lg:text-base ${
                      isDarkMode ? "text-gray-200" : "text-black-200"
                    }`}
                    onMouseEnter={
                      data.title === "Services" ? handleMouseEnter : undefined
                    }
                    onMouseLeave={
                      data.title === "Services" ? handleMouseLeave : undefined
                    }
                  >
                    <Link
                      href={data.link}
                      className="relative inline-block px-4 md:px-3 lg:px-6 py-6 text-xs lg:text-base"
                    >
                      <span
                        className={`after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[3px] after:transition-all after:duration-300 group-hover:after:w-full ${
                          isDarkMode ? "after:bg-white" : "after:bg-black"
                        }`}
                      >
                        {data.title}
                      </span>
                    </Link>

                    {/* Desktop Dropdown */}
                    {data.title === "Services" &&
                      isServicesOpen &&
                      servicesItem?.dropdown && (
                        <div
                          className={`absolute left-0 top-full mt-2 shadow-lg rounded-lg border py-2 w-[320px] z-40 animate-fadeIn ${
                            isDarkMode
                              ? "bg-gray-800 border-gray-600"
                              : "bg-white border-gray-200"
                          }`}
                        >
                          {servicesItem.dropdown.map((item, subIndex) => (
                            <div
                              key={subIndex}
                              onClick={() => {
                                setIsServicesOpen(false);
                                router.push(item.link);
                              }}
                              className={`px-4 py-2 cursor-pointer transition-colors duration-200 ${
                                isDarkMode
                                  ? "hover:bg-gray-700 text-gray-200"
                                  : "hover:bg-gray-100 text-gray-800"
                              }`}
                            >
                              <span className="text-sm font-medium">
                                {item.title}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                  </li>
                ))}

                {/* Dark Mode Toggle */}
                <li className="ml-4">
                  <button
                    onClick={toggleDarkMode}
                    className={`p-2 rounded-lg transition-colors duration-200 ${
                      isDarkMode
                        ? "hover:bg-gray-700 text-gray-200"
                        : "hover:bg-gray-100 text-gray-700"
                    }`}
                    aria-label="Toggle dark mode"
                  >
                    {isDarkMode ? (
                      // Sun icon for light mode
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                        />
                      </svg>
                    ) : (
                      // Moon icon for dark mode
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                        />
                      </svg>
                    )}
                  </button>
                </li>

                <Link href="/meeting/azmir" target="_blank">
                  <Button
                    text="Hire Me"
                    className="text-white font-primary font-semibold py-2 ml-5 hover:bg-transparent border border-orange hover:text-orange transition-all ease-linear duration-100 text-xs lg:text-base"
                  />
                </Link>
              </ul>

              {/* Mobile Menu Items */}
              <div className="md:hidden flex items-center gap-3">
                {/* Dark Mode Toggle - Mobile */}
                <button
                  onClick={toggleDarkMode}
                  className={`p-2 rounded-lg transition-colors duration-200 ${
                    isDarkMode
                      ? "hover:bg-gray-700 text-gray-200"
                      : "hover:bg-gray-100 text-gray-700"
                  }`}
                  aria-label="Toggle dark mode"
                >
                  {isDarkMode ? (
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                      />
                    </svg>
                  )}
                </button>

                {/* Hamburger Icon */}
                <button
                  onClick={() => setSidebarOpen(true)}
                  className="flex items-center justify-center p-2 focus:outline-none"
                  aria-label="Open Menu"
                >
                  <svg
                    className={`w-8 h-8 ${
                      isDarkMode ? "text-gray-200" : "text-black-200"
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
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* Sidebar - Mobile */}
      <div
        className={`fixed top-0 right-0 h-full w-[280px] shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        } ${isDarkMode ? "bg-gray-800" : "bg-white"}`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button
            onClick={() => setSidebarOpen(false)}
            aria-label="Close Menu"
            className="p-2 focus:outline-none"
          >
            <svg
              className={`w-6 h-6 ${
                isDarkMode ? "text-gray-200" : "text-black-200"
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
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
        <nav
          className={`flex flex-col px-6 gap-6 font-primary ${
            isDarkMode ? "text-gray-200" : "text-black-200"
          }`}
        >
          {MenuData.map((data, index) => {
            if (data.title === "Services" && data.dropdown) {
              return (
                <div key={index}>
                  <button
                    onClick={() => setIsServicesOpen((prev) => !prev)}
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
                          className={`font-normal transition-colors ${
                            isDarkMode
                              ? "hover:text-gray-400"
                              : "hover:text-black-400"
                          }`}
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
          <Link href="/meeting/azmir" target="_blank">
            <Button
              text="Hire Me"
              className="text-white font-primary font-semibold py-2 ml-5 hover:bg-transparent border border-orange hover:text-orange transition-all ease-linear duration-100"
            />
          </Link>
        </div>
      </div>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className={`fixed inset-0 z-40 transition-all duration-300
      ${
        isDarkMode
          ? "bg-black/40 backdrop-blur-md"
          : "bg-white/40 backdrop-blur-md"
      }`}
          onClick={() => setSidebarOpen(false)}
          aria-hidden="true"
        />
      )}
    </header>
  );
};

export default Header;
