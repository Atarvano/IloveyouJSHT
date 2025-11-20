// --- TUGAS 02: EVENT LOOP PHASES ---
// Materi: 02-Event-Loop-Phases.md

// 1. TEBAK URUTAN
// Tuliskan urutan output yang akan keluar di console.
// Jelaskan kenapa (Microtask vs Macrotask).

console.log("A");

setTimeout(() => console.log("B"), 0);

Promise.resolve().then(() => console.log("C"));

console.log("D");

// Jawabanmu: ...
