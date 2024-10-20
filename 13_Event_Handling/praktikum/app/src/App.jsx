import React, { useState } from 'react';

const CreateProduct = () => {
  // State for form data and validation
  const [productName, setProductName] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [productImage, setProductImage] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [language, setLanguage] = useState('en'); // Default language
  const [showModal, setShowModal] = useState(false);

  // Random number button
  const generateRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * 100);
    console.log('Random number:', randomNumber);
  };

  // Article data for language switching
  const article = {
    title: {
      id: 'Buat Akun',
      en: 'Create Account',
    },
    description: {
      id: 'Di bawah ini adalah contoh formulir yang dibuat seluruhnya dengan kontrol formulir Bootstrap. Setiap grup formulir yang diperlukan memiliki status validasi yang dapat dipicu dengan mencoba mengirimkan formulir tanpa menyelesaikannya.',
      en: 'Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.',
    },
  };

  // Handle input changes and validation
  const handleProductNameChange = (e) => {
    const value = e.target.value;
    setProductName(value);

    // Real-time validation
    if (value.length > 25) {
      setErrorMessage('Product name must not exceed 25 characters.');
    } else if (value === '') {
      setErrorMessage('Please enter a valid product name.');
    } else {
      setErrorMessage('');
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setProductImage(e.target.files[0].name);
    } else {
      setProductImage('No file chosen');
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (productName === '') {
      setErrorMessage('Please enter a valid product name.');
    } else if (errorMessage === '') {
      setShowModal(true); // Show modal when form is valid
    }
  };

  // Language switcher
  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'id' : 'en');
  };

  return (
    <div className="container mx-auto mt-6 px-4 sm:px-6 md:px-8 lg:px-10">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-4 md:mb-6 text-gray-800">
        {article.title[language]}
      </h1>
      <p className="text-center mb-6 md:mb-8 text-gray-600">
        {article.description[language]}
      </p>

      <form className="bg-white p-6 sm:p-8 rounded-lg shadow-lg grid grid-cols-1 gap-6 md:grid-cols-2" onSubmit={handleSubmit}>
        <div className="mb-6">
          <label htmlFor="productName" className="block text-gray-700 font-medium mb-2">
            Product Name
          </label>
          <input
            type="text"
            id="productName"
            className={`form-input mt-1 block w-full border ${errorMessage ? 'border-red-500' : 'border-gray-500'} rounded-md`}
            value={productName}
            onChange={handleProductNameChange}
            minLength={6}
            maxLength={50}
            required
          />
          {errorMessage && <div className="text-red-500">{errorMessage}</div>}
        </div>

        <div className="mb-6">
          <label htmlFor="productCategory" className="block text-gray-700 font-medium mb-2">
            Product Category
          </label>
          <select
            id="productCategory"
            className="form-select mt-1 block w-full border border-gray-300 rounded-md"
            value={productCategory}
            onChange={(e) => setProductCategory(e.target.value)}
            required
          >
            <option selected disabled value="">
              Choose...
            </option>
            <option value="category1">Category 1</option>
            <option value="category2">Category 2</option>
            <option value="category3">Category 3</option>
          </select>
        </div>

        <div className="mb-6">
          <label htmlFor="productImage" className="block text-gray-700 font-medium mb-2">
            Image of Product
          </label>
          <div className="relative w-full">
            <input
              type="file"
              id="productImage"
              className="absolute top-0 left-0 opacity-0 w-full h-full z-50 cursor-pointer"
              onChange={handleFileChange}
              required
            />
            <div className="flex">
              <label
                htmlFor="productImage"
                className="cursor-pointer px-4 py-2 bg-blue-500 text-white font-semibold rounded-l-md"
              >
                Choose File
              </label>
              <span className="bg-white border border-gray-300 px-4 py-2 text-gray-700 rounded-r-md flex-grow">
                {productImage || 'No file chosen'}
              </span>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <label htmlFor="productPrice" className="block text-gray-700 font-medium mb-2">
            Product Price
          </label>
          <div className="flex items-center border border-gray-300 rounded-md">
            <span className="inline-flex items-center px-3 text-gray-500 bg-gray-200 border-r border-gray-300 rounded-l-md">
              $
            </span>
            <input
              type="number"
              id="productPrice"
              value={productPrice}
              min="1"
              className="form-input flex-1 block border-1 rounded-r-md"
              onChange={(e) => setProductPrice(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="col-span-1 md:col-span-2">
          <button
            type="submit"
            className="w-full md:w-auto py-3 px-4 bg-blue-500 text-white font-semibold rounded-md"
          >
            Submit
          </button>
        </div>
      </form>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg w-11/12 max-w-lg text-center">
            <h2 className="text-2xl font-semibold mb-4">Product Submitted</h2>
            <p>Your product has been successfully submitted!</p>
            <button
              className="mt-6 py-2 px-4 bg-blue-500 text-white font-semibold rounded-md"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Random number button */}
      <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
        <button
          className="w-full sm:w-auto py-2 px-4 bg-green-500 text-white font-semibold rounded-md"
          onClick={generateRandomNumber}
        >
          Generate Random Number
        </button>

        {/* Language switcher button */}
        <button
          className="w-full sm:w-auto py-2 px-4 bg-yellow-500 text-white font-semibold rounded-md"
          onClick={toggleLanguage}
        >
          Switch Language to {language === 'en' ? 'Indonesian' : 'English'}
        </button>
      </div>
    </div>
  );
};

export default CreateProduct;
