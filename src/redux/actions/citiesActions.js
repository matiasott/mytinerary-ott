import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllCities, getOneCity } from "../../services/citiesService.js";


export const cargarCitySync = createAction('cargarCitySync', (city) => {
    return {
        payload: city
    };
});

export const cargarCities = createAsyncThunk('cargar_cities', async () => {
    try {
        const response = await getAllCities();
        return response;
    } catch (error) {
        throw error;
    }
});

export const cargarCity = createAsyncThunk('cargarCity', async ({ id }) => {
    try {
        const city = await getOneCity(id);
        return city;
    } catch (error) {
        console.log(error);
        return null;
    }
});


export const filtrarCities = createAction( 'filtrar_cities', (name, search) => {
    return {
        payload : {
            selectedCity : name,
            inputValue : search
        }
    }
});






