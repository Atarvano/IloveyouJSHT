# TypeScript Foundation

TypeScript adalah JavaScript dengan **Superpower** (Type Safety).

## 1. Basic Types

```typescript
let nama: string = "Kyar";
let umur: number = 25;
let isSepuh: boolean = true;
```

## 2. Interface vs Type

```typescript
interface User {
  id: number;
  name: string;
}

type Status = "Active" | "Inactive";
```

## 3. Function Types

```typescript
function tambah(a: number, b: number): number {
  return a + b;
}
```
