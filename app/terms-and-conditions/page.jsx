"use client";

import React from "react";
import Link from "next/link";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { termsContent } from "./terms-coontent";
import Container from "../components/common/container";
import { IoMdArrowBack } from "react-icons/io";
import {
  HiOutlineDocumentText,
  HiOutlineShieldCheck,
  HiOutlineScale,
} from "react-icons/hi";
import Button from "../components/common/button";

const today = new Date().toLocaleDateString();

const TermsAndConditions = () => {
  return (
    <div className="font-primate min-h-screen bg-gray-50">
      {/* Hero Banner with Clean Design */}
      <div className="relative bg-white py-32 text-center overflow-hidden border-b border-gray-200">
        <Container>
          <div className="relative z-10">
            {/* Icon Badge */}
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
              <HiOutlineDocumentText className="w-8 h-8 text-blue-600" />
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-800">
              Terms & Conditions
            </h1>
            <div className="flex items-center justify-center gap-2 text-gray-600 text-lg">
              <HiOutlineShieldCheck className="w-5 h-5" />
              <span>Effective Date: {today}</span>
            </div>

            {/* Decorative Elements */}
            <div className="mt-8 flex justify-center gap-4">
              <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce animation-delay-200"></div>
              <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce animation-delay-400"></div>
            </div>
          </div>
        </Container>
      </div>

      <Container>
        {/* Back Navigation with Enhanced Style */}
        <div className="relative -mt-8 z-10">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 mx-4">
            <Link
              href="/"
              className="group inline-flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-all duration-300 transform hover:-translate-x-1"
            >
              <div className="p-2 bg-gray-100 group-hover:bg-blue-100 rounded-full transition-colors duration-300">
                <IoMdArrowBack
                  size={20}
                  className="group-hover:text-blue-600"
                />
              </div>
              <span className="font-semibold text-lg">Go Back</span>
            </Link>
          </div>
        </div>

        {/* Content Section with Glass Card */}
        <div className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            {/* Content Header */}
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 mb-8 p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-blue-600 rounded-full">
                  <HiOutlineScale className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">
                    Legal Agreement
                  </h2>
                  <p className="text-gray-600">
                    Please read these terms carefully before using our services
                  </p>
                </div>
              </div>

              {/* Key Points */}
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                  <div className="text-blue-600 font-semibold mb-2">
                    Binding Agreement
                  </div>
                  <div className="text-sm text-gray-600">
                    By using our services, you agree to these terms
                  </div>
                </div>
                <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                  <div className="text-blue-600 font-semibold mb-2">
                    Your Rights
                  </div>
                  <div className="text-sm text-gray-600">
                    Understanding what you can and cannot do
                  </div>
                </div>
                <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                  <div className="text-blue-600 font-semibold mb-2">
                    Updates
                  </div>
                  <div className="text-sm text-gray-600">
                    Terms may be updated periodically
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-12">
              <div className="prose prose-lg prose-blue max-w-none">
                <div
                  dangerouslySetInnerHTML={{ __html: termsContent }}
                  className="space-y-6 leading-relaxed"
                />
              </div>
            </div>

            {/* Footer Actions */}
            <div className="mt-12 text-center">
              <div className="rounded-2xl p-8 border border-black-800">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Have Questions?
                </h3>
                <p className="text-gray-600 mb-6">
                  If you have any questions about these terms, please don't
                  hesitate to contact me.
                </p>
                <div className="flex gap-4 justify-center">
                  <Link href="mailto:alifazmiruddin@gmail.com">
                    <Button
                      text="Contact Support"
                      className="text-white text-sm lg:text-base font-primary font-semibold py-3 mt-5 mb-3 hover:bg-transparent border border-black-100 hover:text-black-100 transition-all ease-linear duration-100"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TermsAndConditions;
