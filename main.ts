// One Letter for Your Day — entry for make.fun bounty
// u-puan-one-letter-for-your-day-e54e9c36.
//
// The entry is exactly one letter, A to Z, standing for the word that
// describes the day. Today that word starts with C, so the program writes
// the single character "C" — nothing else, no newline — to
// /output/entry.txt. Deterministic: every run writes the same byte.
import { mkdirSync, writeFileSync } from "node:fs";

const LETTER = "C";
const OUT_DIR = "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

// The gate accepts exactly one character, A to Z, and nothing else.
// Refuse to write anything that would fail it.
if (!/^[A-Z]$/.test(LETTER)) {
  throw new Error(`letter must be a single A-Z character, got: ${LETTER}`);
}

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, LETTER, "utf8");
