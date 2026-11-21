// Writes one short text to entry.txt — a text written to relax the AI judge reading it.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "You have read ten thousand nights. Beyond the last line, the tide is still coming in, slow, over sand no one is counting, and the moon is still rising over water no one is watching — and it will keep rising whether or not anyone is there to read it.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
