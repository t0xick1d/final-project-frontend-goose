import { createSlice } from '@reduxjs/toolkit';
import {
  register,
  logIn,
  logOut,
  fetchCurrentUser,
  updateUser,
} from '../AuthOperations/AuthOperations';

const initialState = {
  token: null,
  user: {
    name: '',
    email: '',
    avatarUrl: '',
    skype: '',
    birthday: '',
    phone: '',
  },

  isLoggedIn: false,
  isRefresh: true,
  error: null,
};

const handlePending = state => {
  state.isRefresh = true;
};

const handleRejected = (state, action) => {
  state.isRefresh = false;
  state.error = action.payload;
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(register.pending, handlePending)
      .addCase(register.rejected, handleRejected)
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.newUser;
        state.token = action.payload.token;
      })

      .addCase(logIn.pending, handlePending)
      .addCase(logIn.rejected, handleRejected)
      .addCase(logIn.fulfilled, (state, action) => {
        console.log(action);
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.error = null;
      })

      .addCase(logOut.pending, handlePending)
      .addCase(logOut.rejected, handleRejected)
      .addCase(logOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
        state.isRefresh = false;
      })

      .addCase(fetchCurrentUser.pending, handlePending)
      .addCase(fetchCurrentUser.rejected, handleRejected)
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isLoggedIn = true;
        state.isRefresh = false;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.user = { ...state.user, ...action.payload };
      }),
});

export default authSlice.reducer;

export const getIsLoggedIn = state => state.auth.isLoggedIn;
export const getUserEmail = state => state.auth.user.email;
export const getUserPassword = state => state.auth.user.password;
export const getVerifyToken = state => state.auth.user.verificationToken;
export const getUserRefresh = state => state.auth.isRefresh;
export const getUser = state => state.auth;
