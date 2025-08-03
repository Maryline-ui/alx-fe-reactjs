
import React, { useState } from 'react';
import { fetchUserData, fetchAdvancedUserData } from '../services/githubService';

function Search() {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [userData, setUserData] = useState(null);
  const [userResults, setUserResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setUserData(null);
    setUserResults([]);

    try {
      if (location || minRepos) {
        // Use advanced search
        const results = await fetchAdvancedUserData(location, minRepos);
        if (results && results.length > 0) {
          setUserResults(results);
        } else {
          setError(true);
        }
      } else {
        // Use basic search by username
        const data = await fetchUserData(username);
        if (data) {
          setUserData(data);
        } else {
          setError(true);
        }
      }
    } catch (err) {
      console.error(err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: '500px', margin: 'auto', padding: '1rem' }}>
      <h2>GitHub User Search</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ padding: '0.5rem', width: '100%', marginBottom: '0.5rem' }}
        />
        <input
          type="text"
          placeholder="Location (optional)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          style={{ padding: '0.5rem', width: '100%', marginBottom: '0.5rem' }}
        />
        <input
          type="number"
          placeholder="Minimum Repositories (optional)"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          style={{ padding: '0.5rem', width: '100%', marginBottom: '0.5rem' }}
        />
        <button type="submit" style={{ padding: '0.5rem', width: '100%' }}>
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>Looks like we cant find the user.</p>}

      {/* Single user result */}
      {userData && (
        <div style={{ marginTop: '1rem', border: '1px solid #ccc', padding: '1rem' }}>
          <h3>{userData.login}</h3>
          <img src={userData.avatar_url} alt={userData.login} width="100" style={{ borderRadius: '50%' }} />
          <p>Location: {userData.location || 'Not specified'}</p>
          <p>Repos: {userData.public_repos}</p>
          <a href={userData.html_url} target="_blank" rel="noreferrer">
            View GitHub Profile
          </a>
        </div>
      )}

      {/* Multiple users result */}
      {userResults.length > 0 && (
        <div style={{ marginTop: '1rem' }}>
          <h3>Search Results:</h3>
          {userResults.map((user) => (
            <div
              key={user.id}
              style={{ marginBottom: '1rem', border: '1px solid #ccc', padding: '0.5rem' }}
            >
              <img
                src={user.avatar_url}
                alt={user.login}
                width="50"
                style={{ borderRadius: '50%' }}
              />
              <p>{user.login}</p>
              <a href={user.html_url} target="_blank" rel="noreferrer">
                View GitHub Profile
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Search;

