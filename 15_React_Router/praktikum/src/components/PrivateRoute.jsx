// src/components/PrivateRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ element }) => {
  // Replace this logic with your actual authentication check
  const isAuthenticated = Boolean(sessionStorage.getItem('token')); // Example logic

  return isAuthenticated ? element : <Navigate to="/login" />;
};

export default PrivateRoute;
