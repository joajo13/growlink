import axios from "axios";

const baseUrl = process.env.NEXT_PUBLIC_NODE_API_BASE_URL;

export const postNewUser = async (credentials) => {
    try {
        const response = axios({
            method: 'post',
            url: `${baseUrl}/auth/signup`,
            data: credentials
        });
    
        const data = await response;
        
        return data;
    } catch (error) {
        throw error;
    }
}