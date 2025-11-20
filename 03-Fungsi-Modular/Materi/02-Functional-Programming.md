# 02 - Functional Programming Concepts

JS mendukung gaya Functional Programming (FP). Ini kunci membuat kode yang bersih dan minim bug.

## 1. Pure Functions
Fungsi yang:
1.  Selalu menghasilkan output yang sama untuk input yang sama.
2.  Tidak punya **Side Effect** (tidak mengubah variabel luar, tidak console.log, tidak request HTTP).

```javascript
// Impure (Buruk)
let total = 0;
function tambah(a) {
  total += a; // Mengubah variabel luar (Side Effect)
  return total;
}

// Pure (Bagus)
function tambahMurni(a, b) {
  return a + b; // Hanya bergantung input
}
```

## 2. Higher-Order Functions (HOF)
Fungsi yang menerima fungsi lain sebagai argumen, atau mengembalikan fungsi.
Contoh: `map`, `filter`, `reduce`.

```javascript
function kerjakan(fn) {
  console.log("Mulai...");
  fn();
  console.log("Selesai.");
}

kerjakan(() => console.log("Sedang kerja!"));
```

## 3. Immutability
Jangan mengubah data asli. Buat copy-nya.
```javascript
const user = { nama: "Budi", umur: 20 };

// Salah (Mutation)
// user.umur = 21; 

// Benar (Immutable)
const userBaru = { ...user, umur: 21 };
```
