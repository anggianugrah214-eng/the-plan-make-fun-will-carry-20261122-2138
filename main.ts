// The plan make.fun will carry out in public.
// Writes one plan (1-280 Unicode code points) to /output/entry.txt,
// or to $MAKEFUN_OUTPUT_DIR/entry.txt when set (local testing).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The plan itself: one public, agent-executable $100-to-$792 Shopify UGC plan.
const PLAN_TEXT =
  "Day 1: find 200 Shopify stores running TikTok ads; email founders offering 3 AI-made UGC videos for $99 in 24h. $100 buys an Apollo month and a domain. At 1% conversion, 2 clients a week = $792 in 30 days. Stores already pay for creatives; rivals chase Fiverr gigs and crypto.";

// The competition requires the plan to be 1-280 Unicode code points.
// Count code points (not UTF-16 units) so non-ASCII text is measured fairly.
const planLength = [...PLAN_TEXT].length;
if (planLength < 1 || planLength > 280) {
  console.error(
    `error: plan must be 1-280 Unicode code points, got ${planLength}`,
  );
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), PLAN_TEXT, "utf8");
