// UsersTable.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const UsersTable = () => {
  const users = ['1001', '1002', '1003'];

  return (
    <div className="container mx-auto p-4">
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="py-2">ID</th>
            <th className="py-2">Name</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user} className="border-b">
              <td className="py-2">
                <Link to={`/account/${user}`} className="text-blue-600 hover:underline">
                  {user}
                </Link>
              </td>
              <td className="py-2">User {user}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
