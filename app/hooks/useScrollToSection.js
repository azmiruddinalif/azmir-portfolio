"use client";
import { useRouter } from "next/navigation";

export const useScrollToSection = () => {
  const router = useRouter();

  const scrollToSection = (sectionId) => {
    if (typeof window === "undefined") return;

    const currentPath = window.location.pathname;

    // ✅ If already on homepage
    if (currentPath === "/") {
      const el = document.getElementById(sectionId);
      const header = document.getElementById("site-header");
      const headerHeight = header ? header.offsetHeight : 0;

      if (el) {
        const rect = el.getBoundingClientRect();
        const offsetY = window.scrollY + rect.top - headerHeight - 30;
        window.scrollTo({ top: offsetY < 0 ? 0 : offsetY, behavior: "smooth" });
      }
    } else {
      sessionStorage.setItem("scrollTarget", sectionId);
      router.push("/");
    }
  };

  return scrollToSection;
};
