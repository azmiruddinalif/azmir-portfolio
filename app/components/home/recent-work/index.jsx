import React from "react";
import Container from "../../common/container";
import RecentWorkBody from "./RecentWorkBody";

const RecentWork = () => {
  return (
    <section className="my-24">
      <div>
        <Container>
          <h4 className="font-primary text-2xl lg:text-3xl font-bold text-black-300 dark:text-white text-center">
            My Recent Works
          </h4>
        </Container>
        <RecentWorkBody />
      </div>
    </section>
  );
};

export default RecentWork;
