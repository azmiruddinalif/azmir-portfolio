import SingleBlog from "./SingleBlog";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/blogs?filters[slug][$eq]=${slug}&populate=*`,
    { cache: "no-store" }
  );

  const data = await res.json();
  const blog = data?.data[0];

  if (!blog) {
    return {
      title: "Azmir - MERN Stack Developer | Blog Not Found",
      description: "The requested blog post could not be found.",
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
    blog_description,
    blog_image,
    date_of_post,
    tags,
  } = blog;

  const desc =
    meta_description ||
    blog_description?.slice(0, 160) ||
    "Explore expert insights on MERN stack, web development, and software engineering.";

  const image =
    blog_image?.data?.attributes?.url ||
    blog_image?.url ||
    "/og/azmir_og_learg.png";

  const tagNames = tags?.map((t) => t.tag || t.attributes?.tag) || [];

  const keywords = [
    title,
    "MERN Stack",
    "Full-Stack Development",
    "Next.js Blog",
    "React.js",
    "Web Development",
    "JavaScript Developer",
    "Node.js",
    "Software Engineering",
    "Azmir Uddin Alif Blog",
    ...tagNames,
  ].join(", ");

  return {
    title: `${meta_title || title} | Azmir Uddin Alif`,
    description: desc,
    keywords,
    openGraph: {
      title: `${meta_title || title} | Azmir Uddin Alif`,
      description: desc,
      type: "article",
      publishedTime: date_of_post,
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/blogs/${slug}`,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${title} - Blog by Azmir Uddin Alif`,
        },
      ],
      siteName: "Azmir Uddin Alif",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: `${meta_title || title} | Azmir Uddin Alif`,
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
    category: "Technology, Software, Web Development",
    alternates: {
      canonical: `/blogs/${slug}`,
    },
    other: {
      "application-name": "Azmir Uddin Alif Blog",
    },
  };
}

// Default Blog Page
export default async function BlogSinglePage({ params }) {
  const resolvedParams = await params;
  return <SingleBlog params={resolvedParams} />;
}
