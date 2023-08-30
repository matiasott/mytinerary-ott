import axios from 'axios';

const citiesQueries = axios.create({
    baseURL: 'http://localhost:3000/api/cities',
});

export const getAllCities = async (queryParams = "") => {
    try {
        const response = await citiesQueries.get(queryParams);
        return response.data.response;
    } catch (error) {
        console.error(error);
        return [];
    }
};

export const getOneCity = async (id) => {
    try {
        const response = await citiesQueries.get(`/${id}`);
        return response.data.response;
    } catch (error) {
        console.error(error);
        return null;
    }
};
