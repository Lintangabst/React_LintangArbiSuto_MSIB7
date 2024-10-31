import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [isSuccess, setIsSuccess] = useState<boolean>(false); // State for success pop-up
  const navigate = useNavigate();

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const dummyUser = { username: 'admin', password: 'password123' };

    // Check local storage for existing user
    const user = JSON.parse(localStorage.getItem('user') || '{}');

    if (user && user.username === username && user.password === password) {
      localStorage.setItem('isLoggedIn', 'true'); // Convert boolean to string
      setIsSuccess(true); // Show success pop-up
      setTimeout(() => {
        navigate('/list-product'); // Redirect after the pop-up
      }, 2000); // Wait 2 seconds before redirecting
    } else if (username === dummyUser.username && password === dummyUser.password) {
      localStorage.setItem('user', JSON.stringify(dummyUser));
      localStorage.setItem('isLoggedIn', 'true'); // Convert boolean to string
      setIsSuccess(true); // Show success pop-up
      setTimeout(() => {
        navigate('/list-product'); // Redirect after the pop-up
      }, 2000); // Wait 2 seconds before redirecting
    } else {
      setErrorMessage('Invalid username or password');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form onSubmit={handleLogin} className="space-y-4">
        <div>
          <label className="block text-gray-700">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
          Login
        </button>
        {errorMessage && <p className="mt-2 text-red-500">{errorMessage}</p>}
      </form>

      {/* Success Pop-Up */}
      {isSuccess && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg">
            <h3 className="text-lg font-bold">Login Successful!</h3>
            <p>You are being redirected...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;