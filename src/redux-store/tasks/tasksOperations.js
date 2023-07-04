import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import swal from 'sweetalert';
import { token } from 'redux-store/AuthOperations/AuthOperations';

axios.defaults.baseURL = 'https://goose-track-ity9.onrender.com/api/';

export const fetchTasksMonth = createAsyncThunk(
  'tasks/fetchAllMonth',

  async (date, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('No valid token');
    }
    try {
      token.set(persistedToken);
      const response = await axios.get('/tasks/month', {
        params: { date },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchTasksDay = createAsyncThunk(
  'tasks/fetchAllDay',
  async ({ date }, thunkAPI) => {
    console.log('date', date);
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('No valid token');
    }
    try {
      token.set(persistedToken);
      const response = await axios.get('/tasks/day', {
        params: { date },
      });

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addTask = createAsyncThunk(
  'tasks/addTask',
  async (body, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('No valid token');
    }

    try {
      const response = await axios.post('/tasks', body);
      return response.data;
    } catch (e) {
      if (e.response.status === 400 || e.response.status === 409) {
        throw new Error(swal('Error!', e.response.data.message, 'error'));
      }
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const editTask = createAsyncThunk(
  'tasks/editTask',
  async (task, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('No valid token');
    }
    const { _id, ...edit } = task;
    try {
      const response = await axios.patch(`/tasks/${_id}`, edit);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteTask = createAsyncThunk(
  'tasks/deleteTask',
  async (taskId, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('No valid token');
    }
    try {
      await axios.delete(`/tasks/${taskId}`);
      return taskId;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
