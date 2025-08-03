
import React from 'react';
import Search from './components/Search';

function App() {
  return (
    <div className="text-3xl font-bold text-blue-600">
      Hello, Tailwind!
      <h1>GitHub User Search</h1>
      <p>Start typing to search for a GitHub user...</p>
      
      <Search />
    </div>
  );
}

export default App;
