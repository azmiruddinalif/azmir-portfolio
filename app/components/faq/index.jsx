"use client";
import { useState } from "react";
import { IoChevronDown } from "react-icons/io5";
import { faqs } from "./faq-data";
import Container from "../common/container";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="bg-white-200 dark:bg-gray-800/40 py-16 px-4 sm:px-6 lg:px-8"
    >
      <Container>
        <div className="lg:px-18">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block relative">
              <h4 className="font-primary text-2xl lg:text-3xl font-bold lg:leading-10 text-black-300 dark:text-white">
                Frequently Asked Questions
              </h4>
            </div>
            <p className="font-primary text-sm lg:text-lg max-w-3xl mx-auto font-normal text-black-300 mt-5 dark:text-white/70">
              Everything you need to know about working with me from first idea
              to final product.
            </p>
          </div>

          {/* FAQ Items */}
          <div>
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-slate-200">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full md:px-4 py-4 md:py-6 flex items-center justify-between text-left focus:outline-none group cursor-pointer"
                >
                  <span className="text-base sm:text-xl font-semibold text-slate-900 pr-4">
                    {faq.question}
                  </span>
                  <div
                    className={`p-2 rounded-lg transition-colors duration-200 flex-shrink-0 ${
                      openIndex === index ? "bg-primary-500" : "bg-white-300"
                    }`}
                  >
                    <IoChevronDown
                      className={`w-5 h-5 transition-transform duration-300 ${
                        openIndex === index
                          ? "rotate-180 text-white"
                          : "text-slate-600"
                      }`}
                    />
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-4 pb-6 pt-0">
                    <p className="text-slate-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
