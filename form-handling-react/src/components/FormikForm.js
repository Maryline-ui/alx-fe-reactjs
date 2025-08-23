import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const FormikForm = () => {
  const validationSchema = Yup.object({
    username: Yup.string().required('Username is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  });

  const handleSubmit = (values) => {
    console.log('Formik form submitted:', values);
  };

  return (
    <div className="p-8 bg-white rounded-xl shadow-lg w-full max-w-md">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Formik Registration Form</h2>
      <Formik
        initialValues={{ username: '', email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="w-full space-y-4">
          <div>
            <label htmlFor="username" className="block text-gray-700 font-semibold">Username</label>
            <Field
              id="username"
              name="username"
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter username"
            />
            <ErrorMessage name="username" component="div" className="text-red-500 text-sm mt-1" />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 font-semibold">Email</label>
            <Field
              id="email"
              name="email"
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter email"
            />
            <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-700 font-semibold">Password</label>
            <Field
              id="password"
              name="password"
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter password"
            />
            <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-700 transition-colors"
          >
            Sign Up
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default FormikForm;