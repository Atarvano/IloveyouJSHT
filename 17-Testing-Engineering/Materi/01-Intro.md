# Testing Engineering

Jangan deploy kalau belum di-test!

## 1. Unit Testing (Jest/Vitest)

Test satu fungsi kecil secara terisolasi.

```javascript
// math.js
function sum(a, b) {
  return a + b;
}
module.exports = sum;

// math.test.js
const sum = require("./math");
test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});
```

## 2. TDD (Test Driven Development)

Tulis test DULU (gagal), baru tulis kode (berhasil), lalu refactor.
Red -> Green -> Refactor.
