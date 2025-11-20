# 02 - Advanced Logic

## 1. Short-Circuit Evaluation
Logika `&&` dan `||` bukan cuma buat `if`. Mereka mengembalikan **nilai**.

### AND (`&&`)
Mengambil nilai **Falsy** pertama, atau nilai terakhir jika semua Truthy.
```javascript
let user = { nama: "Budi" };
// Jika user ada, ambil user.nama. Jika tidak, undefined.
let nama = user && user.nama; 
```

### OR (`||`)
Mengambil nilai **Truthy** pertama. Cocok untuk nilai default.
```javascript
let input = "";
let nama = input || "Tanpa Nama"; // "Tanpa Nama"
```

### Nullish Coalescing (`??`)
Mirip `||`, tapi hanya cek `null` atau `undefined`. `0` dan `""` dianggap valid.
```javascript
let skor = 0;
let hasil = skor || 100; // 100 (Salah! Padahal skor 0 itu valid)
let hasilBenar = skor ?? 100; // 0 (Benar)
```

## 2. Bitwise Operators (Ilmu Sepuh)
Memanipulasi bit (biner) langsung. Jarang dipakai di web biasa, tapi sering di library performa tinggi atau game.

*   `&` (AND): 1 jika kedua bit 1.
*   `|` (OR): 1 jika salah satu bit 1.
*   `^` (XOR): 1 jika bit beda.
*   `~` (NOT): Membalik bit.
*   `<<`, `>>`: Geser bit.

Contoh penggunaan: Flags / Permission System.
```javascript
const READ = 1;   // 001
const WRITE = 2;  // 010
const EXECUTE = 4;// 100

let userPerm = READ | WRITE; // 011 (3)

// Cek permission
if (userPerm & WRITE) {
  console.log("Boleh nulis");
}
```
