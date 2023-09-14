import axios from 'axios';

const authApi = axios.create({
    baseURL: 'http://localhost:3000/api/auth',
});

export const signIn = async (formData) => {
    try {
        const response = await authApi.post('/singIn', formData);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error; 
    }
};

export const signUp = async (formData) => {
    try {
        const response = await authApi.post('/singUp', formData);
        return response.data; 
    } catch (error) {
        console.error(error);
        throw error; 
    }
};

export const getToken = async () => {
    try {
        const response = await authApi.get('/token');
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};
