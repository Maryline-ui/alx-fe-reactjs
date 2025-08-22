import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export default function FormikForm() {
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-2xl p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Formik Registration Form
      </h2>
      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          console.log("Formik submitted:", values);
          resetForm();
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="mb-3">
              <Field
                name="username"
                placeholder="Username"
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <ErrorMessage
                name="username"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div className="mb-3">
              <Field
                type="email"
                name="email"
                placeholder="Email"
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div className="mb-3">
              <Field
                type="password"
                name="password"
                placeholder="Password"
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
            >
              {isSubmitting ? "Submitting..." : "Register"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}