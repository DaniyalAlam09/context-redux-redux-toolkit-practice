// store.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Replace 'YOUR_API_ENDPOINT' with the actual API endpoint you want to fetch data from.
const API_ENDPOINT = 'https://fakestoreapi.com/products';

// Create an async thunk to fetch data from the API
const fetchData = createAsyncThunk('data/fetchData', async () => {
    const response = await axios.get(API_ENDPOINT);
    return response.data;
});

// Create a slice to manage the state
const dataSlice = createSlice({
    name: 'data',
    initialState: {
        data: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

// Export the async thunk for external usage
export { fetchData };

// Export the reducer
export default dataSlice.reducer;
