"use client";
import Link from "next/link";
import Button from "../components/common/button";
import Container from "../components/common/container";
import { FooterMenu } from "./menudata/menu";
import { FaFacebookSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";
import { useScrollToSection } from "../hooks/useScrollToSection";

const Footer = () => {
  const getFullYear = () => new Date().getFullYear();
  const scrollToSection = useScrollToSection();

  return (
    <>
      <footer>
        {/* CTA Section */}
        <div className="bg-gradient-to-br from-orange/10 via-white-200 to-orange/5 py-20 dark:from-gray-800/60 dark:via-gray-800/40 dark:to-gray-800/60 dark:backdrop-blur-md">
          <Container>
            <div className="text-center max-w-2xl mx-auto">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange rounded-xl mb-6">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <h2 className="font-primary font-bold text-4xl lg:text-5xl text-black-300 dark:text-white mb-4">
                Let's Work Together
              </h2>
              <p className="font-primary font-normal text-base text-black-400 dark:text-white/70 mb-8">
                Ready to bring your ideas to life? Let's collaborate and create
                something amazing together. Get in touch and let's start
                building!
              </p>
              <Link
                href="/how-it-works"
                target="_blank"
                className="inline-block"
              >
                <Button
                  text="Get In Touch →"
                  className="text-white font-primary font-semibold py-3 px-8 hover:bg-transparent border-1 border-primary-500 hover:text-primary-500 transition-all ease-linear duration-200 text-base"
                />
              </Link>
            </div>
          </Container>
        </div>

        {/* Footer Links Section */}
        <div className="bg-white dark:bg-gray-900 py-16">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
              {/* Contact Column */}
              <div className="lg:col-span-1">
                <h3 className="font-primary font-bold text-lg text-black-300 dark:text-white mb-6">
                  Contact
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MdPhone className="text-primary-500 text-xl mt-0.5 flex-shrink-0" />
                    <span className="font-primary text-sm text-black-400 dark:text-white/70">
                      +8801849702157
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <MdLocationOn className="text-primary-500 text-xl mt-0.5 flex-shrink-0" />
                    <span className="font-primary text-sm text-black-400 dark:text-white/70">
                      Dhaka, Bangladesh
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <MdEmail className="text-primary-500 text-xl mt-0.5 flex-shrink-0" />
                    <Link
                      href="mailto:alifazmiruddin@gmail.com"
                      className="font-primary text-sm text-black-400 dark:text-white/70 hover:text-orange dark:hover:text-orange transition-colors"
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
                      className="font-primary text-sm text-black-400 dark:text-white/70 hover:text-orange dark:hover:text-orange transition-colors"
                    >
                      About Me
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blogs"
                      className="font-primary text-sm text-black-400 dark:text-white/70 hover:text-orange dark:hover:text-orange transition-colors"
                    >
                      Blogs
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/my-works"
                      className="font-primary text-sm text-black-400 dark:text-white/70 hover:text-orange dark:hover:text-orange transition-colors"
                    >
                      Portfolio
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="font-primary text-sm text-black-400 dark:text-white/70 hover:text-orange dark:hover:text-orange transition-colors"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Services Column */}
              <div>
                <h3 className="font-primary font-bold text-lg text-black-300 dark:text-white mb-6">
                  Services
                </h3>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/service/web-application-development"
                      className="font-primary text-sm text-black-400 dark:text-white/70 hover:text-orange dark:hover:text-orange transition-colors"
                    >
                      Web Development
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/service/e-commerce-website-development"
                      className="font-primary text-sm text-black-400 dark:text-white/70 hover:text-orange dark:hover:text-orange transition-colors"
                    >
                      E-commerce
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/service/mobile-app-development"
                      className="font-primary text-sm text-black-400 dark:text-white/70 hover:text-orange dark:hover:text-orange transition-colors"
                    >
                      App Development
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/meeting/azmir"
                      className="font-primary text-sm text-black-400 dark:text-white/70 hover:text-orange dark:hover:text-orange transition-colors"
                    >
                      Technical Consulting
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
                      className="font-primary text-sm text-black-400 dark:text-white/70 hover:text-orange dark:hover:text-orange transition-colors"
                    >
                      Blog Posts
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/case-studies"
                      className="font-primary text-sm text-black-400 dark:text-white/70 hover:text-orange dark:hover:text-orange transition-colors"
                    >
                      Case Studies
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection("testimonials")}
                      className="font-primary text-sm text-black-400 dark:text-white/70 hover:text-orange dark:hover:text-orange transition-colors cursor-pointer"
                    >
                      Testimonials
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection("faq")}
                      className="font-primary text-sm text-black-400 dark:text-white/70 hover:text-orange dark:hover:text-orange transition-colors cursor-pointer"
                    >
                      FAQ
                    </button>
                  </li>
                </ul>
              </div>

              {/* Follow Us Column */}
              <div>
                <h3 className="font-primary font-bold text-lg text-black-300 dark:text-white mb-6">
                  Follow Me
                </h3>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="https://www.facebook.com/azmiruddinalif"
                      target="_blank"
                      className="font-primary text-sm text-black-400 dark:text-white/70 hover:text-orange dark:hover:text-orange transition-colors"
                    >
                      Facebook
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.linkedin.com/in/azmiruddinalif/"
                      target="_blank"
                      className="font-primary text-sm text-black-400 dark:text-white/70 hover:text-orange dark:hover:text-orange transition-colors"
                    >
                      LinkedIn
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://github.com/azmiruddinalif"
                      target="_blank"
                      className="font-primary text-sm text-black-400 dark:text-white/70 hover:text-orange dark:hover:text-orange transition-colors"
                    >
                      Github
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://x.com/azmiruddinalif"
                      target="_blank"
                      className="font-primary text-sm text-black-400 dark:text-white/70 hover:text-orange dark:hover:text-orange transition-colors"
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
            <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
              <span className="font-primary font-normal text-sm text-black-400 dark:text-white/70 text-center lg:text-left">
                ©Copyright {getFullYear()} Azmir Uddin Alif (Designed by
                <Link
                  href="https://www.ashikprottoy.com/"
                  className="hover:text-orange transition-colors ml-1"
                  target="_blank"
                >
                  Ashik Prottoy
                </Link>
                ) All rights reserved.
              </span>
              <ul className="flex items-center gap-6">
                {FooterMenu.map((data, index) => (
                  <li key={index}>
                    <Link
                      href={data.link}
                      className="font-primary font-normal text-sm text-black-400 dark:text-white/70 hover:text-orange dark:hover:text-orange transition-colors whitespace-nowrap"
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
