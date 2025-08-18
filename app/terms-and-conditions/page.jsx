"use client";

import React from "react";
import Link from "next/link";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { termsContent } from "./terms-coontent";
import Container from "../components/common/container";
import { IoMdArrowBack } from "react-icons/io";

const today = new Date().toLocaleDateString();

const TermsAndConditions = () => {
  return (
    <div className="font-primate min-h-screen bg-gray-50">
      {/* Go Back Link */}

      {/* Banner */}
      <div className="bg-white-200 py-40 text-center">
        <Container>
          <h1 className="text-4xl font-bold mb-2">Terms & Conditions</h1>
          <p className="text-gray-600">Effective Date: {today}</p>
        </Container>
      </div>
      <Container>
        <div className="p-5">
          <Link href="/" className="mb-10 flex items-center gap-x-3">
            <IoMdArrowBack size={20} />
            <span className="font-primary text-lg text-black-300 font-semibold">
              Go Back
            </span>
          </Link>
        </div>
        {/* Terms Content */}
        <div className="mx-auto p-5 space-y-6 text-gray-800 prose">
          <div
            dangerouslySetInnerHTML={{ __html: termsContent }}
            className="space-y-4"
          />
        </div>
      </Container>
    </div>
  );
};

export default TermsAndConditions;
