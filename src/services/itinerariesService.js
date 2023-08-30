import axios from 'axios'

const itineriesQueries = axios.create( {
    baseURL: 'http://localhost:3000/api/itineraries',
} )

export const getAllItineraries = async (queryParams="") => {
    try {
        const response = await itineriesQueries.get(queryParams)
        return response.data        
    } catch (error) {
        console.error(error);
        return [];
    }
}

export const getOneItinerary = async (id) => {
    try {
        const response = await itineriesQueries.get(`/${id}`);
        return response.data
    } catch (error) {
        console.log(error);
        return null;
    }
}

export const updateItineraryLikes = async (id) => {
    try {
        const response = await itineriesQueries.put(`/${id}`);
        return response.data;
    } catch (error) {
        console.log(error);
        return null;
    }
}