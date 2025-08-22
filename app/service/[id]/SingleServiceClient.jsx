"use client";
import Button from "@/app/components/common/button";
import { ServiceData } from "@/app/components/home/services/service-data";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { IoMdArrowBack } from "react-icons/io";
import { BsCalendar3, BsCheckCircle } from "react-icons/bs";

const SingleServiceClient = ({ params }) => {
  const service = ServiceData?.find((p) => p.slug === params?.id);

  const handleBookCall = () => {
    // Open in new tab for external meeting link
    window.open("/meeting/azmir", "_blank", "noopener,noreferrer");
  };

  if (!service) {
    return (
      <div className="mt-20 text-center min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold text-red-600 font-primary mb-4">
          Service not found
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md text-center">
          The service you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-3 px-6 py-3 bg-orange text-white font-primary font-semibold rounded-lg hover:bg-orange/90 transition-colors duration-200"
        >
          <IoMdArrowBack size={20} />
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <section className="my-20 lg:my-56 max-w-4xl mx-auto px-4">
      {/* Back Button */}
      <Link 
        href="/" 
        className="mb-10 flex items-center gap-x-3 text-gray-700 dark:text-white/70 hover:text-orange dark:hover:text-orange transition-colors duration-200 w-fit"
      >
        <IoMdArrowBack size={20} />
        <span className="font-primary text-lg font-semibold">
          Go Back
        </span>
      </Link>

      {/* Header Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between mb-10 gap-6">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl font-bold font-primary max-w-[500px] dark:text-white leading-tight mb-4">
            {service.title}
          </h1>
          {service.shortDescription && (
            <p className="text-lg text-gray-600 dark:text-gray-300 font-primary">
              {service.shortDescription}
            </p>
          )}
        </div>
        
        <div className="flex-shrink-0">
          <Button
            onClick={handleBookCall}
            text="Book Free Consultation"
            className="text-white bg-orange font-primary font-semibold py-4 px-6 hover:bg-transparent border border-orange hover:text-orange transition-all ease-linear duration-200 flex items-center gap-2"
            icon={<BsCalendar3 />}
          />
        </div>
      </div>

      {/* Service Image */}
      <div className="mb-8 rounded-lg overflow-hidden shadow-xl">
        <Image
          src={service.image}
          alt={`${service.title} - Professional development service`}
          width={1000}
          height={600}
          className="w-full max-h-[500px] object-cover"
          priority
        />
      </div>

      {/* Service Description */}
      {service.description && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold font-primary dark:text-white mb-4">
            Service Overview
          </h2>
          <div
            className="prose prose-lg max-w-none font-primary text-black-200 dark:text-white/90 dark:prose-invert prose-headings:font-primary prose-headings:text-black-300 dark:prose-headings:text-white"
            dangerouslySetInnerHTML={{
              __html: service.description,
            }}
          />
        </div>
      )}

      {/* Full Description */}
      {service.fullDescription && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold font-primary dark:text-white mb-4">
            What's Included
          </h2>
          <div
            className="prose prose-lg max-w-none font-primary text-black-300 dark:text-white/90 dark:prose-invert prose-headings:font-primary prose-headings:text-black-300 dark:prose-headings:text-white prose-p:text-black-200 dark:prose-p:text-white/90"
            dangerouslySetInnerHTML={{
              __html: service.fullDescription,
            }}
          />
        </div>
      )}

      {/* Service Features (if available) */}
      {service.features && service.features.length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold font-primary dark:text-white mb-6">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {service.features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                <BsCheckCircle className="text-green-500 text-xl flex-shrink-0" />
                <span className="font-primary text-black-200 dark:text-white">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Technologies Used (if available) */}
      {service.technologies && service.technologies.length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold font-primary dark:text-white mb-4">
            Technologies & Tools
          </h2>
          <div className="flex flex-wrap gap-3">
            {service.technologies.map((tech, index) => (
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

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-orange/10 to-orange/5 dark:from-orange/20 dark:to-orange/10 rounded-xl p-8 text-center mt-22">
        <h3 className="text-2xl font-bold font-primary dark:text-white mb-4">
          Ready to Get Started?
        </h3>
        <p className="text-gray-600 dark:text-gray-300 font-primary mb-6 max-w-2xl mx-auto">
          Let's discuss your project and see how I can help you build something amazing. 
          Book a free consultation to get started.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            onClick={handleBookCall}
            text="Book Free Call"
            className="text-white bg-orange font-primary font-semibold py-3 px-8 hover:bg-transparent border border-orange hover:text-orange transition-all ease-linear duration-200"
            icon={<BsCalendar3 />}
          />
          
          <Link
            href="/contact"
            className="text-orange font-primary font-semibold py-3 px-8 border border-orange hover:bg-orange hover:text-white transition-all ease-linear duration-200 rounded-lg"
          >
            Send Message
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SingleServiceClient;