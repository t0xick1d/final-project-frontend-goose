import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import swal from 'sweetalert';

axios.defaults.baseURL = 'https://goose-track-ity9.onrender.com/api/';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = createAsyncThunk('auth/register', async userData => {
  try {
    const response = await axios.post('auth/signup', userData);
    token.set(response.data.token);
    console.log(response);
    return response.data;
  } catch (e) {
    console.log(e.response.data);
    if (
      e.response.status === 400 ||
      e.response.status === 401 ||
      e.response.status === 409
    ) {
      throw new Error(swal('Error!', e.response.data.message, 'error'));
    }
  }
});

export const logIn = createAsyncThunk('auth/login', async userData => {
  try {
    const response = await axios.post('auth/signin', userData);
    token.set(response.data.token);
    console.log(response);
    return response.data;
  } catch (e) {
    console.log(e.response.data);
    if (e.response.status === 400 || e.response.status === 401) {
      throw new Error(swal('Error!', e.response.data.message, 'error'));
    }
    if (e.response.status === 404) {
      throw new Error(swal('Error!', 'Email is wrong', 'error'));
    }
  }
});

// export const logOut = createAsyncThunk("auth/logout", async () => {
//   try {
//     await axios.post("/users/logout");
//     token.unset();
//   } catch (e) {
//     //   return thunkAPI.rejectWithValue(e.message);
//   }
// });

export const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    thunkAPI.getState();
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);
    try {
      const { data } = await axios.get(`auth/current`);
      return data;
    } catch (error) {
      console.log(error.message);
    }
  }
);

export const updateUser = createAsyncThunk(
  'auth/update',
  async (user, thunkAPI) => {
    // const state = thunkAPI.getState();
    // const persistedToken = state.auth.token;
    // token.set(persistedToken);
    try {
      const { data } = await axios.patch('auth/updateUser', user);
      // const { data } = await axios.patch('user/updateUser', user);
      return data.user;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
