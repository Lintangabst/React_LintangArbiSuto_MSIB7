const About = () => {
    const teamMembers = [
      { name: "Andi", role: "Founder" },
      { name: "Budi", role: "Content Creator" },
      { name: "Citra", role: "Developer" },
    ];
  
    const reasons = [
      "Materi berkualitas tinggi yang mudah dipahami oleh siswa dari berbagai tingkat pendidikan.",
      "Latihan soal interaktif yang dirancang untuk meningkatkan keterampilan matematika secara bertahap.",
      "Tim ahli yang selalu siap membantu jika ada pertanyaan atau kesulitan dalam memahami materi.",
    ];
  
    return (
      <div className="min-h-screen bg-gray-50 p-8 text-gray-800">
        <section className="max-w-4xl mx-auto text-center py-16">
          <h2 className="text-4xl font-bold mb-6">Tentang Kami</h2>
          <p className="text-lg mb-12 text-gray-600">
            Kami adalah tim pengembang yang berdedikasi untuk membuat pembelajaran matematika lebih mudah dan menyenangkan.
            Dengan pendekatan yang interaktif dan mendalam, kami berusaha membantu siswa memahami konsep dasar matematika.
          </p>
          
          <h3 className="text-2xl font-semibold mb-8">Tim Kami</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-lg text-center">
                <h4 className="font-bold text-xl">{member.name}</h4>
                <p className="text-gray-500">{member.role}</p>
                <p className="mt-4 text-gray-600">Berpengalaman dalam pendidikan dan teknologi. Berkomitmen membantu siswa meraih sukses dalam matematika.</p>
              </div>
            ))}
          </div>
        </section>
        
        <section className="max-w-4xl mx-auto text-center py-16">
          <h3 className="text-2xl font-semibold mb-8">Mengapa Memilih Kami?</h3>
          <ul className="space-y-6 text-left text-lg text-gray-700">
            {reasons.map((reason, index) => (
              <li key={index}>✅ {reason}</li>
            ))}
          </ul>
        </section>
      </div>
    );
  };
  
  export default About;
  