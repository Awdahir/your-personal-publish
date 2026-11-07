# Markdown articles

Keep article metadata and references in the existing `POSTS` / `INSIGHTS` records. Import the article body as text:

```ts
import markdown from "@/content/my-article.md?raw";

// In the existing article record:
body: [],
markdown,
```

For a shared Blog and Insights article, pass the same record's `markdown`, `body` and `sources` into the Insights entry. The templates render Markdown when supplied and otherwise preserve the existing section-based body.

Write normal Markdown headings, paragraphs, links, images, lists and tables. To place a live chart between paragraphs, use a fenced block:

````markdown
## Savings and freedom

Your article paragraph goes here.

```chart
savings-rate
```

Continue the essay here.
````

Supported chart names: `balance-sheet`, `wealth-share`, `asset-mix`, `debt-income`, `compound-growth`, `fund-managers`, `savings-rate`, `withdrawal-rates`.

Charts use the existing chart definitions, data and source captions; changing the Markdown name selects a different chart. To add a new dataset, register a sourced chart in `ArticleChart.tsx` first. Unknown names show an unavailable-chart message instead of crashing the article. Ordinary code blocks remain code, not charts. Raw HTML, scripts, JSX and MDX are not executed; unsafe link protocols are filtered by the Markdown renderer. This does not upload or read arbitrary files at runtime: Markdown is bundled with the site and updates require publishing.

`simple-path-to-wealth.md` and `household-balance-sheet-insight.md` are existing articles converted without changing their wording, chart data or source lists.