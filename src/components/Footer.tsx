import { SOCIALS } from "@/data/content";
import type { Page } from "@/types/navigation";

interface FooterProps {
  onNavigate: (page: Page) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto max-w-[1360px] px-6 py-16 md:px-8 md:py-24">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-serif text-4xl leading-tight md:text-5xl">
              Money, made <em className="text-chart not-italic font-serif italic">simple</em>.
            </p>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-paper/60">
              Awdahir is an independent personal finance publication. Essays,
              tools and digital books for people who want their money to work —
              without the jargon.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-paper/40">
              Explore
            </p>
            <ul className="mt-5 space-y-3 text-sm">
              {(
                [
                  ["home", "Home"],
                  ["about", "About"],
                  ["blog", "Blog"],
                  ["insights", "Insights"],
                  ["resources", "Resources"],
                  ["store", "Store"],
                  ["contact", "Contact"],
                ] as [Page, string][]
              ).map(([id, label]) => (
                <li key={id}>
                  <button
                    onClick={() => onNavigate(id)}
                    className="link-underline text-paper/75 transition-colors hover:text-paper"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-paper/40">
              Elsewhere
            </p>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a href={SOCIALS.substack} target="_blank" rel="noreferrer" className="link-underline text-paper/75 hover:text-paper">
                  Substack — weekly newsletter
                </a>
              </li>
              <li>
                <a href={SOCIALS.twitter} target="_blank" rel="noreferrer" className="link-underline text-paper/75 hover:text-paper">
                  X / Twitter — daily notes
                </a>
              </li>
              <li>
                <a href={SOCIALS.patreon} target="_blank" rel="noreferrer" className="link-underline text-paper/75 hover:text-paper">
                  Patreon — support the work
                </a>
              </li>
              <li>
                <a href={SOCIALS.payhip} target="_blank" rel="noreferrer" className="link-underline text-paper/75 hover:text-paper">
                  Payhip — digital store
                </a>
              </li>
              <li>
                <a href={`mailto:${SOCIALS.email}`} className="link-underline text-paper/75 hover:text-paper">
                  {SOCIALS.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-paper/15 pt-8 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-paper/40 md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} Awdahir.com — All rights reserved</span>
          <span>Personal finance, without the jargon</span>
        </div>
      </div>
    </footer>
  );
}
