import React from 'react';

const AdditionalDescription = ({ description, setDescription }) => (
  <div className="mb-6 col-span-2">
    <label htmlFor="additionalDescription" className="block text-gray-700 font-medium mb-2">Additional Description</label>
    <textarea
      id="additionalDescription"
      rows="4"
      value={description}
      onChange={(e) => setDescription(e.target.value)}
      className="form-textarea mt-1 block w-full border border-1 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
    ></textarea>
  </div>
);

export default AdditionalDescription;
