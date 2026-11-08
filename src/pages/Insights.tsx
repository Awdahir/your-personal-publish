import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { PostArt } from "@/components/PostArt";
import { INSIGHTS } from "@/data/insights";
import type { Page } from "@/types/navigation";

interface InsightsProps {
  onNavigate: (page: Page, slug?: string) => void;
}

export function Insights({ onNavigate }: InsightsProps) {
  const [lead, ...rest] = INSIGHTS;

  return (
    <div className="mx-auto max-w-[1360px] px-6 pb-24 pt-32 md:px-8 md:pt-44">
      <Reveal>
        <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-ink/50">
          Market Insights
        </p>
        <h1 className="mt-6 max-w-3xl font-serif text-[clamp(2.6rem,6vw,4.6rem)] leading-[1.03] tracking-[-0.02em]">
          Reading the <em>tape</em>, when the tape is worth reading.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/70">
          This is my market journal. Not a feed, not a newsletter on a schedule —
          I only sit down to write here when something in the structure of the
          market genuinely shifts: a trend turning, leadership rotating, money
          moving before the headlines catch up. Macro analysis, trend changes,
          and the occasional investing or trading idea — shared the way I'd
          explain it to a friend, with my reasoning and my mistakes included.
        </p>
        <p className="mt-4 max-w-2xl font-mono text-[0.72rem] leading-relaxed tracking-wide text-ink/45">
          Nothing here is financial advice. It's one person's thinking, shared
          openly — everything I hold is sized to survive being wrong, and
          everything I invest in passes Sharia screening.
        </p>
      </Reveal>

      {/* lead insight */}
      {lead && (
        <Reveal delay={150}>
          <button
            onClick={() => onNavigate("insight-post", lead.slug)}
            className="group mt-14 grid w-full gap-0 border border-ink/20 text-left md:grid-cols-2"
          >
            <PostArt
              art={lead.art}
              slug={lead.slug}
              className="aspect-[4/3] border-b border-ink/20 md:aspect-auto md:border-b-0 md:border-r"
            />
            <div className="flex flex-col justify-center bg-paper2 p-8 md:p-12">
              <div className="flex items-center gap-3 font-mono text-[0.6rem] uppercase tracking-[0.2em] text-ink/55">
                <span className="rounded-full bg-chart px-2.5 py-0.5 text-ink">
                  Latest note
                </span>
                <span>{lead.tag}</span>
                <span>·</span>
                <span>{lead.date}</span>
              </div>
              <h2 className="mt-5 font-serif text-3xl leading-tight tracking-tight md:text-4xl">
                {lead.title}
              </h2>
              <p className="mt-4 leading-relaxed text-ink/65">{lead.excerpt}</p>
              <span className="link-underline mt-6 inline-flex w-fit items-center gap-1.5 font-mono text-[0.65rem] uppercase tracking-[0.18em]">
                Read note <ArrowRight size={13} />
              </span>
            </div>
          </button>
        </Reveal>
      )}

      {/* journal rows */}
      <Reveal delay={220}>
        <div className="mt-16 flex items-baseline justify-between border-b border-ink/20 pb-4">
          <h3 className="font-serif text-2xl tracking-tight">Earlier notes</h3>
          <span className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-ink/50">
            {INSIGHTS.length} entries
          </span>
        </div>
      </Reveal>
      <div>
        {rest.map((note, i) => (
          <Reveal key={note.slug} delay={i * 60}>
            <button
              onClick={() => onNavigate("insight-post", note.slug)}
              className="article-row group grid w-full grid-cols-[auto_1fr_auto] items-baseline gap-x-6 border-b border-ink/15 py-7 text-left"
            >
              <span className="font-mono text-[0.68rem] tracking-[0.14em] text-ink/45">
                {String(INSIGHTS.length - 1 - i).padStart(2, "0")}
              </span>
              <span>
                <span className="article-title font-serif text-xl leading-snug tracking-tight md:text-2xl">
                  {note.title}
                </span>
                <span className="mt-2 block max-w-2xl text-sm leading-relaxed text-ink/60">
                  {note.excerpt}
                </span>
              </span>
              <span className="hidden text-right font-mono text-[0.6rem] uppercase tracking-[0.16em] text-ink/50 sm:block">
                {note.tag}
                <br />
                <span className="text-ink/40">{note.date}</span>
              </span>
            </button>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
