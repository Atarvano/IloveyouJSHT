# Modul 02: Logika & Perulangan

## 1. Percabangan (If / Else)
Digunakan untuk mengambil keputusan. "Jika A terjadi, maka lakukan B".

```javascript
let nilai = 80;

if (nilai >= 75) {
  console.log("Lulus!");
} else {
  console.log("Belum Lulus, coba lagi.");
}
```

## 2. Switch Case
Alternatif `if` jika pilihannya banyak dan spesifik.

```javascript
let lampu = "merah";

switch (lampu) {
  case "merah":
    console.log("Berhenti!");
    break;
  case "hijau":
    console.log("Jalan!");
    break;
  default:
    console.log("Hati-hati.");
}
```

## 3. Perulangan (Loops)
Melakukan sesuatu berulang kali.

### For Loop
Cocok jika kita tahu berapa kali ingin mengulang.
```javascript
// Mulai dari 1, selama i <= 5, tambah i dengan 1
for (let i = 1; i <= 5; i++) {
  console.log("Putaran ke-" + i);
}
```

### While Loop
Cocok jika kita tidak tahu pasti kapan berhentinya (berhenti saat kondisi salah).
```javascript
let i = 1;
while (i <= 5) {
  console.log(i);
  i++; // Jangan lupa ini, atau akan looping selamanya (infinite loop)!
}
```

---
## TUGAS
Buka file `latihan_logika.js` dan kerjakan tantangannya!
