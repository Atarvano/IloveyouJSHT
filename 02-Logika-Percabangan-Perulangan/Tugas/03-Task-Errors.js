// --- TUGAS 03: ERROR HANDLING ---
// Materi: 03-Error-Handling.md

// 1. Buat blok TRY-CATCH.
// Di dalam TRY, coba panggil fungsi yang tidak ada (misal: fungsiGaib()).
// Di dalam CATCH, cetak pesan errornya biar program tidak crash.

try {
  // Panggil fungsi gaib di sini
} catch (error) {
  console.log("Tangkap error:", error.message);
}

// 2. Buat fungsi pembagian yang THROW error jika pembagi adalah 0.
function bagi(a, b) {
  if (b === 0) {
    throw new Error("Dilarang membagi dengan nol!");
  }
  return a / b;
}

// Panggil fungsi bagi dengan try-catch
