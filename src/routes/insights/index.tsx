import { createFileRoute } from "@tanstack/react-router";
import { Insights } from "@/pages/Insights";
import { useSiteNavigate } from "@/lib/nav";

export const Route = createFileRoute("/insights/")({
  head: () => ({
    meta: [
      { title: "Insights — The Immigrant Economist" },
      {
        name: "description",
        content: "Short notes and sharp insights on money, saving and investing.",
      },
      { property: "og:title", content: "Insights — Awdahir" },
      {
        property: "og:description",
        content: "Short notes and sharp insights on money, saving and investing.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: InsightsPage,
});

function InsightsPage() {
  const onNavigate = useSiteNavigate();
  return <Insights onNavigate={onNavigate} />;
}
