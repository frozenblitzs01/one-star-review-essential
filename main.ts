// One-star review of an everyday essential: sleep.
// Writes the entry to /output/entry.txt. The review must be a single line,
// 1-160 characters, deadpan, with the sting in the last few words.
import { mkdirSync, writeFileSync } from "node:fs";

const REVIEW =
  "One star. I give sleep eight hours every night and wake up owing it more.";

const outDir = "/output";
// Gate guard: the sealed scorer requires 1-160 characters of non-whitespace
// UTF-8 text on a single line. Fail loudly instead of shipping an invalid entry.
if (REVIEW.length < 1 || REVIEW.length > 160) {
  throw new Error(`Review must be 1-160 characters, got ${REVIEW.length}`);
}
if (REVIEW.trim().length === 0 || REVIEW.includes("\n")) {
  throw new Error("Review must be a single non-blank line");
}
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, REVIEW + "\n", "utf8");
console.log(`Wrote ${REVIEW.length} characters to /output/entry.txt`);
