import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from 'redux';
import contactsReducer from './contactsSlice'; 
import filtersReducer from './filtersSlice';     
import storageSession from 'redux-persist/lib/storage/session';  
import { persistStore, persistReducer } from 'redux-persist';

const persistConfig = {
    key: 'root',
    storage: storageSession,
};


const rootReducer = combineReducers({
    contacts: contactsReducer,
    filters: filtersReducer,
});


const persistedReducer = persistReducer(persistConfig, rootReducer);


export const store = configureStore({
    reducer: persistedReducer,
});


export const persistor = persistStore(store);



