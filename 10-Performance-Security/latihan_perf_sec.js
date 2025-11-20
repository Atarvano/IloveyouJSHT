// --- LATIHAN PERFORMANCE & SECURITY ---

// 1. DEBOUNCE IMPLEMENTATION
// Debounce berguna untuk menunda eksekusi fungsi (misal saat search bar diketik).
// Buatlah fungsi debounce sederhana.

function debounce(func, delay) {
  // Tulis kodemu di sini.
  // Clue: Pakai setTimeout dan clearTimeout.
  // Return sebuah function baru.
}

// Test (Simulasi):
// const cariData = debounce(() => console.log("Mencari data..."), 1000);
// cariData(); // Tidak jalan langsung
// cariData(); // Reset timer
// cariData(); // Baru jalan setelah 1 detik dari panggilan terakhir


// 2. SECURITY QUIZ (XSS)
// Misalkan kamu punya kode HTML seperti ini:
// <div id="app"></div>

// Dan kode JS:
// const inputUser = "<img src=x onerror=alert('HACKED')>";
// document.getElementById("app").innerHTML = inputUser;

// Pertanyaan: Apa yang akan terjadi jika kode di atas dijalankan?
// Jawaban: ...

// Pertanyaan: Bagaimana cara memperbaikinya agar aman? (Tulis kodenya di bawah)
// Jawaban: ...
