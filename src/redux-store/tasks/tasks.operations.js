import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getTasks,
  // createTask,
  // updateTask,
  // deleteTask,
} from 'services/gooseTrackAPI';

// export const create = createAsyncThunk(
//   'tasks/create',
//   async (task, thunkAPI) => {
//     try {
//       const { data } = await createTask(task);
//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

export const get = createAsyncThunk('tasks/get', async (date, thunkAPI) => {
  try {
    const { data } = await getTasks(date);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

// export const update = createAsyncThunk(
//   'tasks/update',
//   async (id, updatedTask, thunkAPI) => {
//     try {
//       const { data } = await updateTask(id, updatedTask);
//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const deleteItem = createAsyncThunk(
//   'tasks/delete',
//   async (id, thunkAPI) => {
//     try {
//       const { data } = await deleteTask(id);
//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
