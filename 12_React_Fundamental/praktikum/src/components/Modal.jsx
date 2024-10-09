import React from 'react';

const Modal = ({ isOpen, closeModal }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg w-11/12 max-w-lg text-center">
        <h2 className="text-2xl font-semibold mb-4">Product Submitted</h2>
        <img src="src/assets/img/success.png" alt="Success Image" className="mx-auto transition-transform duration-300 ease-in-out transform hover:scale-110" />
        <p>Your product has been successfully submitted!</p>
        <button className="mt-6 py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50" onClick={closeModal}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
