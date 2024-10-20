import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateProduct from './CreateProduct';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';

const App = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CreateProduct />} />
        <Route path="/register" element={<RegisterForm onSwitch={toggleForm} />} />
        <Route path="/login" element={<LoginForm onSwitch={toggleForm} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;