#!/usr/bin/env tsx
import { promises as fs } from 'fs';
import path from 'path';

async function main() {
  const name = process.argv[2];
  if (!name) {
    console.error('Usage: pnpm tsx tools/generators/feature.ts <name>');
    process.exit(1);
  }
  const pascal = name.charAt(0).toUpperCase() + name.slice(1);
  const dir = path.join('packages', 'ui', 'src', 'components', name);
  await fs.mkdir(dir, { recursive: true });
  await fs.writeFile(
    path.join(dir, `${name}.tsx`),
    `export function ${pascal}() {\n  return <div>${pascal} component</div>;\n}\n`
  );
  console.log(`Generated component ${pascal}`);
}

main();
