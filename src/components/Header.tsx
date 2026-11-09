import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useRouterState } from "@tanstack/react-router";
import { pageToPath, useSiteNavigate } from "@/lib/nav";
import type { Page } from "@/types/navigation";

const NAV: { id: Page; label: string }[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "blog", label: "Blog" },
  { id: "insights", label: "Insights" },
  { id: "resources", label: "Resources" },
  { id: "store", label: "Store" },
  { id: "contact", label: "Contact" },
];

function activePage(pathname: string): Page {
  if (pathname === "/") return "home";
  if (pathname.startsWith("/blog")) return "blog";
  if (pathname.startsWith("/insights")) return "insights";
  const first = pathname.split("/")[1] as Page;
  return NAV.some((n) => n.id === first) ? first : "home";
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const onNavigate = useSiteNavigate();
  const page = activePage(pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const go = (p: Page) => {
    setOpen(false);
    onNavigate(p);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-paper/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-[1360px] items-center justify-between px-6 md:h-20 md:px-8">
        <a
          href={pageToPath("home")}
          onClick={(e) => {
            e.preventDefault();
            go("home");
          }}
          className="font-serif text-2xl tracking-tight md:text-[1.7rem]"
          aria-label="The Immigrant Economist — home"
        >
          A.{"\u00A0\u00A0"}Awdahir<span className="text-chart">.</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <button
              key={item.id}
              onClick={() => go(item.id)}
              data-active={page === item.id}
              className="link-underline font-mono text-[0.7rem] uppercase tracking-[0.18em] text-ink/80 transition-colors hover:text-ink"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => go("store")}
            className="rounded-full bg-ink px-5 py-2 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-chart transition-colors hover:bg-ink/85"
          >
            Get the books
          </button>
        </nav>

        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* animated bottom border on scroll */}
      <div
        className="h-px bg-ink/20 transition-all duration-500"
        style={{ width: scrolled ? "100%" : "0%" }}
      />

      {open && (
        <nav className="border-t border-ink/10 bg-paper px-6 py-6 md:hidden">
          <div className="flex flex-col gap-5">
            {NAV.map((item) => (
              <button
                key={item.id}
                onClick={() => go(item.id)}
                className={`text-left font-serif text-2xl ${
                  page === item.id ? "italic" : "text-ink/70"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
