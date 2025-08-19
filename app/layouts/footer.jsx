import Link from "next/link";
import Button from "../components/common/button";
import Container from "../components/common/container";
import { FooterMenu } from "./menudata/menu";
import { FaFacebookSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

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
              <Link href="/how-it-works" target="_blank">
                <Button
                  text="Get in touch"
                  className="text-white font-primary font-normal py-3 mt-5 mb-3 mx-auto hover:bg-transparent border border-black-100 hover:text-black-100 transition-all ease-linear duration-100"
                />
              </Link>
              <span className="font-primary font-normal text-xs text-black-300 max-w-[240px] mx-auto block">
                Opportunities like this don't come twice it's a small world, so
                make it count.
              </span>
              <div className="flex justify-center gap-x-2 mt-3">
                <Link href="https://www.facebook.com/Azmir02" target="_blank">
                  <FaFacebookSquare size={25} color="#333333" />
                </Link>
                <Link href="https://x.com/azmiruddinalif" target="_blank">
                  <FaSquareXTwitter size={25} color="#333333" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/azmiruddinalif/"
                  target="_blank"
                >
                  <FaLinkedin size={25} color="#333333" />
                </Link>
                <Link href="https://github.com/azmiruddinalif" target="_blank">
                  <FaGithubSquare size={25} color="#333333" />
                </Link>
              </div>
            </div>
          </Container>
        </div>
        <div className="flex flex-col lg:flex-row gap-5 items-center px-5 max-w-[95%] mx-auto bg-white py-3 justify-between">
          <span className="font-primary font-semibold text-black-400 text-sm lg:text-base">
            &copy;{getFullYear()} Azmir Uddin Alif (Inspired by
            {
              <Link
                href="https://www.ashikprottoy.com/"
                className="underline"
                target="_blank"
              >
                {" "}
                Ashik Prottoy
              </Link>
            }
            )
          </span>
          <ul className="flex items-center justify-end">
            {FooterMenu.map((data, index) => (
              <li
                key={index}
                className="font-primary font-normal text-xs lg:text-base relative text-black-400 hover:text-black"
              >
                <Link href={data.link} className="inline-block px-2 lg:px-6">
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
