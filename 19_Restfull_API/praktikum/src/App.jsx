// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import CreateProduct from './components/CreateProduct';
import ListProduct from './components/ListProduct';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/create-product" element={<PrivateRoute element={<CreateProduct />} />} />
        <Route path="/list-product" element={<PrivateRoute element={<ListProduct />} />} />
      </Routes>
    </Router>
  );
};

export default App;
