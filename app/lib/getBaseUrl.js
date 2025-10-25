import { headers } from "next/headers";

export async function getBaseUrl() {
  // Must await headers() now in Next.js 15+
  const headerList = await headers();
  const host = headerList.get("host");
  const protocol = process.env.NODE_ENV === "production" ? "https" : "http";

  // Fallback to env variable if no host
  return host
    ? `${protocol}://${host}`
    : process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
}
