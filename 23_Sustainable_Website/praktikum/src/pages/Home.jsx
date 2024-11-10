const Home = () => (
  <div className="min-h-screen bg-gray-50 text-gray-800">
    <header className="relative flex items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: "url('/path/to/math-hero.jpg')" }}>
      <div className="absolute inset-0 bg-blue-900 opacity-60"></div>
      <div className="relative z-10 text-center p-8 text-white max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">Belajar Matematika Operasi Hitung dengan Mudah</h1>
        <p className="mt-6 text-lg md:text-xl">Penjumlahan, Pengurangan, Perkalian, dan Pembagian — semua dalam satu platform interaktif.</p>
        <a href="#fitur" className="mt-8 inline-block px-6 py-3 font-semibold bg-green-500 hover:bg-green-600 text-white rounded-full transition duration-300">Mulai Belajar Sekarang</a>
      </div>
    </header>

    <section id="fitur" className="py-16 px-6 bg-white text-center">
      <h2 className="text-3xl font-bold mb-8">Fitur-Fitur Utama</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {["Penjumlahan", "Pengurangan", "Perkalian", "Pembagian"].map((feature, index) => (
          <div key={index} className="p-6 bg-gray-100 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">{feature}</h3>
            <p className="text-gray-600">Pelajari konsep dasar {feature.toLowerCase()} dengan latihan interaktif.</p>
          </div>
        ))}
      </div>
    </section>

    <section className="py-16 px-6 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-8">Mengapa Belajar Bersama Kami?</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
        <div className="p-6 bg-white rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">Materi yang Komprehensif</h3>
          <p className="text-gray-600">Dibuat oleh para ahli dengan pendekatan bertahap untuk memahami konsep dasar hingga lanjutan.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">Latihan Interaktif</h3>
          <p className="text-gray-600">Latihan soal dan evaluasi yang menantang untuk mengasah keterampilan matematika Anda.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">Progress Tracking</h3>
          <p className="text-gray-600">Lihat perkembangan Anda dari waktu ke waktu dan perbaiki di setiap latihan.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">Dukungan Ahli</h3>
          <p className="text-gray-600">Tim kami siap membantu kapan pun Anda butuh bantuan dalam belajar.</p>
        </div>
      </div>
    </section>

    <section className="py-16 px-6 bg-white text-center">
      <h2 className="text-3xl font-bold mb-8">Apa Kata Pengguna Kami?</h2>
      <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
          <p className="text-gray-700 italic">"Situs ini sangat membantu saya memahami matematika. Saya sangat merekomendasikannya!"</p>
          <p className="mt-4 font-semibold text-gray-800">- Alex, Siswa Kelas 5</p>
        </div>
        <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
          <p className="text-gray-700 italic">"Pembelajaran yang interaktif membuat belajar matematika jadi menyenangkan!"</p>
          <p className="mt-4 font-semibold text-gray-800">- Bella, Siswa Kelas 6</p>
        </div>
      </div>
    </section>

    <section className="py-16 px-6 bg-blue-900 text-center text-white">
      <h2 className="text-3xl font-bold mb-4">Mulai Belajar Matematika Sekarang</h2>
      <p className="mb-6 text-lg">Ayo bergabung dengan ribuan siswa lain dan kuasai matematika dengan mudah!</p>
      <a href="#register" className="inline-block px-8 py-4 font-semibold bg-green-500 hover:bg-green-600 text-white rounded-full transition duration-300">Daftar Sekarang</a>
    </section>
  </div>
);

export default Home;
