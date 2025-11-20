# Modul 07: Asynchronous JavaScript

JavaScript itu "single-threaded" (satu jalur). Tapi kita bisa melakukan tugas berat (seperti download data) tanpa memacetkan aplikasi menggunakan konsep Asynchronous.

## 1. Konsep Sync vs Async
- **Sync**: Antri. Tugas B harus tunggu Tugas A selesai.
- **Async**: Bisa ditinggal. Tugas B jalan duluan sambil nunggu Tugas A selesai.

## 2. Promises
Janji bahwa data akan datang nanti (bisa sukses/resolve atau gagal/reject).

## 3. Async / Await (Cara Modern)
Cara paling enak membaca kode async. Terlihat seperti synchronous padahal tidak.

```javascript
// Simulasi ambil data dari internet (API)
async function ambilData() {
  try {
    console.log("Sedang mengambil data...");
    
    // fetch adalah fungsi bawaan browser untuk request data
    let respon = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    let data = await respon.json();
    
    console.log("Data diterima:", data);
  } catch (error) {
    console.log("Gagal mengambil data:", error);
  }
}

ambilData();
```

---
## TUGAS
Buka file `latihan_async.js`. Kita akan mencoba mengambil data dummy dari internet.
