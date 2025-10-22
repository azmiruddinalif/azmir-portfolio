import Container from "./components/common/container";
import Banner from "./components/home/Banner";
import WormCompany from "./components/home/company";
import Counter from "./components/home/counter";
import Help from "./components/home/help";
import Journey from "./components/home/journey";
import MySkills from "./components/home/my-skills";
import Plans from "./components/home/plans";
import WorkProcess from "./components/home/Process";
import Projects from "./components/home/projects";
import RecentWork from "./components/home/recent-work";
import Review from "./components/home/review";
import Services from "./components/home/services";
import Socials from "./components/home/socials";
import Upwork from "./components/home/Upwork";

export async function generateMetadata({ params, searchParams }) {
  return {
    title: "Azmir - MERN Stack | Full-Stack | Software Developer",
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
    category: "Personal Portfolio & Web Development Services",
    alternates: {
      canonical: "/",
    },
    openGraph: {
      title: "Azmir - MERN Stack | Full-Stack | Software Developer",
      description:
        "Building scalable Web & Mobile Apps for Coaches, Startups, Health, Real Estate & EdTech using MERN Stack, Next.js & React Native.",
      images: [
        {
          url: "/og/azmir_og_learg.png",
          width: 1200,
          height: 630,
          alt: "Azmir Uddin Alif - MERN Stack & Full-Stack Developer",
        },
      ],
      siteName: "Azmir Uddin Alif",
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Azmir - MERN Stack | Full-Stack | Software Developer",
      description: "Building scalable Web & Mobile Apps using MERN Stack, Next.js & React Native",
      images: ["/og/azmir_og_learg.png"],
      creator: "@azmiruddinalif",
    },
  };
}

export default function Home() {
  return (
    <>
      <Container>
        <Banner />
        <Counter />
        {/* <WormCompany /> */}
      </Container>
      <RecentWork />
      <Journey />
      <Container>
        <Projects />
      </Container>
      <Upwork />
      <Container>
        <Services />
      </Container>
      <WorkProcess />
      <Container>
        <Help />
      </Container>
      <Review />
      <Container>
        <Socials />
      </Container>
      <MySkills />
      <Container>
        <Plans />
      </Container>
    </>
  );
}
