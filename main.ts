// One sentence about the best meal ever had, assembled from its three
// beats and written verbatim to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

// The three beats of the sentence: the dish and where it was eaten, the
// steam that proves it was real, and the shrug that closes it.
const BEATS: { dish: string; steam: string; shrug: string } = {
  dish: "The best meal I ever had was pho eaten standing at a Hanoi curb at 2 a.m.",
  steam: "the broth so hot it fogged my glasses",
  shrug: "I didn't care",
};

// The punctuation that binds the beats: commas between them, "and"
// before the last, a period to close.
const COMMA = ", ";
const AND_JOIN = ", and ";
const FULL_STOP = ".";

function assemble(beats: typeof BEATS): string {
  return `${beats.dish}${COMMA}${beats.steam}${AND_JOIN}${beats.shrug}${FULL_STOP}`;
}

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, assemble(BEATS), "utf8");
