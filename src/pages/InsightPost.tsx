import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { PostArt } from "@/components/PostArt";
import { ArticleChart } from "@/components/ArticleChart";
import { INSIGHTS } from "@/data/insights";
import { SOCIALS } from "@/data/content";
import type { Page } from "@/types/navigation";

interface InsightPostProps {
  slug: string;
  onNavigate: (page: Page, slug?: string) => void;
}

export function InsightPost({ slug, onNavigate }: InsightPostProps) {
  const index = INSIGHTS.findIndex((p) => p.slug === slug);
  const note = INSIGHTS[index] ?? INSIGHTS[0];
  const next = INSIGHTS[(index + 1) % INSIGHTS.length];

  return (
    <div className="pb-24 pt-32 md:pt-40">
      <article className="mx-auto max-w-[44rem] px-6">
        <Reveal>
          <button
            onClick={() => onNavigate("insights")}
            className="link-underline inline-flex items-center gap-1.5 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-ink/60"
          >
            <ArrowLeft size={13} /> All insights
          </button>
          <div className="mt-8 flex items-center gap-3 font-mono text-[0.62rem] uppercase tracking-[0.2em] text-ink/55">
            <span className="rounded-full bg-chart px-2.5 py-0.5 text-ink">
              {note.tag}
            </span>
            <span>{note.date}</span>
            <span>·</span>
            <span>{note.readTime} read</span>
          </div>
          <h1 className="mt-6 font-serif text-[clamp(2.2rem,5.5vw,3.6rem)] leading-[1.08] tracking-[-0.015em]">
            {note.title}
          </h1>
          <p className="mt-6 font-serif text-xl italic leading-relaxed text-ink/60">
            {note.excerpt}
          </p>
        </Reveal>
      </article>

      <Reveal delay={150}>
        <div className="mx-auto mt-12 max-w-[62rem] px-6">
          <PostArt art={note.art} className="aspect-[2/1] border border-ink/20" />
        </div>
      </Reveal>

      <div className="article-body mx-auto mt-14 max-w-[44rem] px-6">
        {note.body.map((section, i) => (
          <div key={i}>
            {section.heading && <h3>{section.heading}</h3>}
            {section.paragraphs.map((p, j) => (
              <p key={j}>{p}</p>
            ))}
            {section.chart && <ArticleChart chart={section.chart} />}
          </div>
        ))}

        {/* disclaimer + share strip */}
        <div className="mt-16 border-y border-ink/20 py-8">
          <p className="font-mono text-[0.68rem] leading-relaxed tracking-wide text-ink/50">
            A quick note, always worth repeating: this is my personal journal,
            not financial advice. My positions are sized to survive being wrong,
            and everything I invest in passes Sharia screening — your situation
            is yours, so please do your own homework before acting on anything
            here.
          </p>
          <p className="mt-6 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-ink/50">
            This note is also discussed on
          </p>
          <div className="mt-4 flex flex-wrap gap-x-8 gap-y-3">
            <a
              href={SOCIALS.substack}
              target="_blank"
              rel="noreferrer"
              className="link-underline inline-flex items-center gap-1.5 text-sm"
            >
              Substack <ArrowUpRight size={13} />
            </a>
            <a
              href={SOCIALS.twitter}
              target="_blank"
              rel="noreferrer"
              className="link-underline inline-flex items-center gap-1.5 text-sm"
            >
              X / Twitter <ArrowUpRight size={13} />
            </a>
            <a
              href={SOCIALS.patreon}
              target="_blank"
              rel="noreferrer"
              className="link-underline inline-flex items-center gap-1.5 text-sm"
            >
              Patreon <ArrowUpRight size={13} />
            </a>
          </div>
        </div>
      </div>

      {/* next note */}
      <div className="mx-auto mt-16 max-w-[44rem] px-6">
        <button
          onClick={() => onNavigate("insight-post", next.slug)}
          className="article-row group block w-full border border-ink/20 bg-paper2 p-8 text-left"
        >
          <span className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-ink/50">
            Next note
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
