// --- TUGAS 02: PROXY & REFLECT ---
// Materi: 02-Proxy-Reflect.md

// 1. VALIDATION PROXY
// Buat Proxy untuk object 'akunBank'.
// Cegah orang mengubah properti 'saldo' menjadi negatif.
// Jika nilai < 0, throw Error "Saldo tidak boleh minus!".

let akunBank = { saldo: 1000 };

const akunAman = new Proxy(akunBank, {
  set(target, prop, value) {
    // Tulis validasi di sini
  }
});

// akunAman.saldo = -500; // Harusnya Error
