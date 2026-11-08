import { createFileRoute } from "@tanstack/react-router";
import { Home } from "@/pages/Home";
import { useSiteNavigate } from "@/lib/nav";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Immigrant Economist — Personal Finance for Immigrants, Without the Jargon" },
      {
        name: "description",
        content:
          "Essays, tools and digital books by Abdizalaam Awdahir — personal finance for people building wealth in a new country, without the jargon.",
      },
      { property: "og:title", content: "The Immigrant Economist — Personal Finance for Immigrants, Without the Jargon" },
      {
        property: "og:description",
        content:
          "Essays, tools and digital books by Abdizalaam Awdahir — personal finance for people building wealth in a new country, without the jargon.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://immigranteconomist.com" },
      { property: "og:image", content: "https://immigranteconomist.com/og-default.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://immigranteconomist.com/og-default.png" },
    ],
  }),
  component: Index,
});

function Index() {
  const onNavigate = useSiteNavigate();
  return <Home onNavigate={onNavigate} />;
}
