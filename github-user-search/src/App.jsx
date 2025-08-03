
import React from 'react';
import Search from './components/Search';

function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>GitHub User Search</h1>
      <p>Start typing to search for a GitHub user...</p>
      
      <Search />
    </div>
  );
}

export default App;
