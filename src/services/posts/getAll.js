import axios from "axios";
const baseUrl = process.env.NEXT_PUBLIC_NODE_API_BASE_URL;

export const getAll = async () => {
  try {
    const response = axios({
      method: 'get',
      url: `${baseUrl}/posts/getAll`,
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });

    const data = await response;
    
    return data;
  } catch (error) {
    throw error;
  }
}