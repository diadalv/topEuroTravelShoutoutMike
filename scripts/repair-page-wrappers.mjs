import { readFile, writeFile } from 'node:fs/promises';

for (const file of [
  'src/components/pages/ServicesPage.tsx',
  'src/components/pages/MiceGroupsPage.tsx',
]) {
  const original = await readFile(file, 'utf8');
  const next = original.replace(/\r\s{2}\);\r?\n}\r?\n?$/, '\r\n    </div>\r\n  );\r\n}\r\n');
  if (next === original) throw new Error(`Malformed close not found in ${file}`);
  await writeFile(file, next, 'utf8');
}

console.log('Page wrappers are syntactically closed.');
