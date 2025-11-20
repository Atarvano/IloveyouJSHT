# 02 - Common Design Patterns

Pola solusi umum untuk masalah coding sehari-hari.

## 1. Singleton
Memastikan sebuah class hanya punya SATU instance. (Contoh: Database Connection, Store Redux).
```javascript
const Singleton = (function() {
  let instance;
  return {
    getInstance: function() {
      if (!instance) instance = new Object("Saya satu-satunya");
      return instance;
    }
  };
})();
```

## 2. Observer (Pub/Sub)
Satu object berubah, yang lain dikabari. (Dasar dari Event Listener).
```javascript
class Subject {
  constructor() { this.observers = []; }
  subscribe(fn) { this.observers.push(fn); }
  notify(data) { this.observers.forEach(fn => fn(data)); }
}
```

## 3. Factory
Fungsi untuk membuat object tanpa pakai `new` langsung.
```javascript
function createUser(role) {
  if (role === 'admin') return new Admin();
  return new User();
}
```
