import { readFile, writeFile } from 'node:fs/promises';

for (const file of [
  'src/components/pages/ServicesPage.tsx',
  'src/components/pages/MiceGroupsPage.tsx',
]) {
  const original = await readFile(file, 'utf8');
  const next = original.replace(/\n  \);\r?\n}\s*$/, '\n    </div>\n  );\n}\n');
  if (next === original) throw new Error(`No return close found in ${file}`);
  await writeFile(file, next, 'utf8');
}

console.log('Restored page wrapper closing tags.');
