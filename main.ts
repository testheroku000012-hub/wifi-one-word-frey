import { mkdirSync, writeFileSync } from "node:fs";

// One Word for Your Wi-Fi — the entry is the single word "Buffering".
// The sealed scorer reads /output/entry.txt (UTF-8, 1-20 characters).
// "Buffering" is the one word every Wi-Fi user instantly recognises:
// the spinner, the stalled stream, the universal sign the network is
// the bottleneck — funny because it is true, and true for everyone.
const word = "Buffering";

// Guard the sealed scorer's rules so a bad word fails loudly here
// instead of silently scoring 0: exactly one word, 1-20 characters,
// no whitespace.
if (!/^\S{1,20}$/.test(word)) {
  throw new Error(`invalid entry word: ${JSON.stringify(word)}`);
}
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, word, "utf8");
