import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const page = Number(searchParams.get("page")) || 1;
    const pageSize = Number(searchParams.get("pageSize")) || 4;
    const sortField = searchParams.get("sort") || "date:desc";

    const strapiUrl = `${process.env.NEXT_PUBLIC_STRAPI_URL}/case-studies?populate=*&pagination[page]=${page}&pagination[pageSize]=${pageSize}&sort[0]=${sortField}`;

    const res = await fetch(strapiUrl, { cache: 'no-cache' });
   
    
    if (!res.ok) {
      console.error("Failed to fetch case studies:", res.status, res.statusText);
      return NextResponse.json(
        { error: "Failed to fetch case studies" },
        { status: res.status }
      );
    }

    const data = await res.json();

    return NextResponse.json({
      data: data?.data || [],
      meta: data?.meta?.pagination || {},
    });
  } catch (err) {
    console.error("🔥 Error fetching case studies:", err.message);
    return NextResponse.json(
      { error: err.message || "Unexpected error occurred" },
      { status: 500 }
    );
  }
}
