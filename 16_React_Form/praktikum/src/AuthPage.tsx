import React, { useState } from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const RegisterForm = ({ onSwitch }: { onSwitch: () => void }) => {
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

  const handleSubmit = (values: any) => {
    console.log(values);
  };

  return (
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
        <Form className="bg-white p-8 rounded-lg shadow-lg grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="mb-6 col-span-1">
            <label htmlFor="firstName" className="block text-gray-700 font-medium mb-2">First Name</label>
            <Field type="text" id="firstName" name="firstName" className="form-input mt-1 block w-full border border-1 border-gray-500 rounded-md shadow-sm" />
            <ErrorMessage name="firstName" component="div" className="text-red-500" />
          </div>

          <div className="mb-6 col-span-1">
            <label htmlFor="lastName" className="block text-gray-700 font-medium mb-2">Last Name</label>
            <Field type="text" id="lastName" name="lastName" className="form-input mt-1 block w-full border border-1 border-gray-500 rounded-md shadow-sm" />
            <ErrorMessage name="lastName" component="div" className="text-red -500" />
          </div>

          <div className="mb-6 col-span-1">
            <label htmlFor="username" className="block text-gray-700 font-medium mb-2">Username</label>
            <Field type="text" id="username" name="username" className="form-input mt-1 block w-full border border-1 border-gray-500 rounded-md shadow-sm" />
            <ErrorMessage name="username" component="div" className="text-red-500" />
          </div>

          <div className="mb-6 col-span-1">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
            <Field type="email" id="email" name="email" className="form-input mt-1 block w-full border border-1 border-gray-500 rounded-md shadow-sm" />
            <ErrorMessage name="email" component="div" className="text-red-500" />
          </div>

          <div className="mb-6 col-span-1">
            <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Password</label>
            <Field type="password" id="password" name="password" className="form-input mt-1 block w-full border border-1 border-gray-500 rounded-md shadow-sm" />
            <ErrorMessage name="password" component="div" className="text-red-500" />
          </div>

          <div className="mb-6 col-span-1">
            <label htmlFor="confirmPassword" className="block text-gray-700 font-medium mb-2">Confirm Password</label>
            <Field type="password" id="confirmPassword" name="confirmPassword" className="form-input mt-1 block w-full border border-1 border-gray-500 rounded-md shadow-sm" />
            <ErrorMessage name="confirmPassword" component="div" className="text-red-500" />
          </div>

          <button type="submit" className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
            Register
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default RegisterForm;