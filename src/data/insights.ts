/**
 * Market Insights — shorter, timely notes on market structure and trend shifts.
 * Written only when there's genuinely something worth sitting down to say.
 * Distinct from the Blog: essays teach fundamentals; insights read the tape.
 */
export interface Insight {
  slug: string;
  title: string;
  excerpt: string;
  tag: string;
  date: string;
  readTime: string;
  art: "chart" | "bars" | "coin" | "steps" | "wave" | "shield" | "grid";
  body: { heading?: string; paragraphs: string[]; chart?: import("@/components/ArticleChart").ChartKey }[];
}

export const INSIGHTS: Insight[] = [
  {
    slug: "reading-trend-shifts",
    title: "The Market Doesn't Ring a Bell at the Top",
    excerpt:
      "Big trend shifts almost never announce themselves. By the time the headline says the market has changed, the change has been underway for months. Here's what I actually watch when I want to know if the structure is shifting.",
    tag: "Market Structure",
    date: "Sep 26, 2026",
    readTime: "9 min",
    art: "chart",
    body: [
      {
        paragraphs: [
          "People ask me a version of the same question every few months: is this the top, is this the bottom, is the trend over? And honestly, I understand the urge behind it — we all want someone to knock on the door and tell us the weather has changed. But markets don't work that way. Nobody rings a bell. What actually happens is quieter, and a little rude: the trend stops rewarding the behavior it used to reward, and most of us keep doing the old thing anyway because it's what's been working.",
          "So I've stopped trying to call turns. Instead I watch a short list of things that tend to change before the narrative does. I want to walk you through them the way I'd explain them to a friend over tea, because once you see them, you can't unsee them — and you'll stop needing anyone's hot take, including mine.",
        ],
      },
      {
        heading: "Breadth: who is actually carrying this thing?",
        paragraphs: [
          "The first thing I look at is breadth — how many stocks are participating in a move versus how few. An index can grind to new highs on the back of a handful of giant companies while hundreds of others quietly roll over underneath. From the outside it looks like strength. From the inside it's a crowd thinning out, one person at a time leaving the party while the music is still loud.",
          "You don't need expensive tools to see this. Most free charting platforms will show you the percentage of stocks trading above their 200-day average, or the advance-decline line. When the index makes a new high but fewer stocks are joining it, I get careful. Not bearish — careful. There's a difference. Divergence like that isn't a signal to sell everything; it's a signal to stop adding risk and to make sure the safe end of my barbell is fully funded.",
        ],
      },
      {
        heading: "Rotation: money moves before the story does",
        paragraphs: [
          "The second thing is rotation. Markets are like rooms at a gathering — when the smart money gets uncomfortable in one room, it doesn't announce its departure. It just starts spending more time in another room. You'll notice defensive sectors quietly outperforming while the high-flyers chop sideways. Or small companies waking up after years of being ignored. Or commodities firming while everyone's still debating tech.",
          "Rotation is how trends actually end — not with a crash, but with a transfer. The headline writers catch up months later, usually with a piece explaining the new leadership as if it appeared overnight. It didn't. If you watch where relative strength is building week over week, you saw it being built.",
        ],
      },
      {
        heading: "Credit and liquidity: the plumbing underneath",
        paragraphs: [
          "The third thing is the least glamorous and the most honest: liquidity. Stocks ultimately respond to how much money is moving through the system and how easy it is to borrow. When central banks are draining reserves and credit spreads are widening — meaning lenders are getting nervous and charging more for risk — risk assets eventually feel it, no matter how good the earnings stories are.",
          "I keep an eye on this in plain language: are central banks adding to their balance sheets or shrinking them? Are high-yield spreads calm or creeping wider? You can find both in free public data. When the plumbing tightens, I respect it even when prices haven't reacted yet. The market can ignore plumbing for a while. It can't ignore it forever.",
        ],
      },
      {
        heading: "What I actually do with this",
        paragraphs: [
          "Here's the part people find disappointing, and I'll say it anyway: most of the time, the answer is nothing. My core money sits in halal index funds on automatic contributions, and no reading of the tape changes that. The trend-shift watching happens at the edges — it decides whether I'm adding to the small, speculative end of my barbell, trimming it, or leaving it alone entirely. It decides whether a trading idea gets real money or stays a note in my journal.",
          "And a word I owe you plainly, because I'd want it said to me: everything I trade on the risky end is sized so it can go to zero without touching my family's foundation, and I only touch names that pass Sharia screening — no conventional banks, no interest-heavy balance sheets, nothing I couldn't defend at the dinner table. The excitement of reading markets is real. But the boring base is what lets me enjoy the excitement without fear. That's the whole game, honestly. The insights are the spice. The structure is the meal.",
        ],
      },
    ],
  },
  {
    slug: "concentration-risk",
    title: "The Quiet Risk Inside 'Safe' Index Funds: Concentration",
    excerpt:
      "Buying the whole market used to mean real diversification. Today a handful of companies can outweigh entire sectors — and that changes what 'safe' actually means. What I'm watching, and how I think about it as a halal investor.",
    tag: "Market Structure",
    date: "Sep 12, 2026",
    readTime: "8 min",
    art: "bars",
    body: [
      {
        paragraphs: [
          "Something has changed inside the world's most boring investment, and most people haven't noticed. The whole pitch of a broad index fund — and I've made this pitch myself, many times, in the essays on this site — is that you own hundreds of companies, so no single one can hurt you. That's still more true than false. But it's less true than it used to be, and I think it's worth sitting down and saying plainly.",
          "The biggest companies in the major indices have grown so large that a small group of them now carries an outsized share of the whole index's weight. When those few names have a bad stretch, the 'diversified' index feels it like a concentrated bet. You're not imagining it if your boring fund has started moving like a tech stock. In a real sense, it partially is one.",
        ],
      },
      {
        heading: "How it happened, in plain terms",
        paragraphs: [
          "Market-cap weighting is a beautiful, humble idea: own everything, in proportion to its size, and never pretend you know more than the market. The catch is that when a few winners run for years, the index automatically buys more and more of them. The mechanism has no opinion. It just follows the money up. During the long climb, this feels like genius — your index is loaded with the winners. At the turn, the same mechanism means you're maximally exposed to exactly the names everyone already owns.",
          "I'm not telling you this to scare you out of index funds. I'm still a believer, and my own core money stays in them. But I've started treating concentration as a number I check, the way you'd check the weather before a long drive. What share of the fund is the top ten holdings? If that share has climbed a lot, I mentally relabel the fund: this is a great investment that is also, partly, a bet on a handful of companies continuing to be loved. Knowing that changes how much surprise I'm willing to tolerate.",
        ],
      },
      {
        heading: "The halal angle, because it matters to me",
        paragraphs: [
          "For those of us investing through Sharia-screened funds — SPUS, HLAL, and the like — there's an extra wrinkle worth knowing. Screening removes conventional banks and interest-heavy companies from the basket, which is exactly what we want. But it also means the remaining fund can lean even more heavily toward the sectors that pass the screen, which in practice often means technology. So the concentration question isn't academic for us; it's doubled. The screen purifies the money, and it reshapes the basket, and we should hold both truths at once.",
          "What do I do about it? Three things, none of them clever. I check the top holdings of my funds a couple of times a year — it takes ten minutes on the provider's website. I keep my total position sized so that even a deep drawdown in the big names is survivable, because drawdowns in loved stocks are a law of nature, not a possibility. And I let time in the market do the heavy lifting, because the answer to concentration risk, for a long-horizon investor, is mostly patience — the giants of one decade are rarely the giants of the next, and the index will rotate for me without my lifting a finger.",
        ],
      },
      {
        heading: "The honest bottom line",
        paragraphs: [
          "Concentration is the tax you pay for the market's winners having won. It's not a flaw in the index idea; it's a feature that occasionally sends a bill. My advice is the boring one: know what you own, check the top ten once in a while, size your position so a storm in the giants is an inconvenience rather than a catastrophe, and then go live your life. The index is still the best game in town. I just want you playing it with your eyes open — that's all this note is for.",
        ],
      },
    ],
  },
  {
    slug: "hard-assets-bid",
    title: "Gold Is Quiet, Bitcoin Is Loud, and Both Are Saying the Same Thing",
    excerpt:
      "When old money and new money start moving in the same direction, I pay attention. What the hard-asset bid is telling us about trust, debt, and currency — and where it fits in a halal portfolio.",
    tag: "Macro",
    date: "Aug 29, 2026",
    readTime: "10 min",
    art: "coin",
    body: [
      {
        paragraphs: [
          "There's a pattern in markets I find genuinely fascinating, and it's been showing up again lately: gold and Bitcoin — the oldest hard asset and the newest — drifting in the same direction at the same time. One is hoarded by central banks and grandmothers. The other is held by twenty-five-year-olds with strong opinions about monetary policy. They are not the same crowd. When both crowds start buying, I don't ask which asset is right. I ask what both crowds are worried about.",
          "The answer, I think, is the same thing it has always been: trust in paper. I wrote a long essay on this site about the five-thousand-year history of money — from clay tablets to fiat — and the short version is that every currency system eventually faces the same temptation: print a little more, stretch the unit, let tomorrow's debts be paid in cheaper money. Hard assets are the market's hedge against that temptation. When they get a bid, the market isn't being irrational. It's reading history.",
        ],
      },
      {
        heading: "What the gold bid actually means",
        paragraphs: [
          "Gold doesn't pay you anything. No dividend, no profit share, no rent. Its entire case is that nobody can print it, and five thousand years of human agreement stand behind it. So when central banks themselves — the very institutions doing the printing — become the biggest buyers of gold, that's not a trade. That's a confession. They're telling you, in their own actions, that they'd rather hold the metal than hold more of each other's paper.",
          "For an ordinary family, I read that as context, not a command. Gold belongs in a portfolio the way insurance belongs in a house — a measured slice that does its best work exactly when everything else is having its worst. I like it small and boring: a few percent, held patiently, rebalanced occasionally. The people who get hurt with gold are the ones who fall in love with it after it has already run, and buy it as a lottery ticket instead of as insurance.",
        ],
      },
      {
        heading: "And Bitcoin — said carefully",
        paragraphs: [
          "Bitcoin is the louder, younger, more volatile member of the family, and I hold my opinions about it with open hands. What I will say is this: the thesis underneath it — a scarce asset no government can inflate — is the same thesis as gold, written in code instead of geology. The difference is age and temperament. Gold has fifty centuries of memory; Bitcoin has lived through a handful of cycles, each one violent in both directions. It belongs, if it belongs at all for you, strictly on the risky end of the barbell — sized small enough that its worst year is a story you tell, not a wound you carry.",
          "On the question I know some of you are asking: scholars differ on Bitcoin's permissibility, and I'm not a scholar. What I can tell you is my own practice — I treat it as speculation, not money; I keep it small; and I've read the fiqh discussions on both sides before putting a dollar in. Whatever you decide, decide it the way we decide everything here: sized to survive being wrong, and clean enough to sleep on. And if the uncertainty itself bothers you, gold is sitting right there with five thousand years of precedent and no scholarly debate at all. Sometimes the old answer is old because it works.",
        ],
      },
      {
        heading: "Where this fits in a real plan",
        paragraphs: [
          "Here's how I personally stack it, in order of importance. First, the riba-free emergency fund — that's not an investment, that's oxygen. Second, the productive core: halal index funds and, when the time is right, real assets like property that generate real income. Third, the hard-asset insurance slice — gold, measured and unemotional. And only then, small and honest, the speculative end where something like Bitcoin is allowed to live. Each layer only makes sense because the layer beneath it is solid.",
          "The trend I'm watching isn't really about gold or Bitcoin at all. It's about a slow, global re-pricing of trust. I don't know how it resolves, and I'd be suspicious of anyone who claims to. What I know is that a family with a solid base, productive assets, a little hard insurance, and a small capped bet is positioned for almost every version of the future — the calm ones and the stormy ones alike. That's not a prediction. It's just structure. And structure, as I keep saying on this site, is the whole meal.",
        ],
      },
    ],
  },
  {
    slug: "two-numbers-i-watch",
    title: "I Only Watch Two Numbers. Everything Else Is Weather.",
    excerpt:
      "Rates get all the headlines, but liquidity does the real work — and market breadth tells you whether the move is real. My simple, unfancy dashboard for knowing when to lean in and when to step back.",
    tag: "Trading",
    date: "Sep 5, 2026",
    readTime: "7 min",
    art: "wave",
    body: [
      {
        paragraphs: [
          "Every few weeks someone sends me a chart — inflation, unemployment, some yield curve doing something dramatic — and asks what I think it means for their money. I usually give an unsatisfying answer: probably less than you think. Not because those numbers don't matter, but because by the time a statistic is on everyone's screen, the market has been trading around it for months. The number is the news. The positioning already happened.",
          "So over the years I've stripped my own dashboard down to two things, and I want to share them because they've saved me from a hundred distractions. Two numbers, checked occasionally, that tell me more about market structure than a hundred headlines. Fair warning: this is going to sound too simple. Simple is the point.",
        ],
      },
      {
        heading: "Number one: liquidity, not rates",
        paragraphs: [
          "Everyone watches interest rates because they're announced at press conferences. But rates are the price of money; liquidity is the amount of it actually flowing through the system — central bank balance sheets, bank reserves, credit conditions. Risk assets don't really care what the press conference said. They care whether there's more cash sloshing through the plumbing this quarter than last.",
          "You can watch this for free: central bank balance sheet totals are published publicly, and credit spreads — the extra yield lenders demand to lend to weaker borrowers — are a live mood ring for the system. Liquidity rising and spreads calm? The wind is at your back; trend-following works, dips get bought. Liquidity draining and spreads creeping wider? Tighten up, be pickier, let the small bets stay small. I don't trade every wiggle in these. I use them to set my posture, the way you'd dress for the season rather than the hour.",
        ],
      },
      {
        heading: "Number two: breadth",
        paragraphs: [
          "The second number answers a question prices alone can't: is this move real? An index rising on broad participation — most stocks above their long-term averages, new highs outnumbering new lows — is a healthy crowd. An index rising on five names while the rest sag is a few people carrying a heavy table. Both look identical on the headline chart. Only breadth tells them apart.",
          "When breadth confirms the trend, I stay out of my own way. When it diverges — prices up, participation down — I don't panic, but I do the two things that cost nothing and save everything: I stop adding risk, and I check that the safe end of my barbell is fully stocked. Ninety percent of good trading, in my experience, is knowing which days deserve action. Most days don't.",
        ],
      },
      {
        heading: "What this dashboard is for — and what it isn't",
        paragraphs: [
          "Let me be clear about the scope, because I owe you honesty over excitement. These two numbers guide the small, speculative end of my portfolio — the trading ideas, the timing of adds and trims. My core wealth-building never touches this dashboard at all. The halal index funds get their automatic contribution every month whether breadth is beautiful or ugly, because the twenty-year trend of productive businesses matters infinitely more than this quarter's internals.",
          "And everything I trade, I trade the way I've committed to on this site: screened names only, no interest-based products, positions small enough that being wrong is a tuition payment rather than a catastrophe. The dashboard helps me read the tape. The principles decide whether I'm allowed to act on what I read. Keep those two in the right order, and the market stops being a casino that happens to have charts — it becomes what it actually is: a place where patient, structured people slowly collect what impatient people leave behind.",
        ],
      },
    ],
  },
];
