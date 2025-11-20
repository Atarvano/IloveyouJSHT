# 02 - Event Propagation

Saat kamu klik tombol, browser tidak cuma klik tombol itu. Ada 3 fase:

1.  **Capturing Phase**: Dari `window` turun ke elemen target.
2.  **Target Phase**: Sampai di elemen target.
3.  **Bubbling Phase**: Naik lagi dari target ke `window`.

## 1. Bubbling (Gelembung)
Event "naik" ke atas. Jika kamu klik `<span>` di dalam `<div>`, event klik `<div>` juga akan jalan.

```html
<div onclick="alert('DIV')">
  <span onclick="alert('SPAN')">Klik Saya</span>
</div>
```
Klik SPAN -> Muncul "SPAN" -> Muncul "DIV".

## 2. Menghentikan Bubbling
Gunakan `event.stopPropagation()`.

```javascript
span.addEventListener('click', (e) => {
  e.stopPropagation(); // Stop! Jangan lapor ke DIV.
  alert('SPAN saja');
});
```

## 3. Event Delegation (Pola Penting)
Daripada pasang listener di 100 tombol, pasang 1 di bapaknya (container). Gunakan `e.target` untuk tahu siapa yang diklik. Hemat memori!

```javascript
document.getElementById('list').addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    console.log("List item diklik:", e.target.innerText);
  }
});
```
