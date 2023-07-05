import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { token } from 'redux-store/AuthOperations/AuthOperations';

axios.defaults.baseURL = 'https://goose-track-ity9.onrender.com/api/';

const getAllReviews = createAsyncThunk('reviews', async (_, thunkAPI) => {
  try {
    const response = await axios.get('/reviews');
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const getUserReview = createAsyncThunk('userReview', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistedToken = state.auth.token;

  if (persistedToken === null) {
    return thunkAPI.rejectWithValue('No valid token');
  }

  try {
    token.set(persistedToken);
    const response = await axios.get('/reviews/own');
    const userReview = {
      comment: response.data.comment,
      rating: response.data.rating,
    };
    return userReview;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const addUserReview = createAsyncThunk(
  'reviewAdd',
  async (userReview, thunkAPI) => {
    try {
      const response = await axios.post('/reviews/own', userReview);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const editUserReview = createAsyncThunk(
  'reviewEdit',
  async (userReview, thunkAPI) => {
    try {
      const response = await axios.patch('/reviews/own', userReview);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const deleteUserReview = createAsyncThunk(
  'reviewDelete',
  async (_, thunkAPI) => {
    try {
      const response = await axios.delete('/reviews/own');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const ReviewsOperations = {
  getAllReviews,
  getUserReview,
  addUserReview,
  editUserReview,
  deleteUserReview,
};

export default ReviewsOperations;
