import { createFileRoute } from "@tanstack/react-router";
import { Home } from "@/pages/Home";
import { useSiteNavigate } from "@/lib/nav";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Awdahir — Personal Finance, Without the Jargon" },
      {
        name: "description",
        content:
          "Essays, tools and digital books for people who want their money to work — without the jargon.",
      },
      { property: "og:title", content: "Awdahir — Personal Finance, Without the Jargon" },
      {
        property: "og:description",
        content:
          "Essays, tools and digital books for people who want their money to work — without the jargon.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const onNavigate = useSiteNavigate();
  return <Home onNavigate={onNavigate} />;
}
