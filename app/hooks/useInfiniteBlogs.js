"use client";
import { useState, useRef, useEffect, useCallback } from "react";

export default function useInfiniteBlogs(apiUrl = "/api/blogs", initialData = []) {
  const [blogs, setBlogs] = useState(initialData);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const observerRef = useRef(null);

  // ✅ Fetch more blogs
  const fetchMore = useCallback(async () => {
    if (loading || !hasMore) return;
    setLoading(true);

    try {
      const res = await fetch(`${apiUrl}?page=${page + 1}`);
      const result = await res.json();
      const newBlogs = result?.data || [];
      const pagination = result?.meta?.pagination || {};

      if (newBlogs.length > 0) {
        setBlogs((prev) => {
          const existingIds = new Set(prev.map((b) => b.id));
          const filtered = newBlogs.filter((b) => !existingIds.has(b.id));
          return [...prev, ...filtered];
        });

        setPage((prev) => prev + 1);

        if (pagination.page >= pagination.pageCount) setHasMore(false);
      } else {
        setHasMore(false);
      }
    } catch (err) {
      console.error("Error fetching blogs:", err);
      setHasMore(false);
    } finally {
      setLoading(false);
    }
  }, [apiUrl, page, loading, hasMore]);

  // ✅ Observe the last element
  useEffect(() => {
    if (!hasMore || loading) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) fetchMore();
      },
      { rootMargin: "200px" }
    );

    if (observerRef.current) observer.observe(observerRef.current);
    return () => observer.disconnect();
  }, [fetchMore, hasMore, loading]);

  return {
    blogs,
    loading,
    hasMore,
    observerRef,
    fetchMore,
  };
}
