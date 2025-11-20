# 02 - Iterators & Generators

Cara kerja `for...of` dan membuat urutan data custom.

## 1. Iterators
Object yang punya method `next()` yang mengembalikan `{ value, done }`.
Semua Array, String, Map, Set punya iterator bawaan.

## 2. Generators (`function*`)
Fungsi yang bisa "di-pause" dan "di-resume". Ditandai dengan bintang `*`.

```javascript
function* nomorAntrian() {
  yield 1;
  yield 2;
  yield 3;
}

const antrian = nomorAntrian();
console.log(antrian.next()); // { value: 1, done: false }
console.log(antrian.next()); // { value: 2, done: false }
console.log(antrian.next()); // { value: 3, done: false }
console.log(antrian.next()); // { value: undefined, done: true }
```

### Use Case
Membuat ID unik, mengelola stream data tak terbatas, atau mengontrol flow async (seperti `redux-saga`).
