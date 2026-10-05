import Image from "next/image";
import { TiStarFullOutline } from "react-icons/ti";

export const TestimonialCard = ({ testimonial }) => (
  <div className="bg-white dark:bg-gray-800/40 dark:backdrop-blur-md rounded-md dark:border-gray-700/30 p-6 border border-gray-100 min-w-[320px] max-w-[320px] mx-1 flex-shrink-0">
    <div className="flex gap-1 mb-3">
      {[...Array(testimonial.rating)].map((_, i) => (
        <TiStarFullOutline color="#10b981" key={i} />
      ))}
    </div>

    <h3 className="text-base lg:text-xl font-bold mb-3 text-gray-900 dark:text-white">
      {testimonial.title}
    </h3>

    <p className="text-gray-600 text-xs lg:text-sm mb-6 leading-relaxed dark:text-white/50">
      {testimonial.text}
    </p>

    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full flex items-center justify-center">
        {/* <span className="text-white text-sm font-semibold">
          {testimonial.name.charAt(0)}
        </span> */}
        <Image
          src={testimonial.avatar}
          alt="avatar"
          width={200}
          height={200}
          priority
        />
      </div>
      <span className="font-secondary text-sm lg:text-base font-semibold text-gray-900 dark:text-white/85">
        {testimonial.name}
      </span>
    </div>
  </div>
);
