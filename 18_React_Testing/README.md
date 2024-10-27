enjelasan Singkat tentang Pengujian Komponen CreateProduct
Tujuan Pengujian:

Memastikan fungsi komponen CreateProduct, terutama dalam validasi input pengguna.
Fokus Pengujian:

Validasi kolom "Product Name" untuk memastikan tidak menerima karakter tidak valid (misalnya, '@InvalidName') dan menampilkan pesan kesalahan yang sesuai.
Asersi yang Dilakukan:

Memeriksa keberadaan pesan kesalahan saat input tidak valid.
Mengharapkan nilai input direset menjadi kosong setelah validasi gagal.
Masalah Ditemui:

Nilai input tidak ter-reset setelah pengujian, menyebabkan asersi expect(input.value).toBe(''); gagal.
Konsep Dasar React Testing
React Testing Library digunakan untuk menguji komponen dengan fokus pada perilaku pengguna.
Asersi memastikan komponen berfungsi seperti yang diharapkan.
Simulasi interaksi pengguna dilakukan dengan fireEvent.
Kesimpulan
Pengujian ini penting untuk memastikan aplikasi berfungsi baik. Meskipun ada masalah dengan reset nilai input, ini memberikan dasar untuk validasi dan pengelolaan kesalahan dalam komponen CreateProduct. Perbaikan pada logika pengaturan nilai input diperlukan untuk meningkatkan fungsi komponen.