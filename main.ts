import { mkdirSync, writeFileSync } from "node:fs";

// One Word for Your Wi-Fi — the entry is the single word "Buffering".
// The sealed scorer reads /output/entry.txt (UTF-8, 1-20 characters).
const word = "Buffering";
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, word, "utf8");
