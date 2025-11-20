const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const movieContainer = document.getElementById('movie-container');

// Fungsi untuk mengambil data film
async function cariFilm(judul) {
    try {
        // 1. Fetch data dari API OMDb
        // URL: http://www.omdbapi.com/?apikey=dca61bcc&s=JUDUL
        // Gunakan template literals untuk memasukkan judul ke URL.

        // 2. Ubah respon ke JSON.

        // 3. Cek jika respon.Search ada isinya.
        // Jika ada, panggil fungsi tampilkanFilm(respon.Search).

    } catch (error) {
        console.log("Error:", error);
        alert("Gagal mengambil data.");
    }
}

function tampilkanFilm(movies) {
    // 1. Kosongkan movieContainer (innerHTML = '').
    // 2. Looping array 'movies'.
    // 3. Untuk setiap film, buat HTML Card (gambar, judul, tahun).
    // 4. Masukkan ke movieContainer.

    // Contoh HTML Card:
    // <div class="card">
    //    <img src="${m.Poster}" alt="Poster">
    //    <h3>${m.Title}</h3>
    //    <p>${m.Year}</p>
    // </div>
}

searchBtn.addEventListener('click', function () {
    const judul = searchInput.value;
    cariFilm(judul);
});
