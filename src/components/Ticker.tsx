import { TOPICS } from "@/data/content";

export function Ticker() {
  const items = [...TOPICS, ...TOPICS];
  return (
    <div className="overflow-hidden border-y border-ink/15 bg-ink py-3 text-paper">
      <div className="marquee-track">
        {[0, 1].map((half) => (
          <div key={half} className="flex shrink-0 items-center">
            {items.map((topic, i) => (
              <span
                key={`${half}-${i}`}
                className="flex items-center font-mono text-xs uppercase tracking-[0.18em]"
              >
                <span className="px-6">{topic}</span>
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-chart" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
