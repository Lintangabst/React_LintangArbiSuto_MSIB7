// src/components/ListProduct.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const ListProduct = () => {
  const [products, setProducts] = useState([]);
  const [editProduct, setEditProduct] = useState(null);
  const [editForm, setEditForm] = useState({
    name: "",
    price: "",
    category: "",
    description: "",
  });

  const apiUrl = "https://672343212108960b9cc75e87.mockapi.io/products";
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(apiUrl);
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${apiUrl}/${id}`);
      setProducts(products.filter((product) => product.id !== id));
      alert("Product successfully deleted!");
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const handleEdit = (product) => {
    if (editProduct === product.id) {
      // If already in edit mode, cancel edit
      setEditProduct(null);
      setEditForm({ name: "", price: "", category: "", description: "" });
    } else {
      // Start edit mode
      setEditProduct(product.id);
      setEditForm({
        name: product.name,
        price: product.price,
        category: product.category,
        description: product.description,
      });
    }
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditForm({ ...editForm, [name]: value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`${apiUrl}/${editProduct}`, editForm);
      setProducts(
        products.map((product) =>
          product.id === editProduct ? response.data : product
        )
      );
      setEditProduct(null);
      alert("Product successfully updated!");
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">List Product</h1>
      <button
        onClick={() => navigate('/create-product')} // Navigate to CreateProduct page
        className="mb-4 bg-green-500 text-white px-4 py-2 rounded"
      >
        Add New Product
      </button>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-100 border-b border-gray-200">
              <th className="px-4 py-2 text-left font-medium text-gray-700">Name</th>
              <th className="px-4 py-2 text-left font-medium text-gray-700">Price</th>
              <th className="px-4 py-2 text-left font-medium text-gray-700">Category</th>
              <th className="px-4 py-2 text-left font-medium text-gray-700">Description</th>
              <th className="px-4 py-2 text-left font-medium text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="border-b border-gray-200 hover:bg-gray-50">
                <td className="px-4 py-2 text-gray-800">{product.name}</td>
                <td className="px-4 py-2 text-gray-800">${product.price}</td>
                <td className="px-4 py-2 text-gray-800">{product.category}</td>
                <td className="px-4 py-2 text-gray-800">{product.description}</td>
                <td className="px-4 py-2 text-gray-800">
                  <button
                    onClick={() => handleEdit(product)}
                    className={`${
                      editProduct === product.id ? "bg-gray-500" : "bg-blue-500"
                    } text-white px-4 py-1 rounded mr-2`}
                  >
                    {editProduct === product.id ? "Cancel" : "Edit"}
                  </button>
                  <button
                    onClick={() => handleDelete(product.id)}
                    className="bg-red-500 text-white px-2 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {editProduct && (
        <div className="container mx-auto p-4 mt-6">
          <h2 className="text-2xl font-bold mb-4">Edit Product</h2>
          <form onSubmit={handleUpdate} className="space-y-4">
            <div>
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={editForm.name}
                onChange={handleEditChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Price</label>
              <input
                type="number"
                name="price"
                value={editForm.price}
                onChange={handleEditChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Category</label>
              <input
                type="text"
                name="category"
                value={editForm.category}
                onChange={handleEditChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Description</label>
              <textarea
                name="description"
                value={editForm.description}
                onChange={handleEditChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
              Update Product
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ListProduct;
