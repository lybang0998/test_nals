import blogApi from "../../api/blogApi";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const getAllBlog = createAsyncThunk('/blogs', async (params, thunkAPI) => {
    const data = await blogApi.getAll();
    return data;
})

export const getBlogItem = createAsyncThunk('/blogs/:blogId', async (params, thunkAPI) => {
    const data = await blogApi.getBlogById(params);
    return data;
})

const blogs = createSlice({
    name: 'blogs',
    initialState: {
        blogList : [],
        isLoading: true,
        item: {},
        key : '',
        sortValue: null
    },
    reducers: {
        onSearch : (state, action) => {
            state.key = action.payload;
        },
        onSort: (state, action) => {
            state.sortValue = action.payload;
        }
    },
    extraReducers: {
        [getAllBlog.rejected]: (state, action) => {
            state.isLoading = false;
            state.item = action.payload;
        },
        [getAllBlog.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.blogList = action.payload;
        },
        [getBlogItem.pending]: state => {
            state.isLoading = true;
        },
        [getBlogItem.rejected]: (state, action) => {
            state.isLoading = false;
            state.item = action.payload;
        },
        [getBlogItem.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.item = action.payload;
        }
    }
})

const { reducer: blogReducer, actions } = blogs;
export const { onSearch, onSort } = actions;
export default blogReducer;
