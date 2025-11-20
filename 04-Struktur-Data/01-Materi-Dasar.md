# Modul 04: Struktur Data (Array & Object)

## 1. Array (Daftar)
Menyimpan banyak data dalam satu variabel. Indeks dimulai dari 0.

```javascript
let buah = ["Apel", "Mangga", "Jeruk"];

console.log(buah[0]); // "Apel"
console.log(buah.length); // 3 (jumlah data)

// Menambah data
buah.push("Pisang"); 
```

## 2. Object (Benda)
Menyimpan data yang lebih kompleks dengan pasangan `key: value`.

```javascript
let mahasiswa = {
  nama: "Budi",
  umur: 20,
  jurusan: "Informatika",
  lulus: false
};

console.log(mahasiswa.nama); // "Budi"
console.log(mahasiswa["jurusan"]); // "Informatika"

// Mengubah data
mahasiswa.lulus = true;
```

## 3. Array of Objects
Gabungan keduanya. Sering dipakai di data nyata (seperti data produk toko online).
```javascript
let daftarSiswa = [
  { nama: "Ali", kelas: 10 },
  { nama: "Siti", kelas: 11 }
];
```

---
## TUGAS
Buka file `latihan_struktur_data.js`.
