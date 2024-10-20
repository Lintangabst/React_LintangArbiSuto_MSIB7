// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import CreateProduct from './components/CreateProduct';
import UserDetail from './UsersDetails';
import UsersTable from './UsersTable';
import PrivateRoute from './components/PrivateRoute';
import LoginPage from './components/LoginPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/create-product" element={<CreateProduct />} />
        <Route path="/users" element={<UsersTable />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/account/:id" element={<PrivateRoute element={<UserDetail />} />} />
      </Routes>
    </Router>
  );
};

export default App;
