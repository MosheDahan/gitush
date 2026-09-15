import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../slices/counterSlice";
import languageReducer from '../slices/languageSlice'
import movieReducer from '../slices/movieSlice';
import cityReducer from '../slices/citySlice';
import userReducer from '../slices/userSlice'
import user2Reducer from '../slices/userSlice2'
import productReducer from '../slices/productSlice';

const store = configureStore({
    reducer: {
        counter: counterReducer,
        language: languageReducer,
        movie: movieReducer,
        city: cityReducer,
        user: userReducer,
        user2: user2Reducer,
        product: productReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;