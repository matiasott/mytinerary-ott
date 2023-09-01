import { createReducer } from "@reduxjs/toolkit";
import {cargarCitySync, cargarCities, filtrarCities, cargarCity } from '../actions/citiesActions.js'

const initialState = {
    cities: [],
    loading: false,
    city:{},
    filteredCities:[],
    valueFilter: ""
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
            const newState = { ...state, cities: action.payload, loading: false , filteredCities : action.payload}
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

        .addCase(filtrarCities, (state, action) => {
            const filteredSearch = state.cities.filter(city =>
                city.name.toLowerCase().startsWith(action.payload.inputValue.toLowerCase())
            );
        
            let newFilteredCities = filteredSearch;
            let value = action.payload.inputValue

        
            return {
                ...state,
                filteredCities: newFilteredCities,
                valueFilter: value
            };
        })
       
);


