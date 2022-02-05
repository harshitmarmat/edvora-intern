import {configureStore, createSlice} from '@reduxjs/toolkit'

const initialState = {
    product : [],
    state : [],
    city : [],
    applyfilter : null
}

const filterSlice = createSlice({
    name : 'filter',
    initialState,
    reducers : {
        productFilter(state,action){
            const array = [...state.product,action.payload];
            const uniqueArray = [...new Set(array)];
            state.product= uniqueArray;
        },
        stateFilter(state,action){
            const array = [...state.state,action.payload];
            const uniqueArray = [...new Set(array)];
            state.state= uniqueArray;
        },
        cityFilter(state,action){
            const array = [...state.city,action.payload];
            const uniqueArray = [...new Set(array)];
            state.city= uniqueArray;
        }
    }
});

const store = configureStore({
    reducer : filterSlice.reducer
});


export const filterAction = filterSlice.actions;

export default store;

