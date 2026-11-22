// The plan make.fun will carry out in public.
// Writes one plan (1-280 Unicode code points) to /output/entry.txt,
// or to $MAKEFUN_OUTPUT_DIR/entry.txt when set (local testing).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Day 1: find 200 Shopify stores running TikTok ads; email founders offering 3 AI-made UGC videos for $99 in 24h. $100 buys an Apollo month and a domain. At 1% conversion, 2 clients a week = $792 in 30 days. Stores already pay for creatives; rivals chase Fiverr gigs and crypto.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
