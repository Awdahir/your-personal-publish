import { useNavigate } from "@tanstack/react-router";
import type { Page } from "@/types/navigation";

export function pageToPath(page: Page, slug?: string): string {
  switch (page) {
    case "home":
      return "/";
    case "post":
      return `/blog/${slug ?? ""}`;
    case "insight-post":
      return `/insights/${slug ?? ""}`;
    default:
      return `/${page}`;
  }
}

/** Adapter so the original pages' onNavigate(page, slug?) API drives the router. */
export function useSiteNavigate() {
  const navigate = useNavigate();
  return (page: Page, slug?: string) => {
    navigate({ to: pageToPath(page, slug) });
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  };
}
