import { createFileRoute } from "@tanstack/react-router";
import { Resources } from "@/pages/Resources";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Resources — The Immigrant Economist" },
      {
        name: "description",
        content: "Free tools and resources to make your money work — budgeting, saving and investing.",
      },
      { property: "og:title", content: "Resources — Awdahir" },
      {
        property: "og:description",
        content: "Free tools and resources to make your money work — budgeting, saving and investing.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ResourcesPage,
});

function ResourcesPage() {
  return <Resources />;
}
