import React, { useState } from "react";

const TabIndex = ({ activeTab, setActiveTab }) => {
  const tabs = ["frontend", "backend", "app", "devtools"];

  return (
    <div className="flex lg:flex-col gap-x-2 lg:gap-4 mb-5 lg:mb-0 justify-center lg:justify-start">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`px-2 sm:px-4 py-3 rounded-lg font-medium text-sm lg:text-base capitalize transition-all border border-black-200 text-start cursor-pointer ${
            activeTab === tab
              ? "bg-black text-white"
              : "text-gray-600 hover:bg-gray-200"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default TabIndex;
