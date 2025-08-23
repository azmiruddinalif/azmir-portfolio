import ContactPageForm from "./ContactPageForm";

export async function generateMetadata({ params, searchParams }) {
  return {
    title: "Contact - MERN Stack | Full-Stack | Software Developer",
    description:
      "Building MVPs & Scalable Web & Mobile Apps for Coaches, Startups, Health & Wellness, Real Estate, E-commerce & EdTech | MERN Stack, Next.js & React Native Developer",
    keywords: [
      "MERN Stack developer",
      "Next.js developer",
      "React Native developer",
      "MVP development",
      "scalable web apps",
      "mobile app development",
      "startup development",
      "e-commerce development",
      "health wellness apps",
      "real estate apps",
      "EdTech solutions",
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "NestJS",
      "PostgreSQL",
      "Firebase",
      "REST API",
      "GraphQL",
      "Figma to code",
      "game developer",
    ],
    robots: {
      index: true,
      follow: true,
    },
    authors: [{ name: "MERN Stack & Full-Stack JavaScript Developer" }],
    category: "portfolio",
    alternates: {
      canonical: "/my-works",
    },
  };
}

const Contact = () => {
 
  return (
    <ContactPageForm/>
  );
};

export default Contact;
