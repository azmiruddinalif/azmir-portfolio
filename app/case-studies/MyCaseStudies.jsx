"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { BsCalendar3 } from "react-icons/bs";
import Button from "../components/common/button";
import CaseStudyCard from "../components/case-study/CaseStudyCard";

const MyCaseStudies = ({ data }) => {
  const router = useRouter();

  const handleProjectClick = (slug) => {
    router.push(`/case-studies/${slug}`);
  };

  const handleBookCall = () => {
    window.open("/meeting/azmir", "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <div className="my-28 lg:my-[200px] cursor-pointer" role="button">
        <div className="order-1 lg:order-[0] text-center lg:text-left flex justify-between">
          <div className="w-full flex flex-col lg:flex-row items-center justify-between">
            <div className="max-w-[550px] order-1 lg:order-[0] text-center lg:text-left mt-5 lg:mt-0">
              <h4 className="font-primary text-xl text-black-200 font-bold dark:text-white/70">
                🧠 My Case Studies
              </h4>
              <h1 className="font-primary text-5xl font-bold text-black-200 mt-2 dark:text-white">
                Ideas to Impact.
              </h1>
              <p className="max-w-[550px] mt-3 text-black-300 font-primary dark:text-white/70">
                I build fast, scalable web and mobile apps with{" "}
                <strong>MERN Stack</strong>,<strong>Next.js</strong>, and{" "}
                <strong>React Native</strong>. Each case study highlights
                real-world solutions that blend clean code, smooth UX, and
                measurable growth.
              </p>
              <div className="flex justify-center lg:justify-normal">
                <Button
                  onClick={handleBookCall}
                  text="Book Free Consultation"
                  className="text-white text-sm md:text-base bg-orange font-primary font-semibold py-3 px-6 hover:bg-transparent border border-orange hover:text-orange transition-all ease-linear duration-200 flex items-center gap-2 mt-5"
                  icon={<BsCalendar3 />}
                />
              </div>
            </div>
            <Image
              src="/assets/case-strudies.svg"
              alt="processIcon"
              width={200}
              height={200}
              loading="lazy"
              className="dark:invert"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/w8AAgMBgA1bK9cAAAAASUVORK5CYII="
            />
          </div>
        </div>
        {/* Case Studies List */}
        <div className="mt-20">
          {data?.length > 0 ? (
            data.map((item, idx) => {
              const image =
                item.case_study?.formats?.medium?.url ||
                item.case_study?.url ||
                "/assets/default-placeholder.webp";

              return (
                <div
                  key={idx}
                  onClick={() => handleProjectClick(item.slug)}
                  className="mb-10 border-b border-b-white-100 dark:border-b-white-300/10 last:border-b-transparent pb-10"
                >
                  <CaseStudyCard
                    title={item.title}
                    category={item.Category}
                    image={
                      item.case_study?.formats?.medium?.url ||
                      item.case_study?.url ||
                      "/assets/default-placeholder.webp"
                    }
                    link={`/case-studies/${item.slug}`}
                    description={item.description?.slice(0, 250) + "..."}
                  />
                </div>
              );
            })
          ) : (
            <p className="text-center text-black-300 dark:text-white/70 mt-10">
              No case studies found.
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default MyCaseStudies;
