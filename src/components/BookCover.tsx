import type { Ebook } from "@/data/content";

const ACCENTS = {
  chart: "#c8f547",
  mint: "#9be5b9",
  brick: "#f3c13a",
};

/** Code-drawn typographic e-book cover in the site palette. */
export function BookCover({ book }: { book: Ebook }) {
  const accent = ACCENTS[book.accent];
  return (
    <div className="img-zoom relative aspect-[3/4] w-full overflow-hidden border border-ink/20 bg-paper2 shadow-[8px_8px_0_0_rgba(14,42,34,0.12)]">
      {/* motif */}
      <svg viewBox="0 0 300 400" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice">
        {book.motif === "circle" && (
          <>
            <circle cx="235" cy="90" r="70" fill={accent} stroke="#0e2a22" strokeWidth="2.5" />
            <circle cx="235" cy="90" r="45" fill="none" stroke="#0e2a22" strokeWidth="1.5" strokeDasharray="3 5" />
          </>
        )}
        {book.motif === "stack" && (
          <>
            {[0, 1, 2].map((i) => (
              <rect
                key={i}
                x={170 - i * 12}
                y={40 + i * 26}
                width="120"
                height="18"
                fill={i === 1 ? accent : "none"}
                stroke="#0e2a22"
                strokeWidth="2"
              />
            ))}
          </>
        )}
        {book.motif === "arcs" && (
          <>
            {[52, 38, 24].map((r, i) => (
              <path
                key={i}
                d={`M ${235 - r} 110 A ${r} ${r} 0 0 1 ${235 + r} 110`}
                fill="none"
                stroke={i === 0 ? accent : "#0e2a22"}
                strokeWidth={i === 0 ? 8 : 2}
              />
            ))}
            <line x1="150" y1="110" x2="320" y2="110" stroke="#0e2a22" strokeWidth="2" />
          </>
        )}
        {book.motif === "grid" && (
          <>
            {[0, 1, 2].map((r) =>
              [0, 1, 2].map((c) => (
                <rect
                  key={`${r}-${c}`}
                  x={160 + c * 34}
                  y={36 + r * 34}
                  width="26"
                  height="26"
                  fill={r === 1 && c === 1 ? accent : "none"}
                  stroke="#0e2a22"
                  strokeWidth="1.75"
                />
              ))
            )}
          </>
        )}
      </svg>

      {/* text block */}
      <div className="absolute inset-x-0 bottom-0 p-5">
        <p className="font-mono text-[0.55rem] uppercase tracking-[0.22em] text-ink/60">
          Awdahir Press
        </p>
        <p className="mt-2 font-serif text-[1.45rem] leading-[1.1] tracking-tight text-ink">
          {book.title}
        </p>
        <p className="mt-1.5 text-[0.7rem] leading-snug text-ink/60">{book.subtitle}</p>
        <div className="mt-3 h-px w-10 bg-ink/40" />
      </div>

      {book.badge && (
        <span className="absolute left-4 top-4 rounded-full bg-ink px-3 py-1 font-mono text-[0.55rem] uppercase tracking-[0.18em] text-chart">
          {book.badge}
        </span>
      )}
    </div>
  );
}
