import React from "react";
import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/FormikForm";
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import "./index.css";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-5xl">
          <RegistrationForm />
          <FormikForm />
        </div>
      </div>
    </DndProvider>
  );
}

export default App;
