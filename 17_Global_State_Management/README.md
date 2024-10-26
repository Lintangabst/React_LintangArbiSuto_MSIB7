Praktikum ini mengelola daftar produk melalui dua komponen utama, **ListProduct.jsx** dan **CreateProduct.jsx**, yang terintegrasi dengan **Redux** untuk manajemen state global.

1. **ListProduct.jsx**: Menampilkan daftar produk dalam tabel. Setiap produk memiliki tombol "Edit" untuk mengubah informasi dan "Delete" untuk menghapus produk. Jika tidak ada produk, akan ditampilkan pesan bahwa daftar kosong.

2. **CreateProduct.jsx**: Berisi formulir untuk menambah atau mengedit produk. Formulir mencakup field seperti nama, kategori, kesegaran, harga, URL gambar, dan deskripsi. Terdapat tombol "Add Product" atau "Edit Product", serta tombol "Cancel Edit" untuk membatalkan pengeditan.

### Fungsi dan Interaksi Pengguna
Pengguna dapat dengan mudah menambah atau mengedit produk dari tampilan tabel. Pengisian formulir dirancang untuk memberikan pengalaman pengguna yang lancar, memungkinkan fokus pada manajemen produk.

### Integrasi Redux
Pengelolaan state dilakukan dengan **Redux**, yang menyimpan daftar produk dalam `initialState`. Action creators seperti `addProduct` dan `editProduct` digunakan untuk memperbarui daftar, sementara reducers memastikan state tetap konsisten. Dengan Redux, aplikasi ini memberikan cara terstruktur untuk mengelola produk secara efisien.