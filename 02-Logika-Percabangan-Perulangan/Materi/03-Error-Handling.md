# 03 - Error Handling Patterns

Jangan biarkan aplikasimu crash diam-diam.

## 1. Try...Catch...Finally
```javascript
try {
  // Kode yang mungkin error
  let data = JSON.parse("String Rusak");
} catch (error) {
  // Dijalankan jika error
  console.log("Terjadi error:", error.message);
} finally {
  // Selalu dijalankan (sukses/gagal)
  console.log("Selesai proses.");
}
```

## 2. Throwing Errors
Melempar error sendiri.
```javascript
function bagi(a, b) {
  if (b === 0) {
    throw new Error("Tidak bisa dibagi nol!");
  }
  return a / b;
}
```

## 3. Custom Error (Class)
Membuat tipe error sendiri.
```javascript
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

try {
  throw new ValidationError("Input salah!");
} catch (e) {
  if (e instanceof ValidationError) {
    console.log("Error Validasi:", e.message);
  } else {
    console.log("Error Lain:", e);
  }
}
```
