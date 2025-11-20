# Modul 03: Fungsi (Function)

Fungsi adalah blok kode yang bisa dipanggil berkali-kali. Ini membuat kode kita rapi dan tidak berulang-ulang (prinsip DRY: Don't Repeat Yourself).

## 1. Membuat Fungsi Dasar
```javascript
function sapa() {
  console.log("Halo semuanya!");
}

sapa(); // Memanggil fungsi
sapa(); // Bisa dipanggil lagi
```

## 2. Parameter & Argument
Fungsi bisa menerima input data.
```javascript
function sapaNama(nama) { // 'nama' adalah parameter
  console.log("Halo, " + nama);
}

sapaNama("Budi"); // "Budi" adalah argument
sapaNama("Siti");
```

## 3. Return Value
Fungsi bisa mengembalikan hasil, bukan cuma mencetak ke layar.
```javascript
function tambah(a, b) {
  return a + b;
}

let hasil = tambah(5, 3); // hasil sekarang bernilai 8
console.log(hasil);
```

---
## TUGAS
Buka file `latihan_fungsi.js` untuk berlatih membuat fungsi sendiri.
