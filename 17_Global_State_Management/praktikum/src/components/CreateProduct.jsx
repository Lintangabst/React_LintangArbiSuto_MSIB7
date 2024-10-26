// src/components/CreateProduct.jsx
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { addProduct, editProduct } from '../actions';

const CreateProduct = ({ addProduct, editProduct, existingProduct }) => {
  const [productName, setProductName] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productFreshness, setProductFreshness] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [image, setImage] = useState("");
  const [additionalDescription, setAdditionalDescription] = useState("");

  // Effect to populate fields if editing an existing product
  useEffect(() => {
    if (existingProduct) {
      setProductName(existingProduct.productName);
      setProductCategory(existingProduct.productCategory);
      setProductFreshness(existingProduct.productFreshness);
      setProductPrice(existingProduct.productPrice);
      setImage(existingProduct.image);
      setAdditionalDescription(existingProduct.additionalDescription);
    }
  }, [existingProduct]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      id: existingProduct ? existingProduct.id : Math.random().toString(36).substr(2, 9),
      productName,
      productCategory,
      productFreshness,
      productPrice,
      image,
      additionalDescription,
    };

    if (existingProduct) {
      editProduct(newProduct);
    } else {
      addProduct(newProduct);
    }

    // Reset form fields after submission
    resetForm();
  };

  const resetForm = () => {
    setProductName("");
    setProductCategory("");
    setProductFreshness("");
    setProductPrice("");
    setImage("");
    setAdditionalDescription("");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 mb-4">
      <h2 className="text-xl font-semibold mb-4">{existingProduct ? "Edit Product" : "Add Product"}</h2>
      <input
        type="text"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
        placeholder="Product Name"
        required
        className="border border-gray-300 p-2 mb-4 rounded w-full"
      />
      <input
        type="text"
        value={productCategory}
        onChange={(e) => setProductCategory(e.target.value)}
        placeholder="Product Category"
        required
        className="border border-gray-300 p-2 mb-4 rounded w-full"
      />
      <input
        type="text"
        value={productFreshness}
        onChange={(e) => setProductFreshness(e.target.value)}
        placeholder="Product Freshness"
        required
        className="border border-gray-300 p-2 mb-4 rounded w-full"
      />
      <input
        type="number"
        value={productPrice}
        onChange={(e) => setProductPrice(e.target.value)}
        placeholder="Product Price"
        required
        className="border border-gray-300 p-2 mb-4 rounded w-full"
      />
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        placeholder="Image URL"
        required
        className="border border-gray-300 p-2 mb-4 rounded w-full"
      />
      <textarea
        value={additionalDescription}
        onChange={(e) => setAdditionalDescription(e.target.value)}
        placeholder="Additional Description"
        className="border border-gray-300 p-2 mb-4 rounded w-full"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        {existingProduct ? "Edit Product" : "Add Product"}
      </button>
    </form>
  );
};

export default connect(null, { addProduct, editProduct })(CreateProduct);
