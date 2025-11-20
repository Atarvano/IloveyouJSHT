# 02 - Linear Structures

Array bawaan JS itu powerful, tapi kamu harus paham struktur lain.

## 1. Stack (Tumpukan)

Prinsip: **LIFO** (Last In, First Out). Masuk terakhir, keluar duluan.

- Contoh: Tombol Undo, Call Stack.
- Operasi: `push()` (masuk), `pop()` (keluar).

## 2. Queue (Antrian)

Prinsip: **FIFO** (First In, First Out). Masuk duluan, keluar duluan.

- Contoh: Antrian printer, Task Queue JS.
- Operasi: `push()` (masuk), `shift()` (keluar). _Hati-hati: `shift()` di Array JS itu lambat O(n)!_

## 3. Linked List

Data yang saling bergandengan. Tidak punya index.

```javascript
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
// A -> B -> C
```

Sering keluar di interview: "Reverse Linked List", "Detect Cycle".

## 4. Hash Map / Hash Table

Di JS ini adalah `Object {}` atau `Map`.

- Akses data: **O(1)** (Sangat cepat).
- Gunakan ini untuk soal "Two Sum" atau menghitung frekuensi karakter.
