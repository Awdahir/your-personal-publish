import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/pages/About";
import { useSiteNavigate } from "@/lib/nav";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — The Immigrant Economist" },
      {
        name: "description",
        content:
          "The story behind Awdahir — an independent personal finance publication making money simple.",
      },
      { property: "og:title", content: "About — Awdahir" },
      {
        property: "og:description",
        content:
          "The story behind Awdahir — an independent personal finance publication making money simple.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const onNavigate = useSiteNavigate();
  return <About onNavigate={onNavigate} />;
}
