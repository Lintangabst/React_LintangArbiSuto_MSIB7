import React from 'react';

const SubmitButton = ({ onSubmit }) => (
  <div className="col-span-2">
    <button
      type="submit"
      onClick={onSubmit}
      className="w-full py-3 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
    >
      Submit
    </button>
  </div>
);

export default SubmitButton;
