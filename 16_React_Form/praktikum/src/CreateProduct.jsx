import React, { useState } from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const CreateProduct = () => {
  const [products, setProducts] = useState([]); // State untuk menyimpan array produk

  const productSchema = Yup.object().shape({
    productName: Yup.string()
      .min(6, 'Product name must be at least 6 characters')
      .max(50, 'Product name must be at most 50 characters')
      .matches(/^[a-zA-Z0-9 ]*$/, 'Product name can only contain letters and numbers')
      .required('Product name is required'),
    productCategory: Yup.string().required('Product category is required'),
    productImage: Yup.mixed().required('Product image is required'),
    productFreshness: Yup.string().required('Product freshness is required'),
    productPrice: Yup.number()
      .min(1, 'Product price must be at least $1')
      .required('Product price is required'),
  });

  const handleSubmit = (values, { resetForm }) => {
    const productWithImage = {
      ...values,
      productImage: URL.createObjectURL(values.productImage), // Membuat URL untuk gambar
    };
    setProducts([...products, productWithImage]); // Tambahkan produk baru ke array
    resetForm(); // Reset form setelah submit
  };

  return (
    <div className="container mx-auto mt-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Create Product</h1>
      <p className="text-center mb-8 text-gray-600">Fill out the form below to create a new product.</p>

      <Formik
        initialValues={{
          productName: '',
          productCategory: '',
          productImage: null,
          productFreshness: '',
          productPrice: 1,
          additionalDescription: '',
        }}
        validationSchema={productSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue }) => (
          <Form className="bg-white p-8 rounded-lg shadow-lg grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Form Fields */}
            <div className="mb-6 col-span-1">
              <label htmlFor="productName" className="block text-gray-700 font-medium mb-2">Product Name</label>
              <Field type="text" id="productName" name="productName" className="form-input mt-1 block w-full border border-1 border-gray-500 rounded-md shadow-sm" />
              <ErrorMessage name="productName" component="div" className="text-red-500" />
            </div>

            <div className="mb-6 col-span-1">
              <label htmlFor="productCategory" className="block text-gray-700 font-medium mb-2">Product Category</label>
              <Field as="select" id="productCategory" name="productCategory" className="form-select mt-1 block w-full border border-1 border-gray-300 rounded-md shadow-sm">
                <option value="">Choose...</option>
                <option value="category1">Category 1</option>
                <option value="category2">Category 2</option>
                <option value="category3">Category 3</option>
              </Field>
              <ErrorMessage name="productCategory" component="div" className="text-red-500" />
            </div>

            <div className="mb-6 col-span-1">
              <label htmlFor="productImage" className="block text-gray-700 font-medium mb-2">Image of Product</label>
              <input type="file" id="productImage" name="productImage" accept="image/*" onChange={(event) => {
                setFieldValue("productImage", event.currentTarget.files[0]);
              }} className="mt-1 block w-full" />
              <ErrorMessage name="productImage" component="div" className="text-red-500" />
            </div>

            <div className="mb-6 col-span-1">
              <label className="block text-gray-700 font-medium mb-2">Product Freshness</label>
              <div>
                <label>
                  <Field type="radio" name="productFreshness" value="brand-new" className="form-radio text-blue-500" />
                  Brand New
                </label>
                <label>
                  <Field type="radio" name="productFreshness" value="second-hand" className="form-radio text-blue-500" />
                  Second Hand
                </label>
                <label>
                  <Field type="radio" name="productFreshness" value="refurbished" className="form-radio text-blue-500" />
                  Refurbished
                </label>
              </div>
              <ErrorMessage name="productFreshness" component="div" className="text-red-500" />
            </div>

            <div className="mb-6 col-span-2">
              <label htmlFor="additionalDescription" className="block text-gray-700 font-medium mb-2">Additional Description</label>
              <Field as="textarea" id="additionalDescription" name="additionalDescription" rows="4" className="form-textarea mt-1 block w-full border border-1 border-gray-300 rounded-md shadow-sm" />
            </div>

            <div className="mb-6 col-span-1">
              <label htmlFor="productPrice" className="block text-gray-700 font-medium mb-2">Product Price</label>
              <div className="flex items-center border border-gray-300 rounded-md shadow-sm">
                <span className="inline-flex items-center px-3 text-gray-500 bg-gray-200 border-r border-gray-300 rounded-l-md">$</span>
                <Field type="number" id="productPrice" name="productPrice" value={1} min={1} className="form-input flex-1 block border-1 rounded-r-md shadow-sm" />
              </div>
              <ErrorMessage name="productPrice" component="div" className="text-red-500" />
            </div>

            <div className="col-span-2">
              <button type="submit" className="w-full py-3 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Submit</button>
            </div>
          </Form>
        )}
      </Formik>

      {/* Tabel Produk */}
      <table className="w-full mt-6">
        <thead>
          <tr>
            <th className="px-4 py-2">Product Name</th>
            <th className="px-4 py-2">Product Category</th>
            <th className="px-4 py-2">Product Freshness</th>
            <th className="px-4 py-2">Product Price</th>
            <th className="px-4 py-2">Image</th>
            <th className="px-4 py-2">Description</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td className="px-4 py-2">{product.productName}</td>
              <td className="px-4 py-2">{product.productCategory}</td>
              <td className="px-4 py-2">{product.productFreshness}</td>
              <td className="px-4 py-2">${product.productPrice}</td>
              <td className="px-4 py-2">
                <img src={product.productImage} alt={product.productName} className="w-20 h-20 object-cover rounded-md" />
              </td>
              <td className="px-4 py-2">{product.additionalDescription}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CreateProduct;