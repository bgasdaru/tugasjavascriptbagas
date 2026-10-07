// Menampilkan data menggunakan map()
function lihatData() {
    const tabel = document.getElementById("tabelData");

    tabel.innerHTML = "";

    data.map((item, index) => {
        tabel.innerHTML += `
            <tr>
                <td>${index + 1}</td>
                <td>${item.nama}</td>
                <td>${item.umur} Tahun</td>
                <td>${item.alamat}</td>
                <td>${item.email}</td>
                <td>
                    <button class="btn-hapus" onclick="hapusData(${index})">
                        Hapus
                    </button>
                </td>
            </tr>
        `;
    });

    document.getElementById("totalData").innerText = data.length;
}

// Menambah minimal 2 data menggunakan push()
function tambahData() {
    data.push(
        {
            nama: "Kiki",
            umur: 21,
            alamat: "Jakarta",
            email: "kiki@gmail.com"
        },
        {
            nama: "Lina",
            umur: 20,
            alamat: "Depok",
            email: "lina@gmail.com"
        }
    );

    lihatData();

    alert("2 data berhasil ditambahkan!");
}

// Menghapus data
function hapusData(index) {
    data.splice(index, 1);

    lihatData();

    alert("Data berhasil dihapus!");
}

// Menampilkan data pertama kali
lihatData();