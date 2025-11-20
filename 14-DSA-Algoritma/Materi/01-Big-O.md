# 01 - Big O Notation (Analisis Algoritma)

Di LeetCode, jawaban benar saja tidak cukup. Jawabanmu harus **CEPAT** dan **HEMAT MEMORI**. Big O adalah cara mengukurnya.

## 1. Time Complexity (Kecepatan)

Seberapa bertambah waktunya jika data bertambah?

- **O(1) - Constant**: Instant. Contoh: Akses array `arr[0]`.
- **O(log n) - Logarithmic**: Cepat banget. Contoh: Binary Search.
- **O(n) - Linear**: Loop biasa. Contoh: `for (let i of arr)`.
- **O(n^2) - Quadratic**: Loop di dalam Loop (Nested Loop). Contoh: Bubble Sort. **HINDARI INI DI LEETCODE!**

## 2. Space Complexity (Memori)

Seberapa banyak RAM yang dipakai?

- **O(1)**: Tidak buat array/object baru.
- **O(n)**: Buat array baru seukuran input.

## Tips LeetCode

Jika input `n = 100.000`, solusi `O(n^2)` pasti **Time Limit Exceeded (TLE)**. Harus cari `O(n)` atau `O(log n)`.
