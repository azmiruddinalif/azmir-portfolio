import React from "react";
import CardBase from "../../common/Card";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineArrowRightAlt } from "react-icons/md";

const ProjectBody = () => {
  return (
    <>
      <div className="grid lg:grid-cols-3 gap-x-8 gap-y-8 lg:gap-y-0 mt-6 lg:mt-14">
        <CardBase className="lg:group">
          <CardBase.Header>
            <div className="w-full border border-black-800 overflow-hidden rounded-lg transition-transform duration-300 ease-in-out group-hover:scale-105">
              <Image src="/assets/1.png" alt="1" width={500} height={500} />
            </div>
          </CardBase.Header>
          <CardBase.Body className="transition-transform duration-300 ease-in-out group-hover:scale-105 mt-3">
            <h5 className="font-primary text-lg font-semibold text-black-100 ">
              B2B
            </h5>
            <p className="font-primary text-base text-black-200">
              Logensa is a scalable SaaS startup based in Baden-Württemberg,
              Germany, focused on the healthcare sector.
            </p>
          </CardBase.Body>
          <CardBase.Footer className="transition-transform duration-300 ease-in-out group-hover:scale-105">
            <div className="mt-3">
              <Link
                href="/"
                className="flex items-center gap-x-2 font-primary font-semibold text-base"
              >
                Details <MdOutlineArrowRightAlt size={20} />
              </Link>
            </div>
          </CardBase.Footer>
        </CardBase>

        <CardBase className="lg:group">
          <CardBase.Header>
            <div className="w-full border border-black-800 overflow-hidden rounded-lg transition-transform duration-300 ease-in-out group-hover:scale-105">
              <Image src="/assets/2.png" alt="2" width={500} height={500} />
            </div>
          </CardBase.Header>
          <CardBase.Body className="transition-transform duration-300 ease-in-out group-hover:scale-105 mt-3">
            <h5 className="font-primary text-lg font-semibold text-black-100 ">
              B2C
            </h5>
            <p className="font-primary text-base text-black-200">
              bock lighting, founded in 2009 and headquartered in Twinsburg,
              Ohio, continues the legacy of Spero Electric.
            </p>
          </CardBase.Body>
          <CardBase.Footer className="transition-transform duration-300 ease-in-out group-hover:scale-105">
            <div className="mt-3">
              <Link
                href="/"
                className="flex items-center gap-x-2 font-primary font-semibold text-base"
              >
                Details <MdOutlineArrowRightAlt size={20} />
              </Link>
            </div>
          </CardBase.Footer>
        </CardBase>

        <CardBase className="lg:group">
          <CardBase.Header>
            <div className="w-full border border-black-800 overflow-hidden rounded-lg transition-transform duration-300 ease-in-out group-hover:scale-105">
              <Image src="/assets/3.png" alt="3" width={500} height={500} />
            </div>
          </CardBase.Header>
          <CardBase.Body className="transition-transform duration-300 ease-in-out group-hover:scale-105 mt-3">
            <h5 className="font-primary text-lg font-semibold text-black-100 ">
              B2C
            </h5>
            <p className="font-primary text-base text-black-200">
              Campix.ai is an AI-driven advertising platform that automates
              campaign creation across major channels.
            </p>
          </CardBase.Body>
          <CardBase.Footer className="transition-transform duration-300 ease-in-out group-hover:scale-105">
            <div className="mt-3">
              <Link
                href="/"
                className="flex items-center gap-x-2 font-primary font-semibold text-base"
              >
                Details <MdOutlineArrowRightAlt size={20} />
              </Link>
            </div>
          </CardBase.Footer>
        </CardBase>
      </div>
    </>
  );
};

export default ProjectBody;
