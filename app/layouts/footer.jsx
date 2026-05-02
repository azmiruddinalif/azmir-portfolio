"use client";
import Link from "next/link";
import Button from "../components/common/button";
import Container from "../components/common/container";
import { FooterMenu } from "./menudata/menu";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";
import { useScrollToSection } from "../hooks/useScrollToSection";

const Footer = () => {
  const getFullYear = () => new Date().getFullYear();
  const scrollToSection = useScrollToSection();

  return (
    <>
      <footer>


        {/* Footer Links Section */}
        <div className="bg-white dark:bg-gray-900 py-16">
          <Container>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-10 text-center sm:text-left">
              {/* Contact Column */}
              <div>
                <h3 className="font-primary font-bold text-lg text-black-300 dark:text-white mb-6">
                  Contact
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center sm:items-start gap-3 justify-center sm:justify-start">
                    <MdPhone className="text-primary-500 text-xl flex-shrink-0" />
                    <span className="font-secondary text-sm text-black-400 dark:text-white/70">
                      +8801849702157
                    </span>
                  </div>
                  <div className="flex items-center sm:items-start gap-3 justify-center sm:justify-start">
                    <MdLocationOn className="text-primary-500 text-xl flex-shrink-0" />
                    <span className="font-secondary text-sm text-black-400 dark:text-white/70">
                      Dhaka, Bangladesh
                    </span>
                  </div>
                  <div className="flex items-center sm:items-start gap-3 justify-center sm:justify-start">
                    <MdEmail className="text-primary-500 text-xl flex-shrink-0" />
                    <Link
                      href="mailto:alifazmiruddin@gmail.com"
                      className="font-secondary text-sm text-black-400 dark:text-white/70 hover:text-orange dark:hover:text-orange transition-colors"
                    >
                      alifazmiruddin@gmail.com
                    </Link>
                  </div>
                </div>
              </div>

              {/* Navigate Column */}
              <div>
                <h3 className="font-primary font-bold text-lg text-black-300 dark:text-white mb-6">
                  Navigate
                </h3>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/about-me"
                      className="font-secondary text-sm text-black-400 dark:text-white/70 hover:text-orange transition-colors"
                    >
                      About Me
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blogs"
                      className="font-secondary text-sm text-black-400 dark:text-white/70 hover:text-orange transition-colors"
                    >
                      Blogs
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/my-works"
                      className="font-secondary text-sm text-black-400 dark:text-white/70 hover:text-orange transition-colors"
                    >
                      Portfolio
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="font-secondary text-sm text-black-400 dark:text-white/70 hover:text-orange transition-colors"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Services Column */}
              <div>
                <h3 className="font-primary font-bold text-lg text-black-300 dark:text-white mb-6">
                  Specialization
                </h3>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/service/web-application-development"
                      className="font-secondary text-sm text-black-400 dark:text-white/70 hover:text-orange transition-colors"
                    >
                      Web Development
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/service/e-commerce-website-development"
                      className="font-secondary text-sm text-black-400 dark:text-white/70 hover:text-orange transition-colors"
                    >
                      E-commerce
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/service/mobile-app-development"
                      className="font-secondary text-sm text-black-400 dark:text-white/70 hover:text-orange transition-colors"
                    >
                      App Development
                    </Link>
                  </li>

                </ul>
              </div>

              {/* Resources Column */}
              <div>
                <h3 className="font-primary font-bold text-lg text-black-300 dark:text-white mb-6">
                  Resources
                </h3>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/blogs"
                      target="_blank"
                      className="font-secondary text-sm text-black-400 dark:text-white/70 hover:text-orange transition-colors"
                    >
                      Blog Posts
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/case-studies"
                      target="_blank"
                      className="font-secondary text-sm text-black-400 dark:text-white/70 hover:text-orange transition-colors"
                    >
                      Case Studies
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection("testimonials")}
                      className="font-secondary text-sm text-black-400 dark:text-white/70 hover:text-orange transition-colors cursor-pointer"
                    >
                      Testimonials
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection("faq")}
                      className="font-secondary text-sm text-black-400 dark:text-white/70 hover:text-orange transition-colors cursor-pointer"
                    >
                      FAQ
                    </button>
                  </li>
                </ul>
              </div>

              {/* Follow Me Column */}
              <div>
                <h3 className="font-primary font-bold text-lg text-black-300 dark:text-white mb-6">
                  Follow Me
                </h3>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="https://www.facebook.com/azmiruddinalif"
                      target="_blank"
                      className="font-secondary text-sm text-black-400 dark:text-white/70 hover:text-orange transition-colors"
                    >
                      Facebook
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.linkedin.com/in/azmiruddinalif/"
                      target="_blank"
                      className="font-secondary text-sm text-black-400 dark:text-white/70 hover:text-orange transition-colors"
                    >
                      LinkedIn
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://github.com/azmiruddinalif"
                      target="_blank"
                      className="font-secondary text-sm text-black-400 dark:text-white/70 hover:text-orange transition-colors"
                    >
                      Github
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://x.com/azmiruddinalif"
                      target="_blank"
                      className="font-secondary text-sm text-black-400 dark:text-white/70 hover:text-orange transition-colors"
                    >
                      Twitter
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </Container>
        </div>

        {/* Copyright Section */}
        <div className="bg-white-200 dark:bg-gray-800/40 py-6 border-t border-gray-200 dark:border-gray-700">
          <Container>
            <div className="flex flex-col lg:flex-row items-center justify-between gap-4 text-center lg:text-left">
              <span className="font-secondary font-normal text-sm text-black-400 dark:text-white/70">
                © Copyright {getFullYear()} All rights reserved.
              </span>
              <ul className="flex flex-wrap items-center justify-center lg:justify-end gap-4 sm:gap-6">
                {FooterMenu.map((data, index) => (
                  <li key={index}>
                    <Link
                      href={data.link}
                      className="font-secondary font-normal text-sm text-black-400 dark:text-white/70 hover:text-orange transition-colors whitespace-nowrap"
                    >
                      {data.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Container>
        </div>
      </footer>
    </>
  );
};

export default Footer;
