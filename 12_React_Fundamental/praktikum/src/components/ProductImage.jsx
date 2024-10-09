import React from 'react';

const ProductImage = ({ fileName, setFileName }) => {
  const handleFileChange = (e) => {
    setFileName(e.target.files.length > 0 ? e.target.files[0].name : 'No file chosen');
  };

  return (
    <div className="mb-6 col-span-1">
      <label htmlFor="productImage" className="block text-gray-700 font-medium mb-2">Image of Product</label>
      <div className="relative w-full">
        <input
          type="file"
          id="productImage"
          className="absolute top-0 left-0 opacity-0 w-full h-full z-50 cursor-pointer"
          required
          onChange={handleFileChange}
        />
        <div className="flex">
          <label
            htmlFor="productImage"
            className="cursor-pointer px-4 py-2 bg-blue-500 text-white font-semibold rounded-l-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Choose File
          </label>
          <span className="bg-white border border-gray-300 px-4 py-2 text-gray-700 rounded-r-md flex-grow">{fileName}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductImage;
