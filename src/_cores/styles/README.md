# Panduan styling

Semua SCSS module komponen memakai import eksplisit yang sama:

```scss
@import '_cores/styles/_assets.scss';

.card {
  padding: space(6); // 24px dari skala spacing
  color: color(portfolio, text);
  background: color(portfolio, surface);
  font-family: ff(main);
  font-size: text-size(body);
  border-radius: radius(card);
  @include shadow(floating);

  @include down(mobile) {
    padding: space(4);
  }
}
```

Path tersebut di-resolve melalui `sassOptions.includePaths` di `next.config.ts`. Tidak perlu menambahkan `../../..` berdasarkan kedalaman folder komponen, atau mengimpor `app.scss` ke komponen.

## Alur import

- `layout.tsx` mengimpor `app.scss` satu kali.
- `app.scss` memuat konfigurasi `_assets.scss`, normalize, reboot, font, tema, style global, dan grid.
- `_assets.scss` hanya memuat variabel, function, dan mixin. Tidak mengeluarkan selector global atau `@font-face`.
- `styles/style.module.scss` memuat `_assets.scss` dan mendefinisikan styling lokal komponennya.

## Tempat mengubah konfigurasi

| Kebutuhan | File / API |
| --- | --- |
| Warna portfolio | `project/variables/_colors.scss`: `color(portfolio, button)` |
| CSS variable tema | `project/_theme.scss`: dipetakan dari warna portfolio, dikeluarkan sekali di `:root` |
| Font keluarga, bobot, heading | `project/variables/_typography.scss`: `ff(main)`, `ff(title)`, `fw(medium)`, `@include font-size(h2)` |
| Ukuran teks komponen | `_typography.scss`: `text-size(small)`, `text-size(card-title)` |
| File font lokal | `project/_fonts.scss`; font Helvetica Neue dan Poppins tetap digunakan |
| Jarak | `project/variables/_spacing.scss`: `space(1)` = 4px, `space(6)` = 24px |
| Radius | `project/variables/_radius.scss`: `radius(control)`, `radius(card)` |
| Bayangan | `project/variables/_shadow.scss`: `@include shadow(floating)` |
| Urutan lapisan | `project/variables/_z-index.scss`: `zi(header)`, `zi(decoration)` |
| Breakpoint | `project/variables/_screen.scss`: `@include down(mobile)`, `@include down(tablet)`, `@include up(wide)` |
| Lebar halaman dan gutter | Gunakan class global `.container`; implementasi di `project/grid/_grid-system.scss`, lebar maksimum di `project/variables/_grid.scss` |
| Jarak antarsection | `_grid.scss`: `@include section-spacing` |

Breakpoint portfolio tetap 700px (mobile), 1000px (tablet), dan 1500px (wide), sehingga migrasi token tidak menggeser batas responsif komponen. Breakpoint bawaan seperti `small` dan `medium` tetap tersedia untuk pola grid yang sudah dibuat.

Gunakan `font-size(...)` untuk pasangan ukuran dan line-height heading/body. Gunakan `text-size(...)` ketika hanya ukuran teks yang perlu diubah dan line-height komponen harus tetap dipertahankan.

Warna umum, spacing berulang, ukuran teks, radius kontrol, dan lapisan memakai konfigurasi bersama. Geometri serta warna artwork khusus pada preview proyek dan hero tetap lokal karena bukan token UI bersama. Tambahkan token bersama ketika nilai memang perlu digunakan lintas komponen.

Token yang salah nama menghasilkan error Sass yang menyebut grup dan nama token, bukan menghilangkan deklarasi secara diam-diam. Jangan menambahkan selector, reset, font-face, atau import `app.scss` ke `_assets.scss`.

## Validasi

Jalankan `npm run build` dan `npm run typecheck`. Build juga menjalankan ESLint. Seluruh 12 SCSS module telah dikompilasi mandiri untuk mengecek resolusi import, fungsi token, breakpoint, dan tidak adanya selector global/font-face yang bocor dari `_assets.scss`.

## Container halaman

Gunakan wrapper terpisah: `section > div.container > content`. Section menyimpan ID, background, dan spacing luar; `.container` mengatur lebar serta gutter; wrapper konten menyimpan layout Flexbox. Header dan footer mengikuti pola yang sama. Jangan menempelkan class `container` langsung pada section/header/footer.

```tsx
<section className="section-block" id="about">
  <div className="container">
    <div className={styles.about}>...</div>
  </div>
</section>
```
