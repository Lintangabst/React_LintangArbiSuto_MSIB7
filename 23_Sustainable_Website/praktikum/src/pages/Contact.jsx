import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const formFields = [
    { id: "name", label: "Nama", type: "text", placeholder: "Nama Anda" },
    { id: "email", label: "Email", type: "email", placeholder: "Alamat Email" },
    { id: "message", label: "Pesan", type: "textarea", placeholder: "Tulis pesan Anda di sini..." }
  ];

  const contactInfo = [
    { label: "Email", value: "info@matematika.com" },
    { label: "Telepon", value: "+62 123 4567 890" }
  ];

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data:", formData);
  };

  return (
    <div className="min-h-screen bg-white p-8 text-gray-800">
      <section className="max-w-lg mx-auto text-center py-16">
        <h2 className="text-4xl font-bold mb-6">Hubungi Kami</h2>
        <p className="text-lg mb-12 text-gray-600">
          Punya pertanyaan atau ingin memberikan saran? Jangan ragu untuk menghubungi kami!
        </p>

        <form className="bg-gray-50 p-6 rounded-lg shadow-lg text-left space-y-6" onSubmit={handleSubmit}>
          {formFields.map((field) => (
            <div key={field.id}>
              <label htmlFor={field.id} className="block font-semibold mb-2">
                {field.label}
              </label>
              {field.type === "textarea" ? (
                <textarea
                  id={field.id}
                  className="w-full p-3 border rounded-md focus:outline-none focus:border-blue-500"
                  rows="5"
                  placeholder={field.placeholder}
                  value={formData[field.id]}
                  onChange={handleInputChange}
                  required
                ></textarea>
              ) : (
                <input
                  type={field.type}
                  id={field.id}
                  className="w-full p-3 border rounded-md focus:outline-none focus:border-blue-500"
                  placeholder={field.placeholder}
                  value={formData[field.id]}
                  onChange={handleInputChange}
                  required
                />
              )}
            </div>
          ))}

          <button
            type="submit"
            className="w-full py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md transition duration-300"
          >
            Kirim Pesan
          </button>
        </form>
      </section>

      <section className="max-w-lg mx-auto text-center mt-16">
        <h3 className="text-2xl font-semibold mb-4">Informasi Kontak</h3>
        {contactInfo.map((info, index) => (
          <p key={index} className="text-lg text-gray-600 mb-2">
            {info.label}: {info.value}
          </p>
        ))}
      </section>
    </div>
  );
};

export default Contact;
