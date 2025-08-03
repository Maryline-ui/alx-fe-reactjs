
import axios from 'axios';

const BASE_URL = 'https://api.github.com/users';

export const fetchUserData = async (username) => {
  try {
    const apiKey = import.meta.env.VITE_APP_GITHUB_API_KEY;
    const response = await axios.get(`${BASE_URL}/${username}`, {
      headers: {
        Authorization: apiKey ? `token ${apiKey}` : undefined,
      },
    });
    return response.data;
  } catch (error) {
    console.error('GitHub API Error:', error);
    return null;
  }
};
