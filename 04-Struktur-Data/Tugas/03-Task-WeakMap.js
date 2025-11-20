// --- TUGAS 03: WEAKMAP & WEAKSET ---
// Materi: 03-WeakMap-WeakSet.md

// 1. Gunakan WeakMap untuk menyimpan data rahasia dari sebuah object user.
// Kuncinya harus berupa object user itu sendiri.
// Jika object user di-null-kan, data rahasia harus ikut terhapus (secara teori GC).

let user = { name: "Agen Rahasia" };
const rahasia = new WeakMap();

// Simpan rahasia "Misi: Top Secret" ke user ini.
