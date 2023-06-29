import { createSlice } from '@reduxjs/toolkit';
import {
  fetchTasks,
  addTask,
  deleteTask,
  editTask,
} from '../tasks/tasksOperations';

const initialState = {
  items: [],
  // items: {
  //   title: '',
  //   start: '',
  //   end: '',
  //   priority: '',
  //   date: '',
  //   category: '',
  // },
  isLoading: false,
  error: null,
};

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,

  extraReducers: builder => {
    builder
      .addCase(fetchTasks.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addTask.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addTask.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteTask.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.filter(task => task._id !== action.payload);
      })
      .addCase(deleteTask.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(editTask.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(editTask.fulfilled, (state, action) => {
        const taskIndex = state.items.findIndex(
          task => task._id === action.payload._id
        );

        if (taskIndex !== -1) {
          state.items[taskIndex] = action.payload;
        }

        state.isLoading = false;
        state.error = null;
      })
      .addCase(editTask.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export default tasksSlice.reducer;
