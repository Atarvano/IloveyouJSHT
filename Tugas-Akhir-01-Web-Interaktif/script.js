// Ambil elemen-elemen yang dibutuhkan
const inputTugas = document.getElementById('input-tugas');
const btnTambah = document.getElementById('btn-tambah');
const daftarTugas = document.getElementById('daftar-tugas');

// Tambahkan event listener untuk tombol tambah
btnTambah.addEventListener('click', function () {
    // 1. Ambil nilai dari inputTugas
    // 2. Cek apakah isinya kosong? Kalau kosong, jangan lakukan apa-apa (return).
    // 3. Buat elemen <li> baru.
    // 4. Isi <li> dengan teks tugas + tombol hapus.
    // 5. Masukkan <li> ke dalam daftarTugas (appendChild).
    // 6. Kosongkan inputTugas lagi.
});

// Bonus: Tambahkan fitur hapus saat tombol hapus diklik.
// Hint: Gunakan event delegation pada 'daftarTugas' atau tambahkan event listener ke tombol hapus saat dibuat.
