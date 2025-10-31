import Image from "next/image";
import Link from "next/link";

import { ProcessData } from "@/app/components/home/Process/Pprodess-data";
import ProcessContent from "@/app/components/home/Process/ProcessContent";
import Container from "@/app/components/common/container";

export default async function ProcessSingle({ params }) {
  const { slug } = await params;
  const process = ProcessData.find((item) => item.slug === slug);

  if (!process) {
    return (
      <div className="flex flex-col items-center justify-center h-[70vh] text-center">
        <div className="relative">
          <div className="absolute inset-0 bg-primary-500/10 blur-3xl rounded-full" />
          <h2 className="relative text-4xl md:text-5xl font-bold bg-gradient-to-br from-gray-900 via-gray-700 to-gray-600 dark:from-white dark:via-gray-200 dark:to-gray-400 bg-clip-text text-transparent">
            Step not found
          </h2>
        </div>
        <p className="text-gray-500 dark:text-gray-400 mt-4 text-lg">
          The process you're looking for doesn't exist.
        </p>
        <Link
          href="/process"
          className="mt-8 group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary-500 to-primary-600 text-white font-medium shadow-lg hover:shadow-xl hover:shadow-primary-500/30 transition-all duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5 group-hover:-translate-x-1 transition-transform"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
          Back to All Steps
        </Link>
      </div>
    );
  }

  return (
    <section className="min-h-screen mt-22 relative">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-50/30 via-transparent to-transparent dark:from-primary-950/20 pointer-events-none" />

      {/* ===== Header Section ===== */}
      <div className="relative py-16 md:py-24">
        <Container>
          <div className="relative grid lg:grid-cols-2 gap-16 items-center">
            {/* --- Left side text --- */}
            <div className="space-y-6">
              {/* Step indicator */}
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-md bg-primary-500/10 dark:bg-primary-500/20 backdrop-blur-sm border border-primary-500/20">
                <span className="text-sm font-semibold text-primary-600 dark:text-primary-400 tracking-wider uppercase">
                  Step {process.step.toString().padStart(2, "0")}
                </span>
              </div>

              {/* Title with refined gradient */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1]">
                <span className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 dark:from-white dark:via-gray-100 dark:to-gray-300 bg-clip-text text-transparent">
                  {process.title}
                </span>
              </h1>

              {/* Description */}
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl">
                {process.desc}
              </p>
            </div>

            {/* --- Right side image --- */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative group">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 blur-3xl rounded-full scale-75 group-hover:scale-90 transition-transform duration-700" />

                {/* Image container */}
                <div className="relative w-[280px] sm:w-[360px] md:w-[480px] h-auto aspect-square">
                  <Image
                    src={process.detailImg}
                    alt={process.title}
                    width={1500}
                    height={1500}
                    className="relative w-full h-full rounded-2xl object-contain drop-shadow-2xl dark:invert-0 transition-transform duration-500 group-hover:scale-[1.02]"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <ProcessContent process={process} />
    </section>
  );
}

// Pre-generate static pages
export async function generateStaticParams() {
  return ProcessData.map((item) => ({ slug: item.slug }));
}

// Dynamic metadata for SEO
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const process = ProcessData.find((item) => item.slug === slug);
  if (!process)
    return {
      title: "Process Not Found | Azmir Uddin Alif",
      description: "The process you're looking for does not exist.",
    };

  return {
    title: `${process.title} | Process | Azmir Uddin Alif`,
    description: process.desc,
  };
}
