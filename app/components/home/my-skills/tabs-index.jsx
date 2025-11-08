import React from "react";

const TabIndex = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: "frontend", label: "Frontend", emoji: "⚡" },
    { id: "backend", label: "Backend", emoji: "⚙️" },
    { id: "app", label: "Mobile", emoji: "📱" },
    { id: "devtools", label: "Tools", emoji: "🛠️" },
  ];

  return (
    <>
      {/* Mobile Tab Design - Simple and clean */}
      <div className="block sm:hidden">
        <div className="grid grid-cols-4 gap-x-3">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative px-4 py-3 font-secondary rounded-lg font-semibold text-sm transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-orange text-white shadow-md"
                  : "bg-white dark:bg-gray-700/40 text-black-300 dark:text-white border border-gray-200 dark:border-gray-600/30 hover:border-orange/30"
              }`}
            >
              <div className="flex flex-col items-center space-y-1">
                {/* <span className="text-lg">{tab.emoji}</span> */}
                <span className="text-xs font-semibold">{tab.label}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Desktop Tab Design - Glassmorphism style */}
      <div className="hidden sm:block relative">
        {/* Background blur effect */}
        <div className="absolute inset-0 bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-2xl border border-white/20 dark:border-gray-600/20 shadow-2xl"></div>

        {/* Tab container */}
        <div className="relative flex p-2 space-x-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative px-4 py-3 rounded-xl font-medium font-secondary text-sm transition-all duration-300 group cursor-pointer ${
                activeTab === tab.id
                  ? "text-white shadow-lg transform scale-105"
                  : "text-black-300/70 dark:text-white/70 hover:text-black-300 dark:hover:text-white hover:bg-white/50 dark:hover:bg-gray-700/50"
              }`}
            >
              {/* Active tab background */}
              {activeTab === tab.id && (
                <div className="absolute inset-0 bg-gradient-to-r from-orange to-orange/90 rounded-xl shadow-lg shadow-orange/30"></div>
              )}

              {/* Tab content */}
              <div className="relative flex items-center space-x-2">
                {/* <span className="text-lg group-hover:animate-bounce">
                  {tab.emoji}
                </span> */}
                <span>{tab.label}</span>
              </div>

              {/* Hover glow effect */}
              {activeTab !== tab.id && (
                <div className="absolute inset-0 bg-orange/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              )}
            </button>
          ))}
        </div>

        {/* Floating dots decoration */}
        {/* <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
          <div className="flex space-x-2">
            <div className="w-2 h-2 bg-orange/30 rounded-full animate-pulse"></div>
            <div
              className="w-1.5 h-1.5 bg-orange/50 rounded-full animate-pulse"
              style={{ animationDelay: "0.5s" }}
            ></div>
            <div
              className="w-2 h-2 bg-orange/30 rounded-full animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default TabIndex;
