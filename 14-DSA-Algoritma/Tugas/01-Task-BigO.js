// --- TUGAS 01: BIG O NOTATION ---
// Materi: 01-Big-O.md

// 1. ANALISIS KOMPLEKSITAS
// Tentukan Time Complexity dari kode berikut:

function cariDuplikat(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) return true;
    }
  }
  return false;
}
// Jawaban: O(...)

// 2. OPTIMASI
// Bisakah kamu membuat fungsi di atas menjadi O(n) menggunakan Set?
function cariDuplikatCepat(arr) {
  // ...
}
