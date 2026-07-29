import { readFile, writeFile } from 'node:fs/promises';

const pageFiles = [
  'src/components/pages/ServicesPage.tsx',
  'src/components/pages/MiceGroupsPage.tsx',
  'src/components/pages/ExperiencesPage.tsx',
  'src/components/pages/ContactPage.tsx',
  'src/components/pages/AgentsPortalPage.tsx',
  'src/components/pages/ExcursionsPage.tsx',
  'src/components/pages/ExcursionDetailPage.tsx',
];

for (const file of pageFiles) {
  const original = await readFile(file, 'utf8');
  const next = original
    .replace(/^\s*SiteHeader,\r?\n/gm, '')
    .replace(/^\s*SiteFooter,\r?\n/gm, '')
    .replace(/^\s*<SiteHeader\s*\/>\r?\n/gm, '')
    .replace(/^\s*<SiteFooter\s*\/>\r?\n/gm, '')
    .replace(/^\s*<main>\r?\n/gm, '')
    .replace(/^\s*<\/main>\r?\n/gm, '');

  if (next === original) {
    throw new Error(`No integration changes were made to ${file}`);
  }

  await writeFile(file, next, 'utf8');
}

console.log(`Integrated ${pageFiles.length} page modules into the shared router shell.`);
