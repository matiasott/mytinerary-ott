import { createReducer } from "@reduxjs/toolkit";
import { cargarItinerarySync, cargarItineraries, cargarItinerary } from '../actions/itinerariesActions.js'

const initialState = {
    itineraries: [],
    loading: false,
    itinerary: {}
}

export const itenerariesReducers = createReducer(initialState, (builder) =>
    builder
        .addCase(cargarItinerarySync, (state, action) => {
            const newState = { ...state, itinerary: action.payload };
            return newState;
        })

        .addCase(cargarItineraries.fulfilled, (state, action) => {
            const newState = { ...state, itineraries: action.payload, loading: false };
            return newState;
        })

        .addCase(cargarItineraries.pending, (state, action) => {
            const newState = { ...state, loading: true };
            return newState;
        })

        .addCase(cargarItineraries.rejected, (state, action) => {
            const newState = { ...state, loading: false };
            return newState;
        })

        .addCase(cargarItinerary.fulfilled, (state, action) => {
            const newState = { ...state, itinerary: action.payload, loading: false };
            return newState;
        })

        .addCase(cargarItinerary.pending, (state, action) => {
            const newState = { ...state, loading: true };
            return newState;
        })

        .addCase(cargarItinerary.rejected, (state, action) => {
            const newState = { ...state, loading: false };
            return newState;
        })

        // .addDefaultCase(() => {
        //     return initialState
        // })
);