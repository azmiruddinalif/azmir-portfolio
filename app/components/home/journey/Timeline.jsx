import React from "react";

const Timeline = () => {
  const years = [2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018];
  const activeYear = new Date().getFullYear();

  return (
    <div className="relative w-full px-4 py-10 max-w-5xl mx-auto">
      {/* Bottom line */}
      <div className="absolute left-0 right-0 top-[45px]  bg-white-300 rounded-r-full rounded-l-full z-0">
        <div className="h-1 bg-gradient-to-r from-green to-white-300 w-[30%] rounded-l-full"></div>
      </div>

      {/* Timeline items */}
      <div className="flex justify-between relative z-10">
        {years.map((year) => {
          const isActive = year === activeYear;
          return (
            <div key={year} className="flex flex-col items-center space-y-1">
              {/* Dot */}
              <div
                className={`w-4 h-4 rounded-full ${
                  isActive ? "bg-green-500" : "bg-white-300"
                }`}
              />
              {/* Year label */}
              <span
                className={`text-[11px] md:text-sm ${
                  isActive
                    ? "text-black font-semibold dark:text-white-300/80"
                    : "text-gray-400 dark:text-white-300/80"
                }`}
              >
                {year}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Timeline;
