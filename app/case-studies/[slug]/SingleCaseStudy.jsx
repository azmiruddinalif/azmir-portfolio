import Image from "next/image";
import Link from "next/link";
import { IoMdArrowBack } from "react-icons/io";
import { marked } from "marked";
import Button from "@/app/components/common/button";
import ReusableButton from "@/app/components/common/HireOrContact";
import { BsCalendar3 } from "react-icons/bs";
import Container from "@/app/components/common/container";

// --- Fetch Case Study Data ---
async function getSingleCaseStudy(slug) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/case-studies?filters[slug][$eq]=${slug}&populate=*`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) throw new Error("Failed to fetch case study");
  const data = await res.json();
  return data?.data?.[0] || null;
}

// --- Generate Metadata for SEO ---
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const caseStudy = await getSingleCaseStudy(slug);

  if (!caseStudy) {
    return {
      title: "Case Study Not Found",
    };
  }

  return {
    title: caseStudy.title,
    description: caseStudy.description?.substring(0, 160),
  };
}

// --- Page Component ---
export default async function SingleCaseStudy({ params }) {
  const { slug } = await params;
  const caseStudy = await getSingleCaseStudy(slug);

  if (!caseStudy) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen text-center px-4">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-red-600 mb-4 sm:mb-6">
          Case Study Not Found
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-6 sm:mb-8 text-sm sm:text-base">
          The case study you're looking for doesn't exist or has been removed.
        </p>
        <Link
          href="/case-studies"
          className="inline-flex items-center gap-2 bg-orange text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-primary font-semibold hover:bg-orange/90 transition-all duration-200 text-sm sm:text-base"
        >
          <IoMdArrowBack className="text-lg sm:text-xl" />
          Back to Case Studies
        </Link>
      </div>
    );
  }

  const attr = caseStudy;
  const image =
    attr.case_study?.formats?.large?.url ||
    attr.case_study?.formats?.medium?.url ||
    attr.case_study?.url ||
    "/assets/default-placeholder.webp";

  return (
    <Container>
      <section className="mt-32 lg:mt-42 lg:max-w-5xl lg:mx-auto lg:px-8">
        {/* --- Back Button --- */}
        <Link
          href="/case-studies"
          className="mb-10 flex items-center gap-x-3 text-gray-700 dark:text-white/70 hover:text-orange dark:hover:text-orange transition-colors duration-200 w-fit"
        >
          <IoMdArrowBack size={20} />
          <span className="font-primary text-lg font-semibold">Go Back</span>
        </Link>

        {/* --- Category Badge --- */}
        <div className="flex flex-col lg:flex-row items-center gap-6 justify-between mb-4 sm:mb-5 lg:mb-6">
          <div className="px-4 sm:px-5 py-1.5 sm:py-2 bg-white-200 rounded-full dark:bg-gray-800/40 dark:backdrop-blur-md">
            <span className="font-primary text-xs sm:text-sm font-semibold text-black-200 dark:text-white uppercase tracking-wide">
              {attr.Category || "Case Study"}
            </span>
          </div>

          <div className="hidden lg:flex flex-shrink-0">
            <ReusableButton
              href="/meeting/azmir"
              ariaLabel="Book Free Call azmir"
              text="Book Free Call"
              icon={<BsCalendar3 />}
              className="!text-sm !md:text-base text-white bg-orange font-primary font-semibold py-3 px-6 hover:bg-transparent border border-orange hover:text-orange transition-all ease-linear duration-200 flex items-center gap-2 rounded-md"
            />
          </div>
        </div>

        {/* --- Title --- */}

        <div className="mb-10">
          <div className="text-center lg:text-left">
            <h1 className="text-xl md:text-4xl lg:text-5xl font-bold font-primary dark:text-white leading-tight mb-4">
              {attr.title}
            </h1>
          </div>
          <div className="flex justify-center lg:hidden">
            <ReusableButton
              href="/meeting/azmir"
              ariaLabel="Book Free Call azmir"
              text="Book Free Call"
              icon={<BsCalendar3 />}
              className="!text-xs text-white bg-orange font-primary font-semibold py-3 px-6 hover:bg-transparent border border-orange hover:text-orange transition-all ease-linear duration-200 flex items-center gap-2 rounded-md w-fit"
            />
          </div>
        </div>

        {/* --- Image --- */}
        <div className="mb-10 sm:mb-12 lg:mb-16 rounded-lg sm:rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <div className="relative w-full aspect-video bg-gray-200 dark:bg-gray-800">
            <Image
              src={image}
              alt={attr.title || "Case study image"}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* --- Markdown Description --- */}

        <article
          className="
              prose prose-base sm:prose-lg lg:prose-xl max-w-none 
              text-gray-800 dark:text-gray-200 dark:prose-invert
              transition-all duration-300
              

              [&_h1]:text-2xl sm:[&_h1]:text-3xl [&_h1]:font-bold [&_h1]:mt-10 [&_h1]:mb-4
              [&_h1]:bg-gradient-to-r [&_h1]:from-primary-600 [&_h1]:to-secondary-600 
              [&_h1]:bg-clip-text [&_h1]:text-transparent

              [&_h2]:text-xl sm:[&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mt-10 [&_h2]:mb-4
              [&_h2]:text-gray-900 dark:[&_h2]:text-white
              [&_h2]:pb-2 [&_h2]:border-b-2 [&_h2]:border-orange-200 dark:[&_h2]:border-orange-900

              [&_h3]:text-lg sm:[&_h3]:text-xl [&_h3]:font-semibold [&_h3]:mt-8 [&_h3]:mb-3
              [&_h3]:text-gray-800 dark:[&_h3]:text-gray-100

              [&_p]:text-gray-700 dark:[&_p]:text-gray-300 [&_p]:leading-relaxed [&_p]:mb-5
              [&_p]:text-base sm:[&_p]:text-lg

              [&_ul]:list-none [&_ul]:mb-6 [&_ul]:space-y-2
              [&_li]:relative
              [&_li]:before:text-orange-500 dark:[&_li]:before:text-orange-400 [&_li]:before:font-bold

              [&_ol]:list-decimal [&_ol]:list-inside [&_ol]:mb-6 [&_ol]:space-y-2

              [&_blockquote]:border-l-4 [&_blockquote]:border-orange-500 dark:[&_blockquote]:border-orange-400
              [&_blockquote]:bg-orange-50 dark:[&_blockquote]:bg-orange-900/10
              [&_blockquote]:pl-6 [&_blockquote]:pr-4 [&_blockquote]:py-4 [&_blockquote]:italic 
              [&_blockquote]:text-gray-700 dark:[&_blockquote]:text-gray-300 [&_blockquote]:my-8
              [&_blockquote]:rounded-r-lg [&_blockquote]:shadow-sm

              [&_a]:text-orange-600 dark:[&_a]:text-orange-400 [&_a]:font-medium
              [&_a]:no-underline [&_a]:border-b-2 [&_a]:border-orange-200 dark:[&_a]:border-orange-800
              hover:[&_a]:border-orange-500 dark:hover:[&_a]:border-orange-400
              [&_a]:transition-colors [&_a]:duration-200 [&_a]:break-words

              [&_img]:rounded-xl [&_img]:my-8 [&_img]:mx-auto [&_img]:object-cover 
              [&_img]:max-h-[500px] [&_img]:shadow-lg [&_img]:ring-1 
              [&_img]:ring-gray-200 dark:[&_img]:ring-gray-800

              [&_pre]:bg-gradient-to-br [&_pre]:from-gray-50 [&_pre]:to-gray-100 
              dark:[&_pre]:from-gray-950 dark:[&_pre]:to-gray-900
              [&_pre]:text-sm sm:[&_pre]:text-base 
              [&_pre]:p-5 sm:[&_pre]:p-6 [&_pre]:rounded-xl [&_pre]:overflow-x-auto [&_pre]:my-8
              [&_pre]:shadow-lg [&_pre]:ring-1 [&_pre]:ring-gray-200 dark:[&_pre]:ring-gray-800
              [&_pre]:border-l-4 [&_pre]:border-orange-500

              [&_code]:font-mono [&_code]:text-sm
              [&_:not(pre)_code]:px-2 [&_:not(pre)_code]:py-1 [&_:not(pre)_code]:rounded-md
              [&_:not(pre)_code]:bg-orange-100 dark:[&_:not(pre)_code]:bg-orange-900/20
              [&_:not(pre)_code]:text-orange-700 dark:[&_:not(pre)_code]:text-orange-300
              [&_:not(pre)_code]:font-semibold [&_:not(pre)_code]:ring-1 
              [&_:not(pre)_code]:ring-orange-200 dark:[&_:not(pre)_code]:ring-orange-800

              [&_table]:w-full [&_table]:my-8 [&_table]:rounded-lg [&_table]:overflow-hidden
              [&_table]:shadow-lg [&_table]:ring-1 [&_table]:ring-gray-200 dark:[&_table]:ring-gray-800
              [&_th]:bg-orange-100 dark:[&_th]:bg-orange-900/20 [&_th]:p-3 [&_th]:font-semibold
              [&_td]:p-3 [&_td]:border-t [&_td]:border-gray-200 dark:[&_td]:border-gray-800

              [&_table]:block [&_table]:overflow-x-auto
              [&_table]:whitespace-nowrap [&_th]:min-w-[240px] [&_td]:min-w-[120px]
              &_table]:border-collapse [&_th]:text-left [&_td]:align-top 

              [&_hr]:my-12 [&_hr]:border-gray-200 dark:[&_hr]:border-gray-800
            "
          dangerouslySetInnerHTML={{
            __html: marked.parse(
              attr.description || "No description available."
            ),
          }}
        />
      </section>
    </Container>
  );
}
