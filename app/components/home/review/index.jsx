"use client";
import React, { useEffect, useState } from "react";
import Container from "../../common/container";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

const reviews = [
  {
    id: 1,
    quote:
      "  Azmir is a fantastic MERN stack developer. His expertise in React, Node.js, and MongoDB made our project a success. Highly recommend!",
    author: "Nayeem A.K.M",
  },
  {
    id: 2,
    quote:
      "Working with Azmir was a great experience. He delivered high-quality code and had excellent problem-solving skills. A valuable asset to any team!",
    author: "Nigar Sultana",
  },
  {
    id: 3,
    quote:
      "Azmir's knowledge of the MERN stack is impressive. He efficiently tackled challenges and met deadlines. I would definitely work with him again!",
    author: "Tafhim Shakib",
  },
  {
    id: 4,
    quote:
      "Highly skilled in MERN stack development, Azmir delivered exceptional results on our project. His dedication and expertise are commendable",
    author: " Raphael",
  },
  {
    id: 5,
    quote:
      "Azmir is a talented MERN stack developer. He quickly turned our ideas into a functional app. Great work!",
    author: " Azhar uddin Rahad",
  },
  {
    id: 6,
    quote:
      "Impressed with Azmir's skills in the MERN stack! He brought efficiency and creativity to our project. Highly recommend",
    author: "Razib Rahman",
  },
  {
    id: 7,
    quote:
      "Azmir consistently delivers top-notch results. His command  of the MERN stack is impressive, and his work ethic is commendable!",
    author: " HADIUL ISLAM",
  },
  {
    id: 8,
    quote:
      "Working with Azmir was a breeze! His expertise in MERN stack development led to an outstanding product. A true professional!",
    author: "Taufik Mahbub",
  },
  {
    id: 9,
    quote:
      "Azmir's contributions to our MERN stack project were invaluable. He solved complex issues swiftly and effectively. Great developer!",
    author: "Sofia Lori",
  },
  {
    id: 10,
    quote:
      "Absolutely satisfied with Azmir's work! His knowledge of MERN stack technologies and attention to detail are outstanding!",
    author: "Jenifar",
  },
];

const Review = () => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  return (
    <section
      id="testimonials"
      className="py-10 bg-white-200 dark:bg-gray-800/40 dark:backdrop-blur-md"
    >
      <Container>
        <div
          style={{
            backgroundImage: "url('/assets/review-qoute.svg')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "contain",
          }}
          className="py-20"
        >
          <Swiper
            modules={[Navigation, Autoplay]}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop={true}
            spaceBetween={30}
            slidesPerView={1}
          >
            {reviews.map((review) => (
              <SwiperSlide key={review.id}>
                <div className="max-w-2xl mx-auto text-center px-6">
                  <p className="text-lg italic text-black-200 mb-4 font-primary dark:text-white">
                    “{review.quote}”
                  </p>
                  <h4 className="font-semibold text-black text-xl font-primary dark:text-white/70">
                    - {review.author}
                  </h4>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </section>
  );
};

export default Review;
