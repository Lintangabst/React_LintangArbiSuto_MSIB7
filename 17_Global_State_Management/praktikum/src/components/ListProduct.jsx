// src/components/ListProduct.jsx
import React from 'react';
import { connect } from 'react-redux';
import { deleteProduct } from '../actions';
import CreateProduct from './CreateProduct';

const ListProduct = ({ products, error, deleteProduct }) => {
  const [editingProduct, setEditingProduct] = React.useState(null);

  const handleCancelEdit = () => {
    setEditingProduct(null); // Reset the editing state
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Add Product Form */}
      <div className="mb-6">
        <CreateProduct existingProduct={editingProduct} />
      </div>

      {/* Product List Table */}
      <h2 className="text-2xl font-bold mb-4">Product List</h2>
      {products.length > 0 ? (
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
          <thead>
            <tr className="bg-gray-100 border-b">
              <th className="py-2 px-4 text-left text-gray-600">Image</th>
              <th className="py-2 px-4 text-left text-gray-600">Product Name</th>
              <th className="py-2 px-4 text-left text-gray-600">Category</th>
              <th className="py-2 px-4 text-left text-gray-600">Price</th>
              <th className="py-2 px-4 text-left text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="border-b hover:bg-gray-50">
                <td className="py-2 px-4">
                  <img
                    src={product.image}
                    alt={product.productName}
                    className="w-16 h-16 object-cover rounded"
                  />
                </td>
                <td className="py-2 px-4">{product.productName}</td>
                <td className="py-2 px-4">{product.productCategory}</td>
                <td className="py-2 px-4">${product.productPrice}</td>
                <td className="py-2 px-4 flex space-x-2">
                  <button
                    onClick={() => setEditingProduct(product)}
                    className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
                  >
                    Edit
                  </button>
                  {editingProduct?.id === product.id && (
                    <button
                      onClick={handleCancelEdit}
                      className="bg-gray-500 text-white px-2 py-1 rounded hover:bg-gray-600"
                    >
                      Cancel Edit
                    </button>
                  )}
                  <button
                    onClick={() => deleteProduct(product.id)}
                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-gray-500">No products available.</p>
      )}
      {error && <div className="text-red-600 mt-4">{error}</div>}
    </div>
  );
};

const mapStateToProps = (state) => ({
  products: state.products,
  error: state.error,
});

export default connect(mapStateToProps, { deleteProduct })(ListProduct);
