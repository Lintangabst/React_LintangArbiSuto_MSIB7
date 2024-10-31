Ringkasan Pengalaman Tugas RestAPI

Dalam tugas ini, saya berhasil mengimplementasikan integrasi REST API menggunakan MockAPI dalam proyek React saya. Berikut adalah langkah-langkah yang saya lakukan:

1. Pendaftaran di MockAPI:
   - Saya membuat akun di MockAPI dan membuat endpoint baru untuk daftar produk dengan metode GET di URL `/products`. Respons dari endpoint ini berupa JSON array yang mengikuti skema produk yang ditentukan.

2. Integrasi Axios:
   - Saya menambahkan dependensi `axios` ke aplikasi React saya. Kemudian, saya menggunakan axios untuk mengambil data dari endpoint MockAPI dan menampilkannya di komponen `ListProduct`.

3. Penyimpanan Data ke REST API:
   - Data yang sebelumnya disimpan di local storage sekarang disimpan ke REST API menggunakan metode POST. Setelah berhasil menyimpan data, saya menampilkan pesan sukses untuk memberikan umpan balik kepada pengguna.

4. Fitur Update Data:
   - Saya menambahkan fitur untuk memperbarui data produk di halaman `ListProduct`. Dengan menggunakan metode PUT, saya dapat mengirim permintaan ke REST API dan menampilkan pesan sukses setelah data berhasil diperbarui.

5. Fitur Delete Data:
   - Saya juga mengimplementasikan fitur untuk menghapus produk dengan menggunakan metode DELETE. Setelah berhasil menghapus data, saya menampilkan pesan sukses kepada pengguna.

6. Autentikasi dan Otorisasi:
   - Saya menerapkan sistem autentikasi dan otorisasi menggunakan data dummy yang disimpan di local storage. Dengan menggunakan pendekatan ini, pengguna dapat login dengan username dan password yang telah ditentukan.

Melalui tugas ini, saya memperoleh pemahaman yang lebih baik tentang penggunaan REST API, manajemen data dengan axios, dan penerapan autentikasi dalam aplikasi React. Pengalaman ini sangat berharga untuk meningkatkan keterampilan pengembangan web saya.