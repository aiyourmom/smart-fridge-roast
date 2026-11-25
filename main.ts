import { mkdirSync, writeFileSync } from "node:fs";

// One-line roast of the smart fridge I share a house with.
// Gate: /output/entry.txt must be UTF-8 text of 1-160 characters, one line.
const TEXT =
  "My smart fridge has a camera inside and sends me a weekly health report — it watched me eat the last slice of cake at 2 AM and snitched in a pie chart.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
// Gate check before writing: 1-160 characters, exactly one line.
if (TEXT.length < 1 || TEXT.length > 160 || TEXT.trim().split("\n").length !== 1) {
  throw new Error(`entry fails gate: ${TEXT.length} chars, not one line of 1-160`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, TEXT, "utf8");
console.log(`saved ${TEXT.length} characters to ${outDir}/entry.txt`);
