import { createReducer } from "@reduxjs/toolkit";
import {cargarCitySync, cargarCities, filtrarCities, cargarCity } from '../actions/citiesActions.js'

const initialState = {
    cities: [],
    loading: false,
    city:{}
}

export const citiesReducer = createReducer(initialState, (builder) =>
    builder
        .addCase(cargarCitySync, (state, action) => {
            const newState = { ...state, city: action.payload }
            return newState
        })

        .addCase(cargarCities.fulfilled, (state, action) => {
            console.log('fulfilled')
            console.log(action)
            const newState = { ...state, cities: action.payload, loading: false }
            return newState
        })

        .addCase(cargarCities.pending, (state, action) => {
            console.log('pending')
            const newState = { ...state, loading: true }
            return newState
        })

        .addCase(cargarCities.rejected, (state, action) => {
            console.log('rejected')
            const newState = { ...state, loading: false }
            return newState
        })

        .addCase(cargarCity.fulfilled, (state, action) => {
            const newState = { ...state, city: action.payload, loading: false }
            return newState
        })

        .addCase(cargarCity.pending, (state, action) => {
            console.log('pending')
            const newState = { ...state, loading: true }
            return newState
        })

        .addCase(cargarCity.rejected, (state, action) => {
            console.log('rejected')
            const newState = { ...state, loading: false }
            return newState
        })

        .addCase(filtrarCities, (stateActual, action) => {
            const filteredSearch = stateActual.allCities.filter(city =>
                city.name.toLowerCase().startsWith(action.payload.inputValue.toLowerCase())
            );
        
            let newFilteredCities = filteredSearch;
        
            if (action.payload.selectedCity !== "All") {
                newFilteredCities = newFilteredCities.filter(city =>
                    city.name === action.payload.selectedCity
                );
            }
        
            return {
                ...stateActual,
                filteredCities: newFilteredCities
            };
        })
        // .addDefaultCase(() => {
        //     return initialState
        // })
);


