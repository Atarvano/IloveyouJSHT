// --- LATIHAN DESIGN PATTERNS ---

// 1. SINGLETON PATTERN
// Buatlah sebuah class 'DatabaseConnection'.
// Pastikan class ini hanya bisa di-instansiasi SATU KALI saja.
// Jika orang mencoba membuat `new DatabaseConnection()` lagi, kembalikan instance yang sudah ada.

class DatabaseConnection {
  constructor() {
    // Tulis logikamu di sini
  }
  
  connect() {
    console.log("Terhubung ke DB!");
  }
}

// Test:
// const db1 = new DatabaseConnection();
// const db2 = new DatabaseConnection();
// console.log(db1 === db2); // Harus true


// 2. OBSERVER PATTERN
// Lengkapi class 'YouTubeChannel' di bawah ini.
// Saat uploadVideo dipanggil, semua subscriber harus mendapatkan notifikasi (console.log).

class YouTubeChannel {
  constructor() {
    this.subscribers = [];
  }

  subscribe(namaOrang) {
    // Masukkan namaOrang ke array subscribers
  }

  uploadVideo(judul) {
    console.log(`Upload video baru: ${judul}`);
    // Loop semua subscribers dan beri notifikasi: "Halo [nama], ada video baru!"
  }
}

// Test:
// const channel = new YouTubeChannel();
// channel.subscribe("Budi");
// channel.subscribe("Siti");
// channel.uploadVideo("Tutorial JS");
