import { createFileRoute } from "@tanstack/react-router";
import { InsightPost } from "@/pages/InsightPost";
import { INSIGHTS } from "@/data/insights";
import { useSiteNavigate } from "@/lib/nav";

const SITE_URL = "https://immigranteconomist.com";

export const Route = createFileRoute("/insights/$slug")({
  head: ({ params }) => {
    const insight = INSIGHTS.find((i) => i.slug === params.slug);
    const title = insight ? `${insight.title} — Abdizalaam Awdahir` : "Insight — The Immigrant Economist";
    const description = insight?.excerpt ?? "A short note from The Immigrant Economist — personal finance without the jargon.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `${SITE_URL}/insights/${params.slug}` },
        { property: "og:image", content: `${SITE_URL}/post-art/${params.slug}.png` },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: `${SITE_URL}/post-art/${params.slug}.png` },
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
