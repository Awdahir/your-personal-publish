import { createFileRoute } from "@tanstack/react-router";
import { Post } from "@/pages/Post";
import { POSTS } from "@/data/content";
import { useSiteNavigate } from "@/lib/nav";

const SITE_URL = "https://immigranteconomist.com";

export const Route = createFileRoute("/blog/$slug")({
  head: ({ params }) => {
    const post = POSTS.find((p) => p.slug === params.slug);
    const title = post ? `${post.title} — Abdizalaam Awdahir` : "Article — The Immigrant Economist";
    const description = post?.excerpt ?? "An essay from The Immigrant Economist — personal finance without the jargon.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `${SITE_URL}/blog/${params.slug}` },
        { property: "og:image", content: `${SITE_URL}/post-art/${params.slug}.png` },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: `${SITE_URL}/post-art/${params.slug}.png` },
      ],
    };
  },
  component: PostPage,
});

function PostPage() {
  const { slug } = Route.useParams();
  const onNavigate = useSiteNavigate();
  return <Post slug={slug} onNavigate={onNavigate} />;
}
