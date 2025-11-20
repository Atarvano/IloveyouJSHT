// --- TUGAS 03: SCOPE & HOISTING ---
// Materi: 03-Scope-Hoisting.md

// 1. HOISTING TEBAK-TEBAKAN
// Apa yang akan tercetak? Jelaskan kenapa.
console.log(sayaDiHoist);
var sayaDiHoist = "Ya, saya var";

// console.log(sayaError);
// let sayaError = "Saya let, tidak di-hoist"; // Uncomment baris ini, apa yang terjadi?

// 2. SCOPE
// Buat fungsi yang punya variabel lokal dengan nama yang sama dengan variabel global.
// Buktikan bahwa variabel lokal lebih diprioritaskan di dalam fungsi.

let warna = "Merah"; // Global

function gantiWarna() {
  let warna = "Biru"; // Lokal
  console.log("Warna di dalam fungsi:", warna);
}

gantiWarna();
console.log("Warna di luar fungsi:", warna);
