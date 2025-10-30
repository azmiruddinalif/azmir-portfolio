import { NextResponse } from "next/server";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const page = Number(searchParams.get("page")) || 1;
  const pageSize = 2;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/blogs?populate=*&pagination[page]=${page}&pagination[pageSize]=${pageSize}&sort[0]=date_of_post:desc`,
    { next: { revalidate: 3600 } }
  );

  if (!res.ok)
    return NextResponse.json({ error: "Failed to fetch blogs" }, { status: 500 });

  const data = await res.json();

  return NextResponse.json({
    data: data?.data || [],
    meta: data?.meta?.pagination || {},
  });
}
