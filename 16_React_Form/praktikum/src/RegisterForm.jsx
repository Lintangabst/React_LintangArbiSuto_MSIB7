import React from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
  const navigate = useNavigate(); // Menggunakan useNavigate

  const registerSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(3, 'First name must be at least 3 characters')
      .required('First name is required'),
    lastName: Yup.string()
      .min(3, 'Last name must be at least 3 characters')
      .required('Last name is required'),
    username: Yup.string()
      .min(3, 'Username must be at least 3 characters')
      .required('Username is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password')], 'Passwords must match')
      .required('Confirm password is required'),
  });

  const handleSubmit = (values) => {
    console.log(values);
    // Tambahkan logika untuk mendaftar pengguna di sini
  };

  const handleSwitchToLogin = () => {
    navigate('/login'); // Navigasi ke halaman login
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          username: '',
          email: '',
          password: '',
          confirmPassword: '',
        }}
        validationSchema={registerSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            {/* First Name */}
            <div className="mb-4">
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
              <Field type="text" id="firstName" name="firstName" className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
              <ErrorMessage name="firstName" component="div" className="text-red-500 text-sm" />
            </div>

            {/* Last Name */}
            <div className="mb-4">
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
              <Field type="text" id="lastName" name="lastName" className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
              <ErrorMessage name="lastName" component="div" className="text-red-500 text-sm" />
            </div>

            {/* Username */}
            <div className="mb-4">
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
              <Field type="text" id="username" name="username" className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
              <ErrorMessage name="username" component="div" className="text-red-500 text-sm" />
            </div>

            {/* Email */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <Field type="email" id="email" name="email" className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
              <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
            </div>

            {/* Password */}
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <Field type="password" id="password" name="password" className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
              <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
            </div>

            {/* Confirm Password */}
            <div className="mb-4">
              <label htmlFor="confirmPassword" className="block text-sm font-medium text -gray-700">Confirm Password</label>
              <Field type="password" id="confirmPassword" name="confirmPassword" className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
              <ErrorMessage name="confirmPassword" component="div" className="text-red-500 text-sm" />
            </div>

            <button type="submit" className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
              Register
            </button>
          </Form>
        )}
      </Formik>
      <p className="text-sm text-center mt-4">
        Already have an account?{' '}
        <span className="text-orange-500 hover:text-orange-700 cursor-pointer" onClick={handleSwitchToLogin}>
          Login
        </span>
      </p>
    </div>
  );
};

export default RegisterForm;