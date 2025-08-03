import axios from 'axios';

const BASE_URL = 'https://api.github.com/users';

const apiKey = import.meta.env.VITE_APP_GITHUB_API_KEY;

export const fetchGitHubUser = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/${username}`, {
      headers: {
        Authorization: apiKey ? `token ${apiKey}` : '',
      },
    });
    return response.data;
  } catch (error) {
    console.error('GitHub API Error:', error);
    return null;
  }
};
