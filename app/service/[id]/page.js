import { ServiceData } from "@/app/components/home/services/service-data";
import SingleServiceClient from "./SingleServiceClient";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const service = ServiceData?.find((p) => p.slug === resolvedParams?.id);

  if (!service) {
    return {
      title: "Azmir - MERN Stack Developer",
      description: "The requested service could not be found.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return {
    title: `${service.title} - MERN Stack | Full-Stack | Software Developer`,
    description:
      service.shortDescription ||
      `Professional ${service.title} services for coaches, startups, and businesses. Expert MERN Stack development solutions.`,
    keywords: [
      service.title,
      "MERN Stack services",
      "web development services",
      "mobile app development",
      "MVP development",
      "startup development",
      "Next.js services",
      "React Native services",
      "full-stack developer",
      "JavaScript developer services",
      "scalable web applications",
      "business solutions",
    ].join(", "),
    openGraph: {
      title: `${service.title} - Professional MERN Stack Services`,
      description:
        service.shortDescription ||
        `Get professional ${service.title} services. Expert MERN Stack development for coaches, startups, and growing businesses.`,
      type: "website",
      images: [
        {
          url: service.image,
          width: 1200,
          height: 630,
          alt: `${service.title} - Professional development service`,
        },
      ],
      siteName: "MERN Stack Developer Services",
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title} - MERN Stack Services`,
      description:
        service.shortDescription ||
        `Professional ${service.title} services for modern businesses and startups.`,
      images: [service.image],
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
    category: "Web & mobile Development Services",
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    other: {
      "application-name": "Developer Services",
    },
  };
}

export async function generateStaticParams() {
  return ServiceData.map((service) => ({
    id: service.slug,
  }));
}

// Server Component that passes data to Client Component (Next.js 15)
export default async function ServiceSinglePage({ params }) {
  // Await params in the component as well
  const resolvedParams = await params;
  return <SingleServiceClient params={resolvedParams} />;
}
