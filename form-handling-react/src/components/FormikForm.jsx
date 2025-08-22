import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const FormikForm = () => {
  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  });

  const handleSubmit = (values) => {
    console.log("Formik form submitted:", values);
    // Simulate API call
    alert("Registration successful with Formik!");
  };

  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-2xl space-y-4">
        <h2 className="text-2xl font-bold text-center">Register with Formik</h2>

        <div>
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
          <Field
            type="text"
            name="username"
            placeholder="Username"
            className="w-full p-2 border rounded-lg"
          />
          <ErrorMessage
            name="username"
            component="div"
            className="text-red-500 text-sm"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <Field
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-2 border rounded-lg"
          />
          <ErrorMessage
            name="email"
            component="div"
            className="text-red-500 text-sm"
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <Field
            type="password"
            name="password"
            placeholder="Password"
            className="w-full p-2 border rounded-lg"
          />
          <ErrorMessage
            name="password"
            component="div"
            className="text-red-500 text-sm"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white p-2 rounded-lg hover:bg-green-700"
        >
          Register
        </button>
      </Form>
    </Formik>
  );
};

export default FormikForm;
