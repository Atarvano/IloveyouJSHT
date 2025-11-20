# 02 - Type Coercion (Paksaan Tipe Data)

JavaScript itu "ramah" tapi kadang menjebak. Dia suka mengubah tipe data secara otomatis (implisit). Ini disebut **Coercion**.

## 1. String Coercion
Jika ada String + Angka, Angka akan jadi String.
```javascript
console.log("1" + 1); // "11" (String)
console.log(10 + "20"); // "1020" (String)
```

## 2. Number Coercion
Operator matematika lain (`-`, `*`, `/`, `%`) akan memaksa String jadi Angka.
```javascript
console.log("5" - 2); // 3 (Number)
console.log("10" * "2"); // 20 (Number)
console.log("Budi" - 2); // NaN (Not a Number)
```

## 3. The Equality Operator (`==` vs `===`)
Ini wajib paham mati!
*   `==` (Loose Equality): Melakukan Coercion sebelum membandingkan.
*   `===` (Strict Equality): Cek Tipe Data DAN Nilai. **SELALU GUNAKAN INI!**

```javascript
console.log(5 == "5");  // true (Angka 5 dianggap sama dengan String "5")
console.log(5 === "5"); // false (Tipe data beda: Number vs String)

console.log(null == undefined); // true
console.log(null === undefined); // false
```

## 4. Truthy & Falsy
Nilai yang dianggap "Benar" atau "Salah" dalam konteks boolean (seperti di `if`).

**Falsy Values** (Hanya ada 6+1):
1.  `false`
2.  `0` (nol)
3.  `""` (string kosong)
4.  `null`
5.  `undefined`
6.  `NaN`
7.  `0n` (BigInt nol)

Sisanya adalah **Truthy** (termasuk `[]` array kosong dan `{}` object kosong!).

```javascript
if ("") {
  console.log("Muncul?"); // Tidak, karena "" itu Falsy
}

if ([]) {
  console.log("Array kosong?"); // Muncul! Array kosong itu Truthy
}
```
