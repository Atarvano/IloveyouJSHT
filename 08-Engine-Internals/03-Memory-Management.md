# 03 - Memory Management

## 1. Stack vs Heap
*   **Stack**: Menyimpan data primitif (Number, Boolean) dan referensi fungsi. Cepat, ukuran tetap.
*   **Heap**: Menyimpan Object, Array, Function. Besar, dinamis, tapi lebih lambat.

## 2. Memory Leaks (Kebocoran Memori)
Kondisi di mana memori tidak dibersihkan padahal sudah tidak dipakai.

### Penyebab Umum:
1.  **Global Variables**: Lupa pakai `let`/`const`, jadi nempel di `window`.
2.  **Forgotten Timers**: `setInterval` yang lupa di-`clearInterval`.
3.  **Closures**: Menyimpan referensi variabel besar yang tidak perlu.
4.  **Detached DOM**: Elemen HTML dihapus dari layar, tapi masih disimpan di variabel JS.

```javascript
let elemen = document.getElementById('tombol');
document.body.removeChild(elemen);
// 'elemen' masih ada di memori JS (Detached DOM) sampai variabelnya di-null-kan.
elemen = null; // Fix
```
