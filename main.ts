// news-image-20261125 — the entry is the picture beside this file: one page that sums up the world
// news of Wednesday 25 November 2026 (tankers hit by mines in Hormuz, the Nvidia-led AI sell-off,
// Cartagena's hostages freed, Pakistan's first astronaut, Senegal's AFCON title restored, and the
// rescue at a flooded Indonesian mine). All this program does is hand that picture to the grader:
// it copies entry.png into the output directory as entry.png, byte for byte, so the judge sees
// exactly the image in this repository.
// Local run:  mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
// The copy is the whole contract: no resizing, no re-encoding — the gate measures the file the
// judge will see, so the bytes that leave here are the bytes that were checked in.
import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
