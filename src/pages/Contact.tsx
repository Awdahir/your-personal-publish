import { useState, type FormEvent } from "react";
import { ArrowUpRight, Send } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SOCIALS } from "@/data/content";

const TOPIC_OPTIONS = [
  "General question",
  "Coaching / working together",
  "Question about an e-book",
  "Press / collaboration",
  "Just saying hello",
];

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState(TOPIC_OPTIONS[0]);
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[Awdahir.com] ${topic} — from ${name}`);
    const body = encodeURIComponent(
      `Hi Awdahir,\n\n${message}\n\n— ${name}\n${email}`
    );
    window.location.href = `mailto:${SOCIALS.email}?subject=${subject}&body=${body}`;
  };

  const inputCls =
    "w-full border border-ink/25 bg-paper px-4 py-3 text-sm outline-none transition-colors placeholder:text-ink/35 focus:border-ink focus:ring-2 focus:ring-chart/60";

  return (
    <div className="mx-auto max-w-[1360px] px-6 pb-24 pt-32 md:px-8 md:pt-44">
      <div className="grid gap-16 md:grid-cols-2">
        {/* left: intro + channels */}
        <div>
          <Reveal>
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-ink/50">
              Contact
            </p>
            <h1 className="mt-6 font-serif text-[clamp(2.6rem,6vw,4.4rem)] leading-[1.03] tracking-[-0.02em]">
              Let's <em>talk</em> money.
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-ink/70">
              Questions about an essay, an e-book, or your own money situation?
              I read every message personally and reply within a few days.
            </p>
          </Reveal>

          <Reveal delay={150}>
            <dl className="mt-12 divide-y divide-ink/15 border-y border-ink/15">
              <div className="flex items-center justify-between gap-4 py-5">
                <dt className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-ink/50">Email</dt>
                <dd>
                  <a href={`mailto:${SOCIALS.email}`} className="link-underline text-sm">
                    {SOCIALS.email}
                  </a>
                </dd>
              </div>
              <div className="flex items-center justify-between gap-4 py-5">
                <dt className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-ink/50">Newsletter</dt>
                <dd>
                  <a href={SOCIALS.substack} target="_blank" rel="noreferrer" className="link-underline inline-flex items-center gap-1 text-sm">
                    Substack <ArrowUpRight size={12} />
                  </a>
                </dd>
              </div>
              <div className="flex items-center justify-between gap-4 py-5">
                <dt className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-ink/50">Social</dt>
                <dd>
                  <a href={SOCIALS.twitter} target="_blank" rel="noreferrer" className="link-underline inline-flex items-center gap-1 text-sm">
                    X / Twitter <ArrowUpRight size={12} />
                  </a>
                </dd>
              </div>
              <div className="flex items-center justify-between gap-4 py-5">
                <dt className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-ink/50">Community</dt>
                <dd>
                  <a href={SOCIALS.patreon} target="_blank" rel="noreferrer" className="link-underline inline-flex items-center gap-1 text-sm">
                    Patreon <ArrowUpRight size={12} />
                  </a>
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>

        {/* right: form */}
        <Reveal delay={200}>
          <form onSubmit={handleSubmit} className="border border-ink/20 bg-paper2 p-8 md:p-10">
            <h2 className="font-serif text-2xl tracking-tight">Send a message</h2>
            <p className="mt-2 text-sm text-ink/60">
              This opens your email app with everything pre-filled.
            </p>

            <div className="mt-8 space-y-5">
              <div>
                <label htmlFor="name" className="mb-2 block font-mono text-[0.62rem] uppercase tracking-[0.18em] text-ink/60">
                  Your name
                </label>
                <input
                  id="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Jane Doe"
                  className={inputCls}
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block font-mono text-[0.62rem] uppercase tracking-[0.18em] text-ink/60">
                  Your email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="jane@example.com"
                  className={inputCls}
                />
              </div>
              <div>
                <label htmlFor="topic" className="mb-2 block font-mono text-[0.62rem] uppercase tracking-[0.18em] text-ink/60">
                  Topic
                </label>
                <select
                  id="topic"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  className={inputCls}
                >
                  {TOPIC_OPTIONS.map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block font-mono text-[0.62rem] uppercase tracking-[0.18em] text-ink/60">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me what's on your mind…"
                  className={`${inputCls} resize-y`}
                />
              </div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-7 py-4 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-chart transition-colors hover:bg-ink/85"
              >
                Send message <Send size={14} />
              </button>
            </div>
          </form>
        </Reveal>
      </div>
    </div>
  );
}
