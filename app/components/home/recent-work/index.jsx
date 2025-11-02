import React from "react";
import Container from "../../common/container";
import RecentWorkBody from "./RecentWorkBody";

const RecentWork = () => {
  return (
    <section className="my-30">
      <div>
        <Container>
          <div className="max-w-[700px] order-1 lg:order-[0] text-center mx-auto">
            <h4 className="font-primary text-2xl lg:text-4xl font-bold text-black-300 dark:text-white text-center">
              My all selected works
            </h4>
            <p className="mt-2 text-sm lg:text-base font-secondary font-normal text-black-400 dark:text-white/70">
              Explore some of my latest projects showcasing modern web and
              mobile applications. Each work reflects clean code, scalable
              architecture, and user-friendly design
            </p>
          </div>
        </Container>
        <RecentWorkBody />
      </div>
    </section>
  );
};

export default RecentWork;
