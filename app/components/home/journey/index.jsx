"use client";
import Container from "../../common/container";
import { experiences } from "./experience";
import JourneyCard from "./journey-card";

const Journey = () => {
  return (
    <section className="bg-white-200 dark:bg-gray-900 py-20">
      <Container>
        <div className="text-center mb-16">
          <h4 className="font-primary text-2xl lg:text-4xl font-bold text-black-300 dark:text-white text-center">
            Professional Journey
          </h4>
          <p className="mt-2 text-sm lg:text-base font-secondary font-normal text-black-400 dark:text-white/70 max-w-2xl mx-auto">
            Delivering scalable and high-performance applications across web,
            mobile, and cloud platforms for global clients.
          </p>
        </div>

        <div className="relative space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="md:sticky transition-all duration-300"
              style={{
                top: `${20 + index * 5}vh`,
              }}
            >
              <JourneyCard exp={exp} index={index} isEven={index % 2 === 0} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Journey;
