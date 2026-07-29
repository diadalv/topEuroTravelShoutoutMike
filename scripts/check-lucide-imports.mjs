import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';

const lucide = await import('file:///C:/tmp/top-euro-tscheck/node_modules/lucide-react/dist/cjs/lucide-react.js');

async function listTsx(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const groups = await Promise.all(entries.map(async (entry) => {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) return listTsx(path);
    return entry.name.endsWith('.tsx') ? [path] : [];
  }));
  return groups.flat();
}

let errors = 0;
for (const file of await listTsx('src')) {
  const source = await readFile(file, 'utf8');
  const imports = source.matchAll(/import\s*\{([\s\S]*?)\}\s*from\s*['"]lucide-react['"]/g);
  for (const match of imports) {
    const names = match[1]
      .split(',')
      .map((name) => name.trim().replace(/^type\s+/, '').split(/\s+as\s+/)[0])
      .filter(Boolean);
    for (const name of names) {
      if (!(name in lucide)) {
        errors += 1;
        console.error(`${file}: lucide-react does not export ${name}`);
      }
    }
  }
}

if (errors) process.exit(1);
console.log('All lucide-react named imports are valid.');
