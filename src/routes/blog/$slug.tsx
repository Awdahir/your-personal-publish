import { createFileRoute } from "@tanstack/react-router";
import { Post } from "@/pages/Post";
import { POSTS } from "@/data/content";
import { useSiteNavigate } from "@/lib/nav";

export const Route = createFileRoute("/blog/$slug")({
  head: ({ params }) => {
    const post = POSTS.find((p) => p.slug === params.slug);
    const title = post ? `${post.title} — Awdahir` : "Article — Awdahir";
    const description = post?.excerpt ?? "An essay from Awdahir — personal finance, without the jargon.";
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
  component: PostPage,
});

function PostPage() {
  const { slug } = Route.useParams();
  const onNavigate = useSiteNavigate();
  return <Post slug={slug} onNavigate={onNavigate} />;
}
