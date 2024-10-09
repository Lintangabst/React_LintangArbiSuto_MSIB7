import React, { useState } from "react";
import ProductCategory from './components/ProductCategory';
import ProductImage from './components/ProductImage';
import ProductFreshness from './components/ProductFreshness';
import AdditionalDescription from './components/AdditionalDescription';
import ProductPrice from './components/ProductPrice';
import SubmitButton from './components/SubmitButton';
import Modal from './components/Modal';



const CreateProduct = () => {
  const [category, setCategory] = useState('');
  const [fileName, setFileName] = useState('No file chosen');
  const [freshness, setFreshness] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(1);
  const [isModalOpen, setModalOpen] = useState(false);

  const showModal = (event) => {
    event.preventDefault();
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCategory('');
    setFileName('No file chosen');
    setFreshness('');
    setDescription('');
    setPrice(1);
  };

  return (
    <div className="container mx-auto mt-10 px-4 bg-gray-100">
      <h1 className="text-3xl font-bold text-center mb-8">Create Product</h1>
      <form className="grid grid-cols-2 gap-4" onSubmit={showModal}>
        <ProductCategory category={category} setCategory={setCategory} />
        <ProductImage fileName={fileName} setFileName={setFileName} />
        <ProductFreshness freshness={freshness} setFreshness={setFreshness} />
        <AdditionalDescription description={description} setDescription={setDescription} />
        <ProductPrice price={price} setPrice={setPrice} />
        <SubmitButton onSubmit={showModal} />
      </form>
      <Modal isOpen={isModalOpen} closeModal={closeModal} />
    </div>
  );
};

export default CreateProduct;
