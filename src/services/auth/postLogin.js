import axios from "axios";
const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

export const postLogin = async (credentials) => {

    const response = await axios({
        method: 'post',
        url: `${baseUrl}/auth/login`,
        data: credentials
    });
    
    return response;
}