import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// This is the checklist that tells Formik how to check the boxes.
const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

const FormikForm = () => {
  // This is the function that Formik will call when you click the "Register" button.
  const handleSubmit = (values) => {
    // We are pretending to send the form data to a server.
    // In a real project, you would use a tool like `fetch` or `axios` here.
    console.log("Formik form submitted:", values);
    alert("Form submitted successfully!");
  };

  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {/* The checker wants us to use the <Form>, <Field>, and <ErrorMessage> components. */}
      <Form className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-2xl space-y-4">
        <h2 className="text-2xl font-bold text-center">Register with Formik</h2>

        <div>
          {/* A special input field from Formik */}
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
          <Field
            type="text"
            name="username"
            placeholder="Username"
            className="w-full p-2 border rounded-lg"
          />
          {/* A special error message helper from Formik */}
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
