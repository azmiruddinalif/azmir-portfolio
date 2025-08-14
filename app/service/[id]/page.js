'use client'
import Button from "@/app/components/common/button";
import { ServiceData } from "@/app/components/home/services/service-data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoMdArrowBack } from "react-icons/io";

const ServiceSingle = ({ params }) => {
  const unwrappedParams = React.use(params);

  
  const service = ServiceData?.find((p) => p.slug === unwrappedParams?.id);


  if (!service) {
    return (
      <div className="mt-20 text-center text-red-600 font-semibold">
        Services not found.
      </div>
    );
  }

  return (
    <section className="my-56 max-w-3xl mx-auto px-4">
      <Link href="/" className="mb-10 flex items-center gap-x-3">
        <IoMdArrowBack size={20} />
        <span className="font-primary text-lg text-black-300 font-semibold">
          Go Back
        </span>
      </Link>
      <div className="flex items-center justify-between mb-10">
        <h1 className="text-4xl font-bold font-primary max-w-[400px]">{service.title}</h1>
        <Button
              text={
                <Link href="/meeting/azmir" target="_blank">
                  Let's Book For a Free Call
                </Link>
              }
              className="text-black-100 lg:mx-0 mx-auto text-sm lg:text-base bg-white font-primary font-semibold py-3 mt-5 mb-3 hover:bg-black border border-black-100 hover:text-white transition-all ease-linear duration-100"
            />
      </div>
      <Image
        src={service.image}
        alt={service.title}
        width={500}
        height={500}
        className="w-full max-h-[500px] object-cover rounded mb-6"
      />
     
      <div
        className="prose max-w-none mb-6 font-primary text-lg text-black-200"
        dangerouslySetInnerHTML={{
          __html: service.description,
        }}
      />

      <div
        className="prose max-w-none font-primary text-black-300"
        dangerouslySetInnerHTML={{
          __html: service.fullDescription,
        }}
      />
    </section>
  );
};

export default ServiceSingle;
