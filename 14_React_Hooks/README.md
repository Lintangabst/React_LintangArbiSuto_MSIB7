Dalam aplikasi ini, kami mengimplementasikan sistem manajemen produk menggunakan React Hooks. Pengguna dapat menambahkan, mengedit, dan menghapus produk melalui antarmuka yang intuitif.

Struktur Aplikasi:

State Management: Kami menggunakan useState untuk mengelola daftar produk dan data formulir. State products menyimpan informasi produk, sedangkan formData digunakan untuk menyimpan input pengguna saat menambah atau mengedit produk. isEditing digunakan untuk menandakan apakah aplikasi sedang dalam mode pengeditan.

Input Form: Terdapat input untuk nama produk, kategori, kesegaran, dan harga. Ketika pengguna mengisi formulir dan mengklik tombol "Add Product", produk baru ditambahkan ke daftar.

Fungsi Edit: Setiap produk dalam tabel memiliki tombol Edit. Ketika tombol ini ditekan, informasi produk yang dipilih dimuat ke dalam formulir, dan tombol "Save Edit" ditampilkan. Setelah pengguna melakukan perubahan dan menekan tombol tersebut, data produk akan diperbarui di dalam tabel.

Penghapusan Produk: Setiap produk juga memiliki tombol Hapus, yang meminta konfirmasi dari pengguna sebelum menghapus produk dari daftar.

Antarmuka Pengguna: Aplikasi menggunakan tabel untuk menampilkan daftar produk dan memberikan interaksi yang mudah melalui tombol. Setiap tindakan, baik menambah, mengedit, maupun menghapus, dilakukan dengan responsif dan intuitif.

Secara keseluruhan, aplikasi ini menyediakan manajemen produk yang efisien dan user-friendly menggunakan konsep dasar React dan Hooks.