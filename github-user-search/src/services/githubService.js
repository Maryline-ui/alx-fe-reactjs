import axios from 'axios';

const BASE_URL = 'https://api.github.com/users';
const SEARCH_URL = 'https://api.github.com/search/users';

const apiKey = import.meta.env.VITE_APP_GITHUB_API_KEY;

const headers = {
  Authorization: apiKey ? `token ${apiKey}` : undefined,
};


export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/${username}`, { headers });
    return response.data;
  } catch (error) {
    console.error('GitHub API Error (fetchUserData):', error);
    return null;
  }
};


export const fetchAdvancedUserData = async ({ username, location, minRepos }) => {
  try {
    let queryParts = [];

    if (username) queryParts.push(`${username} in:login`);
    if (location) queryParts.push(`location:${location}`);
    if (minRepos) queryParts.push(`repos:>=${minRepos}`);

    const query = queryParts.join('+');
    const response = await axios.get(`${SEARCH_URL}?q=${query}`, { headers });

    return response.data.items; 
  } catch (error) {
    console.error('GitHub API Error (fetchAdvancedUserData):', error);
    return [];
  }
};
