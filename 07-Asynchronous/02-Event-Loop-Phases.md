# 02 - Event Loop Phases (Jantung JS)

Event Loop tidak sesederhana "Antrian". Ada fasenya.

## 1. Microtasks vs Macrotasks
*   **Macrotasks (Task Queue)**: `setTimeout`, `setInterval`, I/O.
*   **Microtasks (Job Queue)**: `Promise.then`, `queueMicrotask`, `MutationObserver`.

**ATURAN EMAS**: Setelah satu Macrotask selesai, JS akan menghabiskan SEMUA Microtasks sebelum lanjut ke Macrotask berikutnya atau rendering layar.

```javascript
console.log(1);

setTimeout(() => console.log(2), 0); // Macrotask

Promise.resolve().then(() => console.log(3)); // Microtask

console.log(4);

// Output: 1, 4, 3, 2
// Kenapa 3 dulu baru 2? Karena Promise itu VIP (Microtask).
```

## 2. Phases of Event Loop (Node.js context)
1.  **Timers**: Eksekusi `setTimeout` / `setInterval`.
2.  **Pending Callbacks**: I/O callbacks (baca file selesai).
3.  **Idle, Prepare**: Internal.
4.  **Poll**: Menunggu koneksi baru / data baru.
5.  **Check**: `setImmediate`.
6.  **Close Callbacks**: `socket.on('close')`.
