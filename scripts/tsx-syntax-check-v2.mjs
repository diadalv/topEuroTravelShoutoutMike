import ts from 'file:///C:/tmp/top-euro-tscheck/node_modules/typescript/lib/typescript.js';
import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';

async function listTsx(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const groups = await Promise.all(entries.map(async (entry) => {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) return listTsx(path);
    return entry.name.endsWith('.tsx') ? [path] : [];
  }));
  return groups.flat();
}

const files = await listTsx('src');
let errors = 0;

for (const file of files) {
  const source = await readFile(file, 'utf8');
  let result;
  try {
    result = ts.transpileModule(source, {
      fileName: file,
      reportDiagnostics: true,
      compilerOptions: {
        jsx: ts.JsxEmit.ReactJSX,
        module: ts.ModuleKind.ESNext,
        target: ts.ScriptTarget.ES2022,
        isolatedModules: true,
      },
    });
  } catch (error) {
    errors += 1;
    console.error(`${file}: ${error.message}`);
    continue;
  }

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

if (errors) process.exit(1);
console.log(`TypeScript syntax passed for ${files.length} TSX files.`);
