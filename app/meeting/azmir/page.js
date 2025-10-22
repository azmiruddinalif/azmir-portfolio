import MeetingClient from "./MeetingClient";

// Generate metadata for the page (Next.js 15)
export async function generateMetadata({ params }) {
  // In Next.js 15, params is a Promise that needs to be awaited
  const resolvedParams = await params;
  const meetingId = resolvedParams?.id;

  // You can customize metadata based on the meeting ID
  const meetingTypes = {
    azmir: {
      title: "Schedule a Meeting with Azmir - MERN Stack | Full-Stack | Software Developer",
      description:
        "Book a free consultation call with Azmir, a MERN Stack & Full-Stack JavaScript Developer. Discuss your project, get expert advice, and explore how we can build your next digital solution.",
      name: "Azmir Uddin Alif",
      expertise: "MERN Stack & Full-Stack Development",
    },
  };

  const meetingInfo = meetingTypes[meetingId] || meetingTypes.azmir;

  return {
    title: meetingInfo.title,
    description: meetingInfo.description,
    keywords: [
      "free consultation",
      "MERN Stack developer meeting",
      "project consultation",
      "web development consultation",
      "mobile app consultation",
      "startup consultation",
      "MVP development meeting",
      "Next.js consultation",
      "React Native consultation",
      "book developer call",
      "freelance developer",
      "full-stack consultation",
      "JavaScript developer meeting",
    ].join(", "),
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
    category: "consultation",
    alternates: {
      canonical: `/meeting/${meetingId}`,
    },
    other: {
      "application-name": "Developer Consultation Booking",
    },
    openGraph: {
      title: meetingInfo.title,
      description: meetingInfo.description,
      images: "/og/azmir_og_learg.png",
    },
  };
}

// Generate static params for static generation (Next.js 15)
export async function generateStaticParams() {
  return [
    { id: "azmir" },
    // Add more meeting IDs if needed
  ];
}

// Server Component that passes data to Client Component (Next.js 15)
export default async function MeetingPage({ params }) {
  // Await params in the component as well
  const resolvedParams = await params;
  return <MeetingClient params={resolvedParams} />;
}
