"use client";
import React from "react";
import data from "./privacyPolicyData.json";
import ReusableButton from "../components/common/HireOrContact";

const PrivacyPolicy = () => {
  return (
    <section className="relative min-h-screen mt-42">
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-6xl font-bold font-clash bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">
            {data.title}
          </h1>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            {data.intro.text}
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-10">
          {data.sections.map((section, index) => (
            <div
              key={index}
              className="p-6 sm:p-8 bg-white/70 dark:bg-gray-800/40 backdrop-blur-xl rounded-2xl shadow-md border border-gray-100 dark:border-gray-700 transition hover:shadow-lg"
            >
              <h2 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">
                {section.heading}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {section.content.includes("alifazmiruddin@gmail.com") ? (
                  <>
                    {section.content.split("alifazmiruddin@gmail.com")[0]}
                    <a
                      href="mailto:alifazmiruddin@gmail.com"
                      className="text-orange-500 hover:underline"
                    >
                      alifazmiruddin@gmail.com
                    </a>
                    {section.content.split("alifazmiruddin@gmail.com")[1]}
                  </>
                ) : (
                  section.content
                )}
              </p>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="my-12 text-center">
          <div className="rounded-2xl p-8 border border-black-800 dark:border-white/10">
            <h3 className="text-xl font-bold text-gray-800 mb-4 dark:text-white">
              Have Questions?
            </h3>
            <p className="text-gray-600 mb-6 dark:text-white">
              If you have any questions about these terms, please don't hesitate
              to contact me.
            </p>
            <div className="flex gap-4 justify-center">
              <ReusableButton
                href="mailto:alifazmiruddin@gmail.com"
                text="Contact Support"
                ariaLabel="support from azmir"
                className="text-white font-primary bg-orange font-normal py-3 mt-5 mb-3 mx-auto hover:bg-transparent border border-orange hover:text-orange transition-all ease-linear duration-100 inline-block px-5 rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
