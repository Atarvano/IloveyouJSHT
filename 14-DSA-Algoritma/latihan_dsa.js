// --- LATIHAN DSA & ALGORITMA ---

// ==========================================
// 1. BIG O NOTATION
// ==========================================
// Tentukan Time Complexity dari fungsi di bawah ini (tulis di komentar):

function cetakAngka(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
}
// Jawab: O(...)

function nestedLoop(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}
// Jawab: O(...)


// ==========================================
// 2. STACK & QUEUE
// ==========================================
// Implementasikan class Stack sederhana menggunakan Array.
class Stack {
  constructor() {
    this.items = [];
  }
  
  push(element) {
    // Tulis kodemu di sini
  }
  
  pop() {
    // Tulis kodemu di sini
  }
  
  peek() {
    // Lihat elemen paling atas tanpa menghapusnya
  }
}


// ==========================================
// 3. ALGORITMA: PALINDROME (Two Pointers)
// ==========================================
// Buat fungsi untuk mengecek apakah sebuah string adalah Palindrome.
// Contoh: "katak" -> true, "kasur" -> false.
// GUNAKAN TEKNIK TWO POINTERS (Loop dari depan dan belakang)!
function isPalindrome(str) {
  // Tulis kodemu di sini
}


// ==========================================
// 4. RECURSION & DP: FIBONACCI
// ==========================================
// Lengkapi fungsi Fibonacci ini dengan MEMOIZATION agar cepat.
const memo = {};

function fibonacci(n) {
  // 1. Base case (jika n <= 1 return n)
  // 2. Cek apakah n sudah ada di memo? Jika ya, return memo[n].
  // 3. Jika belum, hitung: fibonacci(n-1) + fibonacci(n-2)
  // 4. Simpan hasil di memo[n] dan return.
}

// Test
// console.log(fibonacci(50)); // Harusnya cepat, tidak hang.
