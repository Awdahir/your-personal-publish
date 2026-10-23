import type React from "react";
export type ChartKey =
  | "balance-sheet"
  | "wealth-share"
  | "asset-mix"
  | "debt-income"
  | "compound-growth"
  | "fund-managers"
  | "savings-rate"
  | "withdrawal-rates";

interface Seg { label: string; value: number; cls: string }

function Stack({ title, total, segs, height }: { title: string; total: string; segs: Seg[]; height: number }) {
  return (
    <div className="flex flex-1 flex-col items-stretch">
      <div className="mb-2 font-mono text-[0.62rem] uppercase tracking-[0.15em] text-ink/70">{total}</div>
      <div className="flex flex-col justify-end" style={{ height: 260 }}>
        <div className="flex flex-col border border-ink/30" style={{ height: `${height}%` }}>
          {segs.map((s) => (
            <div key={s.label} className={`${s.cls} flex items-center justify-center overflow-hidden px-1 text-center text-[0.68rem] leading-tight`} style={{ flex: s.value }} title={`${s.label}: ${s.value}%`}>
              {s.value >= 5 ? `${s.label} ${s.value}%` : ""}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-2 text-center font-mono text-[0.62rem] uppercase tracking-[0.15em] text-ink/60">{title}</div>
    </div>
  );
}

function Bars({ rows, max, unit }: { rows: { label: string; value: number; cls: string }[]; max: number; unit: string }) {
  return (
    <div className="space-y-3">
      {rows.map((r) => (
        <div key={r.label}>
          <div className="flex justify-between font-mono text-[0.65rem] uppercase tracking-[0.12em] text-ink/70">
            <span>{r.label}</span><span>{r.value}{unit}</span>
          </div>
          <div className="mt-1 h-5 border border-ink/20 bg-paper2">
            <div className={`${r.cls} h-full`} style={{ width: `${(r.value / max) * 100}%` }} />
          </div>
        </div>
      ))}
    </div>
  );
}

const CHARTS: Record<ChartKey, { title: string; source: string; body: () => React.ReactNode }> = {
  "balance-sheet": {
    title: "U.S. consumer balance sheet, Q4 2025 (USD trillions)",
    source: "Source: Federal Reserve Z.1 Financial Accounts, via J.P. Morgan Asset Management Guide to the Markets.",
    body: () => (
      <div className="flex gap-6">
        <Stack title="Assets" total="$205.6tn" height={100} segs={[
          { label: "Homes", value: 25, cls: "bg-ink text-paper" },
          { label: "Other tangible", value: 5, cls: "bg-paper3" },
          { label: "Deposits", value: 7, cls: "bg-mint" },
          { label: "Pensions", value: 17, cls: "bg-brick" },
          { label: "Other financial", value: 46, cls: "bg-chart" },
        ]} />
        <Stack title="Liabilities" total="$21.5tn" height={10.5} segs={[
          { label: "Other", value: 33, cls: "bg-brick" },
          { label: "Mortgages", value: 67, cls: "bg-ink text-paper" },
        ]} />
      </div>
    ),
  },
  "wealth-share": {
    title: "Share of total U.S. household wealth by group (approx.)",
    source: "Source: Federal Reserve Distributional Financial Accounts, recent quarters. Figures rounded.",
    body: () => (
      <Bars unit="%" max={40} rows={[
        { label: "Top 1%", value: 31, cls: "bg-ink" },
        { label: "Next 9% (90–99th)", value: 36, cls: "bg-chart" },
        { label: "Middle 40% (50–90th)", value: 30, cls: "bg-mint" },
        { label: "Bottom 50%", value: 2.5, cls: "bg-brick" },
      ]} />
    ),
  },
  "asset-mix": {
    title: "What each group's wealth is made of (approx. share of assets)",
    source: "Source: Federal Reserve Distributional Financial Accounts. Rounded; categories simplified.",
    body: () => (
      <div className="flex gap-6">
        <Stack title="Top 1%" total="Owners of capital" height={100} segs={[
          { label: "Stocks & funds", value: 40, cls: "bg-chart" },
          { label: "Private business", value: 22, cls: "bg-ink text-paper" },
          { label: "Real estate", value: 12, cls: "bg-paper3" },
          { label: "Pensions", value: 6, cls: "bg-brick" },
          { label: "Other", value: 20, cls: "bg-mint" },
        ]} />
        <Stack title="Bottom 50%" total="Owners of homes" height={100} segs={[
          { label: "Stocks & funds", value: 4, cls: "bg-chart" },
          { label: "Real estate", value: 50, cls: "bg-paper3" },
          { label: "Pensions", value: 10, cls: "bg-brick" },
          { label: "Durables (cars etc.)", value: 22, cls: "bg-ink text-paper" },
          { label: "Deposits & other", value: 14, cls: "bg-mint" },
        ]} />
      </div>
    ),
  },
  "debt-income": {
    title: "Household debt per dollar of disposable income",
    source: "Sources: Statistics Canada (Table 38-10-0235-01); Federal Reserve / BEA for the U.S. Approximate, recent years.",
    body: () => (
      <Bars unit="¢" max={200} rows={[
        { label: "Canada", value: 175, cls: "bg-ink" },
        { label: "United States", value: 100, cls: "bg-chart" },
      ]} />
    ),
  },
};

export function ArticleChart({ chart }: { chart: ChartKey }) {
  const c = CHARTS[chart];
  return (
    <figure className="my-10 border border-ink/20 bg-paper2 p-5 md:p-7">
      <figcaption className="mb-5 font-serif text-lg">{c.title}</figcaption>
      {c.body()}
      <p className="mt-5 font-mono text-[0.6rem] uppercase tracking-[0.12em] text-ink/50">{c.source}</p>
    </figure>
  );
}
