# 03 - Shadow DOM & Web Components

Cara bikin elemen HTML sendiri (`<my-button>`) yang terisolasi. CSS di dalam tidak bocor keluar, dan sebaliknya.

## 1. Shadow DOM
DOM tersembunyi di dalam elemen.

```javascript
const host = document.getElementById('host');
const shadow = host.attachShadow({ mode: 'open' });

shadow.innerHTML = `
  <style> p { color: red; } </style>
  <p>Ini teks merah di dalam Shadow DOM!</p>
`;
```
Paragraf di luar `host` tidak akan kena warna merah.

## 2. Custom Elements
Mendefinisikan tag HTML baru.

```javascript
class KartuSaya extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `<h1>Halo dari Kartu!</h1>`;
  }
}

customElements.define('kartu-saya', KartuSaya);
```
Di HTML tinggal pakai: `<kartu-saya></kartu-saya>`.
Ini dasar dari framework modern.
