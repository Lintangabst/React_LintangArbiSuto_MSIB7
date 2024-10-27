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
  const [errors, setErrors] = useState([]); // Array for error messages

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
    
    // Clear previous errors
    setErrors([]);

    const newErrors = []; // Array to collect error messages

    // Validation for Product Name
    if (!productName) {
      newErrors.push('Product Name cannot be empty');
    } else if (productName.length > 25) {
      newErrors.push('Product Name cannot exceed 25 characters');
      setProductName(''); // Clear the input if the name exceeds 25 characters
    } else if (!isValidProductName(productName)) {
      newErrors.push('Product Name is invalid');
      setProductName(''); // Clear the input if the name is invalid
    }

    // Validation for other fields
    if (!productCategory) {
      newErrors.push('Product Category cannot be empty');
    }
    if (!productFreshness) {
      newErrors.push('Product Freshness cannot be empty');
    }
    if (!productPrice) {
      newErrors.push('Product Price cannot be empty');
    }

    if (newErrors.length > 0) {
      setErrors(newErrors);
      return; // Exit early if there are validation errors
    }

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

    resetForm();
  };

  const isValidProductName = (name) => {
    // Simple validation: Check if the name contains only valid characters
    return /^[a-zA-Z0-9 ]+$/.test(name); // Allows alphanumeric and spaces
  };

  const resetForm = () => {
    setProductName("");
    setProductCategory("");
    setProductFreshness("");
    setProductPrice("");
    setImage("");
    setAdditionalDescription("");
    setErrors([]); // Clear error messages on form reset
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 mb-4">
      <h2 className="text-xl font-semibold mb-4">{existingProduct ? "Edit Product" : "Add Product"}</h2>
      {errors.length > 0 && (
        <div className="text-red-500 mb-4">
          {errors.map((error, index) => (
            <p key={index}>{error}</p>
          ))}
        </div>
      )}
      <input
        type="text"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
        placeholder="Product Name"
        className="border border-gray-300 p-2 mb-4 rounded w-full"
      />
      <input
        type="text"
        value={productCategory}
        onChange={(e) => setProductCategory(e.target.value)}
        placeholder="Product Category"
        className="border border-gray-300 p-2 mb-4 rounded w-full"
      />
      <input
        type="text"
        value={productFreshness}
        onChange={(e) => setProductFreshness(e.target.value)}
        placeholder="Product Freshness"
        className="border border-gray-300 p-2 mb-4 rounded w-full"
      />
      <input
        type="number"
        value={productPrice}
        onChange={(e) => setProductPrice(e.target.value)}
        placeholder="Product Price"
        className="border border-gray-300 p-2 mb-4 rounded w-full"
      />
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        placeholder="Image URL"
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
