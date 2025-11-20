# Modul 06: JavaScript Modern (ES6+)

Fitur-fitur baru yang membuat penulisan kode lebih ringkas dan powerful.

## 1. Arrow Function
Cara singkat menulis fungsi.
```javascript
// Cara lama
function jumlah(a, b) {
  return a + b;
}

// Cara baru (Arrow Function)
const jumlah = (a, b) => a + b;
```

## 2. Template Literals
Menggabungkan string lebih mudah dengan backtick (`` ` ``).
```javascript
let nama = "Budi";
// Lama
console.log("Halo " + nama + ", selamat pagi.");
// Baru
console.log(`Halo ${nama}, selamat pagi.`);
```

## 3. Destructuring
Membongkar isi array/object ke variabel terpisah.
```javascript
const user = { n: "Siti", u: 25 };
const { n, u } = user; // n = "Siti", u = 25
```

## 4. Spread Operator (...)
Menyebar isi array/object.
```javascript
const angka = [1, 2, 3];
const baru = [...angka, 4, 5]; // [1, 2, 3, 4, 5]
```

---
## TUGAS
Buka file `latihan_es6.js` dan ubah kode lama menjadi kode modern!
