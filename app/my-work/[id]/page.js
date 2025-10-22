// "use client";
// import Button from "@/app/components/common/button";
// import { WorkData } from "@/app/myworks/workdata";
// import Image from "next/image";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import React from "react";
// import { BsBoxArrowInUpRight } from "react-icons/bs";
// import { IoMdArrowBack } from "react-icons/io";

// const SingleWorkPage = ({ params }) => {
//   const unwrappedParams = React.use(params);
//   const router = useRouter();
//   const project = WorkData?.find((p) => p.slug === unwrappedParams?.id);

//   const handleRedirect = (link) => {
//     router.push(link);
//   };

//   if (!project) {
//     return (
//       <div className="mt-20 text-center text-red-600 font-semibold">
//         Project not found.
//       </div>
//     );
//   }

//   return (
//     <section className="my-28 lg:my-56 max-w-3xl mx-auto px-4">
//       <Link
//         href="/myworks"
//         className="mb-10 flex items-center gap-x-3 dark:text-white/70"
//       >
//         <IoMdArrowBack size={20} />
//         <span className="font-primary text-lg text-black-300 font-semibold dark:text-white/70">
//           Go Back
//         </span>
//       </Link>
//       <div className="px-5 py-2 bg-white-200 inline-block rounded-full mb-2 mt-2 lg:mt-0 dark:bg-gray-800/40 dark:backdrop-blur-md">
//         <span className="font-primary text-sm text-black-200 font-bold dark:text-white">
//           {" "}
//           {project.category}
//         </span>
//       </div>
//       <div className="flex flex-col lg:flex-row items-center justify-between mb-10">
//         <h1 className="text-4xl font-bold font-primary dark:text-white">
//           {project.title}
//         </h1>
//         <Button
//           onClick={() => handleRedirect(project.link)}
//           text="Visit Project"
//           className="text-white lg:mx-0 mx-auto text-sm lg:text-base bg-orange font-primary font-semibold py-3 mt-5 mb-3  hover:bg-transparent border border-orange hover:text-orange transition-all ease-linear duration-100 "
//           icon={<BsBoxArrowInUpRight />}
//         />
//       </div>
//       <Image
//         src={project.image}
//         alt={project.title}
//         width={500}
//         height={500}
//         className="w-full max-h-[500px] object-cover rounded mb-6"
//       />
//       <p className="mb-6 font-primary text-lg text-black-200 dark:text-white">
//         {project.description}
//       </p>
//       <div
//         className="prose max-w-none font-primary text-black-300 dark:text-white"
//         dangerouslySetInnerHTML={{
//           __html: project.singleInforMation.fullDescription,
//         }}
//       />
//     </section>
//   );
// };

// export default SingleWorkPage;

// app/my-works/[id]/page.jsx (Server Component)

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
    category: "portfolio",
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
