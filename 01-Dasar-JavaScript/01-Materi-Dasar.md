# Modul 01: Dasar JavaScript

## 1. Variabel (Wadah Data)
Variabel adalah tempat menyimpan data. Di JS modern, kita pakai `let` dan `const`. Hindari `var` (cara lama).

- `let`: Nilainya BISA diubah.
- `const`: Nilainya TETAP (konstan), tidak bisa diubah setelah dibuat.

```javascript
let nama = "Budi";
nama = "Andi"; // Boleh

const umur = 20;
// umur = 21; // ERROR! Tidak boleh diubah.
```

## 2. Tipe Data Utama
- **String**: Teks, diapit kutip (`"..."` atau `'...'`). Contoh: `"Kucing"`.
- **Number**: Angka (bulat atau desimal). Contoh: `100`, `3.14`.
- **Boolean**: Benar/Salah. Hanya ada `true` atau `false`.
- **Null**: Kosong (sengaja dikosongkan).
- **Undefined**: Belum ada isinya.

## 3. Operator Sederhana
- `+` (Tambah), `-` (Kurang), `*` (Kali), `/` (Bagi).
- `+` pada String akan menggabungkan teks. `"Halo " + "Dunia"` jadi `"Halo Dunia"`.

---

## TUGAS
Buka file `latihan_dasar.js` di folder ini dan ikuti instruksi di dalamnya.
