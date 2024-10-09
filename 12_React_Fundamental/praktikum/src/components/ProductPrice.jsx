import React from 'react';

const ProductPrice = ({ price, setPrice }) => (
  <div className="mb-6 col-span-1">
    <label htmlFor="productPrice" className="block text-gray-700 font-medium mb-2">Product Price</label>
    <div className="flex items-center border border-gray-300 rounded-md shadow-sm">
      <span className="inline-flex items-center px-3 text-gray-500 bg-gray-200 border-r border-gray-300 rounded-l-md">$</span>
      <input
        type="number"
        id="productPrice"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        min="1"
        className="form-input flex-1 block border-1 rounded-r-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
        required
      />
    </div>
  </div>
);

export default ProductPrice;
