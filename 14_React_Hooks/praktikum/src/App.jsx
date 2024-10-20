import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const ProductManagement = () => {
  useEffect(() => {
    alert('Welcome to Product Management!'); 
  }, []);

  const [products, setProducts] = useState([]); 
  const [formData, setFormData] = useState({
    productName: '',
    productCategory: '',
    productFreshness: '',
    productPrice: '',
    id: null, // Tambahkan id untuk mengidentifikasi produk yang sedang diedit
  });
  
  const [isEditing, setIsEditing] = useState(false); 

  // Fungsi untuk menghandle perubahan input form
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Fungsi untuk menambah produk
  const handleAddProduct = () => {
    const newProduct = {
      id: uuidv4(), 
      ...formData,
    };
    setProducts([...products, newProduct]);


    resetForm();
  };

  // Fungsi untuk mengedit produk
  const handleEditProduct = (id) => {
    const productToEdit = products.find((product) => product.id === id);
    if (productToEdit) {
      setFormData({
        productName: productToEdit.productName,
        productCategory: productToEdit.productCategory,
        productFreshness: productToEdit.productFreshness,
        productPrice: productToEdit.productPrice,
        id: productToEdit.id, 
      });
      setIsEditing(true); 
    }
  };

  // Fungsi untuk menyimpan perubahan produk yang telah diedit
  const handleSaveEditProduct = () => {
    setProducts(products.map((product) =>
      product.id === formData.id ? { ...formData } : product // Update produk yang diedit
    ));
    resetForm();
    setIsEditing(false); // Kembali ke mode tidak edit
  };

  // Fungsi untuk menghapus produk dengan konfirmasi
  const handleDeleteProduct = (id) => {
    if (window.confirm('Apakah kalian ingin menghapus?')) {
      setProducts(products.filter((product) => product.id !== id));
    }
  };

  // Fungsi untuk reset form
  const resetForm = () => {
    setFormData({
      productName: '',
      productCategory: '',
      productFreshness: '',
      productPrice: '',
      id: null, // Reset id setelah submit
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Product Management</h1>
      <div className="mb-4">
        <input
          type="text"
          name="productName"
          placeholder="Product Name"
          value={formData.productName}
          onChange={handleInputChange}
          className="border border-gray-300 rounded p-2 w-full mb-2"
        />
        <input
          type="text"
          name="productCategory"
          placeholder="Product Category"
          value={formData.productCategory}
          onChange={handleInputChange}
          className="border border-gray-300 rounded p-2 w-full mb-2"
        />
        <input
          type="text"
          name="productFreshness"
          placeholder="Product Freshness"
          value={formData.productFreshness}
          onChange={handleInputChange}
          className="border border-gray-300 rounded p-2 w-full mb-2"
        />
        <input
          type="number"
          name="productPrice"
          placeholder="Product Price"
          value={formData.productPrice}
          onChange={handleInputChange}
          className="border border-gray-300 rounded p-2 w-full mb-4"
        />
        {!isEditing ? (
          <button
            onClick={handleAddProduct}
            className="bg-blue-500 text-white rounded p-2 w-full hover:bg-blue-600 transition duration-200"
          >
            Add Product
          </button>
        ) : (
          <button
            onClick={handleSaveEditProduct}
            className="bg-green-500 text-white rounded p-2 w-full hover:bg-green-600 transition duration-200"
          >
            Save Edit
          </button>
        )}
      </div>

      <table className="min-w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 p-2">No</th>
            <th className="border border-gray-300 p-2">Product Name</th>
            <th className="border border-gray-300 p-2">Product Category</th>
            <th className="border border-gray-300 p-2">Product Freshness</th>
            <th className="border border-gray-300 p-2">Product Price</th>
            <th className="border border-gray-300 p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product.id} className="hover:bg-gray-50">
              <td className="border border-gray-300 p-2">{index + 1}</td>
              <td className="border border-gray-300 p-2">{product.productName}</td>
              <td className="border border-gray-300 p-2">{product.productCategory}</td>
              <td className="border border-gray-300 p-2">{product.productFreshness}</td>
              <td className="border border-gray-300 p-2">{product.productPrice}</td>
              <td className="border border-gray-300 p-2">
                <button
                  onClick={() => handleEditProduct(product.id)}
                  className="bg-yellow-500 text-white rounded px-2 py-1 hover:bg-yellow-600 transition duration-200 mr-1"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteProduct(product.id)}
                  className="bg-red-500 text-white rounded px-2 py-1 hover:bg-red-600 transition duration-200"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductManagement;
