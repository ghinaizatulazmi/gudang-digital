/* ============================================
   GudangKu - script.js
   Berisi validasi form pakai JavaScript.
   ============================================ */

/* ---- Validasi form TAMBAH BARANG ----
   Dipanggil saat tombol "Simpan Barang" ditekan.
   Tujuannya: pastikan semua kolom diisi sebelum data disimpan. */
function validasiBarang() {
  // Ambil nilai dari setiap input berdasarkan id-nya
  var nama = document.getElementById("nama").value;
  var jumlah = document.getElementById("jumlah").value;
  var kategori = document.getElementById("kategori").value;

  var valid = true;   // anggap valid dulu, nanti diubah kalau ada yang kosong

  // Cek kolom Nama Barang
  if (nama === "") {
    document.getElementById("error-nama").style.display = "block";  // tampilkan pesan error
    valid = false;
  } else {
    document.getElementById("error-nama").style.display = "none";   // sembunyikan kalau sudah diisi
  }

  // Cek kolom Jumlah Stok
  if (jumlah === "") {
    document.getElementById("error-jumlah").style.display = "block";
    valid = false;
  } else {
    document.getElementById("error-jumlah").style.display = "none";
  }

  // Cek kolom Kategori (belum dipilih)
  if (kategori === "") {
    document.getElementById("error-kategori").style.display = "block";
    valid = false;
  } else {
    document.getElementById("error-kategori").style.display = "none";
  }

  // Kalau semua terisi -> tampilkan pesan sukses
  if (valid === true) {
    document.getElementById("pesan-sukses").style.display = "block";
  }

  // return false supaya halaman tidak refresh (biar pesan tetap kelihatan)
  return false;
}

/* ---- Validasi form LOGIN ----
   Memastikan email & password diisi sebelum login. */
function validasiLogin() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  var valid = true;

  if (email === "") {
    document.getElementById("error-email").style.display = "block";
    valid = false;
  } else {
    document.getElementById("error-email").style.display = "none";
  }

  if (password === "") {
    document.getElementById("error-password").style.display = "block";
    valid = false;
  } else {
    document.getElementById("error-password").style.display = "none";
  }

  if (valid === true) {
    document.getElementById("pesan-sukses").style.display = "block";
  }

  return false;
}
