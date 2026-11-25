// Why "queue": four of its five letters are silent, lining up politely behind
// one loud Q. The spelling is literally a queue of letters, it sounds exactly
// like "cue", and deleting it from the dictionary erases the very idea of
// waiting in line.
import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "queue";
const MIN_LENGTH = 1;
const MAX_LENGTH = 77;

function assertValidWord(word: string): string {
  const shown = JSON.stringify(word);
  if (typeof word !== "string" || word.length < MIN_LENGTH) {
    throw new Error(`invalid entry word ${shown}: empty (min length ${MIN_LENGTH})`);
  }
  if (word.length > MAX_LENGTH) {
    throw new Error(`invalid entry word ${shown}: too long (max length ${MAX_LENGTH})`);
  }
  if (!/^[a-z]+$/.test(word)) {
    throw new Error(`invalid entry word ${shown}: must be lowercase letters a-z only`);
  }
  return word;
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", assertValidWord(WORD), "utf8"); // no trailing newline
