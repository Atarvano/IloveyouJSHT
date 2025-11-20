# 01 - Building Reactivity System

Kita akan membuat sistem reaktif seperti Vue.js.

## Konsep
1.  **Dependency Tracking**: Saat variabel A dibaca, catat siapa yang membacanya.
2.  **Trigger**: Saat variabel A berubah, kabari semua pencatat tadi.

## Implementasi Sederhana
```javascript
let activeEffect = null;

class Dep {
  constructor() { this.subscribers = new Set(); }
  depend() { if (activeEffect) this.subscribers.add(activeEffect); }
  notify() { this.subscribers.forEach(effect => effect()); }
}

function watchEffect(effect) {
  activeEffect = effect;
  effect(); // Jalankan sekali untuk mencatat dependency
  activeEffect = null;
}

// State Reaktif
const state = { count: 0 };
const dep = new Dep();

// Simulasi Proxy (Magic)
let reactiveState = new Proxy(state, {
  get(obj, prop) {
    dep.depend();
    return obj[prop];
  },
  set(obj, prop, value) {
    obj[prop] = value;
    dep.notify();
    return true;
  }
});

// Penggunaan
watchEffect(() => {
  console.log("Count berubah jadi:", reactiveState.count);
});

reactiveState.count = 1; // Console: "Count berubah jadi: 1"
```
