import ContactPageForm from "./ContactPageForm";

export async function generateMetadata({ params, searchParams }) {
  return {
    title: "Contact - MERN Stack | Full-Stack | Software Developer",
    description:
      "Building high-performance Web & Mobile Apps with MERN Stack, Next.js & React Native.",
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
    authors: [{ name: "Azmir - MERN Stack & Full-Stack JavaScript Developer" }],
    category: "Contact & Collaboration",
    alternates: {
      canonical: "/contact",
    },
  };
}

const Contact = () => {
  return <ContactPageForm />;
};

export default Contact;
