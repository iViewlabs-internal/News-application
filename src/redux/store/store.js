
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { searchReducer } from "../reducer/reducer";



const reducer=combineReducers({
    searchReducer:searchReducer
})

export const store= configureStore({
    reducer
})

