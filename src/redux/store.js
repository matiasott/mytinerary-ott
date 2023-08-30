import { configureStore } from "@reduxjs/toolkit";
import { citiesReducer } from './reducers/citiesReducers.js'
import { userReducer } from './reducers/userReducers.js'
import { itenerariesReducers } from './reducers/itinerariesReducers.js'

export const store = configureStore( {
    reducer : {
        cities : citiesReducer,
        user : userReducer,
        itineraries : itenerariesReducers
    }
} )