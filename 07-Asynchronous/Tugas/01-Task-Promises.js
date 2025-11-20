// --- TUGAS 01: PROMISES & ASYNC/AWAIT ---
// Materi: 01-Materi-Dasar.md

// 1. CONVERT CALLBACK TO PROMISE
// Ubah fungsi ini agar mengembalikan Promise.
function download(url, callback) {
  setTimeout(() => {
    callback(`Data dari ${url}`);
  }, 1000);
}

// Versi Promise:
function downloadPromise(url) {
  // ...
}

// 2. ASYNC/AWAIT
// Panggil downloadPromise pakai async/await.
async function main() {
  // ...
}
