import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Ticker } from "@/components/Ticker";
import { PostArt } from "@/components/PostArt";
import { BookCover } from "@/components/BookCover";
import { POSTS, EBOOKS, SOCIALS } from "@/data/content";
import avatarBw from "@/assets/avatar-bw.png";
import bookCover from "@/assets/book-cover-a.jpg";
import type { Page } from "@/types/navigation";

interface HomeProps {
  onNavigate: (page: Page, slug?: string) => void;
}

export function Home({ onNavigate }: HomeProps) {
  const featured = POSTS[0];
  const latest = POSTS.slice(1, 5);
  const featuredBooks = EBOOKS.slice(0, 3);

  return (
    <div>
      {/* ---------- HERO ---------- */}
      <section className="mx-auto grid max-w-[1360px] gap-10 px-6 pb-16 pt-32 md:grid-cols-[1.25fr_1fr] md:px-8 md:pb-24 md:pt-44">
        <div className="flex flex-col justify-center">
          <Reveal>
            <span className="inline-flex w-fit items-center gap-2.5 rounded-full border border-ink/25 px-4 py-1.5 font-mono text-[0.65rem] uppercase tracking-[0.2em]">
              <span className="pulse-dot inline-block h-1.5 w-1.5 rounded-full bg-ink" />
              New essays every week
            </span>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-8 font-serif text-[clamp(2.9rem,7vw,5.5rem)] leading-[1.02] tracking-[-0.02em]">
              Personal finance,
              <br />
              <em>without</em> the jargon.
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-8 max-w-md text-lg leading-relaxed text-ink/70">
              I'm Awdahir. I write about budgeting, debt, saving and investing
              in plain language — so you can keep more of what you earn and
              build a life you're proud of.
            </p>
          </Reveal>
          <Reveal delay={360}>
            <div className="mt-10 flex flex-wrap items-center gap-8">
              <button
                onClick={() => onNavigate("blog")}
                className="group inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-chart transition-colors hover:bg-ink/85"
              >
                Start reading
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </button>
              <a
                href={SOCIALS.substack}
                target="_blank"
                rel="noreferrer"
                className="link-underline inline-flex items-center gap-1.5 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-ink/80"
              >
                Join the newsletter
                <ArrowUpRight size={14} />
              </a>
            </div>
          </Reveal>
        </div>

        {/* featured article card */}
        <Reveal delay={300} className="flex items-center">
          <button
            onClick={() => onNavigate("post", featured.slug)}
            className="group block w-full text-left"
          >
            <div className="border border-ink/20 bg-paper2">
              <PostArt art={featured.art} className="aspect-[4/3] border-b border-ink/20" />
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-3 font-mono text-[0.6rem] uppercase tracking-[0.2em] text-ink/55">
                  <span className="rounded-full bg-chart px-2.5 py-0.5 text-ink">Featured</span>
                  <span>{featured.category}</span>
                  <span>·</span>
                  <span>{featured.readTime}</span>
                </div>
                <h2 className="mt-4 font-serif text-2xl leading-snug tracking-tight md:text-[1.75rem]">
                  {featured.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-ink/65">{featured.excerpt}</p>
                <span className="link-underline mt-5 inline-flex items-center gap-1.5 font-mono text-[0.65rem] uppercase tracking-[0.18em]">
                  Read the essay <ArrowRight size={13} />
                </span>
              </div>
            </div>
          </button>
        </Reveal>
      </section>

      <Ticker />

      {/* ---------- LATEST ESSAYS ---------- */}
      <section className="mx-auto max-w-[1360px] px-6 py-20 md:px-8 md:py-28">
        <Reveal>
          <div className="flex items-end justify-between gap-6">
            <h2 className="font-serif text-[clamp(2rem,4.5vw,3.4rem)] leading-none tracking-tight">
              Latest <em>essays</em>
            </h2>
            <button
              onClick={() => onNavigate("blog")}
              className="link-underline hidden shrink-0 items-center gap-1.5 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-ink/70 md:inline-flex"
            >
              All essays <ArrowRight size={13} />
            </button>
          </div>
        </Reveal>

        <div className="mt-12">
          {latest.map((post, i) => (
            <Reveal key={post.slug} delay={i * 80}>
              <button
                onClick={() => onNavigate("post", post.slug)}
                className="article-row group grid w-full grid-cols-[auto_1fr] items-baseline gap-5 border-t border-ink/20 py-7 text-left md:grid-cols-[3rem_5rem_1fr_auto] md:gap-8"
              >
                <span className="font-mono text-sm text-ink/40">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="hidden font-mono text-[0.6rem] uppercase tracking-[0.18em] text-ink/50 md:block">
                  {post.category}
                </span>
                <span>
                  <span className="article-title block font-serif text-xl leading-snug tracking-tight md:text-2xl">
                    {post.title}
                  </span>
                  <span className="mt-1.5 block text-sm text-ink/55 md:hidden">
                    {post.category} · {post.readTime}
                  </span>
                </span>
                <span className="article-arrow hidden items-center gap-2 font-mono text-[0.6rem] uppercase tracking-[0.18em] text-ink/60 md:flex">
                  {post.date} <ArrowRight size={14} />
                </span>
              </button>
            </Reveal>
          ))}
          <div className="border-t border-ink/20" />
        </div>

        <button
          onClick={() => onNavigate("blog")}
          className="mt-8 inline-flex items-center gap-1.5 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-ink/70 md:hidden"
        >
          All essays <ArrowRight size={13} />
        </button>
      </section>

      {/* ---------- DARK NEWSLETTER BAND ---------- */}
      <section className="bg-ink text-paper">
        <div className="mx-auto grid max-w-[1360px] gap-10 px-6 py-20 md:grid-cols-2 md:px-8 md:py-28">
          <Reveal>
            <span className="inline-flex items-center gap-2.5 rounded-full border border-paper/25 px-4 py-1.5 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-paper/80">
              <span className="pulse-dot-light inline-block h-1.5 w-1.5 rounded-full bg-chart" />
              The Awdahir Letter
            </span>
            <h2 className="mt-7 font-serif text-[clamp(2rem,4.5vw,3.4rem)] leading-[1.05] tracking-tight">
              One money idea,
              <br />
              every <em className="text-chart">Sunday</em>.
            </h2>
          </Reveal>
          <Reveal delay={150} className="flex flex-col justify-center">
            <p className="max-w-md leading-relaxed text-paper/70">
              A short weekly essay on Substack — one practical idea about
              spending, saving or investing, readable in under five minutes.
              Free forever, shared everywhere I publish.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={SOCIALS.substack}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-chart px-7 py-3.5 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-ink transition-colors hover:bg-chart/85"
              >
                Subscribe on Substack <ArrowUpRight size={14} />
              </a>
              <a
                href={SOCIALS.patreon}
                target="_blank"
                rel="noreferrer"
                className="link-underline inline-flex items-center gap-1.5 self-center font-mono text-[0.7rem] uppercase tracking-[0.18em] text-paper/75"
              >
                Support on Patreon <ArrowUpRight size={14} />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- STORE PREVIEW ---------- */}
      <section className="mx-auto max-w-[1360px] px-6 py-20 md:px-8 md:py-28">
        <Reveal>
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-ink/50">
                Digital books & tools
              </p>
              <h2 className="mt-4 font-serif text-[clamp(2rem,4.5vw,3.4rem)] leading-none tracking-tight">
                Go <em>deeper</em>
              </h2>
            </div>
            <button
              onClick={() => onNavigate("store")}
              className="link-underline hidden shrink-0 items-center gap-1.5 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-ink/70 md:inline-flex"
            >
              Visit the store <ArrowRight size={13} />
            </button>
          </div>
        </Reveal>

        {/* the book — coming soon */}
        <Reveal delay={100}>
          <button
            onClick={() => onNavigate("store")}
            className="group mt-12 flex w-full items-center gap-5 border border-ink/20 bg-paper2 p-5 text-left md:gap-8 md:p-7"
          >
            <img
              src={bookCover}
              alt="Modern Money book cover"
              className="w-14 shrink-0 border border-ink/15 md:w-20"
            />
            <span className="flex-1">
              <span className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-ink/50">
                Coming soon — the book
              </span>
              <span className="mt-1.5 block font-serif text-lg leading-snug tracking-tight md:text-2xl">
                Modern Money: Intelligent Financial Literacy to Escape the Debt Trap
              </span>
            </span>
            <ArrowRight
              size={18}
              className="shrink-0 text-ink/50 transition-transform group-hover:translate-x-1"
            />
          </button>
        </Reveal>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featuredBooks.map((book, i) => (
            <Reveal key={book.id} delay={i * 100}>
              <div className="flex flex-col">
                <BookCover book={book} />
                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-serif text-xl leading-tight tracking-tight">{book.title}</h3>
                    <p className="mt-1 font-mono text-[0.6rem] uppercase tracking-[0.16em] text-ink/50">
                      {book.pages} · {book.format}
                    </p>
                  </div>
                  <span className="shrink-0 font-serif text-xl">{book.price}</span>
                </div>
                <a
                  href={book.payhipUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex w-fit items-center gap-2 rounded-full border border-ink px-5 py-2.5 font-mono text-[0.65rem] uppercase tracking-[0.18em] transition-colors hover:bg-ink hover:text-chart"
                >
                  Buy on Payhip <ArrowUpRight size={13} />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- ABOUT STRIP ---------- */}
      <section className="border-t border-ink/15 bg-paper2">
        <div className="mx-auto grid max-w-[1360px] items-center gap-10 px-6 py-20 md:grid-cols-[auto_1fr_auto] md:px-8 md:py-24">
          <Reveal>
            <img
              src={avatarBw}
              alt="Awdahir"
              className="h-28 w-28 rounded-full border border-ink/25 object-cover md:h-36 md:w-36"
            />
          </Reveal>
          <Reveal delay={120}>
            <p className="max-w-xl font-serif text-2xl leading-snug tracking-tight md:text-[1.8rem]">
              “I started Awdahir because the best money advice I ever got fit on
              an index card. Everything here aims to be <em>that</em> useful.”
            </p>
          </Reveal>
          <Reveal delay={240}>
            <button
              onClick={() => onNavigate("about")}
              className="link-underline inline-flex items-center gap-1.5 font-mono text-[0.7rem] uppercase tracking-[0.18em]"
            >
              My story <ArrowRight size={14} />
            </button>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
