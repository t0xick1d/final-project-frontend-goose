import { createSlice } from '@reduxjs/toolkit';
import {
  register,
  logIn,
  fetchCurrentUser,
} from '../AuthOperations/AuthOperations';

const initialState = {
  user: { name: null, email: null, avatarUrl: null },
  token: null,
  isLoggedIn: false,
  isRefresh: false,
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

      //   .addCase(logOut.fulfilled, (state) => {
      //     state.user = { name: null, email: null };
      //     state.token = null;
      //     state.isLoggedIn = false;
      //   })

      .addCase(fetchCurrentUser.pending, handlePending)
      .addCase(fetchCurrentUser.rejected, handleRejected)
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isLoggedIn = true;
        state.isRefresh = false;
      }),
});

export default authSlice.reducer;

export const getIsLoggedIn = state => state.auth.isLoggedIn;
export const getUserEmail = state => state.auth.user.email;
export const getUserPassword = state => state.auth.user.password;
export const getVerifyToken = state => state.auth.user.verificationToken;
export const getUserRefresh = state => state.auth.isRefresh;
