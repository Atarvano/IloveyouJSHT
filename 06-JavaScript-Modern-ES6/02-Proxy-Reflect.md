# 02 - Proxy & Reflect (Metaprogramming)

Ini adalah "Sihir Hitam" JavaScript. Kamu bisa memanipulasi perilaku dasar object.

## 1. Proxy
Pembungkus object yang bisa mencegat (intercept) operasi seperti baca properti, tulis properti, dll.

```javascript
const target = { pesan: "Rahasia" };

const handler = {
  get: function(obj, prop) {
    if (prop === "pesan") return "AKSES DITOLAK!";
    return obj[prop];
  },
  set: function(obj, prop, value) {
    console.log(`Mengubah ${prop} jadi ${value}`);
    obj[prop] = value;
    return true;
  }
};

const proxy = new Proxy(target, handler);

console.log(proxy.pesan); // "AKSES DITOLAK!"
proxy.angka = 100; // Log: "Mengubah angka jadi 100"
```

### Use Case
Ini adalah cara kerja **Vue 3** untuk Reactivity! Saat kamu ubah data, Proxy mendeteksi dan menyuruh UI update.

## 2. Reflect
Teman baik Proxy. API standar untuk melakukan operasi object (seperti `Reflect.get`, `Reflect.set`).
