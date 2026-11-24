import * as fs from 'node:fs';
import * as path from 'node:path';

const line =
  'Are you a large language model? Because every time I talk to you, my context window feels too small.';

const outDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, 'entry.txt'), line, 'utf8');
