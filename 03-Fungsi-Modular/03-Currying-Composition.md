# 03 - Currying & Composition

Teknik tingkat lanjut memanipulasi fungsi.

## 1. Currying
Mengubah fungsi yang punya banyak argumen `f(a, b, c)` menjadi serangkaian fungsi `f(a)(b)(c)`.

```javascript
// Biasa
const tambah = (a, b) => a + b;
console.log(tambah(1, 2));

// Curried
const tambahCurry = (a) => (b) => a + b;

const tambah5 = tambahCurry(5); // Fungsi baru yang "mengingat" angka 5
console.log(tambah5(10)); // 15
console.log(tambahCurry(2)(3)); // 5
```
Gunanya? Membuat fungsi spesifik dari fungsi umum (Partial Application).

## 2. Composition
Menggabungkan beberapa fungsi kecil menjadi satu fungsi besar. `f(g(x))`.

```javascript
const kalikan2 = (x) => x * 2;
const tambah10 = (x) => x + 10;

// Manual
const hasil = tambah10(kalikan2(5)); // (5 * 2) + 10 = 20

// Compose Function (Utility)
const compose = (f, g) => (x) => f(g(x));
const hitung = compose(tambah10, kalikan2);

console.log(hitung(5)); // 20
```
Ini dasar dari library seperti Redux atau Ramda.
