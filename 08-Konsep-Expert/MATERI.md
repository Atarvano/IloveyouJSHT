# Modul 08: Konsep Expert

Untuk menjadi master, kamu harus paham apa yang terjadi "di balik layar".

## 1. Hoisting
Perilaku JS mengangkat deklarasi variabel/fungsi ke paling atas sebelum kode dijalankan.
```javascript
console.log(x); // undefined (tidak error, tapi belum ada nilai)
var x = 5;
```
*Tips: Selalu pakai `let` atau `const` untuk menghindari kebingungan hoisting.*

## 2. Closures
Fungsi di dalam fungsi yang bisa mengakses variabel milik induknya, bahkan setelah induknya selesai dijalankan.
```javascript
function buatPenghitung() {
  let hitungan = 0;
  return function() {
    hitungan++;
    return hitungan;
  };
}

const hitung = buatPenghitung();
console.log(hitung()); // 1
console.log(hitung()); // 2
// Variabel 'hitungan' terjaga privasinya (private variable).
```

## 3. Event Loop
Mekanisme JS menangani tugas async. JS menaruh tugas berat di "Web APIs", lalu lanjut kerja. Setelah tugas berat selesai, hasilnya masuk "Callback Queue", lalu dieksekusi saat "Call Stack" kosong.

---
## TUGAS
Buka file `latihan_expert.js` untuk mencoba konsep Closure.
