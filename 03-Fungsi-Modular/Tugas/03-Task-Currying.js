// --- TUGAS 03: CURRYING & COMPOSITION ---
// Materi: 03-Currying-Composition.md

// 1. CURRYING
// Buat fungsi 'kali(a)(b)' sehingga bisa dipanggil: kali(5)(2) // 10
function kali(a) {
  return function(b) {
    // ...
  };
}

// 2. COMPOSITION
// Gabungkan dua fungsi ini menjadi satu fungsi baru 'shoutAndReverse'.
const shout = (str) => str.toUpperCase();
const reverse = (str) => str.split('').reverse().join('');

// const shoutAndReverse = ...
