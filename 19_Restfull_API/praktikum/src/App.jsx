// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login'; // Your Login component
import CreateProduct from './components/CreateProduct'; // Your CreateProduct component
import ListProduct from './components/ListProduct'; // Your ListProduct component
import PrivateRoute from './components/PrivateRoute'; // The PrivateRoute component

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
