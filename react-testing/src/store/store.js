import {combineReducers, configureStore} from "@reduxjs/toolkit";
import counterSlice from "./reducers/counterSlice";

const rootReducer = combineReducers({
    counter: counterSlice
})

export const createStore = (initialState = {}) => {
    return configureStore({
        reducer: rootReducer,
        preloadedState: initialState
    })
}