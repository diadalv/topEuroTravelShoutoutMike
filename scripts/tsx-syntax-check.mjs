import ts from 'file:///C:/tmp/top-euro-tscheck/node_modules/typescript/lib/typescript.js';
import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';

async function listSourceFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(entries.map(async (entry) => {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) return listSourceFiles(path);
    return /\.(tsx?|astro)$/.test(entry.name) ? [path] : [];
  }));
  return nested.flat();
}

const files = (await listSourceFiles('src')).filter((file) => !file.endsWith('.astro'));
let errors = 0;

for (const file of files) {
  const source = await readFile(file, 'utf8');
  const result = ts.transpileModule(source, {
    fileName: file,
    reportDiagnostics: true,
    compilerOptions: {
      jsx: ts.JsxEmit.ReactJSX,
      module: ts.ModuleKind.ESNext,
      target: ts.ScriptTarget.ES2022,
      isolatedModules: true,
    },
  });

  for (const diagnostic of result.diagnostics ?? []) {
    if (diagnostic.category !== ts.DiagnosticCategory.Error) continue;
    errors += 1;
    const position = diagnostic.file && diagnostic.start !== undefined
      ? diagnostic.file.getLineAndCharacterOfPosition(diagnostic.start)
      : undefined;
    const location = position ? `:${position.line + 1}:${position.character + 1}` : '';
    console.error(`${file}${location} ${ts.flattenDiagnosticMessageText(diagnostic.messageText, '\n')}`);
  }
}

if (errors) {
  console.error(`Found ${errors} TypeScript syntax error(s).`);
  process.exit(1);
}

console.log(`TypeScript syntax passed for ${files.length} source files.`);
