// --- TUGAS 02: FUNCTIONAL PROGRAMMING ---
// Materi: 02-Functional-Programming.md

// 1. PURE FUNCTION
// Ubah fungsi ini agar menjadi PURE (tidak mengubah variabel luar).
let total = 0;
function addToTotal(amount) {
  total += amount; // Side effect!
  return total;
}

// Versi Pure:
function add(a, b) {
  // ...
}

// 2. HIGHER ORDER FUNCTION (Map/Filter)
const angka = [1, 2, 3, 4, 5];
// Gunakan .filter() untuk ambil angka genap saja.
// Gunakan .map() untuk mengalikan angka genap tersebut dengan 10.
