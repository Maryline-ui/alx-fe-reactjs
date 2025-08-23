import React from 'react';
import RegistrationForm from './components/RegistrationForm';
import FormikForm from './components/FormikForm';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import './index.css';

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center p-4 space-y-8 font-sans antialiased">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-8 text-center">React Form Project</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-5xl">
          <RegistrationForm />
          <FormikForm />
        </div>
      </div>
    </DndProvider>
  );
}

export default App;
