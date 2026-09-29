import { createFileRoute } from "@tanstack/react-router";
import { InsightPost } from "@/pages/InsightPost";
import { INSIGHTS } from "@/data/insights";
import { useSiteNavigate } from "@/lib/nav";

export const Route = createFileRoute("/insights/$slug")({
  head: ({ params }) => {
    const insight = INSIGHTS.find((i) => i.slug === params.slug);
    const title = insight ? `${insight.title} — Awdahir` : "Insight — Awdahir";
    const description = insight?.excerpt ?? "A short note from Awdahir — personal finance, without the jargon.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: InsightPostPage,
});

function InsightPostPage() {
  const { slug } = Route.useParams();
  const onNavigate = useSiteNavigate();
  return <InsightPost slug={slug} onNavigate={onNavigate} />;
}
