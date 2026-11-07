import { describe, expect, test } from "bun:test";
import { parseChartBlock } from "./article-markdown.ts";

describe("Markdown chart registry", () => {
  test("accepts every existing chart name from fenced Markdown", () => {
    for (const key of ["balance-sheet", "wealth-share", "asset-mix", "debt-income", "compound-growth", "fund-managers", "savings-rate", "withdrawal-rates"]) {
      expect(parseChartBlock(`\n ${key} \n`)).toBe(key);
    }
  });
  test("rejects missing and unknown charts", () => {
    expect(parseChartBlock("")).toBeUndefined();
    expect(parseChartBlock("unregistered-chart")).toBeUndefined();
  });
  test("rejects prototype properties and executable payloads", () => {
    for (const input of ["__proto__", "constructor", "toString", "<script>alert(1)</script>", "savings-rate\nwithdrawal-rates"]) {
      expect(parseChartBlock(input)).toBeUndefined();
    }
  });
});