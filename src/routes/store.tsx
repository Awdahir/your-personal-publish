import { createFileRoute } from "@tanstack/react-router";
import { Store } from "@/pages/Store";
import { useSiteNavigate } from "@/lib/nav";

export const Route = createFileRoute("/store")({
  head: () => ({
    meta: [
      { title: "Store — The Immigrant Economist" },
      {
        name: "description",
        content: "Digital books on budgeting, debt, saving and investing — personal finance without the jargon.",
      },
      { property: "og:title", content: "Store — Awdahir" },
      {
        property: "og:description",
        content: "Digital books on budgeting, debt, saving and investing — personal finance without the jargon.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: StorePage,
});

function StorePage() {
  const onNavigate = useSiteNavigate();
  return <Store onNavigate={onNavigate} />;
}
