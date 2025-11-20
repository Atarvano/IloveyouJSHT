# 05 - Dynamic Programming (DP)

Teknik memecahkan masalah besar dengan cara memecahnya jadi masalah kecil dan **MENYIMPAN** hasilnya biar tidak dihitung ulang.

## Ciri Soal DP

1.  Mencari nilai Maksimal/Minimal.
2.  Mencari jumlah cara melakukan sesuatu.
3.  Ada "Overlapping Subproblems" (masalah kecil yang dihitung berulang-ulang).

## Teknik

1.  **Memoization (Top-Down)**: Pakai rekursi + simpan hasil di Object/Map.
    - "Kalau hasil input ini sudah ada di memori, balikin aja. Kalau belum, hitung lalu simpan."
2.  **Tabulation (Bottom-Up)**: Pakai Loop + Array.
    - Isi array dari index 0 sampai target.

## Contoh: Fibonacci

```javascript
// Biasa (Lambat O(2^n))
function fib(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

// DP Memoization (Cepat O(n))
const memo = {};
function fibDP(n) {
  if (memo[n]) return memo[n];
  if (n <= 2) return 1;

  const hasil = fibDP(n - 1) + fibDP(n - 2);
  memo[n] = hasil;
  return hasil;
}
```
