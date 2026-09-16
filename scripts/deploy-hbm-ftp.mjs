// Uploads dist/ to the live subdomain over FTP/FTPS, mirroring files.
// Config via environment variables (never commit passwords):
//   HBM_FTP_HOST  (e.g. ftp.hbm.co.id / qatalyst.hbm.co.id)
//   HBM_FTP_USER  (FTP account, e.g. user@qatalyst.hbm.co.id)
//   HBM_FTP_PASS  (password)
//   HBM_FTP_DIR   (remote dir = subdomain document root, e.g. /public_html/qatalyst)
//   HBM_FTP_PORT  (default 21)
//   HBM_FTP_SECURE ('true' for FTPS/explicit TLS, default 'false')
//
// Usage (PowerShell):
//   $env:HBM_FTP_HOST='ftp.hbm.co.id'
//   $env:HBM_FTP_USER='user@qatalyst.hbm.co.id'
//   $env:HBM_FTP_PASS='***'
//   $env:HBM_FTP_DIR='/public_html/qatalyst'
//   npm run deploy:hbm
//
// predeploy builds first. basic-ftp uploads only changed files.

import { Client } from 'basic-ftp';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const localDir = join(root, 'dist');

const {
  HBM_FTP_HOST,
  HBM_FTP_PORT = '21',
  HBM_FTP_USER,
  HBM_FTP_PASS,
  HBM_FTP_DIR = '/',
  HBM_FTP_SECURE = 'false',
} = process.env;

if (!HBM_FTP_HOST || !HBM_FTP_USER || !HBM_FTP_PASS) {
  console.error(
    '\n\u274C FTP config belum lengkap.\n' +
      'Set dulu env: HBM_FTP_HOST, HBM_FTP_USER, HBM_FTP_PASS, HBM_FTP_DIR.\n' +
      'Contoh ada di README-DEPLOY.md (Opsi B).\n'
  );
  process.exit(1);
}

const client = new Client(60000);
client.ftp.verbose = process.env.HBM_FTP_VERBOSE === 'true';

try {
  console.log(`\u{1F680} Connect ${HBM_FTP_USER}@${HBM_FTP_HOST}:${HBM_FTP_PORT} (secure=${HBM_FTP_SECURE}) ...`);
  await client.access({
    host: HBM_FTP_HOST,
    port: Number(HBM_FTP_PORT),
    user: HBM_FTP_USER,
    password: HBM_FTP_PASS,
    secure: HBM_FTP_SECURE === 'true',
    secureOptions: { rejectUnauthorized: false },
  });
  console.log(`\u{1F4E4} Upload ${localDir} -> ${HBM_FTP_DIR} ...`);
  await client.ensureDir(HBM_FTP_DIR);
  await client.clearWorkingDir();
  await client.uploadFromDir(localDir, HBM_FTP_DIR);
  console.log('\n\u2705 Deploy selesai. Cek https://qatalyst.hbm.co.id (hard refresh / Ctrl+Shift+R).\n');
} catch (err) {
  console.error('\n\u274C Deploy gagal:', err?.message || err);
  process.exit(1);
} finally {
  client.close();
}
