// --- LATIHAN ENGINE INTERNALS ---

// 1. MEMORY LEAK DETECTIVE
// Kode di bawah ini menyebabkan memory leak. Bisakah kamu memperbaikinya?
// Petunjuk: Interval terus berjalan bahkan setelah kita tidak butuh datanya.

function mulaiDataStream() {
  const dataBesar = new Array(100000).fill("Data Penting");
  
  const intervalId = setInterval(() => {
    console.log("Stream data berjalan...", dataBesar[0]);
  }, 1000);

  // TUGAS: Tambahkan mekanisme untuk menghentikan interval ini setelah 5 detik
  // dan pastikan 'dataBesar' bisa dibersihkan oleh Garbage Collector.
}

mulaiDataStream();


// 2. OPTIMIZATION (V8 HIDDEN CLASSES)
// V8 lebih suka object yang bentuknya konsisten.
// Manakah dari dua cara di bawah ini yang lebih cepat menurut V8? Jelaskan alasannya di komentar.

// Cara A
const objA = {};
objA.x = 1;
objA.y = 2;

// Cara B
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}
const objB = new Point(1, 2);

// Jawabanmu: ...
