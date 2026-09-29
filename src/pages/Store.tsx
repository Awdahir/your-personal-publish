import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { BookCover } from "@/components/BookCover";
import { EBOOKS, SOCIALS } from "@/data/content";
import bookCover from "@/assets/book-cover-a.jpg";

export function Store() {
  return (
    <div className="mx-auto max-w-[1360px] px-6 pb-24 pt-32 md:px-8 md:pt-44">
      <Reveal>
        <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-ink/50">
          The Store
        </p>
        <h1 className="mt-6 max-w-3xl font-serif text-[clamp(2.6rem,6vw,4.6rem)] leading-[1.03] tracking-[-0.02em]">
          Digital books that <em>do</em> the work.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/70">
          Practical guides and workbooks — each one a complete system, not a
          motivational pamphlet. Instant download via Payhip, yours forever.
        </p>
      </Reveal>

      {/* the book — coming soon */}
      <Reveal delay={120}>
        <div className="mt-16 grid items-center gap-10 border border-ink/20 bg-paper2 p-8 md:grid-cols-[auto_1fr] md:p-12">
          <img
            src={bookCover}
            alt="Modern Money — book cover"
            className="mx-auto w-full max-w-[240px] border border-ink/15 shadow-[10px_10px_0_0_rgba(14,42,34,0.14)]"
          />
          <div>
            <div className="flex items-center gap-3 font-mono text-[0.6rem] uppercase tracking-[0.2em] text-ink/55">
              <span className="rounded-full bg-chart px-2.5 py-0.5 text-ink">Coming soon</span>
              <span>The book</span>
            </div>
            <h2 className="mt-5 font-serif text-3xl leading-tight tracking-tight md:text-4xl">
              Modern Money
            </h2>
            <p className="mt-2 font-serif text-lg italic text-ink/55">
              Intelligent Financial Literacy to Escape the Debt Trap
            </p>
            <p className="mt-5 max-w-xl leading-relaxed text-ink/70">
              Everything this site believes, gathered into one volume — money and
              mindset, markets and investing, business and income, faith and
              values. It's written as a practical guide for immigrants in North
              America and beyond: the book these essays have been building
              toward, and the one I wish someone had handed me when I arrived.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <a
                href={SOCIALS.substack}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-chart transition-colors hover:bg-ink/85"
              >
                Get notified on Substack <ArrowUpRight size={14} />
              </a>
              <span className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-ink/50">
                Newsletter readers hear first
              </span>
            </div>
          </div>
        </div>
      </Reveal>

      <div className="mt-20 space-y-20">
        {EBOOKS.map((book, i) => (
          <Reveal key={book.id}>
            <div
              className={`grid items-center gap-10 md:grid-cols-2 ${
                i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="mx-auto w-full max-w-sm">
                <BookCover book={book} />
              </div>
              <div>
                <div className="flex items-center gap-3 font-mono text-[0.6rem] uppercase tracking-[0.2em] text-ink/55">
                  {book.badge && (
                    <span className="rounded-full bg-ink px-2.5 py-0.5 text-chart">{book.badge}</span>
                  )}
                  <span>{book.pages}</span>
                  <span>·</span>
                  <span>{book.format}</span>
                </div>
                <h2 className="mt-5 font-serif text-3xl leading-tight tracking-tight md:text-4xl">
                  {book.title}
                </h2>
                <p className="mt-2 font-serif text-lg italic text-ink/55">{book.subtitle}</p>
                <p className="mt-5 max-w-lg leading-relaxed text-ink/70">{book.description}</p>
                <div className="mt-8 flex flex-wrap items-center gap-6">
                  <a
                    href={book.payhipUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-chart transition-colors hover:bg-ink/85"
                  >
                    Buy {book.price} on Payhip <ArrowUpRight size={14} />
                  </a>
                  <span className="font-serif text-3xl">{book.price}</span>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* guarantee / note */}
      <Reveal>
        <div className="mt-24 grid gap-10 border border-ink/20 bg-paper2 p-10 md:grid-cols-3 md:p-14">
          {[
            {
              t: "Instant download",
              d: "Checkout through Payhip and your files arrive immediately — PDF plus any bonus spreadsheets or worksheets.",
            },
            {
              t: "Free updates",
              d: "Every book is a living document. Buy once and receive all future editions of that title at no extra cost.",
            },
            {
              t: "Reader guarantee",
              d: "If a book doesn't make your money clearer, email me within 30 days and I'll make it right.",
            },
          ].map((f) => (
            <div key={f.t}>
              <h3 className="font-serif text-xl tracking-tight">{f.t}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-ink/65">{f.d}</p>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal>
        <p className="mt-10 text-sm text-ink/55">
          Prefer to browse everything in one place?{" "}
          <a href={SOCIALS.payhip} target="_blank" rel="noreferrer" className="link-underline">
            Visit the full Payhip storefront
          </a>
          .
        </p>
      </Reveal>
    </div>
  );
}
