import { readFile, writeFile } from 'node:fs/promises';

const replacements = [
  ['src/components/pages/ContactPage.tsx', /\bSuitcase\b/g, 'Luggage'],
  ['src/components/pages/ExperiencesPage.tsx', /\bPalmTree\b/g, 'Palmtree'],
];

for (const [file, pattern, replacement] of replacements) {
  const original = await readFile(file, 'utf8');
  const next = original.replace(pattern, replacement);
  if (next === original) throw new Error(`No replacement made in ${file}`);
  await writeFile(file, next, 'utf8');
}

console.log('Corrected lucide icon export names.');
