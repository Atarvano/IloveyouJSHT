# 03 - Scope & Hoisting

## 1. Scope (Cakupan)
Di mana variabel bisa diakses.
*   **Global Scope**: Bisa diakses di mana saja.
*   **Function Scope**: Hanya di dalam fungsi (`var`).
*   **Block Scope**: Hanya di dalam kurung kurawal `{}` (`let`, `const`).

```javascript
{
  let rahasia = "Sssttt";
  var bocor = "Ketahuan";
}
// console.log(rahasia); // Error: rahasia is not defined
console.log(bocor); // "Ketahuan" (karena var tidak peduli block scope)
```

## 2. Hoisting (Pengangkatan)
Perilaku "ajaib" JS yang mengangkat deklarasi ke atas.

### Var Hoisting
```javascript
console.log(nama); // undefined (tidak error!)
var nama = "Budi";
```
JS melihatnya seperti ini:
```javascript
var nama;
console.log(nama);
nama = "Budi";
```

### Let/Const Hoisting (Temporal Dead Zone)
Mereka juga di-hoist, tapi masuk ke "Temporal Dead Zone" (TDZ). Tidak bisa diakses sebelum baris deklarasinya.
```javascript
// console.log(umur); // Error: Cannot access 'umur' before initialization
let umur = 20;
```

### Function Hoisting
Function Declaration diangkat seutuhnya. Bisa dipanggil sebelum dibuat.
```javascript
sapa(); // "Halo!"

function sapa() {
  console.log("Halo!");
}
```
Function Expression (masuk variabel) tidak diangkat seutuhnya.
```javascript
// sapaLagi(); // Error
const sapaLagi = () => console.log("Halo lagi");
```
