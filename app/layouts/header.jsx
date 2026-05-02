"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { MenuData } from "./menudata/menu";
import { useScrollToSection } from "../hooks/useScrollToSection";

const Header = () => {
  const router = useRouter();
  const scrollToSection = useScrollToSection();

  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const servicesItem = MenuData.find((item) => item.title === "Specialization");
  let hoverTimeout = null;

  // Hover behavior for desktop
  const handleMouseEnter = () => {
    if (hoverTimeout) clearTimeout(hoverTimeout);
    setIsServicesOpen(true);
  };
  const handleMouseLeave = () => {
    hoverTimeout = setTimeout(() => setIsServicesOpen(false), 200);
  };

  // Initialize dark mode
  useEffect(() => {
    const saved = localStorage.getItem("darkMode");
    if (saved) setIsDarkMode(saved === "true");
    else setIsDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);
  }, []);

  // Apply dark mode class
  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
    localStorage.setItem("darkMode", isDarkMode.toString());
  }, [isDarkMode]);

  // Lock body scroll when sidebar open
  useEffect(() => {
    document.body.style.overflow = sidebarOpen ? "hidden" : "";
  }, [sidebarOpen]);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  const handleScrollOrNavigate = (link) => {
    if (link.startsWith("#")) {
      const id = link.replace("#", "");
      scrollToSection(id);
    } else {
      router.push(link);
    }
  };

  return (
    <header className="relative z-50">
      <div
        id="site-header"
        className={`fixed left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ease-out ${
          isScrolled ? "top-0 w-full" : "top-4 w-full max-w-7xl px-4"
        }`}
      >
        <nav
          className={`transition-all duration-500 ease-out py-2 md:py-0 ${
            isScrolled
              ? "rounded-none shadow-2xl backdrop-blur-xl border-b"
              : "rounded-2xl shadow-lg"
          } ${
            isDarkMode
              ? isScrolled
                ? "bg-gray-900/80 border-gray-400/30"
                : "bg-gray-900 border border-gray-400/20"
              : isScrolled
              ? "bg-white/80 border-gray-200/50"
              : "bg-white border border-white/50"
          }`}
        >
          <div className={`transition-all duration-500 ${isScrolled ? "px-6 max-w-7xl mx-auto" : "px-6"}`}>
            <div className="flex items-center justify-between">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-4" prefetch>
                <Image
                  src="/assets/logo.svg"
                  alt="logo"
                  width={110}
                  height={110}
                  placeholder="blur"
                  loading="lazy"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/w8AAgMBgA1bK9cAAAAASUVORK5CYII="
                />
              </Link>

              {/* Desktop Menu */}
              <ul className="hidden md:flex items-center justify-end">
                {MenuData.map((data, index) => (
                  <li
                    key={index}
                    className={`relative group font-secondary font-medium text-sm lg:text-base ${
                      isDarkMode ? "text-gray-200" : "text-black-200"
                    }`}
                    onMouseEnter={data.title === "Specialization" ? handleMouseEnter : undefined}
                    onMouseLeave={data.title === "Specialization" ? handleMouseLeave : undefined}
                  >
                    {data.title === "Specialization" ? (
                      // Non-clickable dropdown trigger
                      <span className="relative inline-block px-4 md:px-3 lg:px-6 py-6 cursor-pointer hover:text-orange dark:hover:text-white select-none">
                        <span
                          className={`after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[3px] after:transition-all after:duration-300 ${
                            isDarkMode ? "after:bg-white" : "after:bg-orange"
                          } ${
                            isServicesOpen
                              ? "after:w-full text-orange dark:text-white"
                              : "after:w-0 group-hover:after:w-full"
                          }`}
                        >
                          {data.title}
                        </span>
                      </span>
                    ) : (
                      <Link
                        href={data.link}
                        prefetch
                        onClick={() => {
                          if (data.link.startsWith("#")) handleScrollOrNavigate(data.link);
                        }}
                        className="relative inline-block px-4 md:px-3 lg:px-6 py-6 hover:text-orange dark:hover:text-white text-xs lg:text-base cursor-pointer"
                      >
                        <span
                          className={`after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[3px] after:transition-all after:duration-300 ${
                            isDarkMode ? "after:bg-white" : "after:bg-orange"
                          } after:w-0 group-hover:after:w-full`}
                        >
                          {data.title}
                        </span>
                      </Link>
                    )}

                    {/* Services Dropdown */}
                    {data.title === "Specialization" &&
                      isServicesOpen &&
                      servicesItem?.dropdown && (
                        <div
                          className={`absolute left-0 top-full mt-2 shadow-lg rounded-lg border py-2 w-[320px] z-40 animate-fadeIn ${
                            isDarkMode
                              ? "bg-gray-800/95 border-gray-600"
                              : "bg-white/95 border-gray-200"
                          }`}
                        >
                          {servicesItem.dropdown.map((item, subIndex) => (
                            <Link
                              key={subIndex}
                              href={item.link}
                              prefetch
                              onClick={() => setIsServicesOpen(false)}
                              className={`block px-4 py-2 transition-colors duration-200 ${
                                isDarkMode
                                  ? "hover:bg-gray-700 text-gray-200"
                                  : "hover:bg-gray-100 text-gray-800"
                              }`}
                            >
                              <span className="text-sm font-medium">{item.title}</span>
                            </Link>
                          ))}
                        </div>
                      )}
                  </li>
                ))}

                {/* Dark mode toggle */}
                <li className="ml-4">
                  <button
                    onClick={toggleDarkMode}
                    className={`p-2 rounded-lg transition-colors duration-200 cursor-pointer ${
                      isDarkMode
                        ? "hover:bg-gray-700 text-gray-200"
                        : "hover:bg-gray-100 text-gray-700"
                    }`}
                    aria-label="Toggle dark mode"
                  >
                    {isDarkMode ? (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                      </svg>
                    )}
                  </button>
                </li>


              </ul>

              {/* Mobile Menu Icon */}
              <div className="md:hidden flex items-center gap-3">
                <button
                  onClick={toggleDarkMode}
                  className={`p-2 rounded-lg cursor-pointer ${
                    isDarkMode
                      ? "hover:bg-gray-700 text-gray-200"
                      : "hover:bg-gray-100 text-gray-700"
                  }`}
                >
                  {isDarkMode ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                  )}
                </button>

                <button onClick={() => setSidebarOpen(true)} className="p-2 focus:outline-none cursor-pointer">
                  <svg className={`w-8 h-8 ${isDarkMode ? "text-gray-200" : "text-black-200"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className={`fixed inset-0 z-40 ${isDarkMode ? "bg-black/40 backdrop-blur-md" : "bg-white/40 backdrop-blur-md"}`}
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-[280px] shadow-lg z-50 transform transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        } ${isDarkMode ? "bg-gray-800" : "bg-white"}`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setSidebarOpen(false)} aria-label="Close Menu" className="p-2">
            <svg className={`w-6 h-6 ${isDarkMode ? "text-gray-200" : "text-black-200"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        <nav className={`flex flex-col px-6 gap-4 font-secondary font-medium ${isDarkMode ? "text-gray-200" : "text-black-200"}`}>
          {MenuData.map((data, index) => (
            <div key={index}>
              {data.title === "Specialization" ? (
                <>
                  <span
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className="flex justify-between items-center w-full text-left text-lg py-2 cursor-pointer select-none"
                  >
                    {data.title}
                    <span className={`transform transition-transform ${isServicesOpen ? "rotate-180" : "rotate-0"}`}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-black-200 dark:text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </span>
                  {isServicesOpen && (
                    <div className="space-y-2 pl-4">
                      {data.dropdown?.map((item, subIndex) => (
                        <Link
                          key={subIndex}
                          href={item.link}
                          prefetch
                          onClick={() => {
                            setSidebarOpen(false);
                            setIsServicesOpen(false);
                          }}
                          className="block text-xs py-1 hover:text-orange text-left"
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={data.link}
                  prefetch
                  onClick={() => setSidebarOpen(false)}
                  className="text-left text-lg py-2"
                >
                  {data.title}
                </Link>
              )}
            </div>
          ))}
        </nav>


      </div>
    </header>
  );
};

export default Header;
