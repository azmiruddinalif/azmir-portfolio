import SingleCaseStudy from "./SingleCaseStudy";

// ✅ Static Meta Generator for Case Study Pages
export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/case-studies?filters[slug][$eq]=${slug}&populate=*`,
    { cache: "no-store" }
  );

  const data = await res.json();
  const caseStudy = data?.data?.[0];

  if (!caseStudy) {
    return {
      title: "Azmir - MERN Stack Developer | Case Study Not Found",
      description: "The requested case study could not be found.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const {
    title,
    meta_title,
    meta_description,
    short_description,
    cover_image,
    publishedAt,
    tags,
  } = caseStudy;

  const desc =
    meta_description ||
    short_description?.slice(0, 160) ||
    "Explore in-depth developer case studies on MERN stack, Next.js, and modern product development.";

  const image =
    cover_image?.data?.attributes?.url ||
    cover_image?.url ||
    "/og/azmir_og_learg.png";

  const tagNames = tags?.map((t) => t.tag || t.attributes?.tag) || [];

  const keywords = [
    title,
    "Case Study",
    "MERN Stack Development",
    "Full-Stack Engineering",
    "Next.js",
    "React.js",
    "Node.js",
    "Software Architecture",
    "Scalable Web Applications",
    "Azmir Uddin Alif",
    ...tagNames,
  ].join(", ");

  const canonicalUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/case-studies/${slug}`;

  return {
    title: `${meta_title || title} | Case Study | Azmir Uddin Alif`,
    description: desc,
    keywords,
    openGraph: {
      title: `${meta_title || title} | Case Study by Azmir Uddin Alif`,
      description: desc,
      type: "article",
      publishedTime: publishedAt,
      url: canonicalUrl,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${title} - Case Study by Azmir Uddin Alif`,
        },
      ],
      siteName: "Azmir Uddin Alif",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: `${meta_title || title} | Case Study by Azmir Uddin Alif`,
      description: desc,
      images: [image],
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
    authors: [{ name: "Azmir Uddin Alif - MERN Stack & Full-Stack Developer" }],
    creator: "Azmir Uddin Alif",
    category: "Software Development, Product Engineering, Case Study",
    alternates: {
      canonical: canonicalUrl,
    },
    other: {
      "application-name": "Azmir Uddin Alif Case Studies",
    },
  };
}

// ✅ Default Case Study Page
export default async function CaseStudyPage({ params }) {
  const resolvedParams = await params;
  return <SingleCaseStudy params={resolvedParams} />;
}
