import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { BookCover } from "@/components/BookCover";
import { EBOOKS, POSTS, SOCIALS } from "@/data/content";
import { PostArt } from "@/components/PostArt";
import type { Page } from "@/types/navigation";
import bookCover from "@/assets/book-cover-a.jpg";

export function Store({ onNavigate }: { onNavigate: (page: Page, slug?: string) => void }) {
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

      {/* Start here — Payhip-style centered product grid */}
      <section className="mt-24 border-t border-ink/15 pt-16">
        <Reveal>
          <h2 className="text-center font-serif text-3xl tracking-tight md:text-4xl">Start Here</h2>
          <p className="mx-auto mt-3 max-w-md text-center text-sm text-ink/60">
            Digital guides, delivered instantly through Payhip.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-4">
          {EBOOKS.map((book, i) => (
            <Reveal key={book.id} delay={i * 80}>
              <article className="flex h-full flex-col items-center text-center">
                <a href={book.payhipUrl} target="_blank" rel="noreferrer" className="relative block w-full">
                  <BookCover book={book} />
                </a>
                <p className="mt-6 font-mono text-[0.6rem] uppercase tracking-[0.2em] text-ink/50">
                  {book.pages} · {book.format}
                </p>
                <h3 className="mt-3 font-serif text-2xl leading-snug tracking-tight">{book.title}</h3>
                <p className="mt-3 line-clamp-4 text-sm leading-relaxed text-ink/65">{book.description}</p>
                <p className="mt-4 font-serif text-2xl">{book.price}</p>
                <a
                  href={book.payhipUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-chart transition-colors hover:bg-ink/85"
                >
                  Buy on Payhip <ArrowUpRight size={13} />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* From the blog */}
      <section className="mt-28 border-t border-ink/15 pt-16">
        <Reveal>
          <h2 className="text-center font-serif text-3xl tracking-tight md:text-4xl">From the Blog</h2>
        </Reveal>
        <div className="mt-12 grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {POSTS.slice(0, 4).map((post, i) => (
            <Reveal key={post.slug} delay={i * 80}>
              <article className="flex flex-col items-center text-center">
                <button onClick={() => onNavigate("post", post.slug)} className="block w-full" aria-label={post.title}>
                  <PostArt art={post.art} className="aspect-[16/9] w-full" />
                </button>
                <p className="mt-6 text-sm text-ink/55">{post.date}</p>
                <h3 className="mt-4 font-serif text-2xl leading-snug tracking-tight">
                  <button onClick={() => onNavigate("post", post.slug)} className="hover:text-ink/70">
                    {post.title}
                  </button>
                </h3>
                <p className="mt-3 line-clamp-5 text-sm leading-relaxed text-ink/65">{post.excerpt}</p>
                <button onClick={() => onNavigate("post", post.slug)} className="link-underline mt-4 text-sm">
                  Read More
                </button>
              </article>
            </Reveal>
          ))}
        </div>
        <div className="mt-14 text-center">
          <button
            onClick={() => onNavigate("blog")}
            className="inline-flex rounded-full border border-ink px-7 py-3 font-mono text-[0.65rem] uppercase tracking-[0.18em] transition-colors hover:bg-ink hover:text-paper"
          >
            View All
          </button>
        </div>
      </section>

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
