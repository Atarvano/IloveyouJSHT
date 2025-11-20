# 13 - Tooling & Bundling

## 1. AST (Abstract Syntax Tree)
Tools seperti Babel, ESLint, dan Prettier bekerja dengan mengubah kodemu menjadi AST.
Contoh: `const a = 1;`
AST:
```json
{
  "type": "VariableDeclaration",
  "kind": "const",
  "declarations": [
    {
      "type": "VariableDeclarator",
      "id": { "type": "Identifier", "name": "a" },
      "init": { "type": "Literal", "value": 1 }
    }
  ]
}
```
Kamu bisa memanipulasi AST ini untuk mengubah kode secara otomatis (Transpilation).

## 2. Bundlers (Webpack/Vite)
Browser tidak paham `import React from 'react'`. Bundler bertugas:
1.  **Resolution**: Mencari file `react` di node_modules.
2.  **Load**: Membaca isi file.
3.  **Transform**: Mengubah JSX/TS menjadi JS biasa (pakai Babel/Esbuild).
4.  **Bundle**: Menggabungkan ribuan file menjadi satu `bundle.js`.
