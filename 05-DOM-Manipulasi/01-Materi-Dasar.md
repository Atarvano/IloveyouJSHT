# Modul 05: DOM Manipulation (Interaksi Web)

DOM (Document Object Model) adalah cara JS melihat halaman HTML. Dengan DOM, kita bisa mengubah teks, warna, atau menambah elemen HTML lewat kode JS.

## 1. Memilih Elemen (Selectors)
```javascript
// Mengambil elemen berdasarkan ID
let judul = document.getElementById("judul-utama");

// Mengambil elemen pertama yang cocok dengan CSS selector
let tombol = document.querySelector(".btn-submit");
```

## 2. Mengubah Konten & Style
```javascript
judul.innerText = "Selamat Datang di Web Saya!";
judul.style.color = "blue";
judul.style.fontSize = "50px";
```

## 3. Event Listener (Interaksi)
Menjalankan kode saat user melakukan sesuatu (klik, ketik, scroll).
```javascript
tombol.addEventListener("click", function() {
  alert("Tombol diklik!");
  judul.style.backgroundColor = "yellow";
});
```

---
## TUGAS
Buka file `index.html` di folder ini. Buka file tersebut di browser, lalu edit bagian `<script>` di dalamnya untuk menyelesaikan tantangan.
