// This make.fun entry writes the answer for the "An absurd invention pitch" bounty to the output directory as a single text file.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const answer = 'A self-apologising alarm clock that says sorry so sincerely you forgive it and go back to sleep.';
const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), answer, 'utf8');
console.log(`Wrote ${answer.length} characters to ${join(out, 'entry.txt')}`);
