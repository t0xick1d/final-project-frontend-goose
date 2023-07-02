import { createSlice } from '@reduxjs/toolkit';
import ReviewsOperations from './reviewsOperations';

const reviewsInitialState = {
  reviews: {
    allReviews: [],
    userReview: [],
    isLoading: false,
    error: null,
  },
};

const handlePending = state => {
  state.reviews.isLoading = true;
};

const handleRejected = (state, action) => {
  state.reviews.isLoading = false;
  state.reviews.error = action.payload;
};

export const reviewsSlice = createSlice({
  name: 'reviews',
  initialState: reviewsInitialState,
  extraReducers: {
    //AllReviews
    [ReviewsOperations.getAllReviews.pending]: handlePending,
    [ReviewsOperations.getAllReviews.fulfilled](state, action) {
      state.reviews.isLoading = false;
      state.reviews.error = null;
      state.reviews.allReviews = action.payload;
    },
    [ReviewsOperations.getAllReviews.rejected]: handleRejected,

    //userReview
    [ReviewsOperations.getUserReview.pending]: handlePending,
    [ReviewsOperations.getUserReview.fulfilled](state, action) {
      state.reviews.isLoading = false;
      state.reviews.error = null;
      state.reviews.userReview = action.payload;
    },
    [ReviewsOperations.getUserReview.rejected]: handleRejected,

    //userReviewAdd
    [ReviewsOperations.addUserReview.pending]: handlePending,
    [ReviewsOperations.addUserReview.fulfilled](state, action) {
      state.reviews.isLoading = false;
      state.reviews.error = null;
      state.reviews.userReview = action.payload;
    },
    [ReviewsOperations.addUserReview.rejected]: handleRejected,

    //userReviewEdit
    [ReviewsOperations.editUserReview.pending]: handlePending,
    [ReviewsOperations.editUserReview.fulfilled](state, action) {
      state.reviews.isLoading = false;
      state.reviews.error = null;
      state.reviews.userReview = action.payload;
    },
    [ReviewsOperations.editUserReview.rejected]: handleRejected,

    //userReviewDelete
    [ReviewsOperations.deleteUserReview.pending]: handlePending,
    [ReviewsOperations.deleteUserReview.fulfilled](state, action) {
      state.reviews.isLoading = false;
      state.reviews.error = null;
      state.reviews.userReview = [];
    },
    [ReviewsOperations.deleteUserReview.rejected]: handleRejected,
  },
});

export default reviewsSlice.reducer;
