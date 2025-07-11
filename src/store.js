import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {persistStore , persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import recipesReducer from './slices/recipeSlice';
import weekReducer from './slices/weekSlice';


const persistConfig = {
    key: 'root',
    storage,
};
const rootReducer = combineReducers({
    recipes: recipesReducer,
    weeks : weekReducer
});

const persistedReducer = persistReducer(persistConfig , rootReducer);
export const store = configureStore({
    reducer: persistedReducer,
     
});
export const persistor = persistStore(store);