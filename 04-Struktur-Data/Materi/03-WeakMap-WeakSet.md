# 03 - WeakMap & WeakSet

Struktur data khusus untuk manajemen memori yang efisien.

## 1. Masalah Map/Set Biasa
Jika kamu simpan object di dalam Map, object itu tidak akan dihapus oleh Garbage Collector (GC) meskipun sudah tidak dipakai di tempat lain. Ini bisa bikin **Memory Leak**.

## 2. WeakMap
Key-nya HARUS object. Referensinya "lemah". Jika object key dihapus di tempat lain, data di WeakMap otomatis hilang dari memori.

```javascript
let user = { nama: "Budi" };
const rahasia = new WeakMap();

rahasia.set(user, "Agen Rahasia");

console.log(rahasia.get(user)); // "Agen Rahasia"

user = null; // Hapus referensi user
// Data di WeakMap otomatis akan dibersihkan oleh GC nanti.
```

### Use Case
Menyimpan data privat untuk object, caching, atau DOM node metadata (seperti di Vue/React).
