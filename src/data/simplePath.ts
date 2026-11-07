import type { Post } from "./content";
import markdown from "@/content/simple-path-to-wealth.md?raw";

export const SIMPLE_PATH_POST: Post = {
  slug: "simple-path-to-wealth-explained",
  title: "The Simple Path to Wealth, Explained: A Guide for Newcomers",
  excerpt:
    "JL Collins wrote the clearest investing book I know. Here is every big idea in plain language — with charts — for anyone who arrived in a new country and was never handed the manual.",
  category: "Investing",
  date: "Nov 6, 2026",
  readTime: "20 min",
  art: "steps",
  body: [],
  markdown,
  sources: [
    { label: "JL Collins — The Simple Path to Wealth", url: "https://jlcollinsnh.com/stock-series/", note: "The author's original free stock series that became the book." },
    { label: "Trinity Study (Cooley, Hubbard & Walz, AAII Journal, 1998)", url: "https://www.aaii.com/journal/article/retirement-savings-choosing-a-withdrawal-rate-that-is-sustainable", note: "Historical test of retirement withdrawal rates." },
    { label: "S&P Dow Jones Indices — SPIVA Scorecards", url: "https://www.spglobal.com/spdji/en/research-insights/spiva/", note: "Ongoing data on how many active funds underperform their index." },
    { label: "Mr. Money Mustache — The Shockingly Simple Math Behind Early Retirement", url: "https://www.mrmoneymustache.com/2012/01/13/the-shockingly-simple-math-behind-early-retirement/", note: "Savings rate versus years to financial independence." },
    { label: "Government of Canada — TFSA and RRSP", url: "https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/tax-free-savings-account.html", note: "Official rules and contribution room for newcomers." },
  ],
};
