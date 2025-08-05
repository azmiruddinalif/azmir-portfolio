import React from "react";
import Container from "../components/common/container";
import Button from "../components/common/button";
import { FooterMenu } from "./menudata/menu";
import Link from "next/link";

const Footer = () => {
  const getFullYear = () => new Date().getFullYear();
  return (
    <>
      <footer>
        <div className="bg-white-200  py-12">
          <Container>
            <div className="text-center">
              <h5 className="font-primary font-bold text-3xl max-w-[400px] mx-auto leading-12 text-black-300">
                Looks like you’re serious about getting stuff done!
              </h5>
              <Button
                text="Get in touch"
                className="text-white font-primary font-normal py-3 mt-5 mb-3 mx-auto hover:bg-transparent border border-black-100 hover:text-black-100 transition-all ease-linear duration-100"
              />
              <span className="font-primary font-normal text-xs text-black-300 max-w-[240px] mx-auto block">
                Opportunities like this don't come twice it's a small world, so
                make it count.
              </span>
            </div>
          </Container>
        </div>
        <div className="flex items-center px-5 max-w-[95%] mx-auto bg-white py-3 justify-between">
          <span className="font-primary font-semibold text-black-800">
            &copy;{getFullYear()} Dev Azmir
          </span>
          <ul className="flex items-center justify-end">
            {FooterMenu.map((data, index) => (
              <li
                key={index}
                className="font-primary font-normal text-base relative text-black-400 hover:text-black"
              >
                <Link href={data.link} className="inline-block px-6">
                  {data.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
