import { isChartKey } from "@/components/ArticleChart";

/** Only registered chart keys are accepted; Markdown never executes code. */
export function parseChartBlock(value: string) {
  const key = value.trim();
  return isChartKey(key) ? key : undefined;
}