import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://goose-track-ity9.onrender.com/api/';

export const fetchTasks = createAsyncThunk(
  'tasks/fetchAll',
  async ({ month, year }, thunkAPI) => {
    try {
      const response = await axios.get('/tasks', {
        params: {
          m: month,
          y: year,
        },
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
    // console.log(body);
    try {
      const response = await axios.post('/tasks', body);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editTask = createAsyncThunk(
  'tasks/editTask',
  async (task, thunkAPI) => {
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
    try {
      await axios.delete(`/tasks/${taskId}`);
      return taskId;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
