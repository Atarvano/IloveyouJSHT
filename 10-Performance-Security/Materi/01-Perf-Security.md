# 10 - Performance & Security

## 1. Performance Optimization
*   **Debounce**: Menunda eksekusi fungsi sampai user berhenti mengetik. (Hemat request API search).
*   **Throttle**: Membatasi eksekusi fungsi maksimal X kali per detik. (Untuk event scroll/resize).
*   **Memoization**: Caching hasil fungsi berat. Jika input sama, kembalikan hasil cache.

## 2. Security (Keamanan)
*   **XSS (Cross-Site Scripting)**: Hacker menyuntikkan script jahat ke webmu.
    *   *Cegah*: Jangan pernah percaya input user. Selalu sanitize/escape sebelum ditampilkan ke HTML (`innerHTML` itu bahaya!).
*   **CSRF (Cross-Site Request Forgery)**: Hacker memalsukan request atas nama user.
    *   *Cegah*: Pakai CSRF Token.
*   **Prototype Pollution**: Hacker mengubah `Object.prototype` sehingga semua object di aplikasi terpengaruh.
    *   *Cegah*: Validasi key JSON, gunakan `Object.create(null)` atau `Map`.
