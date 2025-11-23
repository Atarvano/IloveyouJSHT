// --- TUGAS 02: SHORT CIRCUIT LOGIC ---
// Materi: 02-Advanced-Logic.md

// 1. Gunakan operator OR (||) untuk memberikan nilai default.
let namaUser = ""; // Kosong

let namaDisplay = namaUser || "Tamu";
console.log(namaDisplay); // Harusnya "Tamu"

// 2. Gunakan operator AND (&&) untuk menjalankan fungsi HANYA JIKA kondisi true.
let isLogin = true;
function tampilkanDashboard() {
  console.log("Selamat Datang di Dashboard!");
}

// Tulis satu baris kode pakai &&
// isLogin && ...

if (isLogin && namaUser == "") {
  console.log("Silakan login terlebih dahulu.");
} else if (islogin && namaUser == "John Doe") {
  console.log("Selamat datang, John Doe!");
} else {
  console.log("Anda tidak memiliki akses.");
}

// short circuit login
let noris = "WDC";
let wdc = noris && "Juara WDC";

console.log(wdc);
