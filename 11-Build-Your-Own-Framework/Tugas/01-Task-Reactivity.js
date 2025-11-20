// --- TUGAS 01: REACTIVITY SYSTEM ---
// Materi: 01-Reactivity.md

// 1. DEPENDENCY TRACKING
// Buat class 'Dep' yang bisa:
// - depend(): Mendaftarkan fungsi yang sedang jalan.
// - notify(): Menjalankan semua fungsi yang terdaftar.

class Dep {
  constructor() {
    this.subscribers = new Set();
  }
  // ...
}

// 2. REACTIVE FUNCTION
// Gabungkan Dep dengan Proxy agar otomatis notify() saat data berubah.
