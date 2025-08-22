import React from "react";
import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/FormikForm";

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-5xl">
        <RegistrationForm />
        <FormikForm />
      </div>
    </div>
  );
}

export default App;
