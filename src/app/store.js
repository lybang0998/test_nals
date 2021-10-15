import { configureStore } from "@reduxjs/toolkit";
import blogReducer from '../features/Blog/blogSlice'

const rootReducer = {
    blogs: blogReducer,
}

const store = configureStore({
    reducer: rootReducer
})

export default store;