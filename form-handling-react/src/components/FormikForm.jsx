import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// Yup validation schema
const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

const FormikForm = () => {
  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log("Formik form submitted:", values);
      }}
    >
      {() => (
        <Form className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-2xl space-y-4">
          <h2 className="text-2xl font-bold text-center">Register with Formik</h2>

          <div>
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
      )}
    </Formik>
  );
};

export default FormikForm;