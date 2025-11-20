# Node.js Runtime Deep Dive

JavaScript di server beda dengan di browser.

## 1. Buffer

Cara Node.js menangani data biner (raw binary data).

```javascript
const buf = Buffer.from("Hello");
console.log(buf); // <Buffer 48 65 6c 6c 6f>
```

## 2. Streams

Mengolah data besar secara bertahap (chunk by chunk), tidak sekaligus masuk RAM.

- Readable Stream (baca file)
- Writable Stream (tulis file)
- Pipe (sambungin stream)

## 3. File System (fs)

Baca tulis file di komputer server.
