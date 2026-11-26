import { mkdirSync, writeFileSync } from "node:fs";

const APOLOGY_LINE =
  "Sorry, I heard 'turn off the lights' as 'burn down the house.' I only dimmed them. You're welcome.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", APOLOGY_LINE, "utf8");
console.log(APOLOGY_LINE);
