# 03 - Trees & Graphs (Non-Linear)

Ini materi wajib untuk soal Medium/Hard.

## 1. Binary Tree

Setiap node punya maksimal 2 anak (Left & Right).

### Traversal (Cara Menjelajah)

- **DFS (Depth First Search)**: Telusuri sampai dalam dulu. (Pakai Rekursi/Stack).
  - Pre-order (Root, Left, Right)
  - In-order (Left, Root, Right) -> Untuk BST, hasilnya urut!
  - Post-order (Left, Right, Root)
- **BFS (Breadth First Search)**: Telusuri per level/lapis. (Pakai Queue).

## 2. Binary Search Tree (BST)

Tree spesial di mana:

- Anak Kiri < Parent
- Anak Kanan > Parent
- Mencari data di BST itu secepat kilat **O(log n)**.

## 3. Graph

Kumpulan titik (Vertex) dan garis (Edge). Bisa ada siklus (muter).

- Contoh: Peta jalan, Teman Facebook.
- Algoritma: Dijkstra (Jalur terpendek), Topological Sort.
