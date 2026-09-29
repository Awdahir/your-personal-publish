import { createFileRoute } from "@tanstack/react-router";
import { Blog } from "@/pages/Blog";
import { useSiteNavigate } from "@/lib/nav";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog — Awdahir" },
      {
        name: "description",
        content:
          "Essays on budgeting, debt, saving and investing — personal finance without the jargon.",
      },
      { property: "og:title", content: "Blog — Awdahir" },
      {
        property: "og:description",
        content:
          "Essays on budgeting, debt, saving and investing — personal finance without the jargon.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BlogPage,
});

function BlogPage() {
  const onNavigate = useSiteNavigate();
  return <Blog onNavigate={onNavigate} />;
}
