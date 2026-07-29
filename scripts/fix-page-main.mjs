import { readFile, writeFile } from 'node:fs/promises';

for (const file of [
  'src/components/pages/ServicesPage.tsx',
  'src/components/pages/MiceGroupsPage.tsx',
]) {
  const original = await readFile(file, 'utf8');
  const next = original
    .replace('<main className="site-page ', '<div className="site-page ')
    .replace(/\s*<\/main>\s*\);\s*\n}\s*$/, '\n    </div>\n  );\n}\n');

  if (next === original) throw new Error(`No outer main found in ${file}`);
  await writeFile(file, next, 'utf8');
}

console.log('Converted page-level main wrappers to divs.');
