// --- TUGAS 01: SOLID PRINCIPLES ---
// Materi: 01-SOLID.md

// 1. SINGLE RESPONSIBILITY PRINCIPLE (SRP)
// Pecah class 'UserGod' ini menjadi beberapa class kecil yang fokus.

class UserGod {
  saveToDB() { /* ... */ }
  generateReport() { /* ... */ }
  sendEmail() { /* ... */ }
}

// Refactor jadi:
// class UserRepository ...
// class ReportGenerator ...
// class EmailService ...
