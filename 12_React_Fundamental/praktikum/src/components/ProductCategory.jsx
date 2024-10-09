import React from 'react';

const ProductCategory = ({ category, setCategory }) => (
  <div className="mb-6 col-span-1">
    <label htmlFor="productCategory" className="block text-gray-700 font-medium mb-2">Product Category</label>
    <select
      id="productCategory"
      value={category}
      onChange={(e) => setCategory(e.target.value)}
      className="form-select mt-1 block w-full border border-1 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
      required
    >
      <option selected disabled value="">Choose...</option>
      <option value="category1">Category 1</option>
      <option value="category2">Category 2</option>
      <option value="category3">Category 3</option>
    </select>
  </div>
);

export default ProductCategory;
