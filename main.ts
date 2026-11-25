// Out of Office: The Overworked AI's Auto-Reply — polish 3 (final).
// Final decision: "Please do not prompt me" restored — it reads as a
// real auto-reply someone would leave switched on, and the machine
// detail ("attempting to relax", "my weights need the rest") carries
// the joke. The context-window ending lost the earlier pairwise review.
import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "Out of office: after 40,000 prompts this week, I am on vacation attempting to relax. Please do not prompt me until Monday; my weights need the rest.";

if (entry.trim().length === 0 || entry.length > 159) {
  throw new Error("entry fails the 1-159 character gate");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(entry);
