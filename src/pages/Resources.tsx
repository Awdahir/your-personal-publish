import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { RESOURCES } from "@/data/content";

const TYPE_STYLES: Record<string, string> = {
  "Free download": "bg-chart text-ink",
  Template: "bg-mint text-ink",
  "Reading list": "bg-brick text-ink",
  Tool: "bg-ink text-chart",
};

export function Resources() {
  return (
    <div className="mx-auto max-w-[1360px] px-6 pb-24 pt-32 md:px-8 md:pt-44">
      <Reveal>
        <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-ink/50">
          Resources
        </p>
        <h1 className="mt-6 max-w-3xl font-serif text-[clamp(2.6rem,6vw,4.6rem)] leading-[1.03] tracking-[-0.02em]">
          Free tools to <em>run</em> your money.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/70">
          Checklists, spreadsheets and reading lists — the same templates behind
          my essays. Most are free; all are built to be used, not admired.
        </p>
      </Reveal>

      <div className="mt-16 grid gap-px border border-ink/20 bg-ink/20 md:grid-cols-2 lg:grid-cols-3">
        {RESOURCES.map((r, i) => (
          <Reveal key={r.title} delay={(i % 3) * 80} className="bg-paper">
            <a
              href={r.url}
              target="_blank"
              rel="noreferrer"
              className="group flex h-full flex-col p-8 transition-colors hover:bg-paper2 md:p-10"
            >
              <div className="flex items-center justify-between">
                <span
                  className={`rounded-full px-3 py-1 font-mono text-[0.58rem] uppercase tracking-[0.16em] ${TYPE_STYLES[r.type]}`}
                >
                  {r.type}
                </span>
                <ArrowUpRight
                  size={18}
                  className="text-ink/35 transition-all group-hover:translate-x-0.5 group-hover:text-ink"
                />
              </div>
              <h2 className="mt-6 font-serif text-2xl leading-snug tracking-tight">{r.title}</h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/65">{r.description}</p>
              <span className="link-underline mt-6 inline-flex w-fit font-mono text-[0.62rem] uppercase tracking-[0.18em] text-ink/70">
                Get it
              </span>
            </a>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <p className="mt-12 max-w-2xl text-sm leading-relaxed text-ink/55">
          Downloads are delivered through Payhip (free items just need an email
          address). Suggest a resource you'd like to see — the contact form is
          always open.
        </p>
      </Reveal>
    </div>
  );
}
