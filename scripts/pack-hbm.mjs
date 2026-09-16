import { execSync } from 'node:child_process';
import { existsSync, rmSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, '..');
const outFile = join(root, 'qatalyst-hbm.tar.gz');

try {
  if (existsSync(outFile)) rmSync(outFile);
  // Pack CONTENTS of dist/ (not the folder itself) so extracting in the
  // subdomain document root puts index.html at the top level.
  execSync(`tar -czf "${outFile}" -C "${join(root, 'dist')}" .`, {
    cwd: root,
    stdio: 'inherit',
    shell: true,
  });
  console.log('\n\u2705 Packed: qatalyst-hbm.tar.gz');
  console.log('Upload file ini ke Document Root subdomain (qatalyst.hbm.co.id),');
  console.log('lalu di cPanel > File Manager > Extract di sana. Timpa file lama.\n');
} catch {
  console.error('\n\u274C Gagal membuat arsip. Pastikan folder dist/ ada (npm run build dulu).');
  process.exit(1);
}
