# 02 - V8 Engine Architecture

Bagaimana kode JS-mu dimengerti komputer? Ini cara kerja V8 (Chrome/Node.js).

## 1. Parsing
Kode teks diubah menjadi **AST (Abstract Syntax Tree)**. Pohon struktur kode.

## 2. Ignition (Interpreter)
Menerjemahkan AST menjadi **Bytecode**. Kode dijalankan di sini. Cepat start-nya, tapi belum optimal.

## 3. TurboFan (Compiler / JIT)
Jika ada fungsi yang dijalankan berulang-ulang ("Hot Code"), TurboFan akan mengompilasinya menjadi **Machine Code** (bahasa mesin asli) yang super cepat.
Tapi, jika asumsi tipe datanya salah (misal biasanya angka tiba-tiba jadi string), TurboFan akan melakukan "Deoptimization" (kembali ke Bytecode).

**Tips Optimasi**: Jaga tipe data variabel tetap konsisten agar TurboFan senang!

## 4. Garbage Collection (Orinoco)
Pembersih memori otomatis. Menggunakan algoritma "Mark and Sweep".
1.  **Mark**: Menandai object yang masih bisa diakses dari "Root" (window/global).
2.  **Sweep**: Menghapus yang tidak tertandai.
