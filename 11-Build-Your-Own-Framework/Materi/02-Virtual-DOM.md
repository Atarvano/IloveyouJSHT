# 02 - Virtual DOM Concept

Virtual DOM adalah object JS yang merepresentasikan HTML.

## 1. Struktur VDOM
```javascript
const vnode = {
  tag: 'div',
  props: { id: 'app' },
  children: [
    { tag: 'h1', children: 'Halo Dunia' }
  ]
};
```

## 2. Render Function (Mount)
Mengubah VDOM menjadi Real DOM.
```javascript
function mount(vnode, container) {
  // 1. Buat elemen asli
  const el = document.createElement(vnode.tag);
  
  // 2. Set atribut
  for (const key in vnode.props) {
    el.setAttribute(key, vnode.props[key]);
  }
  
  // 3. Handle children
  if (typeof vnode.children === 'string') {
    el.textContent = vnode.children;
  } else {
    vnode.children.forEach(child => mount(child, el));
  }
  
  // 4. Tempel ke container
  container.appendChild(el);
}
```

## 3. Patching (Diffing)
Membandingkan VDOM lama vs VDOM baru, dan hanya update yang berubah. Ini bagian tersulit dan terpenting untuk performa.
