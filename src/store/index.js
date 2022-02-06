import {configureStore, createSlice} from '@reduxjs/toolkit'
import { initialState } from './initialstate';

const filterSlice = createSlice({
    name : 'filter',
    initialState,
    reducers : {
        productListFilter(state,action){
            const listOfProduct = action.payload;
            const productArray = [];
            const stateArray = [];
            const cityArray = [];

            for(let i = 0 ; i<listOfProduct.length ; i++){
                for(let j = 0; j<listOfProduct[i].length;j++){
                    productArray.push(listOfProduct[i][j].product_name);
                    stateArray.push(listOfProduct[i][j].address.state);
                    cityArray.push(listOfProduct[i][j].address.city);
                }
            }
            let uniqueArray = [...new Set(productArray)];
            state.product.listName = uniqueArray;
            uniqueArray = [...new Set(cityArray)];
            state.city.listName = uniqueArray;
            uniqueArray = [...new Set(stateArray)];
            state.state.listName = uniqueArray;
            state.productList=action.payload;
        },
        applyProductFilter(state,action){
            let array = [];
            for(let i = 0 ; i<state.productList.length;i++){
                const currentArray = state.productList[i].filter((item)=>{
                    return item.product_name===action.payload;
                });
                if(currentArray.length!==0){
                    array.push(currentArray);
                }
            }
            console.log(array);
            state.product.arrayProduct = array;
            state.product.show= true;
            state.showFilter= true;
        },
        applyStateFilter(state,action){
            let array = [];
            for(let i = 0 ; i<state.productList.length;i++){
                const currentArray = state.productList[i].filter((item)=>{
                    return item.address.state===action.payload;
                });
                if(currentArray.length!==0){
                    array.push(currentArray);
                }
            }
            console.log(array);
            state.state.arrayProduct = array;
            state.state.show= true;
            state.showFilter= true;
        },
        applyCityFilter(state,action){
            let array = [];
            for(let i = 0 ; i<state.productList.length;i++){
                const currentArray = state.productList[i].filter((item)=>{
                    return item.address.city===action.payload;
                });
                if(currentArray.length!==0){
                    array.push(currentArray);
                }
            }
            console.log(array);
            state.city.arrayProduct = array;
            state.city.show= true;
            state.showFilter= true;
        },
        removeFilter(state,action){
            state.product.show = false;
            state.city.show = false;
            state.state.show = false;
            state.showFilter = false;
            state.product.arrayProduct = [];
            state.state.arrayProduct = [];
            state.state.arrayProduct = [];

        }
    }
});

const store = configureStore({
    reducer : filterSlice.reducer
});


export const filterAction = filterSlice.actions;

export default store;

