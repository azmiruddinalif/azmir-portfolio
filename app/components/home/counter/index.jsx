import React from "react";
import Container from "../../common/container";
import { AnimatedCounter } from "./AnimatedCounter";

const Counter = () => {
  return (
    <Container>
      <div className="mt-22">
        <div className="bg-gradient-to-r from-orange/20 to-primary-50  dark:from-backdrop-blur-md dark:to-gray-800/40 dark:backdrop-blur-md rounded-2xl border border-gray-200 dark:border-white/20 p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="relative">
              <AnimatedCounter end={7} suffix="+" duration={2500} />
              <div className="text-sm lg:text-base font-semibold text-gray-600 dark:text-gray-300 mb-1">
                Years Experience
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                Full Stack Development
              </div>
              {/* Separator */}
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-px h-16 bg-gray-300 dark:bg-gray-600 hidden sm:block sm:last:hidden"></div>
            </div>
            <div className="relative">
              <AnimatedCounter end={5} duration={2000} />
              <div className="text-sm lg:text-base font-semibold text-gray-600 dark:text-gray-300 mb-1">
                Global Companies
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                Remote Collaboration
              </div>
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-px h-16 bg-gray-300 dark:bg-gray-600 hidden sm:block sm:last:hidden"></div>
            </div>
            <div>
              <AnimatedCounter end={20} suffix="+" duration={3000} />
              <div className="text-sm lg:text-base font-semibold text-gray-600 dark:text-gray-300 mb-1">
                Projects Delivered
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                Successful Launches
              </div>
            </div>
            <div>
              <AnimatedCounter end={12} suffix="+" duration={3000} />
              <div className="text-sm lg:text-base font-semibold text-gray-600 dark:text-gray-300 mb-1">
                Clients Served
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                Satisfied Global Clients
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Counter;
