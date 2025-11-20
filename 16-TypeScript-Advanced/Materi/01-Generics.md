# TypeScript Advanced

## 1. Generics

Membuat komponen yang bisa bekerja dengan berbagai tipe data (fleksibel tapi aman).

```typescript
function identity<T>(arg: T): T {
  return arg;
}

let output = identity<string>("Halo");
let angka = identity<number>(100);
```

## 2. Utility Types

- `Partial<T>`: Semua properti jadi opsional.
- `Pick<T, K>`: Ambil sebagian properti saja.
- `Omit<T, K>`: Buang sebagian properti.

## 3. Declaration Files (.d.ts)

Cara memberi tahu TypeScript tentang tipe data dari library JavaScript biasa.
