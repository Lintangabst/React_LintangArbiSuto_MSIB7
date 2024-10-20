import React from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const navigate = useNavigate(); // Menggunakan useNavigate

  const loginSchema = Yup.object().shape({
    username: Yup.string()
      .min(3, 'Username must be at least 3 characters')
      .required('Username is required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .required('Password is required'),
  });

  const handleSubmit = (values) => {
    console.log("Login form submitted with values:", values);
  };

  const handleSwitchToRegister = () => {
    navigate('/register'); // Navigasi ke halaman register
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
      <Formik
        initialValues={{
          username: '',
          password: '',
        }}
        validationSchema={loginSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            <div className="mb-4">
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
              <Field type="text" id="username" name="username" className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
              <ErrorMessage name="username" component="div" className="text-red-500 text-sm" />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <Field type="password" id="password" name="password" className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
              <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
            </div>

            <button type="submit" className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
              Login
            </button>
          </Form>
        )}
      </Formik>
      <p className="text-sm text-center mt-4">
        Don't have an account?{' '}
        <span className="text-orange-500 hover:text-orange-700 cursor-pointer" onClick={handleSwitchToRegister}>
          Register
        </span>
      </p>
    </div>
  );
};

export default LoginForm;