import React from 'react';

const ProductFreshness = ({ freshness, setFreshness }) => (
  <div className="mb-6 col-span-1">
    <label className="block text-gray-700 font-medium mb-2">Product Freshness</label>
    <div className="flex items-center mb-2">
      <input
        type="radio"
        name="freshness"
        id="brandNew"
        value="brand-new"
        checked={freshness === 'brand-new'}
        onChange={(e) => setFreshness(e.target.value)}
        className="form-radio text-blue-500"
        required
      />
      <label htmlFor="brandNew" className="ml-2 text-gray-700">Brand New</label>
    </div>
    <div className="flex items-center mb-2">
      <input
        type="radio"
        name="freshness"
        id="secondHand"
        value="second-hand"
        checked={freshness === 'second-hand'}
        onChange={(e) => setFreshness(e.target.value)}
        className="form-radio text-blue-500"
        required
      />
      <label htmlFor="secondHand" className="ml-2 text-gray-700">Second Hand</label>
    </div>
    <div className="flex items-center">
      <input
        type="radio"
        name="freshness"
        id="refurbished"
        value="refurbished"
        checked={freshness === 'refurbished'}
        onChange={(e) => setFreshness(e.target.value)}
        className="form-radio text-blue-500"
        required
      />
      <label htmlFor="refurbished" className="ml-2 text-gray-700">Refurbished</label>
    </div>
  </div>
);

export default ProductFreshness;
