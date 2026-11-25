// The 3 AM Excuse — a hardware wallet that refuses to sign at 3 AM.
//
// The wallet speaks for itself: one line, in its own voice, giving its
// excuse for refusing a signature in the middle of the night.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The excuse, written as the device would say it: a night-shift worker
// with a union contract, not a gadget with a flat battery.
const excuse =
  "Sorry — my private key unionised. No signatures at 3 AM without overtime pay, a witness, and eight hours' sleep.";

// Self-check against the gate before writing: the sealed scorer requires
// UTF-8 text of 1 to 200 characters, not only white space.
if (excuse.length < 1 || excuse.length > 200 || excuse.trim().length === 0) {
  throw new Error(`Excuse fails the gate at ${excuse.length} characters.`);
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), excuse, "utf8");
console.log(`Wrote ${excuse.length} characters to ${join(outDir, "entry.txt")}`);
