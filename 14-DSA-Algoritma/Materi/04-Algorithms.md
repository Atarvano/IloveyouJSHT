# 04 - Essential Algorithms

## 1. Sorting (Pengurutan)

- **Bubble Sort**: Lambat O(n^2). Jangan dipakai.
- **Merge Sort / Quick Sort**: Cepat O(n log n). Bawaan `Array.sort()` biasanya pakai variasi ini.

## 2. Searching

- **Linear Search**: Cek satu-satu. O(n).
- **Binary Search**: Hanya untuk data URUT. Bagi dua, bagi dua lagi. O(log n).
  - _Wajib hafal pattern Binary Search!_

## 3. Two Pointers

Pakai dua variabel penunjuk (misal `kiri` dan `kanan`) untuk menelusuri array.

- Contoh: Cek Palindrome, Container With Most Water.

## 4. Sliding Window

Menggeser "jendela" (range) pada array untuk mencari subarray terbaik.

- Contoh: "Maximum Sum Subarray of Size K".
