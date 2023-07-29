import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { createSlice, createAsyncThunk, createStore, applyMiddleware } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

const initialState = {
    posts: [],
    loading: false,
};

const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        fetchPostsSuccess(state, action) {
            state.posts = action.payload;
            state.loading = false;
        },
    },
});

const fetchPosts = createAsyncThunk("fetchPosts", async () => {
    const response = await axios.get("/api/posts");
    return response.data;
});

// const store = createStore(postsSlice.reducer, applyMiddleware(thunkMiddleware));