// UserDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const UserDetail = () => {
  const { id } = useParams();

  // Simulasikan data pengguna
  const userData = {
    '1001': { name: 'Lintang', age: 21 },
    '1002': { name: 'Arbi', age: 21 },
    '1003': { name: 'Suto', age: 21 },

  };

  const user = userData[id];

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      {user ? (
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h1 className="text-3xl font-bold mb-4">User Details</h1>
          <p className="text-lg">Name: {user.name}</p>
          <p className="text-lg">Age: {user.age}</p>
        </div>
      ) : (
        <p>User not found</p>
      )}
    </div>
  );
};

export default UserDetail;
