"use client";
import Button from "@/app/components/common/button";
import { WorkData } from "@/app/my-works/workdata";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { BsBoxArrowInUpRight } from "react-icons/bs";
import { IoMdArrowBack } from "react-icons/io";

const SingleWorkClient = ({ params }) => {
  const project = WorkData?.find((p) => p.slug === params?.id);

  const handleRedirect = (link) => {
    if (link) {
      window.open(link, "_blank", "noopener,noreferrer");
    }
  };

  if (!project) {
    return (
      <div className="mt-20 text-center min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold text-red-600 font-primary mb-4">
          Project not found
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md text-center">
          The project you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/my-works"
          className="inline-flex items-center gap-3 px-6 py-3 bg-orange text-white font-primary font-semibold rounded-lg hover:bg-orange/90 transition-colors duration-200"
        >
          <IoMdArrowBack size={20} />
          Back to My Works
        </Link>
      </div>
    );
  }

  return (
    <section className="my-28 lg:my-56 max-w-4xl mx-auto px-4">
      {/* Back Button */}
      <Link
        href="/my-works"
        className="mb-10 flex items-center gap-x-3 text-gray-700 dark:text-white/70 hover:text-orange dark:hover:text-orange transition-colors duration-200 w-fit"
      >
        <IoMdArrowBack size={20} />
        <span className="font-primary text-lg font-semibold">Go Back</span>
      </Link>

      {/* Category Badge */}
      <div className="px-5 py-2 bg-white-200 inline-block rounded-full mb-4 dark:bg-gray-800/40 dark:backdrop-blur-md">
        <span className="font-primary text-sm text-black-200 font-bold dark:text-white">
          {project.category}
        </span>
      </div>

      {/* Title and CTA Section */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-10 gap-6">
        <h1 className="text-4xl lg:text-5xl font-bold font-primary dark:text-white leading-tight">
          {project.title}
        </h1>
        {project.link && (
          <Button
            onClick={() => handleRedirect(project.link)}
            text="Visit Project"
            className="text-white lg:mx-0 mx-auto text-sm lg:text-base bg-orange font-primary font-semibold py-3 px-6 hover:bg-transparent border border-orange hover:text-orange transition-all ease-linear duration-200 flex-shrink-0"
            icon={<BsBoxArrowInUpRight />}
          />
        )}
      </div>

      {/* Project Image */}
      <div className="mb-8 rounded-lg overflow-hidden shadow-xl">
        <Image
          src={project.image}
          alt={`${project.title} - ${project.category} project screenshot`}
          width={1000}
          height={600}
          className="w-full max-h-[600px] object-cover"
          priority
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/w8AAgMBgA1bK9cAAAAASUVORK5CYII="
        />
      </div>

      {/* Project Description */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold font-primary dark:text-white mb-4">
          Project Overview
        </h2>
        <p className="font-primary text-lg text-black-200 dark:text-white/90 leading-relaxed">
          {project.description}
        </p>
      </div>

      {/* Full Description */}
      {project.singleInforMation?.fullDescription && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold font-primary dark:text-white mb-4">
            Project Details
          </h2>
          <div
            className="prose prose-lg max-w-none font-primary text-black-300 dark:text-white/90 dark:prose-invert prose-headings:font-primary prose-headings:text-black-300 dark:prose-headings:text-white prose-p:text-black-200 dark:prose-p:text-white/90"
            dangerouslySetInnerHTML={{
              __html: project.singleInforMation.fullDescription,
            }}
          />
        </div>
      )}

      {/* Technologies Used (if available) */}
      {project.technologies && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold font-primary dark:text-white mb-4">
            Technologies Used
          </h2>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-black-200 dark:text-white font-primary text-sm rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default SingleWorkClient;
