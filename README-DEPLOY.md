# Deploy QAtalyst → qatalyst.hbm.co.id

> `npm run deploy` (gh-pages) sudah dihapus karena itu deploy ke GitHub Pages,
> bukan ke subdomain HBM. Jangan dipakai lagi.

## Opsi A — Manual via cPanel File Manager (paling aman, tanpa password di laptop)

```powershell
npm run pack:hbm
```

Hasilnya: `qatalyst-hbm.tar.gz` berisi **isi** `dist/` (bukan foldernya).

1. Login cPanel → File Manager → buka Document Root subdomain
   (misal `public_html/qatalyst` — cek di menu Subdomains).
2. Upload `qatalyst-hbm.tar.gz` ke sana.
3. Klik kanan → Extract. Pilih overwrite/timpa file lama.
4. Buka https://qatalyst.hbm.co.id dengan hard refresh (Ctrl+Shift+R).

## Opsi B — Otomatis via `npm run deploy:hbm` (butuh akun FTP)

Buat dulu akun FTP di cPanel yang home directory-nya = document root subdomain.
Jangan pakai akun cPanel utama.

```powershell
$env:HBM_FTP_HOST='ftp.hbm.co.id'
$env:HBM_FTP_USER='user@qatalyst.hbm.co.id'
$env:HBM_FTP_PASS='***isi-password***'
$env:HBM_FTP_DIR='/public_html/qatalyst'   # sesuaikan dengan document root
# $env:HBM_FTP_SECURE='true'               # aktifkan kalau hosting mewajibkan FTPS

npm run deploy:hbm
```

Script otomatis `npm run build` dulu (via `predeploy:hbm`),
lalu mirror isi `dist/` ke server (file lama yang tidak ada di `dist/` dihapus,
jadi tidak ada sisa asset `index-HASH.js` kadaluarsa).

Password hanya lewat environment variable — jangan commit ke git.
