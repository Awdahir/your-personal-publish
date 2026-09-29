import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { PostArt } from "@/components/PostArt";
import { POSTS } from "@/data/content";
import type { Page } from "@/types/navigation";

interface BlogProps {
  onNavigate: (page: Page, slug?: string) => void;
}

const CATEGORIES = ["All", ...Array.from(new Set(POSTS.map((p) => p.category)))];

export function Blog({ onNavigate }: BlogProps) {
  const [filter, setFilter] = useState("All");
  const visible = filter === "All" ? POSTS : POSTS.filter((p) => p.category === filter);
  const [lead, ...rest] = visible;

  return (
    <div className="mx-auto max-w-[1360px] px-6 pb-24 pt-32 md:px-8 md:pt-44">
      <Reveal>
        <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-ink/50">
          The Blog
        </p>
        <h1 className="mt-6 max-w-3xl font-serif text-[clamp(2.6rem,6vw,4.6rem)] leading-[1.03] tracking-[-0.02em]">
          Essays on <em>money</em>, in plain language.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/70">
          Long-form, practical, and free. Every essay is also cross-posted to
          Substack and discussed on X — join the conversation wherever you read.
        </p>
      </Reveal>

      {/* category filter */}
      <Reveal delay={120}>
        <div className="mt-12 flex flex-wrap gap-2.5">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`rounded-full border px-4 py-1.5 font-mono text-[0.65rem] uppercase tracking-[0.16em] transition-colors ${
                filter === cat
                  ? "border-ink bg-ink text-chart"
                  : "border-ink/25 text-ink/70 hover:border-ink/60"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </Reveal>

      {/* lead article */}
      {lead && (
        <Reveal delay={180}>
          <button
            onClick={() => onNavigate("post", lead.slug)}
            className="group mt-14 grid w-full gap-0 border border-ink/20 text-left md:grid-cols-2"
          >
            <PostArt art={lead.art} className="aspect-[4/3] border-b border-ink/20 md:aspect-auto md:border-b-0 md:border-r" />
            <div className="flex flex-col justify-center bg-paper2 p-8 md:p-12">
              <div className="flex items-center gap-3 font-mono text-[0.6rem] uppercase tracking-[0.2em] text-ink/55">
                <span className="rounded-full bg-chart px-2.5 py-0.5 text-ink">Latest</span>
                <span>{lead.category}</span>
                <span>·</span>
                <span>{lead.date}</span>
              </div>
              <h2 className="mt-5 font-serif text-3xl leading-tight tracking-tight md:text-4xl">
                {lead.title}
              </h2>
              <p className="mt-4 leading-relaxed text-ink/65">{lead.excerpt}</p>
              <span className="link-underline mt-6 inline-flex w-fit items-center gap-1.5 font-mono text-[0.65rem] uppercase tracking-[0.18em]">
                Read essay <ArrowRight size={13} />
              </span>
            </div>
          </button>
        </Reveal>
      )}

      {/* grid */}
      <div className="mt-14 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        {rest.map((post, i) => (
          <Reveal key={post.slug} delay={i * 80}>
            <button onClick={() => onNavigate("post", post.slug)} className="group block w-full text-left">
              <PostArt art={post.art} className="aspect-[4/3] border border-ink/20" />
              <div className="mt-5 flex items-center gap-3 font-mono text-[0.6rem] uppercase tracking-[0.18em] text-ink/55">
                <span>{post.category}</span>
                <span>·</span>
                <span>{post.date}</span>
                <span>·</span>
                <span>{post.readTime}</span>
              </div>
              <h3 className="mt-3 font-serif text-[1.4rem] leading-snug tracking-tight">
                {post.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-ink/60">{post.excerpt}</p>
            </button>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
