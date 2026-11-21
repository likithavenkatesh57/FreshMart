// Syntax-checks every .js file in src/, tools/ and scripts/ without running it.
const { execFileSync } = require('node:child_process');
const fs = require('node:fs');
const path = require('node:path');

function walk(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const p = path.join(dir, e.name);
    return e.isDirectory() ? walk(p) : p.endsWith('.js') ? [p] : [];
  });
}

const root = path.join(__dirname, '..');
for (const d of ['src', 'tools', 'scripts']) {
  for (const file of walk(path.join(root, d))) {
    execFileSync(process.execPath, ['--check', file], { stdio: 'inherit' });
  }
}
console.log('Syntax OK');
