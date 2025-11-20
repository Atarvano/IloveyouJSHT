// --- TUGAS 01: PERFORMANCE & SECURITY ---
// Materi: 01-Perf-Security.md

// 1. DEBOUNCE
// Buat fungsi debounce untuk input search.
// Delay: 500ms.

// 2. THROTTLE
// Buat fungsi throttle untuk event scroll window.
// Limit: Eksekusi maksimal 1x setiap 1000ms.

// 3. XSS PREVENTION
// Sanitasi string input user ini agar aman dari XSS.
const inputJahat = "<script>alert('Hacked')</script>";
function sanitize(str) {
  // Ganti < dan > dengan entity HTML (&lt; &gt;)
}
