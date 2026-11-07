import { Fragment } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ArticleChart } from "@/components/ArticleChart";
import { parseChartBlock } from "@/lib/article-markdown";
import type { ArticleSection } from "@/data/content";

export function ArticleBody({ body, markdown }: { body: ArticleSection[]; markdown?: string }) {
  if (markdown !== undefined) {
    return (
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          // Chart figures must not be nested inside the default code-block <pre>.
          pre: ({ children }) => <div className="my-6 overflow-x-auto">{children}</div>,
          code: ({ className, children }) => {
            if (className?.split(/\s+/).includes("language-chart")) {
              const chart = parseChartBlock(String(children));
              return chart ? <ArticleChart chart={chart} /> : (
                <p role="status" className="border border-ink/20 bg-paper2 p-4 text-sm text-ink/70">
                  Chart unavailable: {String(children).trim() || "missing chart name"}
                </p>
              );
            }
            return <code className={className}>{children}</code>;
          },
          h2: ({ children }) => <h3>{children}</h3>,
          a: ({ href, children }) => (
            <a href={href} className="link-underline underline underline-offset-4" rel="noreferrer">{children}</a>
          ),
          img: ({ src, alt }) => (
            <img src={src} alt={alt ?? ""} loading="lazy" decoding="async" className="img-zoom my-6 block w-full" />
          ),
          table: ({ children }) => <div className="my-6 overflow-x-auto"><table className="w-full border-collapse text-left text-sm">{children}</table></div>,
          th: ({ children }) => <th className="border-b border-ink/20 p-3 font-medium">{children}</th>,
          td: ({ children }) => <td className="border-b border-ink/20 p-3">{children}</td>,
          ul: ({ children }) => <ul className="my-6 list-disc space-y-2 pl-6">{children}</ul>,
          ol: ({ children }) => <ol className="my-6 list-decimal space-y-2 pl-6">{children}</ol>,
        }}
      >
        {markdown}
      </ReactMarkdown>
    );
  }

  return body.map((section, i) => (
    <div key={i}>
      {section.heading && <h3>{section.heading}</h3>}
      {section.paragraphs.map((paragraph, j) => (
        <Fragment key={j}>
          <p>{paragraph}</p>
          {section.images?.filter((image) => image.afterParagraph === j + 1).map((image) => (
            <figure key={image.url} className="my-10 border border-ink/20 bg-paper2 p-2">
              <img src={image.url} alt={image.alt} loading="lazy" decoding="async" className="img-zoom block w-full" />
            </figure>
          ))}
        </Fragment>
      ))}
      {section.chart && <ArticleChart chart={section.chart} />}
    </div>
  ));
}