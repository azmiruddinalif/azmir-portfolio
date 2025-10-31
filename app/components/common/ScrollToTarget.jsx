"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToTarget() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/") return;

    const target = sessionStorage.getItem("scrollTarget");
    if (!target) return;

    let timeoutId;
    let attempts = 0;

    const tryScroll = () => {
      const el = document.getElementById(target);
      const header = document.getElementById("site-header");
      const headerHeight = header ? header.offsetHeight : 0;

      if (el) {
        const rect = el.getBoundingClientRect();
        // smaller offset because the header is already fixed by now
        const offsetY = window.scrollY + rect.top - headerHeight - 100;
        window.scrollTo({ top: offsetY < 0 ? 0 : offsetY, behavior: "smooth" });
        sessionStorage.removeItem("scrollTarget");
        return;
      }

      if (attempts < 15) {
        attempts++;
        timeoutId = setTimeout(tryScroll, 200);
      }
    };

    // Delay a bit more to ensure DOM and layout are ready
    timeoutId = setTimeout(tryScroll, 1000);

    return () => clearTimeout(timeoutId);
  }, [pathname]);

  return null;
}
