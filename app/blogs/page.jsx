import React from "react";
import Container from "../components/common/container";
import BlogHeader from "../components/blogs/BlogHeader";
import BlogRight from "../components/blogs/BlogRight";
import { getBaseUrl } from "../lib/getBaseUrl";
import BlogsCard from "../components/blogs/BlogsCard";

async function getBlogs() {
  const baseUrl = await getBaseUrl();

  const res = await fetch(`${baseUrl}/api/blogs`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch blogs");
  return res.json();
}

export default async function Blogs() {
  const { data } = await getBlogs();

  return (
    <>
      <main className="min-h-screen py-16 mt-32">
        <Container>
          <BlogHeader />
          <div className="mt-22 lg:grid lg:grid-cols-[3fr_1fr] lg:gap-x-6">
            <BlogsCard blogs={data} />
            <BlogRight />
          </div>
        </Container>
      </main>
    </>
  );
}
