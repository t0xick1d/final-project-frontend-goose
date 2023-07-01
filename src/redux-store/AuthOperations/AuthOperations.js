import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import swal from 'sweetalert';

axios.defaults.baseURL = 'https://goose-track-ity9.onrender.com/api/';

export const token = {
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

    swal('Success!', 'Letter with verification sent on your email', 'success');
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

export const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('/auth/logout');
    token.unset();
  } catch (e) {
    console.log(e.message);
  }
});

export const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('No valid token');
    }

    try {
      token.set(persistedToken);
      const user = await axios.get(`auth/current`);

      return user.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateUser = createAsyncThunk(
  'auth/update',
  async (user, thunkAPI) => {
    try {
      const { data } = await axios.patch('auth/updateUser', user);

      return data.user;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
