"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import { fetchBlogs } from "../lib/fetchBlogs";

export default function useInfiniteBlogs(initialData = []) {
  const [blogs, setBlogs] = useState(initialData);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const observerRef = useRef(null);

  const fetchMore = useCallback(async () => {
    if (loading || !hasMore) return;
    setLoading(true);

    try {
      const nextPage = page + 1;
      const { data: newBlogs, meta } = await fetchBlogs({ page: nextPage });

      if (newBlogs.length > 0) {
        setBlogs((prev) => {
          const existingIds = new Set(prev.map((b) => b.id));
          const filtered = newBlogs.filter((b) => !existingIds.has(b.id));
          return [...prev, ...filtered];
        });

        setPage(nextPage);
        if (meta.page >= meta.pageCount) setHasMore(false);
      } else {
        setHasMore(false);
      }
    } catch (err) {
      console.error("Error fetching blogs:", err);
      setHasMore(false);
    } finally {
      setLoading(false);
    }
  }, [page, hasMore, loading]);

  // Observe last blog
  useEffect(() => {
    if (!hasMore || loading) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) fetchMore();
      },
      { rootMargin: "200px" }
    );

    const el = observerRef.current;
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, [fetchMore, hasMore, loading]);

  return { blogs, loading, hasMore, observerRef };
}
