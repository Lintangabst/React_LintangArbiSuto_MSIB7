import React, { useState } from 'react';

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    message: '',
  });
  const [submittedData, setSubmittedData] = useState<any | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmittedData(formData);
    setFormData({ username: '', email: '', message: '' });
  };

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
        {/* Left Side */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl font-bold mb-4 text-blue-500">That's a bit about me, Feel Free <br />
          To Say Hi!</h1>
          <p className="text-lg mb-6">
            Keep in touch with me 
            on my social platform
          </p>
          <div className="flex space-x-4">
            <a href="https://www.instagram.com/" className="flex items-center bg-black text-white py-2 px-4 rounded-md ">
              <img src="src/assets/github.svg" alt="Instagram" className="w-6 h-6 mr-2" /> GitHub
            </a>
            <a href="https://discord.com/" className="flex items-center bg-white text-black py-2 px-4 rounded-md border border-1 border-black">
              <img src="src/assets/google.svg" alt="Discord" className="w-6 h-6 mr-2" /> Gmail
            </a>
            <a href="https://www.whatsapp.com/" className="flex items-center bg-green-500 text-white py-2 px-4 rounded-md">
              <img src="src/assets/wa.svg" alt="WhatsApp" className="w-6 h-6 mr-2" /> WhatsApp
            </a>
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
            <div className="mb-4">
              <label htmlFor="username" className="block text-left mb-2">
                Username
              </label>
              <input
                type="text"
                name="username"
                id="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-left mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-left mb-2">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                rows={4}
                required
              ></textarea>
            </div>
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
              Submit
            </button>
          </form>

          {submittedData && (
            <div className="mt-8 bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-2">Submitted Data:</h2>
              <p><strong>Username:</strong> {submittedData.username}</p>
              <p><strong>Email:</strong> {submittedData.email}</p>
              <p><strong>Message:</strong> {submittedData.message}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
