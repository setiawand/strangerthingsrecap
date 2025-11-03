# Stranger Things Season Recap

Halaman sinopsis untuk tiap season Stranger Things, disusun ulang menggunakan Next.js agar mudah dikembangkan lebih lanjut.

## Menjalankan Secara Lokal

1. Install dependencies:
   ```bash
   npm install
   ```
2. Jalankan server pengembangan:
   ```bash
   npm run dev
   ```
3. Buka `http://localhost:3000` untuk melihat halaman.

## Struktur Proyek

- `app/layout.js` – Layout root yang menerapkan stylesheet global dan metadata.
- `app/page.js` – Halaman utama yang menyuplai data sinopsis tiap season ke carousel.
- `app/components/SeasonCarousel.jsx` – Komponen klien untuk carousel poster dan trailer interaktif.
- `app/globals.css` – Dekorasi tema gelap bergaya neon lengkap dengan styling carousel.

## Fitur Interaktif

- Carousel poster untuk tiap season dengan kontrol navigasi dan indikator posisi.
- Tombol `Tonton Trailer` yang membuka embed YouTube langsung di dalam slide.
- Tombol `Buka di YouTube` untuk membuka trailer resmi di tab terpisah.

Poster disimpan lokal di folder `public/posters`. Jika ingin mengganti, cukup timpa file di sana dan sesuaikan properti `image` pada objek season di `app/page.js` (gunakan jalur relatif dari `public`, mis. `/posters/season5.jpg`). Untuk sumber eksternal baru, tambahkan domain terkait ke `images.remotePatterns` di `next.config.mjs`.

Anda dapat memperluas daftar season dengan menambahkan entri baru pada array `seasons` di `app/page.js`; pastikan menyertakan jalur gambar lokal dan URL trailer.
