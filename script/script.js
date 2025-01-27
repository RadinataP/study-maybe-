// Fungsi untuk membuat navigasi menjadi responsif dan bisa ditoggle
const navSlide = () => {
    // Mendapatkan elemen burger (ikon menu) dari dokumen HTML
    const burger = document.querySelector(".burger");

    // Mendapatkan elemen <nav> yang berisi daftar navigasi
    const navLists = document.querySelector("nav");

    // Menambahkan event listener pada ikon burger
    burger.addEventListener("click", () => {
        // Menambahkan atau menghapus class "nav-active" pada elemen <nav>
        // Class "nav-active" biasanya digunakan untuk menampilkan atau menyembunyikan menu navigasi
        navLists.classList.toggle("nav-active");

        // Menambahkan atau menghapus class "toggle-burger" pada ikon burger
        // Class ini biasanya digunakan untuk mengubah tampilan ikon burger (misalnya jadi tanda silang)
        burger.classList.toggle("toggle-burger");
    });
};

// Memanggil fungsi navSlide agar fitur navigasi aktif
navSlide();

// Menambahkan event untuk mereset semua form di halaman saat pengguna memuat ulang halaman
window.onbeforeunload = () => {
    // Mengambil semua elemen <form> di dalam dokumen
    for (const form of document.getElementsByTagName("form")) {
        // Mereset form agar semua input kembali ke nilai awal (kosong)
        form.reset();
    }
};
