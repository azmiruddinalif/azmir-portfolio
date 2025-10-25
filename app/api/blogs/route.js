import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/blogs?populate=*`,
      {
        // prevent caching during dev
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch blogs: ${res.status}`);
    }

    const data = await res.json();

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return NextResponse.json(
      { error: "Failed to fetch blogs" },
      { status: 500 }
    );
  }
}
