```javascript
// Array produkToko
let produkToko = [
    {
        id: 1,
        nama: "Laptop",
        harga: 7000000,
        stok: 5
    },
    {
        id: 2,
        nama: "Mouse",
        harga: 200000,
        stok: 10
    },
    {
        id: 3,
        nama: "Keyboard",
        harga: 350000,
        stok: 7
    }
];


// Fungsi untuk menambahkan produk
function tambahProduk(nama, harga, stok) {

    let idBaru = produkToko.length > 0
        ? produkToko[produkToko.length - 1].id + 1
        : 1;

    produkToko.push({
        id: idBaru,
        nama: nama,
        harga: harga,
        stok: stok
    });

    tampilkanProduk();
}


// Fungsi untuk menghapus produk
function hapusProduk(id) {

    let index = produkToko.findIndex(function(produk) {
        return produk.id === id;
    });

    if (index !== -1) {
        produkToko.splice(index, 1);
        tampilkanProduk();
    }
}


// Fungsi untuk menampilkan produk
function tampilkanProduk() {

    let container = document.getElementById("daftarProduk");

    container.innerHTML = "";

    produkToko.forEach(function(produk) {

        let card = document.createElement("div");

        card.className = "product-card";

        card.innerHTML = `
            <div class="product-icon">📦</div>

            <div class="product-id">
                PRODUCT ID #${produk.id}
            </div>

            <h3>${produk.nama}</h3>

            <div class="price">
                Rp${produk.harga.toLocaleString("id-ID")}
            </div>

            <div class="stock">
                Stok tersedia: ${produk.stok} unit
            </div>

            <button
                class="delete-btn"
                onclick="hapusProduk(${produk.id})"
            >
                🗑 Hapus Produk
            </button>
        `;

        container.appendChild(card);
    });

    updateStatistik();
}


// Fungsi untuk memperbarui statistik
function updateStatistik() {

    document.getElementById("totalProduk").textContent =
        produkToko.length;

    let totalStok = 0;

    produkToko.forEach(function(produk) {
        totalStok += produk.stok;
    });

    document.getElementById("totalStok").textContent =
        totalStok;
}


// Fungsi untuk mengambil data dari form
function tambahProdukDariForm() {

    let nama = document.getElementById("namaProduk").value;
    let harga = Number(document.getElementById("hargaProduk").value);
    let stok = Number(document.getElementById("stokProduk").value);

    if (nama === "" || harga <= 0 || stok <= 0) {
        alert("Mohon isi data produk dengan benar.");
        return;
    }

    tambahProduk(nama, harga, stok);

    // Mengosongkan form
    document.getElementById("namaProduk").value = "";
    document.getElementById("hargaProduk").value = "";
    document.getElementById("stokProduk").value = "";
}


// Menampilkan produk ketika halaman dibuka
tampilkanProduk();
```
