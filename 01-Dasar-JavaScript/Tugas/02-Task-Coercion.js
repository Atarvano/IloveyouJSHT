// --- TUGAS 02: TYPE COERCION ---
// Materi: 02-Type-Coercion.md

// 1. Apa hasil dari kode berikut? (Tulis di komentar)
// console.log(5 == "5");  // ?
// console.log(5 === "5"); // ?

// 2. Buat kondisi IF yang memanfaatkan 'Truthy' value dari sebuah string kosong.
let pesan = "";

if (pesan) {
  console.log("Pesan ada isinya");
} else {
  console.log("Pesan kosong"); // Harusnya ini yang keluar
}

// 3. Coba jumlahkan string "10" dengan angka 20. Apa hasilnya?
let hasil = "10" + 20;
console.log(hasil); // Prediksi: ...
