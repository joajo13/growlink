import axios from "axios";
const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

export const getAll = async (token) => {
  try {
    const response = axios({
      method: 'get',
      url: `${baseUrl}/posts/getAll`,
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
}