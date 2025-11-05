"use client";
import { useRef, useEffect } from "react";

/**
 * Simple reusable Infinite Scroll hook.
 *
 * @param {Function} onLoadMore - called when the sentinel becomes visible
 * @param {Object} options - optional config
 * @param {boolean} options.hasMore - whether more data is available
 * @param {boolean} options.loading - disable trigger while loading
 * @param {number} options.threshold - distance (px) from bottom to trigger
 */
export default function useInfiniteScroll(
  onLoadMore,
  { hasMore = true, loading = false, threshold = 200 } = {}
) {
  const observerRef = useRef(null);
  const sentinelRef = useRef(null);

  useEffect(() => {
    if (!hasMore || loading) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) onLoadMore();
      },
      { rootMargin: `${threshold}px` }
    );
    const el = sentinelRef.current;
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, [onLoadMore, hasMore, loading, threshold]);

  return { sentinelRef, observerRef };
}
