import Image from "next/image";
import Link from "next/link";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import CardBase from "../../common/Card";

const ProjectBody = () => {
  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8 lg:gap-y-0 mt-6 lg:mt-14">
        <Link href="/my-work/linquo">
          <CardBase className="group dark:bg-gray-900">
            <CardBase.Header>
              <div className="w-full border border-black-800 overflow-hidden rounded-lg transition-transform duration-300 ease-in-out group-hover:scale-105">
                <Image
                  src="/assets/4.png"
                  alt="3"
                  width={500}
                  height={500}
                  placeholder="blur"
                  loading="lazy"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/w8AAgMBgA1bK9cAAAAASUVORK5CYII="
                />
              </div>
            </CardBase.Header>
            <CardBase.Body className="transition-transform duration-300 ease-in-out group-hover:scale-105 mt-3">
              <h5 className="font-primary text-lg font-semibold text-black-100 dark:text-white">
                B2C
              </h5>
              <p className="font-secondary text-base text-black-200 dark:text-white/80">
                An AI-powered chatbot system built to assist users in real-time
                with website analytics.{" "}
              </p>
            </CardBase.Body>
            <CardBase.Footer className="transition-transform duration-300 ease-in-out group-hover:scale-105 dark:text-white">
              <div className="mt-3">
                <div className="flex items-center gap-x-2 font-secondary font-medium text-base">
                  Details <MdOutlineArrowRightAlt size={20} />
                </div>
              </div>
            </CardBase.Footer>
          </CardBase>
        </Link>

        <Link href="/my-work/logensa">
          <CardBase className="group dark:bg-gray-900">
            <CardBase.Header>
              <div className="w-full border border-black-800 dark:border-white-300 overflow-hidden rounded-lg transition-transform duration-300 ease-in-out group-hover:scale-105">
                <Image
                  src="/assets/1.png"
                  alt="1"
                  width={500}
                  height={500}
                  placeholder="blur"
                  loading="lazy"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/w8AAgMBgA1bK9cAAAAASUVORK5CYII="
                />
              </div>
            </CardBase.Header>
            <CardBase.Body className="transition-transform duration-300 ease-in-out group-hover:scale-105 mt-3">
              <h5 className="font-primary text-lg font-semibold text-black-100 dark:text-white">
                B2B
              </h5>
              <p className="font-secondary text-base text-black-200 dark:text-white/80">
                Logensa is a scalable healthcare SaaS startup in
                Baden-Württemberg, Germany.
              </p>
            </CardBase.Body>
            <CardBase.Footer className="transition-transform duration-300 ease-in-out group-hover:scale-105 dark:text-white">
              <div className="mt-3">
                <div className="flex items-center gap-x-2 font-secondary font-medium text-base">
                  Details <MdOutlineArrowRightAlt size={20} />
                </div>
              </div>
            </CardBase.Footer>
          </CardBase>
        </Link>

        <Link href="/my-work/bocklight">
          <CardBase className="group dark:bg-gray-900">
            <CardBase.Header>
              <div className="w-full border border-black-800 overflow-hidden rounded-lg transition-transform duration-300 ease-in-out group-hover:scale-105">
                <Image
                  src="/assets/2.png"
                  alt="2"
                  width={500}
                  height={500}
                  placeholder="blur"
                  loading="lazy"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/w8AAgMBgA1bK9cAAAAASUVORK5CYII="
                />
              </div>
            </CardBase.Header>
            <CardBase.Body className="transition-transform duration-300 ease-in-out group-hover:scale-105 mt-3 ">
              <h5 className="font-primary text-lg font-semibold text-black-100 dark:text-white">
                B2C
              </h5>
              <p className="font-secondary text-base text-black-200 dark:text-white/80">
                Bock Lighting (2009, Twinsburg, Ohio) continues Spero Electric’s
                legacy.{" "}
              </p>
            </CardBase.Body>
            <CardBase.Footer className="transition-transform duration-300 ease-in-out group-hover:scale-105 dark:text-white">
              <div className="mt-3">
                <div className="flex items-center gap-x-2 font-secondary font-medium text-base">
                  Details <MdOutlineArrowRightAlt size={20} />
                </div>
              </div>
            </CardBase.Footer>
          </CardBase>
        </Link>
      </div>
    </>
  );
};

export default ProjectBody;
