// --- LATIHAN BUILD FRAMEWORK (REACTIVITY) ---

// Kita akan membuat fungsi 'reactive' super sederhana.
// Tujuannya: Saat data berubah, fungsi 'render' otomatis jalan.

let dataUtama = {
  harga: 1000,
  jumlah: 2
};

// Fungsi render (tampilan)
function render() {
  const total = dataUtama.harga * dataUtama.jumlah;
  console.log(`Total Bayar: ${total}`);
}

// TUGAS:
// Gunakan 'Proxy' untuk membungkus 'dataUtama'.
// Setiap kali ada properti yang di-SET (diubah), panggil fungsi 'render()'.

const dataReaktif = new Proxy(dataUtama, {
  set(target, prop, value) {
    // 1. Update nilai asli (target[prop] = value)
    // 2. Panggil render()
    // 3. Return true
  }
});

// Test:
// render(); // Awal: 2000
// dataReaktif.jumlah = 5; // Harusnya otomatis log: "Total Bayar: 5000"
