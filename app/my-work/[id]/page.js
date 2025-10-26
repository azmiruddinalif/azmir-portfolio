import { WorkData } from "@/app/my-works/workdata";
import SingleWorkClient from "./SingleWorkClient";

// Generate metadata for the page (Next.js 15)
export async function generateMetadata({ params }) {
  // In Next.js 15, params is a Promise that needs to be awaited
  const resolvedParams = await params;
  const project = WorkData?.find((p) => p.slug === resolvedParams?.id);

  if (!project) {
    return {
      title: "Project Not Found - MERN Stack Developer Portfolio",
      description: "The requested project could not be found.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return {
    title: `${project.title} - MERN Stack | Full-Stack | Software Developer`,
    description:
      project.description ||
      `${project.title} - A showcase of my ${project.category} development expertise using modern technologies.`,
    keywords: [
      project.category,
      "MERN Stack",
      "Next.js",
      "React Native",
      "web development",
      "mobile app",
      "MVP development",
      "scalable applications",
      project.title,
      "portfolio project",
      "full-stack developer",
      "JavaScript developer",
    ].join(", "),
    openGraph: {
      title: `${project.title} - MERN Stack Developer`,
      description:
        project.description ||
        `Explore ${project.title}, a ${project.category} project showcasing modern web/mobile development.`,
      type: "website",
      images: [
        {
          url: "/og/azmir_og_learg.png",
          width: 1200,
          height: 630,
          alt: `${project.title} - ${project.category} Project by Azmir`,
        },
      ],
      siteName: "Azmir Uddin Alif",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} - MERN Stack Developer`,
      description:
        project.description ||
        `Explore ${project.title}, a ${project.category} project showcasing modern development.`,
      images: ["/og/azmir_og_learg.png"],
      creator: "@azmiruddinalif",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    authors: [{ name: "Azmir - MERN Stack & Full-Stack JavaScript Developer" }],
    creator: "MERN Stack & Full-Stack JavaScript Developer",
     category: "Web Development Portfolio",
    alternates: {
      canonical: `/my-works/${project.slug}`,
    },
    other: {
      "application-name": "Developer Portfolio",
    },
  };
}

export async function generateStaticParams() {
  return WorkData.map((project) => ({
    id: project.slug,
  }));
}
// Server Component that passes data to Client Component (Next.js 15)
export default async function SingleWorkPage({ params }) {
  // Await params in the component as well
  const resolvedParams = await params;
  return <SingleWorkClient params={resolvedParams} />;
}
