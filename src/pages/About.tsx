import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SOCIALS } from "@/data/content";
import portraitColor from "@/assets/portrait-color.jpg";
import type { Page } from "@/types/navigation";

export function About({ onNavigate }: { onNavigate: (page: Page) => void }) {
  return (
    <div className="mx-auto max-w-[1360px] px-6 pb-24 pt-32 md:px-8 md:pt-44">
      {/* intro */}
      <div className="grid gap-12 md:grid-cols-12">
        <div className="md:col-span-7">
          <Reveal>
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-ink/50">
              About
            </p>
            <h1 className="mt-6 font-serif text-[clamp(2.6rem,6vw,4.6rem)] leading-[1.03] tracking-[-0.02em]">
              Hi, I'm <em>Abdizalaam Awdahir</em>.<br />
              I make money make sense.
            </h1>
          </Reveal>
          <Reveal delay={150}>
            <div className="mt-10 max-w-xl space-y-6 text-[1.05rem] leading-[1.85] text-ink/85">
              <p>
                I didn't grow up around people who talked about money well. It
                was either a source of stress or a subject wrapped in
                impenetrable jargon — as if wanting to understand your own
                finances required a finance degree first.
              </p>
              <p>
                Everything changed when I realized the fundamentals of personal
                finance are genuinely simple: spend less than you earn, avoid
                expensive debt, save the difference, invest it patiently, and
                protect yourself from disaster. Simple — but not easy, because
                nobody teaches the <em>habits</em> that make it stick.
              </p>
              <p>
                That's what The Immigrant Economist is for. I write weekly
                essays, build
                practical tools, and publish digital books that turn money
                fundamentals into systems you can actually run. No jargon, no
                get-rich-quick, no shame. Just clear thinking about the money
                you already have.
              </p>
              <p>
                When I'm not writing, I'm reading behavioral economics,
                refining my own spreadsheets, and answering reader questions —
                the best part of this whole project.
              </p>
            </div>
          </Reveal>
        </div>

        {/* portrait placeholder + facts */}
        <div className="md:col-span-5">
          <Reveal delay={200}>
            <div className="overflow-hidden border border-ink/20 bg-paper2">
              <img
                src={portraitColor}
                alt="Abdizalaam Awdahir"
                className="aspect-[4/5] w-full object-cover"
              />
              <div className="flex items-center justify-between border-t border-ink/15 px-5 py-4">
                <p className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-ink/55">
                  Abdizalaam Awdahir
                </p>
                <p className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-ink/40">
                  Immigrant Economist
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={300}>
            <dl className="mt-8 divide-y divide-ink/15 border-y border-ink/15">
              {[
                ["Writing about", "Budgeting, debt, saving, investing, mindset"],
                ["Publishing", "Weekly essays + The Awdahir Letter"],
                ["Based on", "Real systems, tested on my own money first"],
                ["Elsewhere", "Substack · X · Patreon · Payhip"],
              ].map(([k, v]) => (
                <div key={k} className="grid grid-cols-[8rem_1fr] gap-4 py-4 text-sm">
                  <dt className="font-mono text-[0.6rem] uppercase leading-5 tracking-[0.18em] text-ink/50">
                    {k}
                  </dt>
                  <dd className="text-ink/85">{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>

      {/* principles */}
      <div className="mt-24 md:mt-32">
        <Reveal>
          <h2 className="font-serif text-[clamp(2rem,4.5vw,3.2rem)] tracking-tight">
            What I <em>believe</em>
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-px border border-ink/20 bg-ink/20 md:grid-cols-3">
          {[
            {
              n: "01",
              t: "Simple beats clever",
              d: "If a money strategy needs a flowchart, it won't survive a busy month. The best systems are boring enough to run for decades.",
            },
            {
              n: "02",
              t: "Habits beat willpower",
              d: "You don't rise to your goals; you fall to your systems. Automate the good decisions and add friction to the bad ones.",
            },
            {
              n: "03",
              t: "Money is a tool, not a score",
              d: "The point isn't the biggest number — it's a life with options, calm, and room for the things you actually love.",
            },
          ].map((p, i) => (
            <Reveal key={p.n} delay={i * 100} className="bg-paper">
              <div className="h-full p-8 md:p-10">
                <span className="font-mono text-sm text-ink/40">{p.n}</span>
                <h3 className="mt-4 font-serif text-2xl tracking-tight">{p.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/65">{p.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* CTA */}
      <Reveal>
        <div className="mt-24 flex flex-col items-start justify-between gap-8 border border-ink/20 bg-ink p-10 text-paper md:mt-32 md:flex-row md:items-center md:p-14">
          <h2 className="max-w-lg font-serif text-3xl leading-snug tracking-tight md:text-4xl">
            New here? Start with the <em className="text-chart">latest essays</em>.
          </h2>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => onNavigate("blog")}
              className="rounded-full bg-chart px-7 py-3.5 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-ink transition-colors hover:bg-chart/85"
            >
              Read the blog
            </button>
            <a
              href={SOCIALS.substack}
              target="_blank"
              rel="noreferrer"
              className="link-underline inline-flex items-center gap-1.5 self-center font-mono text-[0.7rem] uppercase tracking-[0.18em] text-paper/80"
            >
              Substack <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
