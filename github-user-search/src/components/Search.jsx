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
        const results = await fetchAdvancedUserData({ username, location, minRepos });
        if (results && results.length > 0) {
          setUserResults(results);
        } else {
          setError(true);
        }
      } else {
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
    <div className="max-w-xl mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">GitHub User Search</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Search by username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="input input-bordered w-full"
        />
        <input
          type="text"
          placeholder="Location (optional)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="input input-bordered w-full"
        />
        <input
          type="number"
          placeholder="Min Repositories (optional)"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="input input-bordered w-full"
        />
        <button type="submit" className="btn btn-primary w-full">
          Search
        </button>
      </form>

      {loading && <p className="mt-4 text-blue-500">Loading...</p>}
      {error && <p className="mt-4 text-red-500">Looks like we can't find the user.</p>}

      
      {userData && (
        <div className="mt-6 border p-4 rounded shadow">
          <h3 className="text-xl font-bold mb-2">{userData.login}</h3>
          <img src={userData.avatar_url} alt={userData.login} className="w-24 rounded-full mb-2" />
          <p>Location: {userData.location || 'Not specified'}</p>
          <p>Repos: {userData.public_repos}</p>
          <a
            href={userData.html_url}
            target="_blank"
            rel="noreferrer"
            className="text-blue-500 underline"
          >
            View GitHub Profile
          </a>
        </div>
      )}

      
      {userResults.length > 0 && (
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-4">Search Results:</h3>
          {userResults.map((user) => (
            <div
              key={user.id}
              className="mb-4 flex items-center border p-3 rounded shadow-sm gap-4"
            >
              <img src={user.avatar_url} alt={user.login} className="w-12 h-12 rounded-full" />
              <div>
                <p className="font-medium">{user.login}</p>
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500 underline text-sm"
                >
                  View GitHub Profile
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Search;
