import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { PostArt } from "@/components/PostArt";
import { ArticleBody } from "@/components/ArticleBody";
import { POSTS, SOCIALS } from "@/data/content";
import type { Page } from "@/types/navigation";

interface PostProps {
  slug: string;
  onNavigate: (page: Page, slug?: string) => void;
}

export function Post({ slug, onNavigate }: PostProps) {
  const index = POSTS.findIndex((p) => p.slug === slug);
  const post = POSTS[index] ?? POSTS[0];
  const next = POSTS[(index + 1) % POSTS.length];

  return (
    <div className="pb-24 pt-32 md:pt-40">
      <article className="mx-auto max-w-[44rem] px-6">
        <Reveal>
          <button
            onClick={() => onNavigate("blog")}
            className="link-underline inline-flex items-center gap-1.5 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-ink/60"
          >
            <ArrowLeft size={13} /> All essays
          </button>
          <div className="mt-8 flex items-center gap-3 font-mono text-[0.62rem] uppercase tracking-[0.2em] text-ink/55">
            <span className="rounded-full bg-chart px-2.5 py-0.5 text-ink">{post.category}</span>
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readTime} read</span>
          </div>
          <h1 className="mt-6 font-serif text-[clamp(2.2rem,5.5vw,3.6rem)] leading-[1.08] tracking-[-0.015em]">
            {post.title}
          </h1>
          <p className="mt-6 font-serif text-xl italic leading-relaxed text-ink/60">
            {post.excerpt}
          </p>
          <p className="mt-6 font-mono text-[0.62rem] uppercase tracking-[0.2em] text-ink/55">
            By <span className="text-ink">Abdizalaam Awdahir</span> · The Immigrant Economist
          </p>
        </Reveal>
      </article>

      <Reveal delay={150}>
        <div className="mx-auto mt-12 max-w-[62rem] px-6">
          <PostArt art={post.art} slug={post.slug} className="aspect-[2/1] border border-ink/20" />
        </div>
      </Reveal>

      <div className="article-body mx-auto mt-14 max-w-[44rem] px-6">
        <ArticleBody body={post.body} markdown={post.markdown} />

        {post.sources && (
          <section aria-labelledby="article-sources" className="mt-12 border-t border-ink/20 pt-4">
            <h3 id="article-sources">Evidence and further context</h3>
            <ul className="space-y-5">
              {post.sources.map((source) => (
                <li key={source.url}>
                  <a href={source.url} target="_blank" rel="noreferrer" className="link-underline font-medium text-ink underline underline-offset-4">
                    {source.label} <ArrowUpRight size={13} className="inline" />
                  </a>
                  <div className="mt-2 text-sm leading-relaxed text-ink/65">{source.note}</div>
                </li>
              ))}
            </ul>
          </section>
        )}

        {post.readingList && (
          <section aria-labelledby="article-reading-list" className="mt-12 border-t border-ink/20 pt-4">
            <h3 id="article-reading-list">Ten books I have read on attention and digital life</h3>
            <p>These books helped shape my thinking. They offer different lenses, not ten interchangeable scientific verdicts. Read them critically, including the ones whose arguments you find most persuasive.</p>
            <ol className="space-y-6 pl-6 marker:font-mono marker:text-ink/50 list-decimal">
              {post.readingList.map((book) => (
                <li key={book.title} className="pl-2">
                  {book.cover && (
                    <img
                      src={book.cover.url}
                      alt={`Cover of ${book.title}`}
                      loading="lazy"
                      className="img-zoom float-right ml-6 mb-3 w-32 border border-ink/20 shadow-[6px_6px_0_0_rgba(14,42,34,0.12)]"
                    />
                  )}
                  <div className="font-serif text-xl leading-snug">{book.title}</div>
                  <div className="mt-1 text-sm font-medium text-ink/75">{book.author}</div>
                  <div className="mt-2 text-sm leading-relaxed text-ink/65">{book.note}</div>
                </li>
              ))}
            </ol>
          </section>
        )}

        {/* share strip */}
        <div className="mt-16 border-y border-ink/20 py-8">
          <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-ink/50">
            Enjoyed this? It's also on
          </p>
          <div className="mt-4 flex flex-wrap gap-x-8 gap-y-3">
            <a href={SOCIALS.substack} target="_blank" rel="noreferrer" className="link-underline inline-flex items-center gap-1.5 text-sm">
              Substack <ArrowUpRight size={13} />
            </a>
            <a href={SOCIALS.twitter} target="_blank" rel="noreferrer" className="link-underline inline-flex items-center gap-1.5 text-sm">
              X / Twitter <ArrowUpRight size={13} />
            </a>
            <a href={SOCIALS.patreon} target="_blank" rel="noreferrer" className="link-underline inline-flex items-center gap-1.5 text-sm">
              Patreon <ArrowUpRight size={13} />
            </a>
          </div>
        </div>
      </div>

      {/* next article */}
      <div className="mx-auto mt-16 max-w-[44rem] px-6">
        <button
          onClick={() => onNavigate("post", next.slug)}
          className="article-row group block w-full border border-ink/20 bg-paper2 p-8 text-left"
        >
          <span className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-ink/50">
            Next essay
          </span>
          <span className="article-title mt-3 flex items-center justify-between gap-4 font-serif text-2xl leading-snug tracking-tight">
            {next.title}
            <ArrowRight size={20} className="shrink-0" />
          </span>
        </button>
      </div>
    </div>
  );
}
